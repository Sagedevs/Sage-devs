const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
function load(file) {
  const mod={exports:{}};
  const source=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../src',file),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  vm.runInNewContext(source,{module:mod,exports:mod.exports,require,URL});
  return mod.exports;
}
const {business,openingHoursSpecification,usBusinessHours}=load('lib/business.ts');
const {caseStudies,featuredCaseIds,caseStudySlug}=load('data/caseStudies.ts');
const {portfolio,portfolioDisplayOrder}=load('data/portfolio.ts');

test('overnight hours cover six evening shifts, including Saturday into Sunday',()=>{
  assert.equal(business.bookingUrl,'https://calendly.com/sagedevs-info');
  assert.equal(business.hours.timeZoneId,'Asia/Karachi');
  assert.equal(openingHoursSpecification.opens,'18:00');
  assert.equal(openingHoursSpecification.closes,'02:00');
  assert.deepEqual(Array.from(openingHoursSpecification.dayOfWeek),['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map(day=>`https://schema.org/${day}`));
  assert.match(business.hours.note,/Saturday shift ends on Sunday/);
});
test('homepage selection has the approved order without removing the other case studies',()=>{
  assert.deepEqual(Array.from(featuredCaseIds,id=>caseStudies.find(study=>study.id===id).title),['KhanJee Canada','14islands Creative Agency','Kelvin Melgar Photography']);
  assert.equal(caseStudies.length,11);
  assert.equal(new Set(caseStudies.map(caseStudySlug)).size,11);
  assert.ok(caseStudies.some(item=>item.id===3));
  assert.ok(caseStudies.some(item=>item.id===9));
});
test('new projects have real local images, case-study routes and portfolio discovery entries',()=>{
  for(const [id,host] of [[11,'linguanovainstitute.com'],[12,'elitecreationspk.com']]){
    const study=caseStudies.find(item=>item.id===id);
    assert.equal(new URL(study.link).hostname,host);
    assert.ok(Object.values(portfolio).flat().some(item=>item.url===host));
    assert.ok(fs.existsSync(path.join(__dirname,'../public',study.image)));
    assert.equal(study.results.length,0,'Do not invent client outcomes');
    assert.equal(study.duration,undefined,'Do not invent a delivery timeline');
  }
});
test('all legacy reviews and their six matching videos remain available',()=>{
  const {testimonials}=load('data/testimonials.ts');
  assert.equal(testimonials.length,16);
  assert.equal(testimonials.filter(item=>item.video).length,6);
  assert.equal(testimonials.find(item=>item.author==='Jake Matluck').stars,4);
  assert.equal(testimonials.find(item=>item.author==='Kelvin Melgar').video,undefined);
  for(const item of testimonials.filter(item=>item.video)){
    assert.match(item.video,/^https:\/\/(youtube\.com|youtu\.be)\//);
    const id=new URL(item.video).pathname.split('/').pop();
    assert.ok(fs.statSync(path.join(__dirname,'../public/testimonials',`${id}.webp`)).size>1000,`${item.author} needs a local video thumbnail`);
  }
});

test('new client projects sit together in the middle and removed project is absent',()=>{
  const projects=portfolioDisplayOrder();
  const position=projects.findIndex(project=>project.url==='linguanovainstitute.com');
  assert.equal(position,Math.floor((projects.length-2)/2));
  assert.equal(projects[position+1].url,'elitecreationspk.com');
  assert.ok(!projects.some(project=>project.url==='barrelmarketing.com'));
  assert.ok(!caseStudies.some(project=>project.id===7));
});

test('US hours preserve the Pakistan shift across Eastern daylight saving',()=>{
  assert.equal(usBusinessHours(new Date('2026-01-15T12:00:00Z')),'8:00 AM – 4:00 PM EST');
  assert.equal(usBusinessHours(new Date('2026-07-15T12:00:00Z')),'9:00 AM – 5:00 PM EDT');
});
