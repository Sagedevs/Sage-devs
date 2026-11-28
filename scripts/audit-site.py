"""Audit actual production HTML. Run after npm run build; no browser claims."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote, parse_qs
import json, sys
ROOT=Path('.next/server/app')
SITE='https://sagedevs.tech'
BOOKING='https://calendly.com/sagedevs-info'
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.ids=[];self.links=[];self.images=[];self.h1=0;self.meta={};self.canonical=[];self.title='';self.in_title=False;self.in_schema=False;self.schema_text='';self.schemas=[];self.controls=[];self.text=[];self.headings=[]
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  if tag=='a' and a.get('href'):self.links.append(a)
  if tag=='img':self.images.append(a)
  if tag=='h1':self.h1+=1
  if tag in ['h1','h2','h3','h4','h5','h6']:self.headings.append(int(tag[1]))
  if tag=='meta':self.meta[a.get('name',a.get('property',''))]=a.get('content','')
  if tag=='link' and a.get('rel')=='canonical':self.canonical.append(a.get('href'))
  if tag=='title':self.in_title=True
  if tag=='script' and a.get('type')=='application/ld+json':self.in_schema=True;self.schema_text=''
  if tag=='button' and a.get('aria-controls','').startswith('home-answer-'):self.controls.append(a)
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
  if tag=='script' and self.in_schema:
   try:self.schemas.append(json.loads(self.schema_text))
   except ValueError:self.schemas.append({'INVALID_JSON':True})
   self.in_schema=False
 def handle_data(self,data):
  if self.in_title:self.title+=data
  if self.in_schema:self.schema_text+=data
  self.text.append(data)
pages={}
for file in ROOT.rglob('*.html'):
 if file.name.startswith('_'):continue
 route='/'+str(file.relative_to(ROOT)).removesuffix('.html')
 if route=='/index':route='/'
 p=Page();p.feed(file.read_text());pages[route]=p
issues=[];warnings=[];external=set();bookings=0;seen_titles={};seen_descriptions={}
for route,p in pages.items():
 if p.h1!=1:issues.append([route,'h1-count',p.h1])
 for previous,current in zip(p.headings,p.headings[1:]):
  if current>previous+1:issues.append([route,'heading-jump',previous,current])
 if len(p.title)>65:warnings.append([route,'long-title',len(p.title)])
 if len(p.meta.get('description',''))<100:warnings.append([route,'short-description',len(p.meta.get('description',''))])
 if len(p.ids)!=len(set(p.ids)):issues.append([route,'duplicate-ids'])
 expected=SITE if route=='/' else SITE+route
 if p.canonical!=[expected]:issues.append([route,'canonical',p.canonical])
 for field in ['description','og:title','og:description','og:image','og:url','twitter:card','twitter:image']:
  if not p.meta.get(field):issues.append([route,'missing-metadata',field])
 if p.meta.get('og:url')!=expected:issues.append([route,'og-url',p.meta.get('og:url')])
 if 'noindex' in p.meta.get('robots',''):issues.append([route,'unexpected-noindex'])
 for label,value,seen in [('title',p.title,seen_titles),('description',p.meta.get('description'),seen_descriptions)]:
  if value in seen:issues.append([route,'duplicate-'+label,seen[value]])
  seen[value]=route
 if any('INVALID_JSON' in s for s in p.schemas):issues.append([route,'invalid-json-ld'])
 if not p.schemas:issues.append([route,'missing-schema'])
 for a in p.links:
  href=a['href'];u=urlparse(href)
  if u.hostname=='calendly.com':
   bookings+=1
   if href!=BOOKING:issues.append([route,'outdated-booking-url',href])
   if a.get('target')!='_blank' or 'noopener' not in a.get('rel',''):issues.append([route,'booking-link-behavior',href])
  if u.scheme or u.netloc:
   if u.scheme in ['http','https']:external.add(href)
   continue
  if not (href.startswith('/') or href.startswith('#')):continue
  target=(u.path.rstrip('/') or route) if href.startswith('#') else (u.path.rstrip('/') or '/')
  if target not in pages:
   if not Path('public'+u.path).exists():issues.append([route,'missing-route',href])
  elif u.fragment and unquote(u.fragment) not in pages[target].ids:issues.append([route,'missing-anchor',href])
 for img in p.images:
  if 'alt' not in img:issues.append([route,'missing-alt',img.get('src')])
  src=img.get('src','')
  if src.startswith('/_next/image'):src=parse_qs(urlparse(src).query).get('url',[''])[0]
  if src.startswith('/') and not src.startswith('/_next/') and not Path('public'+unquote(src)).is_file():issues.append([route,'missing-image',src])
  if img.get('loading')!='lazy' and not (img.get('width') and img.get('height')):issues.append([route,'unreserved-image-space',src])
 text=' '.join(p.text)
 for old in ['9 AM – 6 PM','10 AM – 4 PM','sagedevs-network','123 Tech Street','+1-555-0199','YOUR_VIDEO_ID','100% Verified']:
  if old in text:issues.append([route,'outdated-public-content',old])
home=pages.get('/')
if not home or len(home.controls)<4:issues.append(['/','homepage-faq-controls-missing'])
else:
 for control in home.controls:
  if control.get('aria-expanded') not in ['true','false'] or control['aria-controls'] not in home.ids:issues.append(['/','invalid-homepage-faq-relationship'])
if not pages:issues.append(['build','no-generated-html'])
# Check the generated sitemap against the actual canonical build output.
import xml.etree.ElementTree as ET
sitemap_urls=set()
for sitemap in Path('public').glob('sitemap-*.xml'):
 try:
  sitemap_urls.update(node.text.rstrip('/') for node in ET.parse(sitemap).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'))
 except ET.ParseError:issues.append(['sitemap','invalid-xml',str(sitemap)])
expected_urls={SITE if route=='/' else SITE+route for route in pages}
if sitemap_urls!=expected_urls:issues.append(['sitemap','route-mismatch',sorted(expected_urls-sitemap_urls),sorted(sitemap_urls-expected_urls)])
robots=Path('public/robots.txt').read_text() if Path('public/robots.txt').exists() else ''
if 'Disallow: /api/' not in robots or 'Sitemap: https://sagedevs.tech/sitemap.xml' not in robots:issues.append(['robots','missing-crawl-directives'])

report={'kind':'production HTML / metadata / local links (not browser rendering)','pages':len(pages),'booking_links':bookings,'external_links':len(external),'issues':issues,'editorial_warnings':warnings,'routes':sorted(pages)}
Path('docs/qa/production-audit.json').write_text(json.dumps(report,indent=2)+'\n')
Path('/tmp/sage-external-links.json').write_text(json.dumps(sorted(external)))
print(json.dumps(report,indent=2))
sys.exit(bool(issues))
