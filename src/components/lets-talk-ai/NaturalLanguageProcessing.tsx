"use client";
import React, { useState, useEffect } from 'react';

const NaturalLanguageProcessing = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [processingStage, setProcessingStage] = useState(0);

  const demos = [
    {
      title: "Emotion Detective",
      subtitle: "Understands feelings in text",
      icon: "🧠",
      input: "I absolutely love this new phone! The camera is amazing but the battery dies too quickly 😞",
      analysis: {
        overall: "Mixed Feelings",
        positive: ["love", "amazing"],
        negative: ["dies too quickly"],
        emotion: "😊 Happy + 😤 Frustrated",
        confidence: "94%",
        details: {
          joy: 75,
          frustration: 45,
          satisfaction: 60
        }
      },
      color: "emerald",
      processingSteps: ["Tokenizing text...", "Analyzing sentiment...", "Detecting emotions...", "Complete!"]
    },
    {
      title: "Smart Conversation",
      subtitle: "Talks like a human",
      icon: "💬",
      input: "Hi! I'm looking for a red dress for my sister's wedding next month",
      analysis: {
        intent: "Shopping Assistant",
        extracted: ["red dress", "sister's wedding", "next month"],
        response: "Perfect! I'll help you find elegant red dresses suitable for weddings. What's your size preference and budget range?",
        understanding: "96%",
        context: {
          occasion: "Wedding",
          timeframe: "Next month",
          relationship: "Sister",
          product: "Red dress"
        }
      },
      color: "blue",
      processingSteps: ["Understanding context...", "Extracting entities...", "Generating response...", "Complete!"]
    },
    {
      title: "Universal Translator",
      subtitle: "Speaks every language",
      icon: "🌍",
      input: "The future of technology is in our hands",
      analysis: {
        detected: "English",
        translations: {
          "Spanish": "El futuro de la tecnología está en nuestras manos",
          "French": "L'avenir de la technologie est entre nos mains",
          "Chinese": "技术的未来掌握在我们手中",
          "Arabic": "مستقبل التكنولوجيا في أيدينا",
          "Japanese": "テクノロジーの未来は私たちの手の中にあります"
        },
        accuracy: "99%",
        languageConfidence: 99.8
      },
      color: "purple",
      processingSteps: ["Detecting language...", "Analyzing structure...", "Translating...", "Complete!"]
    },
    {
      title: "Content Analyzer",
      subtitle: "Extracts meaning & insights",
      icon: "📊",
      input: "Our Q3 revenue increased by 15% compared to last quarter, driven primarily by strong performance in the mobile app segment.",
      analysis: {
        topics: ["Business", "Finance", "Performance"],
        entities: ["Q3", "15%", "mobile app segment"],
        keyInsights: ["Revenue growth", "Quarter comparison", "Mobile success"],
        sentiment: "Positive",
        confidence: "97%",
        businessMetrics: {
          growth: "15%",
          period: "Q3",
          driver: "Mobile app"
        }
      },
      color: "orange",
      processingSteps: ["Extracting entities...", "Analyzing topics...", "Finding insights...", "Complete!"]
    }
  ];

  useEffect(() => {
    const demo = demos[currentDemo];
    setTypedText('');
    setShowResult(false);
    setIsTyping(true);
    setProcessingStage(0);

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < demo.input.length) {
        setTypedText(demo.input.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Start processing animation
        let stage = 0;
        const processInterval = setInterval(() => {
          setProcessingStage(stage);
          stage++;
          if (stage >= demo.processingSteps.length) {
            clearInterval(processInterval);
            setTimeout(() => setShowResult(true), 300);
          }
        }, 400);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [currentDemo]);

  const currentDemoData = demos[currentDemo];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'from-emerald-900/40 to-emerald-800/20',
        border: 'border-emerald-500/40',
        button: 'bg-emerald-500',
        shadow: 'shadow-emerald-500/50',
        text: 'text-emerald-300'
      },
      blue: {
        bg: 'from-blue-900/40 to-blue-800/20',
        border: 'border-blue-500/40',
        button: 'bg-blue-500',
        shadow: 'shadow-blue-500/50',
        text: 'text-blue-300'
      },
      purple: {
        bg: 'from-purple-900/40 to-purple-800/20',
        border: 'border-purple-500/40',
        button: 'bg-purple-500',
        shadow: 'shadow-purple-500/50',
        text: 'text-purple-300'
      },
      orange: {
        bg: 'from-orange-900/40 to-orange-800/20',
        border: 'border-orange-500/40',
        button: 'bg-orange-500',
        shadow: 'shadow-orange-500/50',
        text: 'text-orange-300'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const currentColors = getColorClasses(currentDemoData.color);

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="border border-blue-500/20 animate-pulse"
                style={{ animationDelay: `${Math.random() * 3}s` }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating neural network nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `neuralPulse ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <div className="w-2 h-2 bg-blue-400/60 rounded-full">
              <div className="absolute inset-0 bg-blue-400/30 rounded-full animate-ping"></div>
            </div>
          </div>
        ))}

        {/* Data streams */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            style={{
              left: '0%',
              top: `${10 + i * 20}%`,
              width: '100%',
              animation: `dataStream ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-300 font-semibold text-lg backdrop-blur-sm">
              🧠 Advanced Natural Language Processing
            </span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              LANGUAGE
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              INTELLIGENCE
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Experience the future of human-AI communication. Watch as advanced algorithms 
            decode, understand, and respond to natural language with unprecedented precision.
          </p>

          {/* Live metrics */}
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400">Neural Networks Active</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-400">Processing Live Data</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-purple-400">AI Models Learning</span>
            </div>
          </div>
        </div>

        {/* Enhanced Demo Selector */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-3 border border-gray-700/50 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {demos.map((demo, index) => {
                const colors = getColorClasses(demo.color);
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentDemo(index)}
                    className={`group relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 overflow-hidden ${
                      currentDemo === index 
                        ? `${colors.button} text-white shadow-xl ${colors.shadow} scale-105 transform` 
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <div className="relative z-10 flex flex-col items-center">
                      <span className="text-2xl mb-2 text-white">{demo.icon}</span>
                      <span>{demo.title}</span>
                    </div>
                    {currentDemo === index && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50 animate-pulse"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Demo Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-6xl mr-4 text-white">{currentDemoData.icon}</span>
            <div>
              <h2 className="text-5xl font-bold text-white mb-2">{currentDemoData.title}</h2>
              <p className={`text-xl ${currentColors.text}`}>{currentDemoData.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Demo */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Enhanced Input Side */}
            <div className="relative">
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 h-full shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-green-400 font-bold">HUMAN INPUT</span>
                  </div>
                  <div className="text-xs text-gray-500">Real-time Processing</div>
                </div>
                
                <div className="bg-black/60 rounded-2xl p-6 min-h-[300px] relative overflow-hidden border border-gray-800/50">
                  <div className="text-xl leading-relaxed font-medium mb-6">
                    {typedText}
                    {isTyping && (
                      <span className="inline-block w-1 h-7 bg-cyan-400 ml-1 animate-pulse"></span>
                    )}
                  </div>
                  
                  {/* Enhanced scanning effect */}
                  {isTyping && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"></div>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                    </>
                  )}

                  {/* Processing indicators */}
                  {!isTyping && !showResult && (
                    <div className="space-y-3">
                      {currentDemoData.processingSteps.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            index <= processingStage ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'
                          }`}></div>
                          <span className={`text-sm ${
                            index <= processingStage ? 'text-cyan-300' : 'text-gray-500'
                          }`}>
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Processing metrics */}
                {!showResult && !isTyping && (
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-xs text-gray-400">Tokens</div>
                      <div className="text-lg font-bold text-cyan-400">{typedText.split(' ').length}</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-xs text-gray-400">Characters</div>
                      <div className="text-lg font-bold text-cyan-400">{typedText.length}</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3">
                      <div className="text-xs text-gray-400">Processing</div>
                      <div className="text-lg font-bold text-cyan-400">{Math.round((processingStage / currentDemoData.processingSteps.length) * 100)}%</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Output Side */}
            <div className="relative">
              <div className={`bg-gradient-to-br ${currentColors.bg} backdrop-blur-xl rounded-3xl p-8 border ${currentColors.border} h-full shadow-2xl`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 ${currentColors.button} rounded-full mr-3 animate-pulse`}></div>
                    <span className={`${currentColors.text} font-bold`}>AI ANALYSIS</span>
                  </div>
                  <div className="text-xs text-gray-500">Neural Processing</div>
                </div>

                <div className={`transition-all duration-1000 ${showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {currentDemo === 0 && showResult && (
                    <div className="space-y-6">
                      <div className="bg-black/40 rounded-2xl p-6 border border-emerald-500/20">
                        <div className="text-lg font-semibold text-white mb-4">Emotional Intelligence</div>
                        <div className="text-4xl mb-4">{currentDemoData.analysis.emotion}</div>
                        <div className="text-emerald-200 mb-4">Overall: <span className="text-white font-bold">{currentDemoData.analysis.overall}</span></div>
                        
                        {/* Emotion intensity bars */}
                        <div className="space-y-3">
                          {Object.entries(currentDemoData.analysis.details || {}).map(([emotion, intensity]) => (
                            <div key={emotion} className="flex items-center">
                              <div className="w-20 text-sm text-emerald-300 capitalize">{emotion}</div>
                              <div className="flex-1 bg-gray-800 rounded-full h-2 mx-3">
                                <div 
                                  className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                                  style={{ width: `${intensity}%` }}
                                ></div>
                              </div>
                              <div className="text-sm text-emerald-300">{intensity}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-900/40 rounded-xl p-4 border border-green-500/30">
                          <div className="text-green-300 font-semibold mb-3 flex items-center">
                            <span className="mr-2">😊</span>Positive Signals
                          </div>
                          <div className="space-y-2">
                            {(currentDemoData.analysis.positive || []).map((word, i) => (
                              <div key={i} className="text-green-100 bg-green-500/30 rounded-full px-3 py-1 text-sm inline-block mr-2 mb-2 border border-green-400/50">
                                {word}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-red-900/40 rounded-xl p-4 border border-red-500/30">
                          <div className="text-red-300 font-semibold mb-3 flex items-center">
                            <span className="mr-2">😤</span>Negative Signals
                          </div>
                          <div className="space-y-2">
                            {(currentDemoData.analysis.negative || []).map((word, i) => (
                              <div key={i} className="text-red-100 bg-red-500/30 rounded-full px-3 py-1 text-sm inline-block mr-2 mb-2 border border-red-400/50">
                                {word}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentDemo === 1 && showResult && (
                    <div className="space-y-6">
                      <div className="bg-black/40 rounded-2xl p-6 border border-blue-500/20">
                        <div className="text-lg font-semibold text-white mb-4">Contextual Understanding</div>
                        <div className="text-blue-200 mb-4">Intent: <span className="text-white font-bold">{currentDemoData.analysis.intent}</span></div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {Object.entries(currentDemoData.analysis.context || {}).map(([key, value]) => (
                            <div key={key} className="bg-blue-900/30 rounded-lg p-3 border border-blue-500/20">
                              <div className="text-xs text-blue-300 uppercase tracking-wide">{key}</div>
                              <div className="text-white font-medium">{value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {(currentDemoData.analysis.extracted || []).map((item, i) => (
                            <span key={i} className="bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm border border-blue-400/50">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-blue-900/40 rounded-2xl p-6 border border-blue-500/30">
                        <div className="text-blue-300 font-semibold mb-3 flex items-center">
                          <span className="mr-2">🤖</span>AI Response
                        </div>
                        <div className="text-white text-lg leading-relaxed bg-black/30 rounded-lg p-4">
                          "{currentDemoData.analysis.response}"
                        </div>
                      </div>
                    </div>
                  )}

                  {currentDemo === 2 && showResult && (
                    <div className="space-y-6">
                      <div className="bg-black/40 rounded-2xl p-6 border border-purple-500/20">
                        <div className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className="mr-2">🔍</span>Language Detection
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <div className="text-3xl text-purple-300 mb-2">{currentDemoData.analysis.detected}</div>
                            <div className="text-gray-300">Confidence: <span className="text-white font-bold">{currentDemoData.analysis.accuracy}</span></div>
                          </div>
                          <div className="text-6xl opacity-50">🌍</div>
                        </div>
                        
                        <div className="bg-purple-900/30 rounded-lg p-4">
                          <div className="text-sm text-purple-300 mb-2">Detection Confidence</div>
                          <div className="bg-gray-800 rounded-full h-3">
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-1000" style={{width: `${currentDemoData.analysis.languageConfidence}%`}}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-purple-300 font-semibold mb-3">Universal Translations</div>
                        {Object.entries(currentDemoData.analysis.translations || {}).map(([lang, translation]) => (
                          <div key={lang} className="bg-purple-900/30 rounded-xl p-4 border border-purple-500/20 hover:bg-purple-900/50 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <div className="text-purple-300 font-semibold">{lang}</div>
                              <div className="text-xs text-purple-400">99% accurate</div>
                            </div>
                            <div className="text-white text-lg">"{translation}"</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentDemo === 3 && showResult && (
                    <div className="space-y-6">
                      <div className="bg-black/40 rounded-2xl p-6 border border-orange-500/20">
                        <div className="text-lg font-semibold text-white mb-4 flex items-center">
                          <span className="mr-2">📊</span>Content Intelligence
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {Object.entries(currentDemoData.analysis.businessMetrics || {}).map(([key, value]) => (
                            <div key={key} className="bg-orange-900/30 rounded-lg p-3 text-center border border-orange-500/20">
                              <div className="text-xs text-orange-300 uppercase tracking-wide">{key}</div>
                              <div className="text-white font-bold text-lg">{value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="text-orange-300 font-semibold mb-2">Detected Topics</div>
                            <div className="flex flex-wrap gap-2">
                              {(currentDemoData.analysis.topics || []).map((topic, i) => (
                                <span key={i} className="bg-orange-500/30 text-orange-100 px-3 py-1 rounded-full text-sm border border-orange-400/50">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-orange-300 font-semibold mb-2">Key Insights</div>
                            <div className="space-y-2">
                              {(currentDemoData.analysis.keyInsights || []).map((insight, i) => (
                                <div key={i} className="flex items-center bg-orange-900/20 rounded-lg p-3">
                                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                                  <span className="text-white">{insight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {showResult && (
                    <div className="mt-6 text-center">
                      <div className={`inline-flex items-center px-6 py-3 bg-black/40 rounded-full border ${currentColors.border} backdrop-blur-sm`}>
                        <div className={`w-3 h-3 ${currentColors.button} rounded-full mr-3 animate-pulse`}></div>
                        <span className={`${currentColors.text} font-medium`}>
                          Analysis Complete: {
                            currentDemoData.analysis.confidence || 
                            currentDemoData.analysis.understanding || 
                            currentDemoData.analysis.accuracy
                          }
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Powered by Advanced AI</h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our neural networks process millions of conversations daily, continuously learning and improving
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-blue-300 font-medium">Languages</div>
              <div className="text-xs text-gray-500 mt-1">Including rare dialects</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 backdrop-blur rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">&lt;50ms</div>
              <div className="text-green-300 font-medium">Response Time</div>
              <div className="text-xs text-gray-500 mt-1">Lightning fast processing</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 backdrop-blur rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-purple-300 font-medium">Accuracy Rate</div>
              <div className="text-xs text-gray-500 mt-1">Continuously improving</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 backdrop-blur rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">24/7</div>
              <div className="text-orange-300 font-medium">AI Learning</div>
              <div className="text-xs text-gray-500 mt-1">Never stops evolving</div>
            </div>
          </div>

          {/* Advanced Capabilities Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h4 className="text-xl font-bold text-white mb-3">Neural Understanding</h4>
              <p className="text-gray-400 mb-4">Deep contextual analysis powered by transformer architectures and attention mechanisms</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>Intent Recognition</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>Context Preservation</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>Emotional Intelligence</li>
              </ul>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h4 className="text-xl font-bold text-white mb-3">Real-Time Processing</h4>
              <p className="text-gray-400 mb-4">Instant analysis and response generation with optimized neural network inference</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Parallel Processing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Edge Computing</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>Smart Caching</li>
              </ul>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h4 className="text-xl font-bold text-white mb-3">Adaptive Learning</h4>
              <p className="text-gray-400 mb-4">Continuously evolving models that learn from every interaction and conversation</p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Federated Learning</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Online Adaptation</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>Transfer Learning</li>
              </ul>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-16 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-2">Live Performance Metrics</h4>
              <p className="text-gray-400">Real-time statistics from our global AI infrastructure</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-cyan-400 mb-2">2.3M+</div>
                <div className="text-sm text-gray-400">Conversations/Hour</div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '78%'}}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-2">47ms</div>
                <div className="text-sm text-gray-400">Avg Response Time</div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full animate-pulse" style={{width: '92%'}}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-2">99.7%</div>
                <div className="text-sm text-gray-400">Model Accuracy</div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '99%'}}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400 mb-2">156</div>
                <div className="text-sm text-gray-400">Active Languages</div>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full animate-pulse" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes neuralPulse {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        }
        
        @keyframes dataStream {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-15px) rotate(180deg); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default NaturalLanguageProcessing;