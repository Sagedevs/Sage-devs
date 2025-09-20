import React from 'react';
import Link from 'next/link';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Growth Strategy',
      description: 'How we helped an online retailer increase revenue by 250% in 6 months.',
      category: 'E-commerce',
      image: '/images/case-study1.jpg',
      link: '/case-studies/ecommerce-growth'
    },
    {
      id: 2,
      title: 'Mobile App Success Story',
      description: 'Scaling a mobile app from 0 to 1 million users in one year.',
      category: 'Mobile',
      image: '/images/case-study2.jpg',
      link: '/case-studies/mobile-app'
    },
    {
      id: 3,
      title: 'Enterprise Digital Transformation',
      description: 'Modernizing legacy systems for a Fortune 500 company.',
      category: 'Enterprise',
      image: '/images/case-study3.jpg',
      link: '/case-studies/digital-transformation'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Real-world success stories from our clients</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  {study.title.split(' ')[0]}
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-3">
                  {study.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <Link 
                  href={study.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
