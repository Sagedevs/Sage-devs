"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
interface TechItem {
  id: string;
  name: string;
  logo: string;
  website: string;
  description?: string;
}

interface TabData {
  id: string;
  title: string;
  icon: string;
  items: TechItem[];
  sections?: Array<{
    title: string;
    items: TechItem[];
  }>;
}

// Complete data matching the Appinventiv categories with their actual structure
const tabsData: TabData[] = [
  {
    id: 'aid',
    title: 'Artificial Intelligence',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592917/artificial-intelligence-deck-icon_ctvveo.svg',
    items: [],
    sections: [
      {
        title: 'Models & APIs',
        items: [
          { id: 'openai', name: 'OpenAI', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593059/open-ai-tech-icon_est8mj.svg', website: 'https://openai.com' },
          { id: 'meta', name: 'Meta', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592989/meta-tech-icon_unzpad.svg', website: 'https://meta.com' },
          { id: 'mistral', name: 'Mistral AI', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593009/mistral-ai-tech-icon_va5f1v.svg', website: 'https://mistral.ai' },
          { id: 'google', name: 'Google', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592985/google-tech-icon_pqndt2.svg', website: 'https://google.com' },
          { id: 'huggingface', name: 'Hugging Face', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592986/hugging-face-icon_wtxosg.svg', website: 'https://huggingface.co' },
          { id: 'grok', name: 'Grok', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592985/grok-tech-icon_jk2q0m.svg', website: 'https://grok.com' }
        ]
      },
      {
        title: 'Vector Databases',
        items: [
          { id: 'mongodb-atlas', name: 'MongoDB Atlas', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593012/mongod-atlas-tech-icon_p7kt8c.svg', website: 'https://mongodb.com' },
          { id: 'chroma', name: 'Chroma', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592921/chroma-tech-icon_wn8fnx.svg', website: 'https://trychroma.com' },
          { id: 'qdrant', name: 'Qdrant', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592924/drant-tech-icon_npafuk.svg', website: 'https://qdrant.tech' },
          { id: 'pinecone', name: 'Pinecone', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593156/pinecone-tech-icon_ac71jk.svg', website: 'https://pinecone.io' },
          { id: 'milvus', name: 'Milvus', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593009/milvus-tech-icon_o84w07.svg', website: 'https://milvus.io' }
        ]
      },
      {
        title: 'LLM Frameworks',
        items: [
          { id: 'langchain', name: 'LangChain', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592988/langchain-tech-icon_tc1tao.svg', website: 'https://langchain.com' },
          { id: 'llamaindex', name: 'LlamaIndex', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592988/llama-index-tech-icon_mukjqn.svg', website: 'https://llamaindex.ai' },
          { id: 'haystack', name: 'Haystack', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592986/haystack-tech-icon_rmyhxc.svg', website: 'https://haystack.deepset.ai' },
          { id: 'autogen', name: 'Microsoft AutoGen', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593009/microsoft-autogen-tech-icon_hu8ntx.svg', website: 'https://microsoft.github.io/autogen' },
          { id: 'nemo', name: 'Nvidia NEMO', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593028/nvidia-nemo-tech-icon_fa622c.svg', website: 'https://developer.nvidia.com/nemo' }
        ]
      },
      {
        title: 'Deployment',
        items: [
          { id: 'vertex', name: 'Vertex AI', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593158/vertex-ai-tech-icon_kuy0vo.svg', website: 'https://cloud.google.com/vertex-ai' },
          { id: 'k8s-ai', name: 'Kubernetes', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592988/kubernetes-tech-icon_urov8t.svg', website: 'https://kubernetes.io' },
          { id: 'huggingface-deploy', name: 'Hugging Face', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592986/hugging-face-icon_wtxosg.svg', website: 'https://huggingface.co' },
          { id: 'docker-ai', name: 'Docker', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592924/docker-tech-icon_kk6uo7.svg', website: 'https://docker.com' }
        ]
      }
    ]
  },
  {
    id: 'fpl',
    title: 'Frontend Programming Languages',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592926/frontend-programming-languages-icon_cdwflo.svg',
    items: [
      { id: 'css', name: 'CSS', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592922/css-logo_gxrzey.svg', website: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { id: 'html', name: 'HTML', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592986/html-logo_rl84jp.svg', website: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { id: 'javascript', name: 'Javascript', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592986/javascript-lg_p7rmrq.svg', website: 'https://javascript.com' },
      { id: 'angular', name: 'Angular', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593027/ng-logo_pbokew.svg', website: 'https://angular.io' },
      { id: 'react', name: 'React', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593156/react-logo-icon_kvb8t3.svg', website: 'https://reactjs.org' },
      { id: 'vue', name: 'Vue.js', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593158/vuejs-logo_kdhn5m.svg', website: 'https://vuejs.org' },
      { id: 'ember', name: 'Ember', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592925/ember-logo_vnwf4r.svg', website: 'https://emberjs.com' },
      { id: 'meteor', name: 'Meteor', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592989/meteor_ty15at.svg', website: 'https://meteor.com' },
      { id: 'nextjs', name: 'Next.js', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593027/nextlogo_cfg47b.svg', website: 'https://nextjs.org' }
    ]
  },
  {
    id: 'bpl',
    title: 'Backend Programming Languages',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592919/backend-programming-languages-icon_sf6fev.svg',
    items: [
      { id: 'dotnet', name: '.NET', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592924/dot-net-lang_nmcdxv.svg', website: 'https://dotnet.microsoft.com' },
      { id: 'java', name: 'Java', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592987/java-tech-icon_mpigwx.svg', website: 'https://oracle.com/java' },
      { id: 'python', name: 'Python', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593157/python-tech-icon_zeycwz.svg', website: 'https://python.org' },
      { id: 'php', name: 'PHP', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593156/php-logo_g0h3du.svg', website: 'https://php.net' },
      { id: 'nodejs', name: 'Node.js', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593028/node_js_us9scx.svg', website: 'https://nodejs.org' },
      { id: 'golang', name: 'GO', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592984/go_lang_tppg2h.svg', website: 'https://golang.org' }
    ]
  },
  {
    id: 'mb',
    title: 'Mobile',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593010/mobile-icon_bjrp7n.svg',
    items: [
      { id: 'android', name: 'Android', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593010/mobile-android_crnasv.svg', website: 'https://developer.android.com' },
      { id: 'flutter', name: 'Flutter', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593010/mobile-futter_a2jtfo.svg', website: 'https://flutter.dev' },
      { id: 'cordova', name: 'Cordova', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593010/mobile-cordova_zd5xwc.svg', website: 'https://cordova.apache.org' },
      { id: 'ios', name: 'iOS', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593011/mobile-ios_sqwe6f.svg', website: 'https://developer.apple.com' },
      { id: 'xamarin', name: 'Xamarin', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593012/mobile-xamarin_qszkj1.svg', website: 'https://dotnet.microsoft.com/apps/xamarin' },
      { id: 'pwa', name: 'PWA', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593011/mobile-pwa-logo_fhvjwa.svg', website: 'https://web.dev/progressive-web-apps/' },
      { id: 'ionic', name: 'Ionic', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593011/mobile-ionic_ygoy1d.svg', website: 'https://ionicframework.com' },
      { id: 'reactnative', name: 'React Native', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593011/mobile-react_rndqw2.svg', website: 'https://reactnative.dev' }
    ]
  },
  {
    id: 'bd',
    title: 'Big Data',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592920/big-data-icon-home_kzfyyb.svg',
    items: [
      { id: 'kinesis', name: 'Amazon Kinesis', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592915/amazon-kinesis-tech-icon_w9htkr.svg', website: 'https://aws.amazon.com/kinesis/' },
      { id: 'storm', name: 'Apache Storm', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592921/apache-storm-tech-icon_npe6j0.svg', website: 'https://storm.apache.org' },
      { id: 'eventhubs', name: 'Azure Event Hubs', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592917/azure-event-hub-tech-icon_losxsa.svg', website: 'https://azure.microsoft.com/services/event-hubs/' },
      { id: 'kafka', name: 'Apache Kafka Streams', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592987/kafka-streams-tech-icon_uqceii.svg', website: 'https://kafka.apache.org' },
      { id: 'spark', name: 'Apache Spark Streaming', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593158/spark-streaming-tech-icon_lullxo.svg', website: 'https://spark.apache.org' },
      { id: 'flink', name: 'Flink', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592925/flink-tech-icon_uzyhxt.svg', website: 'https://flink.apache.org' }
    ]
  },
  {
    id: 'dds',
    title: 'Databases / Data Storages',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592923/databases-datastorages-icon_zgz0xu.svg',
    items: [
      { id: 'mssql', name: 'Microsoft SQL Server', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593026/ms-sql-server-tech-icon_lj3lmk.svg', website: 'https://microsoft.com/sql-server' },
      { id: 'mysql', name: 'MySQL', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593027/mysql-tech-icon_qhdyvp.svg', website: 'https://mysql.com' },
      { id: 'postgresql', name: 'PostgreSQL', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593156/postgre-sql-tech-icon_dicz6n.svg', website: 'https://postgresql.org' },
      { id: 'oracle', name: 'Oracle', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593075/oracle-tech-icon_dpftbq.svg', website: 'https://oracle.com' },
      { id: 'mongodb', name: 'MongoDB', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593026/mongodb-tech-icon_rayqc0.svg', website: 'https://mongodb.com' },
      { id: 'cassandra', name: 'Cassandra', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592921/cassandra-tech-icon_k8lgnf.svg', website: 'https://cassandra.apache.org' }
    ]
  },
  {
    id: 'cdws',
    title: 'Cloud DB, Warehouses And Storage',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592922/cloud-db-warehouses-and-storage-icon_czd8zd.svg',
    items: [
      { id: 'amazon-documentdb', name: 'Amazon DocumentDB', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592915/amazon-documentdb_tcwib4.svg', website: 'https://aws.amazon.com/documentdb/' },
      { id: 'amazon-dynamodb', name: 'Amazon DynamoDB', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592915/amazon-dynamodb_xfzwgs.svg', website: 'https://aws.amazon.com/dynamodb/' },
      { id: 'amazon-rds', name: 'Amazon RDS', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592915/amazon-rds_qo0dq6.svg', website: 'https://aws.amazon.com/rds/' },
      { id: 'amazon-redshift', name: 'Amazon Redshift', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592917/amazon-redshift_svzjpm.svg', website: 'https://aws.amazon.com/redshift/' },
      { id: 'aws-elasticache', name: 'AWS ElastiCache', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592919/aws-elasticache_xfay3w.svg', website: 'https://aws.amazon.com/elasticache/' },
      { id: 'azure-blob', name: 'Azure Blob Storage', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592915/azure-blob-storage_vr30hg.svg', website: 'https://azure.microsoft.com/services/storage/blobs/' },
      { id: 'azure-cosmos', name: 'Azure Cosmos DB', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592917/azure-cosmos-DB_zvmeqk.svg', website: 'https://azure.microsoft.com/services/cosmos-db/' },
      { id: 'google-cloud-sql', name: 'Google Cloud SQL', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592985/google-cloud-sql-1_ollko9.svg', website: 'https://cloud.google.com/sql' }
    ]
  },
  {
    id: 'dops',
    title: 'DevOps',
    icon: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592923/devops-tech-icon_xl9cvs.svg',
    items: [
      { id: 'docker', name: 'Docker', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592923/docker-logo_ldxrff.svg', website: 'https://docker.com' },
      { id: 'kubernetes', name: 'Kubernetes', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592988/kubernetes_gvwuxs.svg', website: 'https://kubernetes.io' },
      { id: 'ansible', name: 'Ansible', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592917/ansible_certgn.svg', website: 'https://ansible.com' },
      { id: 'terraform', name: 'Terraform', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593158/terraform-tech-icon_ishg9l.svg', website: 'https://terraform.io' },
      { id: 'jenkins', name: 'Jenkins', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592984/gitlab_heztc5.svg', website: 'https://jenkins.io' },
      { id: 'aws-devtools', name: 'AWS Developer Tools', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592919/aws-developer-tools_w3qggo.svg', website: 'https://aws.amazon.com/products/developer-tools/' }
    ]
  },
  {
    id: 'ecom',
    title: 'E-Commerce',
    icon: '/tabs/ecomerce.png',
    items: [
      { id: 'shopify', name: 'Shopify', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593156/shopify_ay7tdc.svg', website: 'https://shopify.com' },
      { id: 'woocommerce', name: 'WooCommerce', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605046/migrated/logo-woocommerce%402x_962caf43.png', website: 'https://woocommerce.com' },
      { id: 'magento', name: 'Magento', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759605022/migrated/2560px-Magento_Logo.svg_f8587830.png', website: 'https://magento.com' },
      { id: 'bigcommerce', name: 'BigCommerce', logo: '/tabs/bigcommerce.png', website: 'https://bigcommerce.com' },
      { id: 'prestashop', name: 'PrestaShop', logo: '/tabs/download(19).png', website: 'https://prestashop.com' },
      { id: 'opencart', name: 'OpenCart', logo: '/tabs/opencart.png', website: 'https://opencart.com' },
      { id: 'spree', name: 'Spree Commerce', logo: '/tabs/download(26).png', website: 'https://spreecommerce.org' },
      { id: 'commercejs', name: 'Commerce.js', logo: '/tabs/download(22).png', website: 'https://commercejs.com' }
    ]
  },
  {
    id: 'cms',
    title: 'CMS Integration',
    icon: '/tabs/cms.png',
    items: [
      { id: 'wordpress', name: 'WordPress', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759594644/WordPress-logotype-standard_ksin1c.webp', website: 'https://wordpress.org' },
      { id: 'drupal', name: 'Drupal', logo: '/tabs/drola.png', website: 'https://drupal.org' },
      { id: 'joomla', name: 'Joomla', logo: '/tabs/cru.png', website: 'https://joomla.org' },
      { id: 'strapi', name: 'Strapi', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593158/strapi-logo-light_ob3mfm.svg', website: 'https://strapi.io' },
      { id: 'contentful', name: 'Contentful', logo: '/tabs/contentful.png', website: 'https://contentful.com' },
      { id: 'sanity', name: 'Sanity', logo: '/tabs/sanity.png', website: 'https://sanity.io' },
      { id: 'ghost', name: 'Ghost', logo: 'https://res.cloudinary.com/dg01hf9pm/image/upload/v1759594628/ghost-logo-dark_ubiait.webp', website: 'https://ghost.org' },
      { id: 'keystone', name: 'KeystoneJS', logo: '/tabs/key.png', website: 'https://keystonejs.com' }
    ]
  }
];


export default function TechCapabilitiesTabs(){
 const [active,setActive]=useState('fpl');
 const current=tabsData.find(tab=>tab.id===active)||tabsData[0];
 const names:Record<string,string>={aid:'AI & machine learning',fpl:'Frontend',bpl:'Backend'};
 const groups=current.sections||[{title:current.title,items:current.items}];
 return <section className="premium-section technology-studio"><div className="premium-shell"><div className="section-topline"><p className="section-label">05 / OUR TOOLKIT</p><span className="technology-note">The right tools. For the right reasons.</span></div><div className="section-heading-row"><h2>Strong foundations.<br/><em>Room to grow.</em></h2><p>Technology chosen around your product. Explore the tools we use across design, development, and deployment.</p></div><div className="technology-tabs" role="tablist" aria-label="Technology categories">{tabsData.map((tab,index)=><button key={tab.id} id={`tech-tab-${tab.id}`} role="tab" aria-selected={active===tab.id} aria-controls="technology-panel" tabIndex={active===tab.id?0:-1} onClick={()=>setActive(tab.id)} onKeyDown={event=>{let next=index;if(event.key==='ArrowRight')next=(index+1)%tabsData.length;else if(event.key==='ArrowLeft')next=(index-1+tabsData.length)%tabsData.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabsData.length-1;else return;event.preventDefault();setActive(tabsData[next].id);document.getElementById(`tech-tab-${tabsData[next].id}`)?.focus();}}>{names[tab.id]||tab.title.replace('Programming Languages','').replace(' Frameworks','').trim()}</button>)}</div><div className="technology-panel glass-panel" id="technology-panel" role="tabpanel" tabIndex={0} aria-labelledby={`tech-tab-${active}`}><div key={active} className="detail-reveal">{groups.map(group=><div className="technology-group" key={group.title}>{groups.length>1&&<h3>{group.title}</h3>}<div className="technology-grid">{group.items.map(item=><a key={item.id} href={item.website} target="_blank" rel="noopener noreferrer"><span className="tech-logo"><Image src={item.logo} alt="" width={30} height={30} unoptimized onError={event=>{event.currentTarget.style.visibility='hidden';}}/></span><span>{item.name}</span><ArrowUpRight size={13}/></a>)}</div></div>)}</div></div></div></section>;
}
