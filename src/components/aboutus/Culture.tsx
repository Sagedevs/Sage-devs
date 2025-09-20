import React from 'react';

const values = [
  {
    title: 'Innovation',
    description: 'We embrace change and constantly seek new ways to solve problems and create value.'
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication to achieve great things.'
  },
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, delivering quality without compromise.'
  },
  {
    title: 'Integrity',
    description: 'We do what\'s right, even when no one is watching, building trust with our clients and team.'
  }
];

const Culture = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
          <p className="text-xl text-gray-600">
            We've built a culture that fosters creativity, innovation, and personal growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Life at Our Company</h3>
          <p className="text-gray-600 mb-6">
            We believe in work-life balance and creating an environment where people love what they do. 
            From team retreats to learning opportunities, we invest in our team's growth and well-being.
          </p>
          <div className="flex flex-wrap gap-4">
            {['Flexible Hours', 'Remote Work', 'Learning Budget', 'Team Events', 'Health Benefits'].map((perk, i) => (
              <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700">
                {perk}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
