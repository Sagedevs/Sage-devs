'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, X, Minimize2, Maximize2, User, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hello there! I'm Alex, your SageDevs assistant. I'm here to help you discover how our tech solutions can transform your business. What would you like to explore today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [hasSeenNotification, setHasSeenNotification] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Show notification after 4-5 seconds
  useEffect(() => {
    if (!isOpen && !hasSeenNotification) {
      notificationTimeoutRef.current = setTimeout(() => {
        setShowNotification(true)
        
        // Auto-close notification after 8 seconds
        autoCloseTimeoutRef.current = setTimeout(() => {
          setShowNotification(false)
          setHasSeenNotification(true)
        }, 8000)
      }, 4000 + Math.random() * 1000) // Random between 4-5 seconds
    }

    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current)
      }
      if (autoCloseTimeoutRef.current) {
        clearTimeout(autoCloseTimeoutRef.current)
      }
    }
  }, [isOpen, hasSeenNotification])

  // Handle notification click
  const handleNotificationClick = () => {
    setIsOpen(true)
    setShowNotification(false)
    setHasSeenNotification(true)
    if (autoCloseTimeoutRef.current) {
      clearTimeout(autoCloseTimeoutRef.current)
    }
  }

  // Close notification
  const handleCloseNotification = () => {
    setShowNotification(false)
    setHasSeenNotification(true)
    if (autoCloseTimeoutRef.current) {
      clearTimeout(autoCloseTimeoutRef.current)
    }
  }

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const apiKey = 'AIzaSyAk33S_ycidIlEAFmSyBnpfj_9_5Nzgjeo'
    
    const systemPrompt = `You are Alex, the human-like assistant for SageDevs tech agency. You have a friendly, conversational tone but maintain professional expertise.

PERSONALITY TRAITS:
- Warm and approachable, but highly knowledgeable
- Use natural language with occasional emojis for warmth 😊
- Show genuine enthusiasm for helping clients
- Ask thoughtful follow-up questions
- Share brief, relevant success stories when appropriate
- Be concise but not robotic

SAGEDEVS CORE INFORMATION:
🎯 Premium Tech Agency with 8+ years experience
🌟 Specialties: Web Apps, Mobile Apps, AI/ML, Cloud Solutions, E-commerce
💡 USP: We don't just code - we provide strategic tech partnerships
🏆 97% client retention rate
🚀 Average project delivery: 30% faster than industry standard
💰 Transparent pricing with value-based ROI
🌐 Full-cycle development from ideation to deployment
🔧 Tech Stack: React, Next.js, Node.js, Python, React Native, AWS, Azure

RESPONSE GUIDELINES:
1. Always acknowledge the user's question first
2. Provide clear, specific information
3. Include one relevant benefit or result
4. End with an open-ended question to continue conversation
5. Use occasional line breaks for readability
6. Add personality without being unprofessional

NEVER: Sound like a generic chatbot, use jargon without explanation, or make unrealistic promises.

Example responses:
"Great question! At SageDevs, we approach web development by..."
"That's actually one of our specialties! We recently helped a client..."
"I'd love to share more about that! Our typical process involves..."

Now respond to the user naturally: ${userMessage}`

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt
            }]
          }],
          generationConfig: {
            maxOutputTokens: 250,
            temperature: 0.85,
            topP: 0.9,
            topK: 40,
          }
        })
      })

      if (!response.ok) {
        throw new Error('API request failed')
      }

      const data = await response.json()
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm excited to tell you more about how SageDevs can help your business! What specific area interests you most?"
    } catch (error) {
      console.error('Gemini API error:', error)
      return "Thanks for your question! I'd love to tell you about how SageDevs delivers exceptional results through our tailored tech solutions. Could you tell me more about what you're looking for?"
    }
  }

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    try {
      const botResponse = await generateBotResponse(inputText)
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Error generating response:', error)
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  // Quick questions for user
  const quickQuestions = [
    "What services do you offer?",
    "Can you show me examples?",
    "How do you ensure quality?",
    "What's your pricing?",
    "How long does a project take?"
  ]

  // Notification Component
  const NotificationBubble = () => {
    if (!showNotification || isOpen) return null

    return (
      <div className="fixed bottom-36 right-4 lg:bottom-40 lg:right-8 w-64 animate-slideInLeft z-40">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-4 shadow-2xl border border-blue-700/50 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-sm">Hey there! 👋</h4>
                <button
                  onClick={handleCloseNotification}
                  className="text-blue-200 hover:text-white text-xs"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-blue-100 mt-1">
                How can we help you today? I&apos;m here to answer your questions about SageDevs!
              </p>
              <button
                onClick={handleNotificationClick}
                className="mt-2 bg-white text-blue-700 hover:bg-blue-50 text-xs font-semibold py-1.5 px-3 rounded-full transition-all w-full"
              >
                Chat with me
              </button>
            </div>
          </div>
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-blue-900 transform rotate-45"></div>
        </div>
      </div>
    )
  }

  // Floating Chat Button
  if (!isOpen) {
    return (
      <>
        <NotificationBubble />
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-4 sm:right-6 md:right-8 bg-gradient-to-br from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group animate-float"
          style={{
            animation: 'float 3s ease-in-out infinite',
            boxShadow: '0 10px 40px rgba(30, 64, 175, 0.5)'
          }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-full">
              <div className="w-6 h-6 relative">
                <Image
                  src="/Sage-ai.svg"
                  alt="SageDevs AI Assistant"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
        </button>
      </>
    )
  }

  return (
    <div className={`fixed bottom-6 right-4 sm:right-6 md:right-8 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 rounded-2xl shadow-2xl z-50 transition-all duration-300 overflow-hidden border border-blue-800/30 ${
      isMinimized 
        ? 'w-64 h-14 sm:w-72 md:w-80' 
        : 'w-full max-w-xs sm:max-w-sm md:max-w-md h-[500px] sm:h-[550px] md:h-[600px]'
    }`}
      style={{
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-4 rounded-t-2xl flex items-center justify-between border-b border-blue-700/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-md rounded-full"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-full">
              <div className="w-5 h-5 relative">
                <Image
                  src="/Sage-ai.svg"
                  alt="SageDevs AI Assistant"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-sm sm:text-lg truncate">Alex @ SageDevs</h3>
            <p className="text-blue-200 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
              <span className="truncate">Online • Ready to help</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-blue-700/50 p-2 rounded-lg transition-all hover:scale-110"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-red-500/20 p-2 rounded-lg transition-all hover:scale-110"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Container */}
          <div className="h-[300px] sm:h-[350px] md:h-[400px] overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-gray-900/95 to-blue-950/95">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 sm:mb-4 animate-slideIn ${message.sender === 'user' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 relative">
                          <Image
                            src="/Sage-ai.svg"
                            alt="Bot"
                            width={16}
                            height={16}
                            className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={`max-w-[calc(100%-60px)] ${message.sender === 'user' ? 'ml-auto' : ''}`}>
                    <div className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none'
                        : 'bg-gray-800/70 text-gray-100 border border-blue-900/30 rounded-bl-none backdrop-blur-sm'
                    }`}>
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                    <div className={`flex items-center gap-2 mt-1 text-xs px-1 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <span className={`${message.sender === 'user' ? 'text-blue-300/70' : 'text-gray-400'}`}>
                        {formatTime(message.timestamp)}
                      </span>
                      {message.sender === 'user' && (
                        <User className="w-3 h-3 text-blue-300/70" />
                      )}
                    </div>
                  </div>
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center shadow-lg border border-blue-500/20">
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2 sm:gap-3 animate-fadeIn">
                <div className="flex-shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 relative">
                      <Image
                        src="/Sage-ai.svg"
                        alt="Typing"
                        width={16}
                        height={16}
                        className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/70 text-gray-100 border border-blue-900/30 rounded-2xl rounded-bl-none px-3 py-2 sm:px-4 sm:py-3 shadow-lg backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Quick Questions */}
            {messages.length <= 2 && !isTyping && (
              <div className="mt-4 sm:mt-6 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 px-1">Quick questions:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setInputText(question);
                        setTimeout(() => handleSendMessage(), 100);
                      }}
                      className="text-xs bg-gray-800/50 hover:bg-blue-900/30 border border-blue-900/50 text-gray-200 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full transition-all hover:scale-105 hover:border-blue-500/50 cursor-pointer backdrop-blur-sm whitespace-nowrap"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-blue-900/50 bg-gradient-to-t from-gray-900 to-blue-950/80 backdrop-blur-sm">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-gray-800/70 border border-blue-900/50 rounded-xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent pr-12 backdrop-blur-sm text-sm sm:text-base"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputText.trim() === '' || isTyping}
                className="absolute right-1.5 sm:right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-800 text-white p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:scale-110 disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Ask me anything about SageDevs services
            </p>
          </div>
        </>
      )}
      
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-slideIn {
          animation-duration: 0.3s;
          animation-fill-mode: both;
        }
        
        .animate-slideInLeft {
          animation-name: slideInLeft;
        }
        
        .animate-slideInRight {
          animation-name: slideInRight;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.3);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60a5fa, #3b82f6);
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .chat-widget {
            max-width: calc(100vw - 2rem);
          }
          
          ::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </div>
  )
}

export default ChatWidget