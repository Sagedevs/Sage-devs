import React from 'react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Our team creates a detailed project plan with milestones, timelines, and deliverables.'
  },
  {
    step: '03',
    title: 'Design',
    description: 'We craft beautiful, user-centered designs that align with your brand and business objectives.'
  },
  {
    step: '04',
    title: 'Development',
    description: 'Our developers bring the design to life with clean, efficient, and scalable code.'
  },
  {
    step: '05',
    title: 'Testing',
    description: 'We rigorously test the product to ensure quality, performance, and security.'
  },
  {
    step: '06',
    title: 'Launch & Support',
    description: 'We deploy your solution and provide ongoing support and maintenance.'
  }
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
          <p className="text-xl text-gray-600">
            A proven methodology that delivers exceptional results, every time.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 p-4">
                  <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                    <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
