"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SagedevsPartnerships = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  const businessChallenges = [
    {
      title: "Market Forecasting & Risk Reduction",
      description: "Sales forecasts miss the mark, new products fail, and market entry feels like expensive guessing. AI and predictive analytics give you realistic demand forecasts based on actual market data. One retail client cut inventory waste by 40%."
    },
    {
      title: "Legacy System Modernization", 
      description: "IT changes take months, integrations break constantly, and systems hold back growth. Smart automation targets your biggest operational headaches without expensive replacements. Saved a manufacturer $2.3M annually."
    },
    {
      title: "Manual Quality Control Checks",
      description: "Human inspectors miss defects, can't keep up with production speed, and quality problems reach customers. Computer vision catches defects 24/7 without getting tired. An auto parts client reduced defect rates by 85%."
    },
    {
      title: "Enhanced Customer Experiences",
      description: "Customers repeat information across touchpoints, support can't see complete histories, and experiences feel fragmented. IoT ecosystems connect everything, so information flows seamlessly. A hotel chain boosted satisfaction by 35%."
    },
    {
      title: "Optimizing IT Infrastructure Costs",
      description: "Server costs keep rising, maintenance eats budgets, and scaling requires expensive upfront investments. Cloud migration cuts costs while improving performance. An e-commerce client reduced IT expenses by 60% while handling 300% more traffic."
    },
    {
      title: "Data That Drive Decisions",
      description: "Conflicting reports, unclear dashboards, and executives can't get straight answers about performance. Business intelligence systems turn messy data into clear insights that guide confident decision-making."
    },
    {
      title: "Trust Built in Complex Transactions",
      description: "Multiple parties can't verify information, audit trails disappear, and fraud costs keep rising. Blockchain creates permanent, tamper-proof records everyone can trust. A supply chain client cut fraud losses by 90%."
    },
    {
      title: "Engaging Customer Experiences",
      description: "Marketing looks like competitors', low engagement, and forgettable brand interactions. AR/VR experiences let customers interact with products in memorable ways that drive sales and brand recall."
    }
  ];

  // Set items per slide responsively (1 on small screens, 2 on md+)
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (typeof window !== 'undefined') {
        setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
      }
    };
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  // Auto-advance based on itemsPerSlide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + itemsPerSlide) % businessChallenges.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [businessChallenges.length, itemsPerSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + itemsPerSlide) % businessChallenges.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - itemsPerSlide + businessChallenges.length) % businessChallenges.length);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden w-screen ml-[calc(-50vw+50%)] z-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Strategic Partnerships to
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Unlock Greater Business Value
          </h1>
        </div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* AWS Card */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592919/aws-partner_lcgml6.svg"
                  alt="Amazon Web Services"
                  className="h-16 w-auto"
                  width={64} // Assuming a reasonable width for h-16
                  height={64} // Assuming a reasonable height for h-16
                />
              </div>
              <p className="text-gray-400 text-lg">Amazon Web Services</p>
            </div>
          </div>

          {/* MongoDB Card */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759593026/mongodb-partner_tjjidf.svg"
                  alt="MongoDB"
                  className="h-16 w-auto"
                  width={64} // Assuming a reasonable width for h-16
                  height={64} // Assuming a reasonable height for h-16
                />
              </div>
              <p className="text-gray-400 text-lg">MongoDB</p>
            </div>
          </div>

          {/* Google Cloud Platform Card */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592985/google-cloud-partner_gjmh47.svg"
                  alt="Google Cloud Platform"
                  className="h-16 w-auto"
                  width={64} // Assuming a reasonable width for h-16
                  height={64} // Assuming a reasonable height for h-16
                />
              </div>
              <p className="text-gray-400 text-lg">Google Cloud Platform</p>
            </div>
          </div>

          {/* Cloudinary Card */}
          <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592922/cloudinary-partner_iybuvd.svg"
                  alt="Cloudinary"
                  className="h-16 w-auto"
                  width={64} // Assuming a reasonable width for h-16
                  height={64} // Assuming a reasonable height for h-16
                />
              </div>
              <p className="text-gray-400 text-lg">Cloudinary</p>
            </div>
          </div>
        </div>

        {/* AI Partnerships Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-left">Our AI Partnerships:</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AWS SageMaker */}
            <div className="group bg-gradient-to-r from-purple-900/50 to-purple-800/50 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592916/aws-sagemaker_lfmhbc.svg"
                      alt="AWS Sagemaker"
                      className="h-12 w-12"
                      width={48} // h-12 w-12 suggests 48x48
                      height={48}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">AWS Sagemaker</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We use SageMaker to build machine learning models that turn your data 
                      into predictions you can actually use for business decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AWS Bedrock */}
            <div className="group bg-gradient-to-r from-teal-900/50 to-teal-800/50 rounded-2xl p-8 border border-teal-500/30 hover:border-teal-400 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592918/aws-bedrock_b612j0.svg"
                      alt="AWS Bedrock"
                      className="h-12 w-12"
                      width={48} // h-12 w-12 suggests 48x48
                      height={48}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">AWS Bedrock</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We use Bedrock to create AI solutions that generate content, answer 
                      questions, and automate tasks that used to require human creativity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Challenges Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Solving Your Biggest Business Challenges
            </span>
          </h2>
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              with Advanced Technologies
            </span>
          </h2>
        </div>

        {/* Business Challenge Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (itemsPerSlide === 1 ? 100 : 50)}%)` }}
            >
              {businessChallenges.map((challenge, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                >
                  <div className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute inset-0">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        <Image
                          src="https://res.cloudinary.com/dg01hf9pm/image/upload/v1759592920/business-card-icon_vcjxia.svg"
                          alt={challenge.title}
                          className="w-12 h-12 mr-4"
                          width={48} // w-12 h-12 suggests 48x48
                          height={48}
                        />
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{challenge.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300 rotate-180"
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z" fill="white" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300"
            >
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <path d="M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3">
          {Array.from({ length: Math.ceil(businessChallenges.length / itemsPerSlide) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * itemsPerSlide)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                Math.floor(currentSlide / itemsPerSlide) === index ? 'bg-blue-500' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SagedevsPartnerships;