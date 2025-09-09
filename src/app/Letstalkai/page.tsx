import React from 'react';

const LetsTalkAI: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Let&apos;s Talk AI</h2>
        <p className="text-lg mb-12">
          Discover how we seamlessly integrate AI into websites and platforms, enhancing user experiences and driving innovation.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">AI-Powered Personalization</h3>
            <p>
              Implement machine learning algorithms to tailor content, recommendations, and user interfaces, creating a personalized journey for each visitor.
            </p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Conversational Interfaces</h3>
            <p>
              Integrate chatbots and virtual assistants that understand and respond to user queries, providing real-time support and engagement.
            </p>
          </div>
          <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Predictive Analytics</h3>
            <p>
              Utilize AI to analyze user behavior and predict future actions, enabling proactive decision-making and enhanced user satisfaction.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-teal-500 hover:to-cyan-400 transition duration-300"
          >
            Start Your AI Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkAI;
