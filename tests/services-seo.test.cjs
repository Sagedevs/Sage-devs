const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ts=require('typescript');
function load(file){
 const absolute=path.resolve(__dirname,'../src',file);
 const mod={exports:{}};
 const compiled=ts.transpileModule(fs.readFileSync(absolute,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 vm.runInNewContext(compiled,{module:mod,exports:mod.exports,URL,require:(name)=>name.startsWith('.')?load(path.relative(path.resolve(__dirname,'../src'),path.resolve(path.dirname(absolute),`${name}.ts`))):require(name)});
 return mod.exports;
}
const {servicePages,serviceHref}=load('data/servicePages.ts');
const {capabilities}=load('data/capabilities.ts');
const {portfolioDisplayOrder}=load('data/portfolio.ts');
const {caseStudies}=load('data/caseStudies.ts');
test('every advertised capability has one complete, canonical service page',()=>{
 assert.equal(servicePages.length,12);
 assert.equal(new Set(servicePages.map(page=>page.slug)).size,12);
 for(const capability of capabilities){
  const matches=servicePages.filter(page=>page.capability===capability.id);
  assert.equal(matches.length,1,capability.id);
  assert.equal(serviceHref(capability.id),`/services/${matches[0].slug}`);
 }
 for(const page of servicePages){
  assert.ok(page.scope.length>=3,page.slug);
  assert.ok(page.process.length>=4,page.slug);
  assert.ok(page.faqs.length>=3,page.slug);
  for(const slug of page.related)assert.ok(servicePages.some(other=>other.slug===slug),slug);
 }
});
test('related work uses existing projects and assets, with at least four examples per service',()=>{
 const portfolio=portfolioDisplayOrder();
 for(const service of servicePages){
  const domains=new Set();
  for(const id of service.cases){
   const study=caseStudies.find(study=>study.id===id);assert.ok(study,`${service.slug}: ${id}`);
   assert.ok(fs.existsSync(path.join(__dirname,'../public',study.image)));
   domains.add(new URL(study.link).hostname.replace(/^www\./,''));
  }
  for(const domain of service.portfolioDomains||[]){
   const project=portfolio.find(project=>project.url===domain);assert.ok(project,`${service.slug}: ${domain}`);
   assert.ok(fs.existsSync(path.join(__dirname,'../public',project.image)));
   domains.add(domain);
  }
  assert.ok(domains.size>=4,service.slug);
 }
});
test('service metadata is unique and descriptive without fabricated review schema',()=>{
 assert.equal(new Set(servicePages.map(page=>page.description)).size,servicePages.length);
 for(const page of servicePages){
  assert.ok(page.description.length>=100,page.slug);
  assert.ok(`${page.title} | Sage Devs`.length<=65,page.slug);
 }
});
