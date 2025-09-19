import React from 'react';

const GuidesTemplates = () => {
  const resources = [
    {
      title: 'Ultimate Web Design Guide',
      description: 'Comprehensive guide to modern web design principles and best practices.',
      type: 'PDF Guide',
      category: 'Design',
      downloadLink: '#'
    },
    {
      title: 'SEO Starter Pack',
      description: 'Essential templates and checklists for on-page and technical SEO.',
      type: 'Template Pack',
      category: 'Marketing',
      downloadLink: '#'
    },
    {
      title: 'Content Strategy Framework',
      description: 'Step-by-step framework for developing a winning content strategy.',
      type: 'Worksheet',
      category: 'Content',
      downloadLink: '#'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guides & Templates</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Free downloadable resources to help you grow your business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {resource.category}
                  </span>
                  <span className="text-sm text-gray-500">{resource.type}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.downloadLink}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Download Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesTemplates;
