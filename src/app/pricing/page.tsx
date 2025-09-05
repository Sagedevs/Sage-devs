"use client"; // Add this directive at the very top of the file

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Check,
  Code,
  Zap,
  Globe,
  Database,
  Smartphone,
  MessageCircle,
  Send,
  Sparkles, // For the 'Everything Included' plans
  Award, // For Guarantee
  Info, // For Notes
  Gift, // For "Everything Included" section
} from "lucide-react";

// Define interfaces for plan types
interface Plan {
  id: number;
  name: string;
  tagline: string;
  price: string; // Price can be a number or a string for "Custom Quote" or monthly
  originalPrice?: string; // Optional for showing discounts
  duration: string; // e.g., "One-Time", "monthly", "yearly"
  popular: boolean;
  technologies: string[];
  includes: string[];
  excludes: string[];
  bgGradient: string;
  borderGradient: string;
  bestFor: string; // New field for "Best For..."
  skuDetails?: string; // New field for SKU details on e-commerce plans
}

const HireMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    budget: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const plans: Plan[] = [
    {
      id: 1,
      name: "Starter Website",
      tagline: "Perfect for Business & Blogs",
      price: "$499",
      duration: "One-Time",
      popular: false,
      technologies: ["WordPress", "Elementor", "Responsive Design"],
      includes: [
        "Professional WordPress Setup",
        "Premium Theme Installation & Customization",
        "Up to 7 Pages (Home, About, Services, Blog, Contact, etc.)",
        "Contact Form with Email Notifications",
        "Basic SEO Optimization",
        "1 month post-launch support",
        "Google Analytics Integration",
        "Basic Security Setup",
        "Mobile Responsive Design",
        "Social Media Integration",
        "Basic Speed Optimization",
        "SSL Certificate Setup",
        "Fast Loading Speeds",
        "User-Friendly Admin Panel",
        "Scalable Architecture"
      ],
      excludes: [
        "E-commerce Store Setup",
        "Custom Plugin Development",
        "Advanced SEO Package",
        "Content Writing",
        "Logo Design",
        "Hosting & Domain (Client Provides)",
        "Ongoing Maintenance",
        "Third-party API Integrations",
      ],
      bgGradient: "from-blue-800/20 via-blue-900/20 to-indigo-900/20",
      borderGradient: "from-blue-600 to-indigo-700",
      bestFor: "Bloggers, small businesses, portfolios (up to 7 pages)",
    },
    {
      id: 2,
      name: "E-Commerce Store",
      tagline: "Complete E-commerce Solution",
      price: "$899",
      duration: "One-Time",
      popular: true,
      technologies: ["Shopify", "Liquid", "Payment Integration"],
      includes: [
        "Complete Shopify Store Setup",
        "Premium Theme Customization",
        "Up to 50 Products Upload (You Provide Content)",
        "Payment Gateway Setup (PayPal, Stripe, etc.)",
        "Shipping & Tax Configuration",
        "2 weeks post-launch support",
        "Order Management System",
        "Basic Product Page Optimization",
        "Inventory Management Setup",
        "Customer Account Dashboard",
        "Email Marketing Integration",
        "Mobile-Optimized Checkout",
        "Secure Transactions",
        "Basic Analytics Dashboard",
        "Integrates with Marketing Tools"
      ],
      excludes: [
        "Product Photography",
        "Product Descriptions Writing",
        "Advanced Marketing Apps (Paid)",
        "Custom Shopify App Development",
        "Dropshipping Setup",
        "Monthly Shopify Subscription (Client Pays)",
        "Ongoing Marketing Strategy",
        "Inventory Management beyond basic setup",
      ],
      bgGradient: "from-purple-800/20 via-indigo-900/20 to-blue-900/20",
      borderGradient: "from-purple-600 to-blue-700",
      bestFor: "Online sellers who need a full shop setup (up to 50 products)",
      skuDetails:
        "Need bulk products? Add $150 per 500 extra items. Over 2,000 SKUs? Ask about our Large-Scale E-Com plan (starts at $2,499)",
    },
    {
      id: 3,
      name: "Advanced Website",
      tagline: "Built from Scratch with React/Next.js",
      price: "$1,999",
      duration: "One-Time",
      popular: false,
      technologies: ["React", "Next.js", "Custom Design", "CMS"],
      includes: [
        "100% Custom Website Development",
        "Unique Design (No Templates)",
        "Lightning Fast Performance",
        "Advanced SEO Optimization",
        "Content Management System",
        "2 months post-launch support",
        "Custom Animations & Interactions",
        "Accessibility Compliance (WCAG 2.1 AA)",
        "Progressive Web App Features",
        "Advanced Form Builder",
        "Multi-language Support",
        "Performance Monitoring Dashboard",
        "Cross-Browser Compatibility",
        "Version Control with Git",
        "Dedicated Development Support"
      ],
      excludes: [
        "E-commerce Functionality (See Web App plan)",
        "Third-Party API Integrations",
        "Custom Graphics & Logo Design",
        "Content Writing Services",
        "Advanced Marketing Tools",
        "Server/Hosting Costs",
        "Mobile App Development (Separate Service)",
        "Ongoing feature development post-launch",
      ],
      bgGradient: "from-cyan-800/20 via-teal-900/20 to-blue-900/20",
      borderGradient: "from-cyan-600 to-teal-700",
      bestFor:
        "Startups & agencies needing a custom, high-performance site (React/Next.js)",
    },
    {
      id: 4,
      name: "Web Application",
      tagline: "Full-Stack Solutions for Complex Needs",
      price: "$3,499",
      duration: "One-Time",
      popular: false,
      technologies: ["React", "Node.js", "Database", "Authentication"],
      includes: [
        "Custom Web Application Development",
        "User Registration & Login System",
        "Database Design & Setup",
        "Admin Dashboard & Controls",
        "User Roles & Permissions",
        "3 months post-launch support",
        "Scalable Architecture Design",
        "API Integration (up to 2 external APIs)",
        "Real-time Data Functionality (Basic)",
        "Automated Testing (Unit & Integration)",
        "Containerization (Docker)",
        "Cloud Deployment (AWS/GCP/Azure)"
      ],
      excludes: [
        "Mobile App Development",
        "Advanced AI/ML Features",
        "Enterprise-level Integrations (custom quoted)",
        "Ongoing Monthly Maintenance",
        "Server Management Costs",
        "Large-scale Data Migration (custom quoted)",
        "Complex data analytics dashboards",
        "Third-party software licenses",
      ],
      bgGradient: "from-indigo-800/20 via-purple-900/20 to-blue-900/20",
      borderGradient: "from-indigo-600 to-purple-700",
      bestFor:
        "Businesses requiring complex, scalable web applications or large-scale e-commerce solutions",
    },
  ];

  const monthlyPlans: Plan[] = [
    {
      id: 5,
      name: "Website Maintenance",
      tagline: "Keep Your Site Running Smoothly",
      price: "$199/month",
      duration: "Monthly",
      popular: false,
      technologies: ["WordPress", "Shopify", "Updates", "Security"],
      includes: [
        "Weekly Website Backups",
        "Security Monitoring & Updates",
        "Plugin/Theme Updates",
        "Performance Optimization",
        "Content Updates (2 hours/month)",
        "Priority Support",
        "Uptime Monitoring",
        "Broken Link Checks",
        "Monthly Health Report",
        "Emergency Support (24-48 hr response)",
        "Database Optimization"
      ],
      excludes: [
        "New Feature Development",
        "Design Changes",
        "Content Writing",
        "SEO Campaign Management",
        "Social Media Management",
        "Hosting Costs",
        "Major platform upgrades (e.g., WP major version)",
        "Custom coding or debugging unrelated to updates",
      ],
      bgGradient: "from-green-800/20 via-emerald-900/20 to-teal-900/20",
      borderGradient: "from-green-600 to-emerald-700",
      bestFor:
        "Any site owner who wants weekly backups, updates & peace of mind",
    },
    {
      id: 6,
      name: "Growth Partnership",
      tagline: "Monthly Development & Marketing Support",
      price: "$899/month",
      duration: "Monthly",
      popular: true,
      technologies: ["Development", "SEO", "Analytics", "Optimization"],
      includes: [
        "20 Hours Monthly Development Time",
        "New Features & Functionality",
        "SEO Optimization & Monitoring",
        "Conversion Rate Optimization",
        "Google Ads Setup & Management",
        "Dedicated Account Manager",
        "Monthly Performance Reports",
        "A/B Testing & User Feedback Analysis",
        "Competitor Analysis",
        "Market Trend Research",
        "Bi-Weekly Progress Calls"
      ],
      excludes: [
        "Major Website Redesigns",
        "E-commerce Platform Migrations",
        "Paid Advertising Budget (Client Provides)",
        "Content Writing (Beyond Updates)",
        "Social Media Content Creation",
        "Video Production",
        "External software subscriptions",
        "CRM integration beyond basic setup",
      ],
      bgGradient: "from-blue-800/20 via-indigo-900/20 to-purple-900/20",
      borderGradient: "from-blue-600 to-indigo-700",
      bestFor: "Businesses ready to scale features, SEO, ads & analytics",
    },
    {
      id: 7,
      name: "Enterprise Partnership",
      tagline: "Complete Digital Solution for Growing Businesses",
      price: "$2,499/month",
      duration: "Monthly",
      popular: false,
      technologies: ["Full-Stack", "Marketing", "Analytics", "Strategy"],
      includes: [
        "60 Hours Monthly Development Time",
        "Dedicated Account Manager",
        "Custom Feature Development",
        "Advanced SEO & Marketing Campaigns",
        "Conversion Optimization Programs",
        "24/7 Priority Support",
        "Business Intelligence Dashboards",
        "Continuous Integration/Deployment (CI/CD)",
        "Quarterly Strategy & Planning Sessions",
        "Custom Reporting & Insights",
        "Dedicated QA Engineer",
        "Scalability & Load Testing"
      ],
      excludes: [
        "Separate Mobile App Development",
        "Physical Marketing Materials",
        "Legal & Compliance Consulting",
        "Advertising Spend (Client Budget)",
        "Enterprise Software Licenses",
        "On-site Staff Training",
        "Large-scale system architecture overhaul",
        "Content creation beyond strategic needs",
      ],
      bgGradient: "from-purple-800/20 via-blue-900/20 to-black/20",
      borderGradient: "from-purple-600 to-blue-700",
      bestFor:
        "Larger organizations seeking full-stack dev, BI dashboards & 24/7 support",
    },
  ];

  const yearlyPlans: Plan[] = [
    {
      id: 8,
      name: "Yearly Maintenance",
      tagline: "Keep Your Site Running Smoothly Annually",
      price: "$1,999/year",
      duration: "Yearly",
      popular: false,
      technologies: ["WordPress", "Shopify", "Updates", "Security"],
      includes: [
        "Weekly Website Backups",
        "Security Monitoring & Updates",
        "Plugin/Theme Updates",
        "Performance Optimization",
        "Content Updates (2 hours/month, billed yearly)",
        "Priority Support",
        "Annual Performance Report",
        "Proactive Vulnerability Scans",
        "Emergency Fixes (up to 2 per year)",
        "Annual Site Audit",
        "Dedicated Technical Support",
        "Discount on new development"
      ],
      excludes: [
        "New Feature Development",
        "Design Changes",
        "Content Writing",
        "SEO Campaign Management",
        "Social Media Management",
        "Hosting Costs",
        "Major platform upgrades (e.g., WP major version)",
        "Custom coding or debugging unrelated to updates",
      ],
      bgGradient: "from-green-800/20 via-emerald-900/20 to-teal-900/20",
      borderGradient: "from-green-600 to-emerald-700",
      bestFor: "Cost-effective annual peace of mind for site owners",
    },
    {
      id: 9,
      name: "Yearly Growth Partnership",
      tagline: "Annual Development & Marketing Support",
      price: "$8,999/year",
      duration: "Yearly",
      popular: true,
      technologies: ["Development", "SEO", "Analytics", "Optimization"],
      includes: [
        "20 Hours Monthly Development Time (billed yearly)",
        "New Features & Functionality",
        "SEO Optimization & Monitoring",
        "Conversion Rate Optimization",
        "Google Ads Setup & Management",
        "Dedicated Account Manager",
        "Quarterly Strategy Sessions",
        "Annual Marketing Plan Development",
        "Advanced A/B Testing & Personalization",
        "Priority Access to New Features",
        "Annual Competitive Landscape Report",
        "Strategic Consultation Calls"
      ],
      excludes: [
        "Major Website Redesigns",
        "E-commerce Platform Migrations",
        "Paid Advertising Budget (Client Provides)",
        "Content Writing (Beyond Updates)",
        "Social Media Content Creation",
        "Video Production",
        "External software subscriptions",
        "CRM integration beyond basic setup",
      ],
      bgGradient: "from-blue-800/20 via-indigo-900/20 to-purple-900/20",
      borderGradient: "from-blue-600 to-indigo-700",
      bestFor:
        "Businesses ready to commit to annual growth with dedicated support",
    },
  ];

  const allPlans = [...plans, ...monthlyPlans, ...yearlyPlans];

  const everythingIncludedPlan: Plan = {
    id: 99,
    name: "Everything Included",
    tagline: "The Ultimate Digital Success Package",
    price: "Custom Quote",
    duration: "Monthly / Yearly",
    popular: true,
    technologies: ["All Technologies", "Custom"],
    includes: [
      "Dedicated Full-Stack Team (Development & Design)",
      "Advanced SEO & Digital Marketing (Paid Ads, Social Media)",
      "Content Creation (Writing, Graphics, Video)",
      "Ongoing Maintenance & Security",
      "Priority 24/7 Support & Consulting",
      "Business Intelligence Dashboards",
      "Scalable Cloud Hosting Solutions",
      "Mobile App Development (iOS/Android)",
      "Custom AI/ML Integrations",
      "Comprehensive Analytics & Reporting",
      "Dedicated Project Manager",
      "Unlimited Revisions & Optimizations",
      "Brand Strategy & Identity Development",
      "User Experience (UX) Research & Design",
      "Conversion Rate Optimization (CRO) Funnels",
      "Advanced Cyber Security Measures",
      "Legal & Compliance Consultation (Basic)",
      "API Development & Integration (Unlimited)",
      "Personalized Training & Workshops",
      "Future-Proof Scalability Planning"
    ],
    excludes: [
      "Third-party software licenses (e.g., specific CRMs, ERPs)",
      "Massive data migrations from legacy systems (custom quoted)",
      "Physical product manufacturing or logistics",
      "Travel expenses for in-person meetings (if required)",
    ],
    bgGradient: "from-red-800/20 via-orange-900/20 to-yellow-900/20",
    borderGradient: "from-red-600 to-yellow-700",
    bestFor:
      "Large enterprises and ambitious startups seeking an all-in-one partner for explosive growth and digital dominance.",
  };

  const openEmail = () => {
    try {
      const subject = encodeURIComponent("Consultation Booking Request");
      const body = encodeURIComponent(
        "Hi! I would like to book a consultation for my project."
      );
      const mailtoLink = `mailto:abdul.ahadt732@gmail.com?subject=${subject}&body=${body}`;

      const emailWindow = window.open(mailtoLink, "_blank");

      if (!emailWindow || emailWindow.closed || typeof emailWindow.closed == "undefined") {
        alert("Your browser might be blocking pop-ups. Please allow pop-ups for this site or email me directly at: abdul.ahadt732@gmail.com");
      } else {
        console.log("Email client opened successfully");
      }
    } catch (error) {
      console.error("Error opening email:", error);
      alert("Please email me directly at: abdul.ahadt732@gmail.com");
    }
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.projectDetails ||
      !formData.budget
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    try {
      const subject = encodeURIComponent(
        `Project Inquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}
` +
          `Email: ${formData.email}
` +
          `Budget: ${formData.budget}
` +
          `Selected Date: ${selectedDate || "Not selected"}
` +
          `Selected Time: ${selectedTime || "Not selected"}

` +
          `Project Details:
${formData.projectDetails}`
      );

      const mailtoLink = `mailto:abdul.ahadt732@gmail.com?subject=${subject}&body=${body}`;

      const emailWindow = window.open(mailtoLink, "_blank");

      if (
        !emailWindow ||
        emailWindow.closed ||
        typeof emailWindow.closed == "undefined"
      ) {
        alert("Your browser might be blocking pop-ups. Please allow pop-ups for this site or email me directly at: abdul.ahadt732@gmail.com with your project details.");
      } else {
        alert(
          "Thank you! Your email client should open with your message. I'll get back to you within 24 hours."
        );
      }

      setFormData({ name: "", email: "", projectDetails: "", budget: "" });
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error. Please email me directly at abdul.ahadt732@gmail.com with your project details."
      );
    }
  };

  const openWhatsApp = () => {
    try {
      const message = encodeURIComponent(
        "Hi! I'm interested in your development services."
      );
      const whatsappLink = `https://wa.me/+923259684493?text=${message}`;

      const whatsappWindow = window.open(whatsappLink, "_blank");

      if (
        !whatsappWindow ||
        whatsappWindow.closed ||
        typeof whatsappWindow.closed == "undefined"
      ) {
        alert("Your browser might be blocking pop-ups. Please allow pop-ups for this site or contact me on WhatsApp: +923259684493");
      } else {
        console.log("WhatsApp opened successfully");
      }
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      alert("Please contact me on WhatsApp: +923259684493");
    }
  };
  const generateCalendarDays = () => {
    if (!isClient) return Array(8).fill(null);

    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const scrollToPlans = () => {
    setTimeout(() => {
      const plansElement = document.getElementById("plans");
      if (plansElement) {
        plansElement.scrollIntoView({ behavior: "smooth", block: "start" });
        console.log("Scrolled to plans section");
      } else {
        console.warn("Plans element not found - using fallback scroll");
        window.scrollTo({ top: 800, behavior: "smooth" });
      }
    }, 100);
  };

  const scrollToComparePlans = () => {
    setTimeout(() => {
      const comparePlansElement = document.getElementById("compare-plans");
      if (comparePlansElement) {
        comparePlansElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        console.log("Scrolled to compare plans section");
      } else {
        console.warn("Compare plans element not found - using fallback scroll");
        window.scrollTo({ top: 2000, behavior: "smooth" });
      }
    }, 100);
  };
 const handleButtonClick = (action: () => void, buttonName: string) => {
  return (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Button clicked: ${buttonName}`);
    
    // Prevent any default behavior
    event.preventDefault();
    event.stopPropagation();
    
    // Add visual feedback
    const button = event.currentTarget;
    if (button) {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "";
      }, 150);
    }
    
    try {
      action();
    } catch (error) {
      console.error(`Error executing ${buttonName}:`, error);
      alert(`Error with ${buttonName}. Please try again or contact directly.`);
    }
  };
};
  const bestCards = [
    plans.find((p) => p.id === 1), // Starter Website
    plans.find((p) => p.id === 2), // E-Commerce Store
    plans.find((p) => p.id === 3), // Advanced Website
  ].filter(Boolean) as Plan[]; // Filter out undefined and assert type

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Background - Beautiful gradient with animated elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        {/* Animated gradient orbs - Enhanced */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-700/40 to-purple-700/40 rounded-full animate-pulse-slowest transition-all duration-2000" style={{ filter: 'blur(60px)' }}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-700/40 to-cyan-700/40 rounded-full animate-pulse-slowest animation-delay-3s transition-all duration-2000" style={{ filter: 'blur(60px)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-700/30 to-indigo-700/30 rounded-full animate-pulse-slowest animation-delay-6s transition-all duration-2000" style={{ filter: 'blur(70px)' }}></div>
        </div>

        {/* Floating particles - More Subtle */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-ping-subtle animation-delay-1s"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-white/30 rounded-full animate-pulse-subtle animation-delay-3s"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-white/30 rounded-full animate-ping-subtle animation-delay-5s"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse-subtle animation-delay-2s"></div>
        </div>

        {/* New keyframes for slower, more subtle animations */}
        <style jsx>{`
          @keyframes ping-subtle {
            0% { transform: scale(0.8); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.2; }
            100% { transform: scale(0.8); opacity: 0.5; }
          }
          @keyframes pulse-subtle {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.1); opacity: 0.2; }
          }
          @keyframes pulse-slowest {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
        `}</style>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 px-5 sm:px-10 md:px-20 text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6 sm:mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4 sm:mb-6 shadow-lg backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Available for New Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent leading-tight">
            Hire a Full Stack
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed px-4">
            Bringing Your Digital Vision to Life with Cutting-Edge Web
            Solutions.
            <br />
            <span className="text-purple-400 font-medium">
              Specializing in Dynamic Websites, E-commerce Platforms, and Custom
              Web Applications using:
            </span>
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-400 font-medium mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            WordPress • Shopify • React • Next.js • Node.js
          </p>

          <p className="text-xl sm:text-2xl text-white font-semibold mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm rounded-full py-2 px-6 max-w-lg mx-auto border border-white/20 shadow-lg">
            Ready to transform your ideas into reality?
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16 px-4">
            <button
              onClick={handleButtonClick(scrollToPlans, "Explore Services")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Services
            </button>

            <button
              onClick={handleButtonClick(openWhatsApp, "WhatsApp")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-white shadow-lg"
            >
              <MessageCircle className="w-5 h-5 inline mr-2" />
              Get a Free Quote
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            {[
              {
                name: "WordPress",
                icon: <Globe className="w-6 sm:w-8 h-6 sm:h-8" />,
              },
              {
                name: "React",
                icon: <Code className="w-6 sm:w-8 h-6 sm:h-8" />,
              },
              {
                name: "Next.js",
                icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8" />,
              },
              {
                name: "Python",
                icon: <Code className="w-6 sm:w-8 h-6 sm:h-8" />, // Using Code icon for Python
              },
              {
                name: "Node.js",
                icon: <Database className="w-6 sm:w-8 h-6 sm:h-8" />,
              },
              {
                name: "Shopify",
                icon: <Smartphone className="w-6 sm:w-8 h-6 sm:h-8" />,
              },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group-hover:border-purple-400/50 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <div className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    {tech.icon}
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 mt-2 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - "Best Cards" */}
      <section
        id="plans"
        className="relative py-16 sm:py-20 px-5 sm:px-10 md:px-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
              🚀 Ready to Launch or Grow Your Online Presence? Pick the Perfect
              Plan Below!
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              From quick launches to scalable e-commerce platforms, find the
              perfect plan to elevate your online presence.
            </p>
          </div>

          {/* One-Time Setup Plans */}
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center justify-center">
              <Code className="w-6 h-6 mr-3 text-cyan-400" />
              <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                🔧 One-Time Setup Plans
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {bestCards.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-gradient-to-br ${
                    plan.bgGradient
                  } ${
                    plan.popular
                      ? "border-purple-500 shadow-purple-500/30 shadow-xl"
                      : "border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                      {plan.name}
                    </h3>
                    <p className="text-purple-300 text-sm mb-2">
                      Best For: {plan.bestFor}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {plan.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {plan.skuDetails && (
                    <p className="text-sm text-gray-400 text-center mb-4 italic">
                      {plan.skuDetails}
                    </p>
                  )}

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wide flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-400" />{" "}
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {plan.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleButtonClick(openEmail, "Book Consultation")}
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Retainer Plans */}
          <div className="text-center mt-16 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center justify-center">
              <Sparkles className="w-6 h-6 mr-3 text-yellow-300" />
              <span className="bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                💼 Monthly Retainer Plans
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {monthlyPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-gradient-to-br ${
                    plan.bgGradient
                  } ${
                    plan.popular
                      ? "border-blue-500 shadow-blue-500/30 shadow-xl"
                      : "border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                      {plan.name}
                    </h3>
                    <p className="text-blue-300 text-sm mb-2">
                      Best For: {plan.bestFor}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-400" />{" "}
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {plan.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleButtonClick(openEmail, "Get This Package")}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Get This Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Yearly Retainer Plans */}
          <div className="text-center mt-16 mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-white flex items-center justify-center">
              <Calendar className="w-6 h-6 mr-3 text-emerald-400" />
              <span className="bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                🗓️ Yearly Retainer Plans
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-10 max-w-4xl mx-auto">
              {yearlyPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-gradient-to-br ${
                    plan.bgGradient
                  } ${
                    plan.popular
                      ? "border-emerald-500 shadow-emerald-500/30 shadow-xl"
                      : "border-gray-700 hover:border-emerald-500 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Best Value
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
                      {plan.name}
                    </h3>
                    <p className="text-emerald-300 text-sm mb-2">
                      Best For: {plan.bestFor}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-400" />{" "}
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {plan.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleButtonClick(openEmail, "Get This Package")}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Get This Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compare Plans Section */}
          <div id="compare-plans" className="mt-20">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                🔍 Compare Plans
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                A detailed side-by-side comparison of features for each plan.
              </p>
            </div>

            <div className="overflow-x-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl p-4">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr className="bg-gray-800/50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[150px]">
                      Feature / Plan
                    </th>
                    {allPlans.map((plan) => (
                      <th
                        key={plan.id}
                        className="px-4 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[120px]"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Duration
                    </td>
                    {allPlans.map((plan) => (
                      <td
                        key={plan.id}
                        className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center"
                      >
                        {plan.duration}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Base Price
                    </td>
                    {allPlans.map((plan) => (
                      <td
                        key={plan.id}
                        className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center"
                      >
                        {plan.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Pages / Products / Sites
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      7 pages
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      50 products
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Unlimited pages
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Custom
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      1 site
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Custom
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Custom
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      1 site
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Custom
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Custom Design
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Premium theme
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Premium theme
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      CMS / Blog
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Payment Gateway Setup
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> (opt.)
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Dev Hours (per month)
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      N/A
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      N/A
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      N/A
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      N/A
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      N/A
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      20 hrs
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      60 hrs
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      N/A
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      20 hrs
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      SEO & Analytics
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Basic
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      Basic
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Security Monitoring
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Content Updates
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> (2 hrs/mo)
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> (2 hrs/mo)
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Support Level
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      1 mo
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      2 wks
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      2 mo
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      3 mo
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> Priority
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> Same-day
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> 24/7
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> Priority
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" /> Same-day
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Dedicated Account Manager
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Annual Performance Report / Quarterly Strategy Sessions
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Google Analytics Integration
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Uptime Monitoring
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      Custom Animations & Interactions
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-green-400 text-center">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 text-center">
                      –
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* How to Choose Section */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Info className="w-7 h-7 text-blue-400" /> How to Choose the
                Right Plan
              </h3>
              <ul className="space-y-4 text-gray-300 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">1.</span>
                  <span>
                    <span className="font-semibold text-white">
                      Decide your goal:
                    </span>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Build a simple site →{" "}
                        <span className="font-semibold text-white">
                          Starter Website
                        </span>
                      </li>
                      <li>
                        Sell products online →{" "}
                        <span className="font-semibold text-white">
                          E-Commerce Store
                        </span>{" "}
                        (bulk SKU add-ons available)
                      </li>
                      <li>
                        Need a cutting-edge, custom web app →{" "}
                        <span className="font-semibold text-white">
                          Advanced Website
                        </span>{" "}
                        or{" "}
                        <span className="font-semibold text-white">
                          Web Application
                        </span>
                      </li>
                      <li>
                        Want ongoing peace of mind →{" "}
                        <span className="font-semibold text-white">
                          Website Maintenance (Monthly/Yearly)
                        </span>
                      </li>
                      <li>
                        Grow traffic & features monthly/yearly →{" "}
                        <span className="font-semibold text-white">
                          Growth Partnership (Monthly/Yearly)
                        </span>
                      </li>
                      <li>
                        Full digital services + strategy →{" "}
                        <span className="font-semibold text-white">
                          Enterprise Partnership
                        </span>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">2.</span>
                  <span>
                    <span className="font-semibold text-white">
                      Compare features side-by-side
                    </span>{" "}
                    (see table above).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold mt-1">3.</span>
                  <span>
                    <span className="font-semibold text-white">
                      Still not sure?
                    </span>
                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        👉 Click{" "}
                        <button
                          onClick={handleButtonClick(scrollToComparePlans, "Compare Plans")}
                          className="text-blue-400 underline hover:no-underline font-semibold"
                        >
                          Compare Plans
                        </button>{" "}
                        to scroll back up.
                      </li>
                      <li>
                        👉 Or{" "}
                        <button
                          onClick={handleButtonClick(openEmail, "Schedule Consultation")}
                          className="text-blue-400 underline hover:no-underline font-semibold"
                        >
                          Schedule a Free 15-minute Consultation
                        </button>
                        —we&apos;ll recommend your perfect fit.
                      </li>
                    </ul>
                  </span>
                </li>
              </ul>
              <p className="text-center text-white font-semibold text-xl mt-8">
                Ready to get started? 🔹{" "}
                <button
                  onClick={handleButtonClick(scrollToPlans, "Select Your Plan")}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Select Your Plan 🔹{" "}
                </button>
                <button
                  onClick={handleButtonClick(scrollToComparePlans, "Compare Plans")}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Compare Plans  🔹{" "}
                </button>
                <button
                  onClick={handleButtonClick(openEmail, "Book a Call")}
                  className="text-blue-400 hover:text-blue-300"
                >
                  Book a Call 
                </button>
              </p>
              <p className="text-center text-white font-semibold text-lg mt-4">
                Let&apos;s build something amazing!
              </p>
            </div>
          </div>

          {/* Guarantee and Note Section */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Award className="w-7 h-7 text-purple-400" /> Our Guarantee
                </h3>
                <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-white">
                        Quality Assurance:
                      </span>{" "}
                      We guarantee high-quality, bug-free code and responsive
                      designs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-white">
                        Timely Delivery:
                      </span>{" "}
                      Projects are completed within agreed-upon timelines, with
                      regular updates.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-white">
                        Client Satisfaction:
                      </span>{" "}
                      Your satisfaction is our priority. We offer revisions to
                      ensure your vision is realized.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex-1 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Info className="w-7 h-7 text-blue-400" /> Important Notes
                </h3>
                <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>
                      <span className="font-semibold text-white">
                        Custom Quotes:
                      </span>{" "}
                      For highly complex or unique projects, please select
                      &quot;Enterprise Solutions&quot; or contact us for a
                      custom quote.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>
                      <span className="font-semibold text-white">
                        Content Responsibility:
                      </span>{" "}
                      Clients are responsible for providing all necessary
                      content (text, images, logos) unless content creation is
                      explicitly part of the agreed scope.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>
                      <span className="font-semibold text-white">
                        Hosting & Domains:
                      </span>{" "}
                      Prices generally do not include hosting or domain
                      registration fees, unless specified otherwise in custom
                      agreements.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Included Section */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-10 md:px-20 text-center">
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className={`relative p-8 sm:p-10 rounded-3xl border transition-all duration-300 transform shadow-2xl backdrop-blur-sm bg-gradient-to-br ${everythingIncludedPlan.bgGradient} border-white/20`}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-red-600 to-yellow-600 text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg flex items-center gap-2">
                <Gift className="w-6 h-6" />
                The Ultimate Package
              </span>
            </div>

            <h2 className="mt-8 text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-300 to-orange-300 bg-clip-text text-transparent leading-tight">
              {everythingIncludedPlan.name}
            </h2>
            <p className="text-xl sm:text-2xl text-orange-300 mb-6 font-medium">
              {everythingIncludedPlan.tagline}
            </p>

            <div className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
              {everythingIncludedPlan.price}
            </div>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              {everythingIncludedPlan.bestFor}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left mb-10">
              {everythingIncludedPlan.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleButtonClick(openEmail, "Get Custom Quote")}
              className="px-10 py-4 bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto"
            >
              <Send className="w-5 h-5 mr-3" />
              Get a Custom Quote for this Plan
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-10 md:px-20">
        {/* Section Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900/50 to-blue-900/30"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Let&apos;s Discuss Your Project
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 shadow-sm backdrop-blur-sm text-white placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 shadow-sm backdrop-blur-sm text-white placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDetails: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none shadow-sm backdrop-blur-sm text-white placeholder-gray-400"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 shadow-sm backdrop-blur-sm text-white"
                  required
                >
                  <option value="" className="bg-gray-900">
                    Select budget range
                  </option>
                  <option value="under-500" className="bg-gray-900">
                    Under $500
                  </option>
                  <option value="500-1000" className="bg-gray-900">
                    $500 - $1,000
                  </option>
                  <option value="1000-5000" className="bg-gray-900">
                    $1,000 - $5,000
                  </option>
                  <option value="5000-10000" className="bg-gray-900">
                    $5,000 - $10,000
                  </option>
                  <option value="10000+" className="bg-gray-900">
                    $10,000+
                  </option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={handleButtonClick(openWhatsApp, "WhatsApp")}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Consultation Calendar */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent">
              Schedule a Consultation
            </h2>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5 text-purple-400" />
                Available Dates
              </h3>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {generateCalendarDays()
                  .slice(0, 8)
                  .map((date, index) => {
                    if (!date)
                      return (
                        <div
                          key={index}
                          className="p-3 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className="h-4 bg-white/10 rounded mb-1"></div>
                          <div className="h-3 bg-white/10 rounded"></div>
                        </div>
                      );

                    return (
                      <button
                        key={index}
                        onClick={() =>
                          setSelectedDate(date.toISOString().split("T")[0])
                        }
                        className={`p-3 rounded-lg text-sm transition-all duration-200 ${
                          selectedDate === date.toISOString().split("T")[0]
                            ? "bg-purple-600 text-white shadow-lg"
                            : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                        }`}
                      >
                        <div className="font-medium">
                          {date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                        <div
                          className={`text-xs ${
                            selectedDate === date.toISOString().split("T")[0]
                              ? "text-purple-200"
                              : "text-gray-400"
                          }`}
                        >
                          {date.toLocaleDateString("en-US", {
                            weekday: "short",
                          })}
                        </div>
                      </button>
                    );
                  })}
              </div>

              {selectedDate && (
                <>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
                    <Clock className="w-5 h-5 text-blue-400" />
                    Available Times for{" "}
                    {new Date(selectedDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg text-xs transition-all duration-200 ${
                          selectedTime === time
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {selectedDate && selectedTime && (
                <div className="mt-6 p-4 bg-purple-900/30 border border-purple-600/50 rounded-lg text-white text-center shadow-inner">
                  <p className="text-sm">
                    You&apos;ve selected a consultation for{" "}
                    <span className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      at {selectedTime}.
                    </span>
                  </p>
                  <p className="text-xs text-gray-300 mt-1">
                    Please use the form to send your project details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireMePage;
