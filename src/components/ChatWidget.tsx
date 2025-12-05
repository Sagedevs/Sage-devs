'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, X, Minimize2, Maximize2, Bot, User, Sparkles, MessageCircle, DollarSign, Briefcase, Star, Mail, ExternalLink } from 'lucide-react'

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
      text: "Hi! I'm Alex from SageDevs. I can help you with pricing, our projects, services, or anything else about our premium development agency. How can I assist you today?",
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
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Prevent background scroll when chat is open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isOpen, isMinimized])

  // Handle wheel event on chat container
  useEffect(() => {
    const chatContainer = chatContainerRef.current
    if (!chatContainer) return

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation()
    }

    chatContainer.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      chatContainer.removeEventListener('wheel', handleWheel)
    }
  }, [])

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
        
        autoCloseTimeoutRef.current = setTimeout(() => {
          setShowNotification(false)
          setHasSeenNotification(true)
        }, 8000)
      }, 4000 + Math.random() * 1000)
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

  const handleNotificationClick = () => {
    setIsOpen(true)
    setShowNotification(false)
    setHasSeenNotification(true)
    if (autoCloseTimeoutRef.current) {
      clearTimeout(autoCloseTimeoutRef.current)
    }
  }

  const handleCloseNotification = () => {
    setShowNotification(false)
    setHasSeenNotification(true)
    if (autoCloseTimeoutRef.current) {
      clearTimeout(autoCloseTimeoutRef.current)
    }
  }

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const apiKey = 'AIzaSyAk33S_ycidIlEAFmSyBnpfj_9_5Nzgjeo'
    
    // Cache to prevent duplicate responses
    const cacheKey = userMessage.toLowerCase().trim()
    const cachedResponses = [
      "I understand you're interested in our services. At SageDevs, we offer custom development solutions tailored to your business needs. Could you share more details about what you're looking to build?",
      "That's a great question. Our pricing varies based on project scope and requirements. We have different engagement models to suit various needs. Would you like me to explain our pricing approach?",
      "Thanks for reaching out. We specialize in web and mobile application development. To give you accurate information, could you tell me more about your project goals?",
      "I'd be happy to help with that. Our team at SageDevs has experience with various types of projects. For specific pricing, we typically need to understand your requirements better. What's your timeline looking like?",
      "We offer comprehensive development services from planning to deployment. The investment depends on several factors including complexity and features. Are you looking for a web application, mobile app, or something else?"
    ]

    // Return cached response for simple queries to avoid API calls
    if (cacheKey.length < 3 || 
        ['hi', 'hello', 'hey', 'test', 'cgt', 'gt', 'ok', 'yes', 'no'].includes(cacheKey)) {
      const randomResponse = cachedResponses[Math.floor(Math.random() * cachedResponses.length)]
      return randomResponse
    }

    const systemPrompt = `You are Alex, the AI assistant for SageDevs - a premium full-stack development agency. Be conversational, helpful, and professional.

ABOUT SAGEDEVS:
- Premium full-stack development agency
- Specializes in: Custom web apps, mobile apps, AI/ML solutions, e-commerce, cloud solutions
- Tech stack: React, Next.js, Node.js, Python, React Native, AWS, Azure
- We partner with ambitious businesses to create scalable applications
- Response time: Within 24 hours, free 30-minute strategy call available
- Email: info@sagedevs.tech
- Website: https://sagedevs.tech
- Pricing page: https://sagedevs.tech/pricing

PRICING MODELS:
1. Fixed Price: For projects with clear requirements and scope
2. Time & Material: Flexible engagement for evolving projects
3. Dedicated Team: Full-time developers for long-term partnerships

IMPORTANT RULES:
1. DO NOT use any emojis at all
2. DO NOT give exact pricing numbers - be helpful but vague
3. ALWAYS mention our email: info@sagedevs.tech for detailed quotes
4. Encourage booking a strategy call or visiting our pricing page
5. Keep responses natural and conversational
6. Ask relevant follow-up questions
7. Never say "I don't know" or give generic responses
8. Tailor responses to the specific query
9. If asked about website development, mention our expertise in React and Next.js
10. If asked about pricing, explain our models without giving exact numbers
11. If asked about timeline, mention it depends on project complexity
12. Always end with a question or suggestion for next steps

RESPONSE EXAMPLES:
For pricing questions: "Our pricing depends on several factors including scope, complexity, and timeline. We offer fixed price, time & material, and dedicated team models. For a detailed quote, email us at info@sagedevs.tech with your requirements. What type of project are you considering?"
For website development: "We specialize in custom website development using modern technologies like React and Next.js. The investment varies based on features and complexity. Could you share more about what you need?"
For general inquiries: "I'd be happy to help. SageDevs offers full-stack development services for web and mobile applications. To give you more specific information, could you tell me about your project goals?"

Now respond naturally to this query: "${userMessage}"`

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
            maxOutputTokens: 150,
            temperature: 0.9,
            topP: 0.95,
            topK: 40,
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error('API response error:', response.status, errorData)
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()
      let responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
        "I'd be happy to help with that. For accurate information tailored to your needs, please email us at info@sagedevs.tech. What specifically are you looking to build?"

      // Remove any emojis from response
      responseText = responseText.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')

      // Ensure email is mentioned in responses about pricing or contact
      if ((userMessage.toLowerCase().includes('price') || 
           userMessage.toLowerCase().includes('cost') || 
           userMessage.toLowerCase().includes('contact') ||
           userMessage.toLowerCase().includes('email')) && 
          !responseText.includes('info@sagedevs.tech')) {
        responseText += " For a detailed quote, please email us at info@sagedevs.tech."
      }

      return responseText
    } catch (error) {
      console.error('Gemini API error:', error)
      // Return different cached responses on error
      const errorResponses = [
        "I'd be happy to help with that. For specific pricing and project details, please email us at info@sagedevs.tech with your requirements. What type of project are you considering?",
        "Thanks for your question. Our team at SageDevs can provide detailed information about our services. Could you share more about what you're looking to build?",
        "That's a great question. Our services and pricing vary based on project requirements. To get accurate information, please contact us at info@sagedevs.tech. What's your project timeline?",
        "I understand you're interested in our development services. We offer custom solutions tailored to business needs. For detailed pricing, email us at info@sagedevs.tech. What specifically are you looking to develop?"
      ]
      return errorResponses[Math.floor(Math.random() * errorResponses.length)]
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
      // Add a fallback message if everything fails
      const fallbackMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Thanks for your message. For detailed information about our services and pricing, please email us at info@sagedevs.tech. Could you tell me more about what you're looking to build?",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackMessage])
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
    "What's your pricing model?",
    "Tell me about your services",
    "Show me your portfolio",
    "How do I get started?",
    "Contact your team"
  ]

  // Notification Component
  const NotificationBubble = () => {
    if (!showNotification || isOpen) return null

    return (
      <div className="fixed bottom-36 right-4 lg:bottom-40 lg:right-8 w-72 animate-slideInLeft z-[9998]">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-2xl p-4 shadow-2xl border border-blue-700/50 backdrop-blur-sm">
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h4 className="font-bold text-sm">Need help with pricing?</h4>
                <button
                  onClick={handleCloseNotification}
                  className="text-blue-200 hover:text-white text-xs"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-blue-100 mt-1">
                I can provide guidance on our services and pricing. Let's chat!
              </p>
              <button
                onClick={handleNotificationClick}
                className="mt-2 bg-white text-blue-700 hover:bg-blue-50 text-xs font-semibold py-1.5 px-3 rounded-full transition-all w-full"
              >
                Start Conversation
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
          className="fixed bottom-6 right-4 sm:right-6 md:right-8 bg-gradient-to-br from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 z-[9999] flex items-center justify-center group animate-float"
          style={{
            animation: 'float 3s ease-in-out infinite',
            boxShadow: '0 10px 40px rgba(30, 64, 175, 0.5)'
          }}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-blue-400/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-all"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-full">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse border-2 border-white"></div>
        </button>
      </>
    )
  }

  return (
    <div 
      ref={chatContainerRef}
      className={`fixed bottom-6 right-4 sm:right-6 md:right-8 bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 rounded-2xl shadow-2xl z-[9999] transition-all duration-300 overflow-hidden border border-blue-800/30 ${
        isMinimized 
          ? 'w-64 h-14 sm:w-72 md:w-80' 
          : 'w-full max-w-xs sm:max-w-sm md:max-w-md h-[550px] sm:h-[600px] md:h-[650px]'
      }`}
      style={{
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-4 rounded-t-2xl flex items-center justify-between border-b border-blue-700/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-md rounded-full"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-full">
              <Bot className="w-5 h-5" />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-sm sm:text-lg truncate">Alex @ SageDevs</h3>
            <p className="text-blue-200 text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
              <span className="truncate">Online • AI Assistant</span>
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
          <div 
            className="h-[350px] sm:h-[400px] md:h-[450px] overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-gray-900/95 to-blue-950/95"
            style={{ overscrollBehavior: 'contain' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 sm:mb-4 animate-slideIn ${message.sender === 'user' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
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
                    <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
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
                
                {/* Quick Links */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a
                    href="https://sagedevs.tech/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-blue-900/30 hover:bg-blue-800/40 border border-blue-700/50 text-blue-200 px-3 py-2 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-1"
                  >
                    <DollarSign className="w-3 h-3" />
                    Pricing Page
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="mailto:info@sagedevs.tech"
                    className="text-xs bg-green-900/20 hover:bg-green-800/30 border border-green-700/50 text-green-200 px-3 py-2 rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    Email Us
                  </a>
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
                placeholder="Ask about pricing, projects, or services..."
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
            <p className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-1">
              <Mail className="w-3 h-3" />
              For specific quotes: <a href="mailto:info@sagedevs.tech" className="text-blue-400 hover:text-blue-300 ml-1">info@sagedevs.tech</a>
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