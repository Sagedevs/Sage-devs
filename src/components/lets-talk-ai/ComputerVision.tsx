import React from 'react';

const ComputerVision = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-950 to-teal-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-emerald-300 to-white bg-clip-text text-transparent">
          Computer Vision Solutions
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Bring visual intelligence to your applications. Our Computer Vision expertise enables image recognition, object detection, and video analysis for a wide range of use cases.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-teal-300">Object Detection & Recognition</h3>
            <p className="text-gray-400">
              Identify and categorize objects, faces, and scenes in images and real-time video streams.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">Image & Video Analysis</h3>
            <p className="text-gray-400">
              Extract metadata, detect anomalies, and gain insights from visual content at scale.
            </p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl border border-lime-700/30 hover:border-lime-500/50 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-lime-300">Augmented Reality (AR) Integration</h3>
            <p className="text-gray-400">
              Develop AR experiences that overlay digital information onto the physical world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputerVision;
