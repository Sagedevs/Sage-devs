"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

// Custom icons since lucide-react is not available
const ChevronLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 18-6-6 6-6"
    />
  </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 18 6-6-6-6"
    />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const GoogleLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Google">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    content: "Abdul's work exceeded all expectations...",
    image: "https://images.unsplash.com/photo-1599566150163-c39ddc769460?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 2,
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateNow",
    content: "Working with Abdul was a game-changer...",
    image: "https://images.unsplash.com/photo-1547425260-76bc4ea63090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab",
    content:
      "The website Abdul created for us is not just beautiful, it's incredibly functional. Our conversion rates improved by 250% within the first month!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 4,
    author: "David Park",
    role: "Founder",
    company: "StartupVision",
    content:
      "Abdul's ability to understand our vision and translate it into a stunning digital experience is remarkable. The project was delivered on time and exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-e69fe254fe58?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 5,
    author: "Lisa Thompson",
    role: "Product Manager",
    company: "DigitalFlow",
    content:
      "The attention to user experience and modern design principles Abdul brought to our project was outstanding. Our users love the new interface!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 6,
    author: "James Wilson",
    role: "VP Engineering",
    company: "CodeCraft",
    content:
      "Abdul's technical skills are top-notch. He delivered a complex web application that performs flawlessly. Highly recommend his services!",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070acf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 7,
    author: "Maria Garcia",
    role: "Creative Director",
    company: "DesignStudio",
    content:
      "The perfect blend of creativity and functionality. Abdul transformed our ideas into a visual masterpiece that our clients absolutely love.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29329?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 8,
    author: "Robert Kim",
    role: "Business Owner",
    company: "EcomSuccess",
    content:
      "Our e-commerce platform built by Abdul has been a huge success. Sales increased by 180% and customer satisfaction is at an all-time high.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 9,
    author: "Amanda Foster",
    role: "Operations Manager",
    company: "StreamlineOps",
    content:
      "The workflow automation Abdul implemented saved us countless hours. His solutions are elegant, efficient, and incredibly user-friendly.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d877340b52?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 10,
    author: "Thomas Anderson",
    role: "Tech Lead",
    company: "FutureTech",
    content:
      "Abdul's code quality is exceptional. Clean, well-documented, and scalable. The architecture he designed will serve us for years to come.",
    image: "https://images.unsplash.com/photo-1542155799-a35ec157a977?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 11,
    author: "Jennifer Lee",
    role: "UX Designer",
    company: "UserFirst",
    content:
      "Collaborating with Abdul was seamless. He understood our design vision perfectly and brought it to life with incredible attention to detail.",
    image: "https://images.unsplash.com/photo-1596815418187-5785f7a01d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 12,
    author: "Alex Rivera",
    role: "Startup Founder",
    company: "NextGen Solutions",
    content:
      "Abdul helped us launch our MVP in record time. His expertise in modern web technologies and agile development practices is impressive.",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 13,
    author: "Rachel Murphy",
    role: "Digital Marketing Specialist",
    company: "BrandBoost",
    content:
      "The website Abdul created for our agency is not only stunning but also highly optimized for conversions. Our client acquisition has doubled!",
    image: "https://images.unsplash.com/photo-1549068106-b024baf5062d?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 14,
    author: "Kevin Brooks",
    role: "Project Manager",
    company: "AgileWorks",
    content:
      "Professional, reliable, and incredibly talented. Abdul delivered our complex project on time and within budget. Will definitely work with him again!",
    image: "https://images.unsplash.com/photo-1503443207922-abf9ffcd697e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 15,
    author: "Sophia Martinez",
    role: "Brand Manager",
    company: "CreativeLabs",
    content:
      "Abdul's creative approach to our branding website was phenomenal. The site now perfectly reflects our brand identity and has increased our leads by 400%.",
    image: "https://images.unsplash.com/photo-1520813795325-de9f73602523?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 16,
    author: "Daniel Wang",
    role: "Software Architect",
    company: "TechPioneer",
    content:
      "The scalable architecture Abdul designed for our platform is brilliant. It handles millions of users effortlessly and the performance is outstanding.",
    image: "https://images.unsplash.com/photo-1560250097-0b7596859599?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 17,
    author: "Isabella Brown",
    role: "E-commerce Director",
    company: "ShopSmart",
    content:
      "Our online store transformation by Abdul was incredible. The new design increased our sales by 320% and customer retention by 85%.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 18,
    author: "Nathan Cooper",
    role: "Startup CTO",
    company: "InnovateTech",
    content:
      "Abdul's full-stack expertise saved our startup months of development time. His solutions are modern, secure, and perfectly aligned with our business goals.",
    image: "https://images.unsplash.com/photo-1596815418187-5785f7a01d4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 19,
    author: "Grace Taylor",
    role: "Digital Strategy Lead",
    company: "GrowthHackers",
    content:
      "The analytics dashboard Abdul built for us is a game-changer. Real-time insights have helped us optimize our campaigns and increase ROI by 275%.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d877340b52?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
  },
  {
    id: 20,
    author: "Ryan Mitchell",
    role: "Product Director",
    company: "CloudVision",
    content:
      "Abdul's cloud infrastructure setup is flawless. Our app now handles 10x more traffic with zero downtime. His DevOps skills are world-class.",
    image: "https://images.unsplash.com/photo-1542155799-a35ec157a977?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 21,
    author: "Victoria Adams",
    role: "Innovation Manager",
    company: "TechForward",
    content:
      "Working with Abdul was transformative. His AI-powered features revolutionized our user experience and positioned us as industry leaders.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 22,
    author: "Christopher Lee",
    role: "Enterprise Architect",
    company: "GlobalTech",
    content:
      "Abdul's enterprise-grade solution exceeded all expectations. The system he built processes millions of transactions daily with remarkable efficiency.",
    image: "https://images.unsplash.com/photo-1507003211169-e69fe254fe58?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 transition-all duration-300 ${
            i < rating
              ? "text-blue-400 fill-blue-400 drop-shadow-sm"
              : "text-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

const getVisibleTestimonials = (currentIndex: number, totalItems: number) => {
  const indices = [];
  for (let i = 0; i < 3; i++) {
    let index = (currentIndex + i) % totalItems;
    if (index < 0) index += totalItems;
    indices.push(index);
  }
  return indices;
};

interface Particle {
  left: string;
  top: string;
  delay: string;
  duration: string;
}

const PauseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 6h2v12H8V6zm6 0h2v12h-2V6z"
    />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 6v12l10-6L8 6z"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      className="h-full bg-black/30 backdrop-blur-2xl border border-blue-500/30 rounded-3xl p-4 md:p-6 hover:bg-blue-900/20 hover:border-blue-400/50 transition-all duration-700 flex flex-col"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={testimonial.rating} />
        <GoogleLogo className="w-5 h-5 opacity-60" />
      </div>
      <blockquote className="text-gray-100 mb-4 md:mb-6 text-sm md:text-base line-clamp-4 flex-grow">
        &quot;{testimonial.content}&quot;
      </blockquote>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="rounded-full object-cover"
            sizes="(max-width: 768px) 32px, 40px"
          />
        </div>
        <div className="min-w-0">
          <span className="font-bold text-white text-sm md:text-base truncate">
            {testimonial.author}
          </span>
          <p className="text-blue-300 text-xs md:text-sm truncate">
            {testimonial.role}
          </p>
          <p className="text-gray-400 text-xs truncate">
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function EnhancedTestimonialSlider() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    setParticles(
      [...Array(15)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`,
      }))
    );
  }, []);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return (prevIndex - 1 + testimonials.length) % testimonials.length;
      }
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 2000);

    return () => clearInterval(interval);
  }, [paginate, isAutoPlay]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay((prev) => !prev);
  }, []);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden w-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-blue-600/10"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-blue-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gray-500/15 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-bounce"></div>

        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-full mx-auto px-6 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4 md:mb-6">
            What Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto mb-10 md:mb-20">
          {/* --- TOP NAVIGATION FOR ALL SCREENS --- */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => paginate(-1)}
              className="group bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full p-4 hover:bg-blue-600/30 hover:border-blue-400/60 transition-all duration-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-200" />
            </button>
            <button
              onClick={toggleAutoPlay}
              className={`group bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full p-4 hover:bg-blue-600/30 hover:border-blue-400/60 transition-all duration-500 ${
                !isAutoPlay ? "bg-blue-600/30" : ""
              }`}
              aria-label={isAutoPlay ? "Pause autoplay" : "Resume autoplay"}
            >
              {isAutoPlay ? (
                <PauseIcon className="w-6 h-6 text-white group-hover:text-purple-200" />
              ) : (
                <PlayIcon className="w-6 h-6 text-white group-hover:text-purple-200" />
              )}
            </button>
            <button
              onClick={() => paginate(1)}
              className="group bg-black/40 backdrop-blur-md border border-blue-500/40 rounded-full p-4 hover:bg-blue-600/30 hover:border-blue-400/60 transition-all duration-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-200" />
            </button>
          </div>

          {/* --- ENHANCED GOOGLE TRUST BADGE --- */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-xl border border-blue-500/40 rounded-3xl px-0 py-4 sm:px-6 sm:py-6 flex flex-col sm:flex-row items-center gap-6 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="relative">
                  <GoogleLogo className="w-12 h-12 drop-shadow-lg" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white font-bold text-xl">Google</span>
                    <span className="text-gray-300 font-medium text-lg">Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-semibold text-sm">
                      ✓ 100% Verified & Trusted
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent sm:block hidden"></div>
              
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="text-center sm:text-right">
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm font-medium">Based on 50+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- TESTIMONIALS GRID --- */}
          <div className="overflow-hidden mx-auto">
            <AnimatePresence mode="wait" initial={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {getVisibleTestimonials(currentIndex, testimonials.length).map(
                  (index) => (
                    <motion.div
                      key={`testimonial-${index}`}
                      custom={direction}
                      initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <TestimonialCard testimonial={testimonials[index]} />
                    </motion.div>
                  )
                )}
              </div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-20 pt-10 md:pt-20 border-t border-blue-500/30"
        >
          <AnimatedCounter value={50} suffix="+" label="Happy Clients" />
          <AnimatedCounter value={4.9} label="Average Rating" decimal />
          <AnimatedCounter value={100} suffix="%" label="Project Success" />
          <AnimatedCounter value={350} suffix="%" label="ROI Increase" />
        </motion.div>
      </div>
    </section>
  );
}