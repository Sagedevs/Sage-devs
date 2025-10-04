"use client";
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Define the data structure for our tech capabilities
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

const TechCapabilitiesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('aid');

  // Get the currently active tab data
  const currentTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <div className="min-h-screen w-full bg-[#0b1020] text-gray-100 relative overflow-hidden z-0">
      {/* Soft gradient background like reference */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020] via-[#0d1430] to-[#0b1020]" />

      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
          {/* Main heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
              Tech Capabilities Driving Digital
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-200 leading-tight">
              Transformation For Our Clients
            </h2>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 w-full items-stretch h-[70vh]">
            {/* Left side - Tabs navigation */}
            <div className="xl:w-1/2 w-full min-h-0">
              <ul className="space-y-0 bg-transparent rounded-lg border border-white/10 shadow-sm backdrop-blur-sm h-full overflow-y-auto custom-scroll pr-1">
                {tabsData.map((tab) => (
                  <li key={tab.id} className="w-full">
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full p-6 text-left transition-all duration-300 group border-b border-white/10 last:border-b-0 ${
                        activeTab === tab.id
                          ? 'bg-blue-900/30 border-blue-500/30 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.2)]'
                          : 'hover:bg-white/5 bg-white/0'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg transition-all duration-300 ${
                            activeTab === tab.id ? 'bg-blue-800/40' : 'bg-white/5'
                          }`}>
                            <Image
                              src={tab.icon}
                              alt={tab.title}
                              className="w-6 h-6 object-contain opacity-90 filter invert"
                              style={{ filter: 'brightness(0) invert(1)' }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                              width={24} // Specify appropriate width
                              height={24} // Specify appropriate height
                            />
                          </div>
                          <span className={`text-lg font-semibold transition-colors duration-300 ${
                            activeTab === tab.id ? 'text-white' : 'text-gray-300'
                          }`}>
                            {tab.title}
                          </span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                          activeTab === tab.id ? 'text-blue-300 rotate-90' : 'text-gray-400'
                        }`} />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side - Content cards */}
            <div className="xl:w-1/2 w-full min-h-0">
              <div className="h-full overflow-y-auto custom-scroll pr-1">
                <div 
                  key={activeTab}
                  className="animate-fadeIn"
                >
                {/* Category header */}
                {/* Category title hidden as requested */}

                {/* Content sections */}
                {currentTabData.sections ? (
                  // AI tab with sections – keep item boxes white (not whole section)
                  <div className="space-y-8">
                    {currentTabData.sections.map((section) => (
                      <div key={section.title} className="bg-transparent">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-white/90 mb-1">{section.title}</h4>
                          <p className="text-gray-300 text-sm">Leading technologies and platforms</p>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                          {section.items.map((item, index) => (
                            <a
                              key={item.id}
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:scale-105 transform"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="flex flex-col items-center text-center space-y-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                  <Image src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} width={48} height={48} />
                                </div>
                                <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{item.name}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Regular tabs with single grid
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {currentTabData.items.map((item, index) => (
                        <a
                          key={item.id}
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:scale-105 transform"
                          style={{
                            animationDelay: `${index * 50}ms`
                          }}
                        >
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <Image
                                src={item.logo}
                                alt={item.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                                width={64} // Specify appropriate width
                                height={64} // Specify appropriate height
                              />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {item.name}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        /* Custom scrollbar for left nav */
        .custom-scroll::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.4);
          border-radius: 9999px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.6);
        }
      `}</style>
    </div>
  );
};

export default TechCapabilitiesTabs;