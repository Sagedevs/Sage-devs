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
    image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    rating: 5,
  },
  {
    id: 2,
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateNow",
    content: "Working with Abdul was a game-changer...",
    image: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    rating: 5,
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab",
    content:
      "The website Abdul created for us is not just beautiful, it's incredibly functional. Our conversion rates improved by 250% within the first month!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 4,
    author: "David Park",
    role: "Founder",
    company: "StartupVision",
    content:
      "Abdul's ability to understand our vision and translate it into a stunning digital experience is remarkable. The project was delivered on time and exceeded our expectations.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 5,
    author: "Lisa Thompson",
    role: "Product Manager",
    company: "DigitalFlow",
    content:
      "The attention to user experience and modern design principles Abdul brought to our project was outstanding. Our users love the new interface!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    id: 6,
    author: "James Wilson",
    role: "VP Engineering",
    company: "CodeCraft",
    content:
      "Abdul's technical skills are top-notch. He delivered a complex web application that performs flawlessly. Highly recommend his services!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 7,
    author: "Maria Garcia",
    role: "Creative Director",
    company: "DesignStudio",
    content:
      "The perfect blend of creativity and functionality. Abdul transformed our ideas into a visual masterpiece that our clients absolutely love.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 8,
    author: "Robert Kim",
    role: "Business Owner",
    company: "EcomSuccess",
    content:
      "Our e-commerce platform built by Abdul has been a huge success. Sales increased by 180% and customer satisfaction is at an all-time high.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 9,
    author: "Amanda Foster",
    role: "Operations Manager",
    company: "StreamlineOps",
    content:
      "The workflow automation Abdul implemented saved us countless hours. His solutions are elegant, efficient, and incredibly user-friendly.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    id: 10,
    author: "Thomas Anderson",
    role: "Tech Lead",
    company: "FutureTech",
    content:
      "Abdul's code quality is exceptional. Clean, well-documented, and scalable. The architecture he designed will serve us for years to come.",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 11,
    author: "Jennifer Lee",
    role: "UX Designer",
    company: "UserFirst",
    content:
      "Collaborating with Abdul was seamless. He understood our design vision perfectly and brought it to life with incredible attention to detail.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    id: 12,
    author: "Alex Rivera",
    role: "Startup Founder",
    company: "NextGen Solutions",
    content:
      "Abdul helped us launch our MVP in record time. His expertise in modern web technologies and agile development practices is impressive.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 13,
    author: "Rachel Murphy",
    role: "Digital Marketing Specialist",
    company: "BrandBoost",
    content:
      "The website Abdul created for our agency is not only stunning but also highly optimized for conversions. Our client acquisition has doubled!",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 14,
    author: "Kevin Brooks",
    role: "Project Manager",
    company: "AgileWorks",
    content:
      "Professional, reliable, and incredibly talented. Abdul delivered our complex project on time and within budget. Will definitely work with him again!",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    id: 15,
    author: "Sophia Martinez",
    role: "Brand Manager",
    company: "CreativeLabs",
    content:
      "Abdul's creative approach to our branding website was phenomenal. The site now perfectly reflects our brand identity and has increased our leads by 400%.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 16,
    author: "Daniel Wang",
    role: "Software Architect",
    company: "TechPioneer",
    content:
      "The scalable architecture Abdul designed for our platform is brilliant. It handles millions of users effortlessly and the performance is outstanding.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 17,
    author: "Isabella Brown",
    role: "E-commerce Director",
    company: "ShopSmart",
    content:
      "Our online store transformation by Abdul was incredible. The new design increased our sales by 320% and customer retention by 85%.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 18,
    author: "Nathan Cooper",
    role: "Startup CTO",
    company: "InnovateTech",
    content:
      "Abdul's full-stack expertise saved our startup months of development time. His solutions are modern, secure, and perfectly aligned with our business goals.",
    image:
      "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 19,
    author: "Grace Taylor",
    role: "Digital Strategy Lead",
    company: "GrowthHackers",
    content:
      "The analytics dashboard Abdul built for us is a game-changer. Real-time insights have helped us optimize our campaigns and increase ROI by 275%.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    rating: 4,
  },
  {
    id: 20,
    author: "Ryan Mitchell",
    role: "Product Director",
    company: "CloudVision",
    content:
      "Abdul's cloud infrastructure setup is flawless. Our app now handles 10x more traffic with zero downtime. His DevOps skills are world-class.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 21,
    author: "Victoria Adams",
    role: "Innovation Manager",
    company: "TechForward",
    content:
      "Working with Abdul was transformative. His AI-powered features revolutionized our user experience and positioned us as industry leaders.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 22,
    author: "Christopher Lee",
    role: "Enterprise Architect",
    company: "GlobalTech",
    content:
      "Abdul's enterprise-grade solution exceeded all expectations. The system he built processes millions of transactions daily with remarkable efficiency.",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 transition-all duration-300 ${
            i < rating
              ? "text-purple-400 fill-purple-400 drop-shadow-sm"
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
      className="h-full bg-black/30 backdrop-blur-2xl border border-purple-500/30 rounded-3xl p-4 md:p-6 hover:bg-purple-900/20 hover:border-purple-400/50 transition-all duration-700 flex flex-col"
      whileHover={{ scale: 1.02 }}
    >
      <StarRating rating={testimonial.rating} />
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
          <p className="text-purple-300 text-xs md:text-sm truncate">
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
    <section className="py-12 md:py-24 relative overflow-hidden w-screen ml-[calc(-50vw+50%)]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-purple-600/10"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-purple-500/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gray-500/15 rounded-full blur-2xl animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-bounce"></div>

        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
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
              className="group bg-black/40 backdrop-blur-md border border-purple-500/40 rounded-full p-4 hover:bg-purple-600/30 hover:border-purple-400/60 transition-all duration-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-200" />
            </button>
            <button
              onClick={toggleAutoPlay}
              className={`group bg-black/40 backdrop-blur-md border border-purple-500/40 rounded-full p-4 hover:bg-purple-600/30 hover:border-purple-400/60 transition-all duration-500 ${
                !isAutoPlay ? "bg-purple-600/30" : ""
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
              className="group bg-black/40 backdrop-blur-md border border-purple-500/40 rounded-full p-4 hover:bg-purple-600/30 hover:border-purple-400/60 transition-all duration-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-200" />
            </button>
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-20 pt-10 md:pt-20 border-t border-purple-500/30"
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