import React from 'react';

const technologies = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Django', 'GraphQL', 'REST APIs']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform']
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase']
  },
  {
    category: 'AI/ML',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'Computer Vision']
  }
];

const Technologies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Use</h2>
          <p className="text-xl text-gray-600">
            We leverage cutting-edge technologies to build robust and scalable solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white text-sm font-medium text-gray-700 rounded-full border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Evolving</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Technology never stands still, and neither do we. We continuously evaluate and adopt new tools and 
            frameworks to ensure we&apos;re always using the best solutions for your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
