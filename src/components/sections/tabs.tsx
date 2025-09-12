import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

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
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/artificial-intelligence-deck-icon.svg',
    items: [],
    sections: [
      {
        title: 'Models & APIs',
        items: [
          { id: 'openai', name: 'OpenAI', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/open-ai-tech-icon.svg', website: 'https://openai.com' },
          { id: 'meta', name: 'Meta', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/meta-tech-icon.svg', website: 'https://meta.com' },
          { id: 'mistral', name: 'Mistral AI', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mistral-ai-tech-icon.svg', website: 'https://mistral.ai' },
          { id: 'google', name: 'Google', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-tech-icon.svg', website: 'https://google.com' },
          { id: 'huggingface', name: 'Hugging Face', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hugging-face-icon.svg', website: 'https://huggingface.co' },
          { id: 'grok', name: 'Grok', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/grok-tech-icon.svg', website: 'https://grok.com' }
        ]
      },
      {
        title: 'Vector Databases',
        items: [
          { id: 'mongodb-atlas', name: 'MongoDB Atlas', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mongod-atlas-tech-icon.svg', website: 'https://mongodb.com' },
          { id: 'chroma', name: 'Chroma', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/chroma-tech-icon.svg', website: 'https://trychroma.com' },
          { id: 'qdrant', name: 'Qdrant', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/drant-tech-icon.svg', website: 'https://qdrant.tech' },
          { id: 'pinecone', name: 'Pinecone', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/pinecone-tech-icon.svg', website: 'https://pinecone.io' },
          { id: 'milvus', name: 'Milvus', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/milvus-tech-icon.svg', website: 'https://milvus.io' }
        ]
      },
      {
        title: 'LLM Frameworks',
        items: [
          { id: 'langchain', name: 'LangChain', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/langchain-tech-icon.svg', website: 'https://langchain.com' },
          { id: 'llamaindex', name: 'LlamaIndex', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/llama-index-tech-icon.svg', website: 'https://llamaindex.ai' },
          { id: 'haystack', name: 'Haystack', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/haystack-tech-icon.svg', website: 'https://haystack.deepset.ai' },
          { id: 'autogen', name: 'Microsoft AutoGen', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/microsoft-autogen-tech-icon.svg', website: 'https://microsoft.github.io/autogen' },
          { id: 'nemo', name: 'Nvidia NEMO', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/nvidia-nemo-tech-icon.svg', website: 'https://developer.nvidia.com/nemo' }
        ]
      },
      {
        title: 'Deployment',
        items: [
          { id: 'vertex', name: 'Vertex AI', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/vertex-ai-tech-icon.svg', website: 'https://cloud.google.com/vertex-ai' },
          { id: 'k8s-ai', name: 'Kubernetes', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kubernetes-tech-icon.svg', website: 'https://kubernetes.io' },
          { id: 'huggingface-deploy', name: 'Hugging Face', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/hugging-face-icon.svg', website: 'https://huggingface.co' },
          { id: 'docker-ai', name: 'Docker', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/docker-tech-icon.svg', website: 'https://docker.com' }
        ]
      }
    ]
  },
  // Push E-Commerce and CMS to the end
  {
    id: 'ecom',
    title: 'E-Commerce',
    icon: 'https://cdn-icons-png.flaticon.com/512/2331/2331966.png',
    items: [
      { id: 'shopify', name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', website: 'https://shopify.com' },
      { id: 'woocommerce', name: 'WooCommerce', logo: 'https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png', website: 'https://woocommerce.com' },
      { id: 'magento', name: 'Magento', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magento_Logo.svg/2560px-Magento_Logo.svg.png', website: 'https://magento.com' },
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
      { id: 'wordpress', name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png', website: 'https://wordpress.org' },
      { id: 'drupal', name: 'Drupal', logo: '/tabs/drola.png', website: 'https://drupal.org' },
      { id: 'joomla', name: 'Joomla', logo: '/tabs/cru.png', website: 'https://joomla.org' },
      { id: 'strapi', name: 'Strapi', logo: 'https://strapi.io/assets/strapi-logo-light.svg', website: 'https://strapi.io' },
      { id: 'contentful', name: 'Contentful', logo: '/tabs/contentful.png', website: 'https://contentful.com' },
      { id: 'sanity', name: 'Sanity', logo: '/tabs/sanity.png', website: 'https://sanity.io' },
      { id: 'ghost', name: 'Ghost', logo: 'https://ghost.org/images/logos/ghost-logo-dark.png', website: 'https://ghost.org' },
      { id: 'keystone', name: 'KeystoneJS', logo: '/tabs/key.png', website: 'https://keystonejs.com' }
    ]
  },
  
  
  {
    id: 'fpl',
    title: 'Frontend Programming Languages',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/frontend-programming-languages-icon.svg',
    items: [
      { id: 'css', name: 'CSS', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/css-logo.svg', website: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { id: 'html', name: 'HTML', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/html-logo.svg', website: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { id: 'javascript', name: 'Javascript', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/javascript-lg.svg', website: 'https://javascript.com' },
      { id: 'angular', name: 'Angular', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ng-logo.svg', website: 'https://angular.io' },
      { id: 'react', name: 'React', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/react-logo-icon.svg', website: 'https://reactjs.org' },
      { id: 'vue', name: 'Vue.js', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/vuejs-logo.svg', website: 'https://vuejs.org' },
      { id: 'ember', name: 'Ember', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ember-logo.svg', website: 'https://emberjs.com' },
      { id: 'meteor', name: 'Meteor', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/meteor.svg', website: 'https://meteor.com' },
      { id: 'nextjs', name: 'Next.js', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/nextlogo.svg', website: 'https://nextjs.org' }
    ]
  },
  {
    id: 'bpl',
    title: 'Backend Programming Languages',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/backend-programming-languages-icon.svg',
    items: [
      { id: 'dotnet', name: '.NET', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/dot-net-lang.svg', website: 'https://dotnet.microsoft.com' },
      { id: 'java', name: 'Java', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/java-tech-icon.svg', website: 'https://oracle.com/java' },
      { id: 'python', name: 'Python', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/python-tech-icon.svg', website: 'https://python.org' },
      { id: 'php', name: 'PHP', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/php-logo.svg', website: 'https://php.net' },
      { id: 'nodejs', name: 'Node.js', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/node_js.svg', website: 'https://nodejs.org' },
      { id: 'golang', name: 'GO', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/go_lang.svg', website: 'https://golang.org' }
    ]
  },
  {
    id: 'mb',
    title: 'Mobile',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-icon.svg',
    items: [
      { id: 'android', name: 'Android', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-android.svg', website: 'https://developer.android.com' },
      { id: 'flutter', name: 'Flutter', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-futter.svg', website: 'https://flutter.dev' },
      { id: 'cordova', name: 'Cordova', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-cordova.svg', website: 'https://cordova.apache.org' },
      { id: 'ios', name: 'iOS', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-ios.svg', website: 'https://developer.apple.com' },
      { id: 'xamarin', name: 'Xamarin', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-xamarin.svg', website: 'https://dotnet.microsoft.com/apps/xamarin' },
      { id: 'pwa', name: 'PWA', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-pwa-logo.svg', website: 'https://web.dev/progressive-web-apps/' },
      { id: 'ionic', name: 'Ionic', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-ionic.svg', website: 'https://ionicframework.com' },
      { id: 'reactnative', name: 'React Native', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mobile-react.svg', website: 'https://reactnative.dev' }
    ]
  },
  {
    id: 'bd',
    title: 'Big Data',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/big-data-icon-home.svg',
    items: [
      { id: 'kinesis', name: 'Amazon Kinesis', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/amazon-kinesis-tech-icon.svg', website: 'https://aws.amazon.com/kinesis/' },
      { id: 'storm', name: 'Apache Storm', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/apache-storm-tech-icon.svg', website: 'https://storm.apache.org' },
      { id: 'eventhubs', name: 'Azure Event Hubs', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/azure-event-hub-tech-icon.svg', website: 'https://azure.microsoft.com/services/event-hubs/' },
      { id: 'kafka', name: 'Apache Kafka Streams', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kafka-streams-tech-icon.svg', website: 'https://kafka.apache.org' },
      { id: 'spark', name: 'Apache Spark Streaming', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/spark-streaming-tech-icon.svg', website: 'https://spark.apache.org' },
      { id: 'flink', name: 'Flink', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/flink-tech-icon.svg', website: 'https://flink.apache.org' }
    ]
  },
  {
    id: 'dds',
    title: 'Databases / Data Storages',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/databases-datastorages-icon.svg',
    items: [
      { id: 'mssql', name: 'Microsoft SQL Server', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ms-sql-server-tech-icon.svg', website: 'https://microsoft.com/sql-server' },
      { id: 'mysql', name: 'MySQL', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mysql-tech-icon.svg', website: 'https://mysql.com' },
      { id: 'postgresql', name: 'PostgreSQL', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/postgre-sql-tech-icon.svg', website: 'https://postgresql.org' },
      { id: 'oracle', name: 'Oracle', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/oracle-tech-icon.svg', website: 'https://oracle.com' },
      { id: 'mongodb', name: 'MongoDB', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mongodb-tech-icon.svg', website: 'https://mongodb.com' },
      { id: 'cassandra', name: 'Cassandra', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cassandra-tech-icon.svg', website: 'https://cassandra.apache.org' }
    ]
  },
  {
    id: 'cdws',
    title: 'Cloud DB, Warehouses And Storage',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cloud-db-warehouses-and-storage-icon.svg',
    items: [
      { id: 'amazon-documentdb', name: 'Amazon DocumentDB', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/amazon-documentdb.svg', website: 'https://aws.amazon.com/documentdb/' },
      { id: 'amazon-dynamodb', name: 'Amazon DynamoDB', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/amazon-dynamodb.svg', website: 'https://aws.amazon.com/dynamodb/' },
      { id: 'amazon-rds', name: 'Amazon RDS', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/amazon-rds.svg', website: 'https://aws.amazon.com/rds/' },
      { id: 'amazon-redshift', name: 'Amazon Redshift', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/amazon-redshift.svg', website: 'https://aws.amazon.com/redshift/' },
      { id: 'aws-elasticache', name: 'AWS ElastiCache', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/aws-elasticache.svg', website: 'https://aws.amazon.com/elasticache/' },
      { id: 'azure-blob', name: 'Azure Blob Storage', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/azure-blob-storage.svg', website: 'https://azure.microsoft.com/services/storage/blobs/' },
      { id: 'azure-cosmos', name: 'Azure Cosmos DB', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/azure-cosmos-DB.svg', website: 'https://azure.microsoft.com/services/cosmos-db/' },
      { id: 'google-cloud-sql', name: 'Google Cloud SQL', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-cloud-sql-1.svg', website: 'https://cloud.google.com/sql' }
    ]
  },
  {
    id: 'dops',
    title: 'DevOps',
    icon: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/devops-tech-icon.svg',
    items: [
      { id: 'docker', name: 'Docker', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/docker-logo.svg', website: 'https://docker.com' },
      { id: 'kubernetes', name: 'Kubernetes', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/kubernetes.svg', website: 'https://kubernetes.io' },
      { id: 'ansible', name: 'Ansible', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/ansible.svg', website: 'https://ansible.com' },
      { id: 'terraform', name: 'Terraform', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/terraform-tech-icon.svg', website: 'https://terraform.io' },
      { id: 'jenkins', name: 'Jenkins', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/gitlab.svg', website: 'https://jenkins.io' },
      { id: 'aws-devtools', name: 'AWS Developer Tools', logo: 'https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/aws-developer-tools.svg', website: 'https://aws.amazon.com/products/developer-tools/' }
    ]
  }
];

const TechCapabilitiesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('aid');

  // Get the currently active tab data
  const currentTabData = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <div className="min-h-screen w-full bg-[#0b1020] text-gray-100 relative overflow-hidden">
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
                            <img 
                              src={tab.icon} 
                              alt={tab.title}
                              className="w-6 h-6 object-contain opacity-90"
                              style={{ filter: 'brightness(0) invert(1)' }}
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
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
                    {currentTabData.sections.map((section, sectionIndex) => (
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
                                  <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
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
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentTabData.items.map((item, index) => (
                        <a
                          key={item.id}
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100 hover:scale-105 transform"
                          style={{
                            animationDelay: `${index * 50}ms`
                          }}
                        >
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <img 
                                src={item.logo} 
                                alt={item.name}
                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {item.name}
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
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