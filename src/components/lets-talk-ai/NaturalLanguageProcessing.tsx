import React from 'react';

const NaturalLanguageProcessing = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-950 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-300 via-violet-300 to-white bg-clip-text text-transparent">
          Natural Language Processing
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Enable your applications to understand, interpret, and generate human language. Our NLP solutions enhance customer interactions, automate content, and extract valuable insights from text.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-300">Text Analysis & Sentiment</h3>
            <p className="text-gray-400">
              Analyze large volumes of text to understand sentiment, identify key topics, and categorize content.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-violet-700/30 hover:border-violet-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-violet-300">Chatbots & Virtual Assistants</h3>
            <p className="text-gray-400">
              Develop intelligent conversational agents for customer support, lead generation, and internal tools.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-fuchsia-700/30 hover:border-fuchsia-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-fuchsia-300">Language Translation</h3>
            <p className="text-gray-400">
              Integrate advanced machine translation capabilities for global communication and content localization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalLanguageProcessing;
