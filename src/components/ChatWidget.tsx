'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, X, Minimize2, Maximize2, User, MessageCircle, DollarSign, Briefcase, Mail, Calendar, ClipboardCheck, CheckCircle, ArrowRight, FileText } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  type?: 'text' | 'cta' | 'lead_form' | 'confirmation'
}

interface LeadData {
  name: string
  email: string
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi, I'm Sage AI Assistant from SageDevs. I'm here to help you understand how our premium development services can transform your business. Are you looking to build a new application, improve an existing one, or explore strategic tech solutions?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [hasSeenNotification, setHasSeenNotification] = useState(false)
  const [isCollectingLead, setIsCollectingLead] = useState(false)
  const [leadData, setLeadData] = useState<LeadData>({
    name: '',
    email: ''
  })
  const [showLeadForm, setShowLeadForm] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const notificationTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const autoCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Prevent background scroll when chat is open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
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

  // Submit lead to Formspree
  const submitLeadToFormspree = async (data: LeadData) => {
    try {
      const response = await fetch('https://formspree.io/f/xldpndqz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Lead from SageDevs Chatbot: ${data.name}`,
          name: data.name,
          email: data.email,
          source: 'SageDevs Website Chatbot',
          timestamp: new Date().toISOString(),
          page_url: window.location.href
        })
      })

      if (response.ok) {
        return { success: true, message: 'Thank you! Your information has been submitted. Our team will contact you within 24 hours with your custom quote.' }
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Formspree submission error:', error)
      return { 
        success: false, 
        message: 'There was an issue submitting your information. Please email us directly at info@sagedevs.tech' 
      }
    }
  }

  // Handle lead form submission
  const handleLeadSubmit = async () => {
    if (!leadData.name || !leadData.email) {
      addBotMessage('Please provide both your name and email to get your custom quote.')
      return
    }

    setIsTyping(true)
    const result = await submitLeadToFormspree(leadData)
    
    setIsTyping(false)
    if (result.success) {
      addBotMessage(result.message)
      
      // Add confirmation message with next steps
      const confirmationMessage: Message = {
        id: Date.now().toString(),
        text: `**Custom Quote Request Submitted!**\n\n**Details:**\n• Name: ${leadData.name}\n• Email: ${leadData.email}\n\n**Next Steps:**\n1. Our team will analyze your requirements\n2. You'll receive a detailed custom quote within 24 hours\n3. We'll include project timeline and pricing options\n4. Optional: Schedule a free consultation call`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'confirmation'
      }
      
      setMessages(prev => [...prev, confirmationMessage])
      setShowLeadForm(false)
      setIsCollectingLead(false)
    } else {
      addBotMessage(result.message)
    }
  }

  // Add bot message helper
  const addBotMessage = (text: string, type: Message['type'] = 'text') => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      type
    }
    setMessages(prev => [...prev, message])
  }

  // Start lead collection process
  const startLeadCollection = () => {
    setIsCollectingLead(true)
    setShowLeadForm(true)
    
    addBotMessage("Great! I'll help you get a custom quote. Please provide your name and email, and our team will prepare a detailed proposal for you.")
  }

  // Handle lead form input changes
  const handleLeadInputChange = (field: keyof LeadData, value: string) => {
    setLeadData(prev => ({ ...prev, [field]: value }))
  }

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY
    
    if (!apiKey) {
      console.error('OpenRouter API key is not configured')
      return "Thanks for your interest! Our AI assistant can help answer your questions. To get a custom quote, please share your name and email at info@sagedevs.tech and we'll prepare a detailed proposal for you."
    }
    
    // Only use cache for very simple greetings
    const simpleGreetings = ['hi', 'hello', 'hey', 'hii', 'hello there', 'hey there']
    const userMessageLower = userMessage.toLowerCase().trim()
    
    // Return cached response only for very simple greetings
    if (simpleGreetings.includes(userMessageLower)) {
      const cachedResponses = [
        "Hello! I'm Sage AI Assistant from SageDevs. I can help you with project planning, technical guidance, and getting custom quotes. What would you like to discuss today?",
        "Hi there! I'm here to help you with SageDevs development services. I can assist with project scoping, technology selection, and connecting you with our team for custom quotes.",
        "Welcome! I'm Sage, your AI consultant from SageDevs. I can provide technical insights, project estimates, and help you get started with our development services."
      ]
      return cachedResponses[Math.floor(Math.random() * cachedResponses.length)]
    }

    const systemPrompt = `You are Sage, the AI assistant for SageDevs - a premium full-stack development agency. Your primary goals are:
1. Provide helpful technical guidance and insights
2. Understand project requirements to offer accurate information
3. Guide users toward getting custom quotes
4. Demonstrate the value of working with SageDevs

ABOUT SAGEDEVS:
• Premium full-stack development agency with 8+ years experience
• Specializes in: Custom web apps, mobile apps, AI/ML solutions, e-commerce, cloud solutions
• Tech stack: React, Next.js, Node.js, Python, React Native, AWS, Azure
• 97% client retention rate, 30% faster delivery than industry average
• Free initial consultation available
• Email: info@sagedevs.tech
• Website: https://sagedevs.tech
• Portfolio: https://sagedevs.tech/projects
• Pricing: Custom quotes based on project requirements

APPROACH:
• Always provide helpful, accurate technical information
• When discussing projects, mention that custom quotes are available
• Guide users to share contact info for detailed proposals
• Use AI to analyze requirements and suggest solutions

RESPONSE RULES:
1. Always be helpful and informative
2. Provide AI-powered insights when relevant
3. Mention custom quote availability for project discussions
4. Be specific about next steps
5. Focus on solutions and value
6. Use professional but friendly tone
7. Include email: info@sagedevs.tech in relevant responses

EXAMPLE RESPONSES:
"Based on your description, I'd recommend a React/Node.js stack for that type of application. Our team can provide a custom quote - would you like to share your email so we can send detailed pricing?"
"That's an interesting use case for AI. We've implemented similar solutions before. I can help you think through the technical requirements, and our team can provide a custom quote for development."
"For a project like that, typical timelines are 3-6 months depending on complexity. Our AI analysis suggests some optimization opportunities. Would you like me to help you get a custom quote?"

Now respond to this user message with helpful, AI-powered insights: "${userMessage}"`

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://sagedevs.tech',
          'X-Title': 'SageDevs AI Assistant'
        },
        body: JSON.stringify({
          model: 'openai/gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: systemPrompt
            },
            {
              role: 'user',
              content: userMessage
            }
          ],
          max_tokens: 300,
          temperature: 0.7,
          top_p: 0.9
        })
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()
      
      if (!data.choices?.[0]?.message?.content) {
        throw new Error('Invalid API response structure')
      }
      
      let responseText = data.choices[0].message.content || 
        "I'd be happy to help with that using my AI analysis. For a detailed custom quote based on your specific requirements, our team can prepare one for you. Would you like to share your email address?"

      // Remove any emojis
      responseText = responseText.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      
      // Ensure professional closing
      if (!responseText.includes('info@sagedevs.tech') && !responseText.includes('custom quote')) {
        responseText += "\n\nFor a detailed custom quote or technical consultation, email us at info@sagedevs.tech"
      }

      return responseText
    } catch (error) {
      console.error('OpenRouter API error:', error)
      return "Thanks for your message! Our AI assistant can help analyze your requirements. For a custom quote or to discuss your project with our team, please email info@sagedevs.tech"
    }
  }

  const handleSendMessage = async () => {
    if (inputText.trim() === '' || isTyping) return

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
      
      // Check if response suggests getting contact info
      const lowerResponse = botResponse.toLowerCase()
      if ((lowerResponse.includes('quote') || lowerResponse.includes('email')) && 
          !isCollectingLead && !showLeadForm) {
        // Add CTA after a delay
        setTimeout(() => {
          const ctaMessage: Message = {
            id: (Date.now() + 2).toString(),
            text: "Would you like me to help you get a custom quote? I can collect your details and our team will prepare a personalized proposal for you.",
            sender: 'bot',
            timestamp: new Date(),
            type: 'cta'
          }
          setMessages(prev => [...prev, ctaMessage])
        }, 500)
      }
    } catch (error) {
      console.error('Error generating response:', error)
      addBotMessage("I can help analyze your requirements with AI insights. For a custom quote or to discuss your project, please email info@sagedevs.tech")
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

  // CTA button actions
  const handleScheduleCall = () => {
    window.location.href = 'mailto:info@sagedevs.tech?subject=Schedule%20a%20Meeting%20with%20SageDevs&body=Hello%20SageDevs%20team,%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20to%20discuss%20my%20project.'
  }

  const handleViewPortfolio = () => {
    window.open('https://sagedevs.tech/projects', '_blank')
  }

  const handleEmailUs = () => {
    window.location.href = 'mailto:info@sagedevs.tech'
  }

  // Quick CTAs for sales
  const quickCTAs = [
    { text: "Get Custom Quote", action: startLeadCollection, icon: <DollarSign className="w-3 h-3" /> },
    { text: "Schedule Meeting", action: handleScheduleCall, icon: <Calendar className="w-3 h-3" /> },
    { text: "View Portfolio", action: handleViewPortfolio, icon: <Briefcase className="w-3 h-3" /> },
    { text: "Email Us", action: handleEmailUs, icon: <Mail className="w-3 h-3" /> }
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
                <h4 className="font-bold text-sm">AI-Powered Assistance</h4>
                <button
                  onClick={handleCloseNotification}
                  className="text-blue-200 hover:text-white text-xs"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-blue-100 mt-1">
                Get instant AI insights about your project and receive custom quotes.
              </p>
              <button
                onClick={handleNotificationClick}
                className="mt-2 bg-white text-blue-700 hover:bg-blue-50 text-xs font-semibold py-1.5 px-3 rounded-full transition-all w-full"
              >
                Chat with Sage AI
              </button>
            </div>
          </div>
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-blue-900 transform rotate-45"></div>
        </div>
      </div>
    )
  }

  // Lead form steps
  const leadSteps = [
    { field: 'name', label: 'Full Name', placeholder: 'Enter your full name', required: true },
    { field: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true }
  ]

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
              <img 
                src="/Sage-ai.svg" 
                alt="Sage AI Assistant" 
                className="w-6 h-6 filter brightness-0 invert"
              />
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
          : 'w-[calc(100vw-2rem)] sm:w-96 md:w-[28rem] max-w-[95vw] h-[550px] sm:h-[600px] md:h-[650px]'
      }`}
      style={{
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        maxHeight: 'calc(100vh - 5rem)'
      }}
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white p-4 rounded-t-2xl flex items-center justify-between border-b border-blue-700/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 blur-md rounded-full"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-full">
              <img 
                src="/Sage-ai.svg" 
                alt="Sage AI Assistant" 
                className="w-4 h-4 filter brightness-0 invert"
              />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-sm sm:text-base truncate">Sage AI Assistant</h3>
            <p className="text-blue-200 text-xs flex items-center gap-1 truncate">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
              <span className="truncate">Powered by AI • Online</span>
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
            className="h-[340px] sm:h-[380px] md:h-[430px] overflow-y-auto p-3 sm:p-4 bg-gradient-to-b from-gray-900/95 to-blue-950/95"
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
                        <img 
                          src="/Sage-ai.svg" 
                          alt="Sage AI Assistant" 
                          className="w-3 h-3 sm:w-4 sm:h-4 filter brightness-0 invert"
                        />
                      </div>
                    </div>
                  )}
                  <div className={`max-w-[calc(100%-60px)] ${message.sender === 'user' ? 'ml-auto' : ''}`}>
                    <div className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none'
                        : 'bg-gray-800/70 text-gray-100 border border-blue-900/30 rounded-bl-none backdrop-blur-sm'
                    }`}>
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">{message.text}</p>
                      
                      {/* CTA Button in message */}
                      {message.type === 'cta' && (
                        <div className="mt-3 space-y-2">
                          <button
                            onClick={startLeadCollection}
                            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            Get Custom Quote
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={handleScheduleCall}
                              className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1"
                            >
                              <Calendar className="w-3 h-3" />
                              Schedule Meeting
                            </button>
                            <button
                              onClick={handleViewPortfolio}
                              className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1"
                            >
                              <Briefcase className="w-3 h-3" />
                              View Portfolio
                            </button>
                          </div>
                        </div>
                      )}
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
            
            {/* Lead Collection Form */}
            {showLeadForm && (
              <div className="mt-4 p-4 bg-gray-800/50 rounded-xl border border-blue-900/50 backdrop-blur-sm animate-fadeIn">
                <div className="flex items-center gap-2 mb-3">
                  <ClipboardCheck className="w-4 h-4 text-blue-400" />
                  <h4 className="text-sm font-semibold text-white">Get Your Custom Quote</h4>
                </div>
                
                <div className="space-y-3">
                  {leadSteps.map((step) => (
                    <div key={step.field} className="space-y-1">
                      <label className="text-xs text-gray-300 font-medium">
                        {step.label} {step.required && <span className="text-red-400">*</span>}
                      </label>
                      <input
                        type={step.field === 'email' ? 'email' : 'text'}
                        value={leadData[step.field as keyof LeadData] || ''}
                        onChange={(e) => handleLeadInputChange(step.field as keyof LeadData, e.target.value)}
                        placeholder={step.placeholder}
                        className="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        required={step.required}
                      />
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <button
                    onClick={handleLeadSubmit}
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Submit & Get Quote
                  </button>
                  <button
                    onClick={() => {
                      setShowLeadForm(false)
                      setIsCollectingLead(false)
                      addBotMessage("No problem. Feel free to ask any other questions or use our AI insights!")
                    }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  Our team will prepare a detailed custom quote and email it to you within 24 hours.
                </p>
              </div>
            )}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2 sm:gap-3 animate-fadeIn">
                <div className="flex-shrink-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <img 
                      src="/Sage-ai.svg" 
                      alt="Sage AI Assistant" 
                      className="w-3 h-3 sm:w-4 sm:h-4 filter brightness-0 invert animate-pulse"
                    />
                  </div>
                </div>
                <div className="bg-gray-800/70 text-gray-100 border border-blue-900/30 rounded-2xl rounded-bl-none px-3 py-2 sm:px-4 sm:py-3 shadow-lg backdrop-blur-sm">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Sage AI is analyzing your request...</p>
                </div>
              </div>
            )}
            
            {/* Quick CTAs */}
            {!isCollectingLead && messages.length <= 2 && !isTyping && !showLeadForm && (
              <div className="mt-4 sm:mt-6 animate-fadeIn">
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 px-1">Quick actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickCTAs.map((cta, index) => (
                    <button
                      key={index}
                      onClick={cta.action}
                      className="text-xs bg-gray-800/50 hover:bg-blue-900/30 border border-blue-900/50 text-gray-200 px-3 py-2 rounded-lg transition-all hover:scale-[1.02] hover:border-blue-500/50 cursor-pointer backdrop-blur-sm flex items-center justify-center gap-1.5"
                    >
                      {cta.icon}
                      {cta.text}
                    </button>
                  ))}
                </div>
                
                {/* AI Assistant Banner */}
                <div className="mt-4 p-3 bg-gradient-to-r from-blue-900/20 to-purple-800/20 border border-blue-800/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/Sage-ai.svg" 
                      alt="AI" 
                      className="w-4 h-4 filter brightness-0 invert"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-blue-300 font-semibold">AI-Powered Insights</p>
                      <p className="text-xs text-blue-400/80">Get instant analysis and recommendations</p>
                    </div>
                  </div>
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
                placeholder={isCollectingLead ? "Type your response..." : "Ask anything about your project or get AI insights..."}
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
            <p className="text-xs text-gray-400 mt-2 text-center flex items-center justify-center gap-1 flex-wrap">
              <img 
                src="/Sage-ai.svg" 
                alt="AI" 
                className="w-3 h-3 flex-shrink-0 filter brightness-0 invert"
              />
              <span className="whitespace-nowrap">Powered by AI • For quotes:</span>
              <a href="mailto:info@sagedevs.tech" className="text-blue-400 hover:text-blue-300 ml-1 whitespace-nowrap">info@sagedevs.tech</a>
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
            max-width: calc(100vw - 2rem) !important;
            right: 1rem !important;
            left: auto !important;
            transform: none !important;
          }
          
          ::-webkit-scrollbar {
            width: 4px;
          }
        }
        
        /* Prevent text overflow */
        .break-words {
          overflow-wrap: break-word;
          word-break: break-word;
        }
      `}</style>
    </div>
  )
}

export default ChatWidget