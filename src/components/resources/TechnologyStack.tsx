import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', logo: '⚛️', description: 'A JavaScript library for building user interfaces' },
        { name: 'Next.js', logo: '⏭️', description: 'The React Framework for Production' },
        { name: 'TypeScript', logo: '📘', description: 'Typed JavaScript at Any Scale' },
        { name: 'Tailwind CSS', logo: '🎨', description: 'A utility-first CSS framework' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', logo: '🟢', description: 'JavaScript runtime built on Chrome\'s V8 engine' },
        { name: 'Express', logo: '🚀', description: 'Fast, unopinionated web framework for Node.js' },
        { name: 'GraphQL', logo: '🔍', description: 'A query language for your API' },
        { name: 'PostgreSQL', logo: '🐘', description: 'Powerful, open source object-relational database' },
      ]
    },
    {
      category: 'Mobile',
      items: [
        { name: 'React Native', logo: '📱', description: 'Create native apps for Android and iOS' },
        { name: 'Flutter', logo: '🎯', description: 'UI toolkit for natively compiled applications' },
        { name: 'Swift', logo: '🍏', description: 'Powerful programming language for Apple platforms' },
        { name: 'Kotlin', logo: '🤖', description: 'Modern programming language for Android' },
      ]
    },
    {
      category: 'DevOps & Cloud',
      items: [
        { name: 'Docker', logo: '🐳', description: 'Container platform for developing, shipping, and running applications' },
        { name: 'Kubernetes', logo: '☸️', description: 'Container orchestration system' },
        { name: 'AWS', logo: '☁️', description: 'Amazon Web Services - Cloud Computing Services' },
        { name: 'GitHub Actions', logo: '⚙️', description: 'Automate your workflow from idea to production' },
      ]
    },
    {
      category: 'AI & Data',
      items: [
        { name: 'TensorFlow', logo: '🧠', description: 'End-to-end open source platform for machine learning' },
        { name: 'PyTorch', logo: '🔥', description: 'Open source machine learning framework' },
        { name: 'Pandas', logo: '🐼', description: 'Data analysis and manipulation tool' },
        { name: 'OpenAI', logo: '🤖', description: 'AI research and deployment company' },
      ]
    },
    {
      category: 'Design',
      items: [
        { name: 'Figma', logo: '✏️', description: 'Collaborative interface design tool' },
        { name: 'Adobe XD', logo: '🎨', description: 'UI/UX design and collaboration tool' },
        { name: 'Sketch', logo: '✏️', description: 'Digital design platform' },
        { name: 'Framer', logo: '🚀', description: 'Interactive design and prototyping tool' },
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our preferred technologies for building exceptional digital experiences</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">{tech.category}</h3>
              <div className="space-y-4">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 group">
                    <div className="text-2xl mt-1">{item.logo}</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Not sure which technology is right for you?</h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">Our experts can help you choose the perfect tech stack for your specific project requirements and business goals.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
