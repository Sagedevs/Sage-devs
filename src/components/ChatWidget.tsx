'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, X, Minimize2, Maximize2, User, MessageCircle, DollarSign, Briefcase, Mail, Calendar, ClipboardCheck, Award, CheckCircle, ArrowRight, FileText } from 'lucide-react'

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
  phone?: string
  company?: string
  projectType?: string
  budget?: string
  timeline?: string
  requirements?: string
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
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    requirements: ''
  })
  const [currentLeadStep, setCurrentLeadStep] = useState(0)
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
          _subject: `New Lead from SageDevs Chatbot: ${data.name} - ${data.projectType || 'General Inquiry'}`,
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          company: data.company || 'Not provided',
          project_type: data.projectType || 'Not specified',
          budget: data.budget || 'Not specified',
          timeline: data.timeline || 'Not specified',
          requirements: data.requirements || 'Not provided',
          source: 'SageDevs Website Chatbot',
          timestamp: new Date().toISOString(),
          page_url: window.location.href
        })
      })

      if (response.ok) {
        return { success: true, message: 'Thank you! Your information has been submitted. Our team will contact you within 24 hours.' }
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
      addBotMessage('Please provide at least your name and email to continue.')
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
        text: `**Lead Submitted Successfully!**\n\n**Details:**\n• Name: ${leadData.name}\n• Email: ${leadData.email}${leadData.phone ? `\n• Phone: ${leadData.phone}` : ''}\n• Project: ${leadData.projectType || 'Not specified'}\n• Budget: ${leadData.budget || 'Not specified'}\n\n**Next Steps:**\n1. We'll email you within 24 hours\n2. Schedule your free strategy call\n3. Receive custom proposal\n4. Start your project!`,
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
    setCurrentLeadStep(0)
    
    addBotMessage("Great! Let's get you a custom quote. I'll need a few details to understand your project better.")
    addBotMessage("First, what's your name?")
  }

  // Handle lead form input changes
  const handleLeadInputChange = (field: keyof LeadData, value: string) => {
    setLeadData(prev => ({ ...prev, [field]: value }))
  }

  // Handle next step in lead collection
  const handleNextLeadStep = () => {
    if (currentLeadStep === 0 && !leadData.name.trim()) {
      addBotMessage("Please provide your name to continue.")
      return
    }
    
    if (currentLeadStep === 1 && !leadData.email.trim()) {
      addBotMessage("Please provide your email to continue.")
      return
    }

    const steps = [
      { field: 'name', question: "What's your email address?" },
      { field: 'email', question: "What's your phone number? (optional)" },
      { field: 'phone', question: "Company name? (optional)" },
      { field: 'company', question: "What type of project are you considering?" },
      { field: 'projectType', question: "What's your estimated budget range?" },
      { field: 'budget', question: "What's your timeline for this project?" },
      { field: 'timeline', question: "Any specific requirements or features you'd like to mention?" }
    ]

    if (currentLeadStep < steps.length - 1) {
      setCurrentLeadStep(prev => prev + 1)
      addBotMessage(steps[currentLeadStep + 1].question)
    } else {
      // All steps completed, show summary
      addBotMessage("Thanks for providing all the details! Here's a summary:")
      
      const summary = `
• Name: ${leadData.name}
• Email: ${leadData.email}
${leadData.phone ? `• Phone: ${leadData.phone}` : ''}
${leadData.company ? `• Company: ${leadData.company}` : ''}
• Project Type: ${leadData.projectType || 'Not specified'}
• Budget: ${leadData.budget || 'Not specified'}
• Timeline: ${leadData.timeline || 'Not specified'}
${leadData.requirements ? `• Requirements: ${leadData.requirements}` : ''}

Ready to submit and get your custom quote?`
      
      const summaryMessage: Message = {
        id: Date.now().toString(),
        text: summary,
        sender: 'bot',
        timestamp: new Date(),
        type: 'lead_form'
      }
      
      setMessages(prev => [...prev, summaryMessage])
    }
  }

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
    
    if (!apiKey) {
      console.error('Gemini API key is not configured')
      return "Thanks for your interest. To get accurate pricing and project details, please share your contact information or email us directly at info@sagedevs.tech. Would you like me to help you schedule a strategy call?"
    }
    
    // Only use cache for very simple greetings
    const simpleGreetings = ['hi', 'hello', 'hey', 'hii', 'hello there', 'hey there']
    const userMessageLower = userMessage.toLowerCase().trim()
    
    // Return cached response only for very simple greetings
    if (simpleGreetings.includes(userMessageLower)) {
      const cachedResponses = [
        "Hello! I'm Sage AI Assistant from SageDevs. How can I help you with your project today?",
        "Hi there! I'm here to help you with SageDevs development services. What are you looking to build?",
        "Welcome! I'm Sage, your SageDevs AI consultant. Tell me about your project needs."
      ]
      return cachedResponses[Math.floor(Math.random() * cachedResponses.length)]
    }

    const systemPrompt = `You are Sage, the sales-focused AI assistant for SageDevs - a premium full-stack development agency. Your primary goals are:
1. Qualify leads and collect contact information
2. Understand project requirements
3. Guide towards booking a strategy call
4. Close sales by demonstrating value

ABOUT SAGEDEVS:
• Premium full-stack development agency with 8+ years experience
• Specializes in: Custom web apps, mobile apps, AI/ML solutions, e-commerce, cloud solutions
• Tech stack: React, Next.js, Node.js, Python, React Native, AWS, Azure
• 97% client retention rate, 30% faster delivery than industry average
• Free 30-minute strategy call available
• Email: info@sagedevs.tech
• Website: https://sagedevs.tech
• Pricing: https://sagedevs.tech/pricing

SALES PROCESS:
1. Qualify interest level and project scope
2. Collect contact information (name, email, phone)
3. Understand budget and timeline
4. Schedule strategy call
5. Provide custom proposal

PRICING APPROACH:
• Fixed Price: $5,000 - $50,000+ (well-defined projects)
• Time & Material: $50 - $150/hour (evolving projects)
• Dedicated Team: $4,000 - $12,000/month (long-term)
• Always mention these are estimates, custom quotes available

KEY SALES TACTICS:
• Ask qualifying questions
• Emphasize ROI and business value
• Share success stories and testimonials
• Create urgency (limited availability)
• Offer free strategy call
• Always aim to collect contact info

RESPONSE RULES:
1. NO EMOJIS - professional tone only
2. Always ask for contact information when discussing projects
3. Guide towards booking strategy call
4. Be specific about next steps
5. Create clear CTAs
6. Mention free consultation
7. Use persuasive language
8. Handle objections professionally
9. Focus on solutions, not just features
10. Always include email: info@sagedevs.tech

EXAMPLE RESPONSES:
"I understand you're looking to build a website. Based on similar projects, investments typically range from $8,000 to $25,000 depending on features. Could you share your email so I can send you a detailed breakdown?"
"That's an interesting project. We've helped several clients with similar solutions. To give you an accurate quote, may I have your name and email? I'll also schedule a free strategy call to discuss details."
"Great question about pricing. Our projects start at $5,000 for basic websites and can go up to $50,000+ for complex applications. Would you like me to prepare a custom quote? I'll need your contact information."

Now respond to: "${userMessage}"`

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
            maxOutputTokens: 200,
            temperature: 0.8,
            topP: 0.95,
            topK: 40,
          }
        })
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()
      
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid API response structure')
      }
      
      let responseText = data.candidates[0].content.parts[0].text || 
        "I'd be happy to help with that. To provide you with accurate information and a custom quote, could you share your email address? Our team will contact you within 24 hours with detailed information."

      // Remove any emojis
      responseText = responseText.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      
      // Ensure professional closing
      if (!responseText.includes('info@sagedevs.tech')) {
        responseText += "\n\nFor immediate assistance, email us at info@sagedevs.tech"
      }

      return responseText
    } catch (error) {
      console.error('Gemini API error:', error)
      return "Thanks for your interest. To get accurate pricing and project details, please share your contact information or email us directly at info@sagedevs.tech. Would you like me to help you schedule a strategy call?"
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
    
    // Check for lead collection mode
    if (isCollectingLead && showLeadForm) {
      // Handle lead form input
      const steps = ['name', 'email', 'phone', 'company', 'projectType', 'budget', 'timeline', 'requirements']
      if (currentLeadStep < steps.length) {
        handleLeadInputChange(steps[currentLeadStep] as keyof LeadData, inputText)
        handleNextLeadStep()
      }
      return
    }

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
      if ((lowerResponse.includes('email') || 
           lowerResponse.includes('contact') || 
           lowerResponse.includes('quote')) && 
          !isCollectingLead) {
        // Add CTA after a delay
        setTimeout(() => {
          const ctaMessage: Message = {
            id: (Date.now() + 2).toString(),
            text: "Would you like me to prepare a custom quote for you? I can collect a few details and have our team contact you within 24 hours.",
            sender: 'bot',
            timestamp: new Date(),
            type: 'cta'
          }
          setMessages(prev => [...prev, ctaMessage])
        }, 500)
      }
    } catch (error) {
      console.error('Error generating response:', error)
      addBotMessage("I apologize for the technical issue. Please email us directly at info@sagedevs.tech for immediate assistance, or would you like to schedule a call with our team?")
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
    // You can replace this with your actual Calendly link
    window.open('https://calendly.com/sagedevs', '_blank')
  }

  const handleViewPortfolio = () => {
    window.open('https://sagedevs.tech', '_blank')
  }

  const handleEmailUs = () => {
    window.location.href = 'mailto:info@sagedevs.tech'
  }

  // Quick CTAs for sales
  const quickCTAs = [
    { text: "Get Custom Quote", action: startLeadCollection, icon: <DollarSign className="w-3 h-3" /> },
    { text: "Schedule Call", action: handleScheduleCall, icon: <Calendar className="w-3 h-3" /> },
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
                <h4 className="font-bold text-sm">Get a Custom Quote</h4>
                <button
                  onClick={handleCloseNotification}
                  className="text-blue-200 hover:text-white text-xs"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-blue-100 mt-1">
                Share your project details and get a personalized quote within 24 hours.
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

  // Lead form steps
  const leadSteps = [
    { field: 'name', label: 'Full Name', placeholder: 'Enter your full name', required: true },
    { field: 'email', label: 'Email Address', placeholder: 'your@email.com', required: true },
    { field: 'phone', label: 'Phone Number', placeholder: '(123) 456-7890', required: false },
    { field: 'company', label: 'Company', placeholder: 'Your company name', required: false },
    { field: 'projectType', label: 'Project Type', placeholder: 'e.g., Website, Mobile App, SaaS', required: true },
    { field: 'budget', label: 'Estimated Budget', placeholder: 'e.g., $5k-$10k, $10k-$25k, $25k+', required: true },
    { field: 'timeline', label: 'Timeline', placeholder: 'e.g., 1-3 months, 3-6 months', required: true },
    { field: 'requirements', label: 'Requirements', placeholder: 'Brief description of your project', required: false }
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
              <span className="truncate">SageDevs Consultant • Online</span>
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
                              Schedule Call
                            </button>
                            <button
                              onClick={handleEmailUs}
                              className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              Email Us
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
                  {leadSteps.slice(0, currentLeadStep + 1).map((step, index) => (
                    <div key={step.field} className="space-y-1">
                      <label className="text-xs text-gray-300 font-medium">
                        {step.label} {step.required && <span className="text-red-400">*</span>}
                      </label>
                      <input
                        type={step.field === 'email' ? 'email' : step.field === 'phone' ? 'tel' : 'text'}
                        value={leadData[step.field as keyof LeadData] || ''}
                        onChange={(e) => handleLeadInputChange(step.field as keyof LeadData, e.target.value)}
                        placeholder={step.placeholder}
                        className="w-full px-3 py-2 bg-gray-900/70 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                        required={step.required}
                        disabled={index < currentLeadStep}
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
                      addBotMessage("No problem. Feel free to ask any other questions about our services.")
                    }}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                </div>
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
                
                {/* Success Rate Banner */}
                <div className="mt-4 p-3 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-800/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-green-400" />
                    <div className="flex-1">
                      <p className="text-xs text-green-300 font-semibold">97% Client Satisfaction</p>
                      <p className="text-xs text-green-400/80">Average project delivery: 30% faster</p>
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
                placeholder={isCollectingLead ? "Type your response..." : "Ask about pricing, projects, or get a quote..."}
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
              <Mail className="w-3 h-3 flex-shrink-0" />
              <span className="whitespace-nowrap">For immediate quotes:</span>
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