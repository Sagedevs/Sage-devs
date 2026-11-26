export const projectTypes = [
 {id:'landing-page',name:'Landing page',base:299,simple:true},
 {id:'wordpress-site',name:'WordPress site',base:799,simple:true},
 {id:'shopify-store',name:'Shopify store',base:1299,simple:true},
 {id:'business-website',name:'Business website',base:1799,simple:true},
 {id:'web-application',name:'Web application',base:4999,simple:false},
 {id:'enterprise-website',name:'Enterprise website',base:8999,simple:false},
 {id:'enterprise-platform',name:'Enterprise platform',base:24999,simple:false},
 {id:'saas-application',name:'SaaS application',base:19999,simple:false},
 {id:'mobile-ecosystem',name:'Mobile ecosystem',base:14999,simple:false},
 {id:'digital-transformation',name:'Digital transformation',base:39999,simple:false},
] as const;
export const teamMultipliers={freelancer:0.8,small:0.9,medium:1,large:1.15,enterprise:1.3};
export const timelineMultipliers={'1-2':1.25,'2-4':1.1,'4-8':1,'3-6':1.15,'6-12':1,'12-18':0.9};
export function estimate({projectId,quantity,complexity,featureCount,team,timeline}:{projectId:string;quantity:number;complexity:number;featureCount:number;team:keyof typeof teamMultipliers;timeline:keyof typeof timelineMultipliers}){
 const project=projectTypes.find(p=>p.id===projectId);if(!project)throw Error('Unknown project type');
 const count=project.simple?Math.max(1,Math.min(100,Math.floor(quantity)||1)):1;
 const base=project.base*count;const features=featureCount*(project.simple?99:1499)*count;
 const complexityFactor=.9+Math.max(1,Math.min(10,complexity))/20;
 const deliveryFactor=teamMultipliers[team]*timelineMultipliers[timeline];
 return {base,features,complexityFactor,deliveryFactor,total:Math.max(base,Math.round((base+features)*complexityFactor*deliveryFactor))};
}
