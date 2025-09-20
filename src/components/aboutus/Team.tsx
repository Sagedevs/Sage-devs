import React from 'react';

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Founder',
    image: '/team/alex.jpg',
    bio: '10+ years of experience in digital transformation and business strategy.'
  },
  {
    name: 'Sarah Williams',
    role: 'CTO',
    image: '/team/sarah.jpg',
    bio: 'Expert in scalable architecture and cutting-edge technologies.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Designer',
    image: '/team/michael.jpg',
    bio: 'Passionate about creating intuitive and beautiful user experiences.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Senior Developer',
    image: '/team/emily.jpg',
    bio: 'Full-stack developer with expertise in modern web technologies.'
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse group of talented individuals passionate about innovation and excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                {member.name.split(' ')[0]}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
