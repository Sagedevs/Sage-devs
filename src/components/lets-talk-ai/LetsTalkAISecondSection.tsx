import React from 'react';

const LetsTalkAISecondSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">
          Our Approach to AI Innovation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              At Sage Devs, we believe in a human-centric approach to Artificial Intelligence. We don't just build algorithms; we craft intelligent solutions that seamlessly integrate with your existing workflows and empower your team.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our process involves deep dives into your business challenges, meticulous data analysis, and iterative development to ensure the AI solutions are effective, ethical, and scalable. We focus on transparency and explainability, so you always understand how your AI is making decisions.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 mt-6">
              <li>Custom AI model development tailored to your data.</li>
              <li>Ethical AI guidelines integrated from conception to deployment.</li>
              <li>Scalable and secure cloud-based AI infrastructure.</li>
              <li>Continuous learning and optimization of deployed models.</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-2xl border border-blue-700/50">
            <img
              src="https://via.placeholder.com/600x400/0F172A/9CA3AF?text=AI+Innovation+Image"
              alt="AI Innovation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">Innovation in Action</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkAISecondSection;
