// src/app/Achievements/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
// Removed Threads import since it's now in layout
import AchievementEntry, { AchievementEntryProps } from "./achievemententry";

const handleAnimationComplete = () => {
  console.log("Achievements page animation completed!");
};

const entries: AchievementEntryProps[] = [
  {
    entryNumber: "01",
    title: "Procrash",
    award: "3rd Place",
    description: "Designed for procrastinators ...",
    imageSrc: "/solutions/procrash.webp",
    projectLink: "https://procrash-hdps5h.flutterflow.app/",
    trophyType: "third",
    techStackIcons: ["/techstack/flutterflow.svg", "/techstack/gemini.svg"],
  },
  {
    entryNumber: "02",
    title: "Talento",
    award: "Special Award",
    description: "Talento is a mobile app ...",
    imageSrc: "/solutions/talento.webp",
    projectLink: "https://talento-xi.vercel.app/",
    trophyType: "special",
    techStackIcons: ["/techstack/javascript.svg", "/techstack/css.svg"],
  },
  {
    entryNumber: "03",
    title: "Project Phoenix",
    award: "1st Place",
    description:
      "A revolutionary web application that transforms user experience through innovative design and cutting-edge technology ...",
    imageSrc: "/solutions/neosolutions.webp",
    projectLink: "https://phoenix-project.vercel.app/",
    trophyType: "first",
    techStackIcons: [
      "/techstack/react.svg",
      "/techstack/nextjs.svg",
      "/techstack/ts.svg",
    ],
  },
  {
    entryNumber: "04",
    title: "EcoTrack",
    award: "Participant",
    description:
      "An environmental monitoring system that helps track and reduce carbon footprint with real-time analytics ...",
    imageSrc: "/solutions/kachingko.webp",
    projectLink: "https://ecotrack-app.vercel.app/",
    trophyType: "participant",
    techStackIcons: ["/techstack/react.svg", "/techstack/nextjs.svg"],
  },
  {
    entryNumber: "05",
    title: "CodeMentor",
    award: "Participant",
    description:
      "A peer-to-peer learning platform connecting developers worldwide for knowledge sharing and collaboration ...",
    imageSrc: "/solutions/ecarga.webp",
    projectLink: "https://codementor-platform.vercel.app/",
    trophyType: "participant",
    techStackIcons: [
      "/techstack/python.svg",
      "/techstack/openai.svg",
      "/techstack/rasa.svg",
    ],
  },
];

export default function AchievementsPage() {
  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 animate-pulse"></div>

        {/* Moving Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/25 to-red-500/25 rounded-full blur-3xl animate-bounce-slow"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rotate-45 animate-spin-slow opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rotate-45 animate-bounce-slow opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/6 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin-slow opacity-45"></div>
      </div>

      <main className="flex-grow flex flex-col items-center relative pt-20 z-10">
        {/* Removed Threads component since background is now in layout */}

        {/* Hero Section with Enhanced Background */}
        <div className="flex w-full items-center justify-center p-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
          <BlurText
            text="Achievements"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center text-white relative z-10"
          />
        </div>

        {/* Gallery Section with Glow Effect */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl"></div>
          <RollingGallery autoplay pauseOnHover={false} />
        </div>

        {/* Main Content with Glass Effect */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 my-20 relative">
          {/* Glass morphism background for content */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-sm border border-white/10"></div>

          <div className="relative z-10">
            <div className="hidden md:block mb-10">
              <FallingText
                text="Besides being a developer, I'm someone who deeply values curiosity, continuous growth, and creative collaboration. I enjoy learning new technologies, solving real-world problems through code, and turning complex ideas into functional and elegant solutions. I believe great products are built through empathy, iteration, and teamwork. ..."
                highlightWords={[
                  "developer",
                  "creative",
                  "teamwork",
                  "complex",
                ]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="2rem"
                mouseConstraintStiffness={0.9}
              />
            </div>
            <div className="md:hidden mb-10">
              <FallingText
                text="Besides being a developer, I'm someone who deeply values curiosity, continuous growth, and creative collaboration. I enjoy learning new technologies, solving real-world problems through code, and turning complex ideas into functional and elegant solutions. I believe great products are built through empathy, iteration, and teamwork. ..."
                highlightWords={[
                  "developer",
                  "creative",
                  "teamwork",
                  "complex",
                ]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="1rem"
                mouseConstraintStiffness={0.9}
              />
            </div>

            {/* Achievement Entries with Individual Backgrounds */}
            <div className="mt-20 md:mt-40 space-y-12">
              {entries.map((entry, idx) => (
                <div key={idx} className="relative group">
                  {/* Individual entry background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl backdrop-blur-sm border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative z-10">
                    <AchievementEntry {...entry} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-20">
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-transparent rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12">
              Achievement Stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    5
                  </div>
                  <p className="text-white/80 mt-1 md:mt-2 font-medium text-xs sm:text-sm">
                    Total Projects
                  </p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                    2
                  </div>
                  <p className="text-white/80 mt-1 md:mt-2 font-medium text-xs sm:text-sm">
                    Awards Won
                  </p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
                    14
                  </div>
                  <p className="text-white/80 mt-1 md:mt-2 font-medium text-xs sm:text-sm">
                    Technologies
                  </p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl md:rounded-2xl p-4 md:p-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                    3
                  </div>
                  <p className="text-white/80 mt-1 md:mt-2 font-medium text-xs sm:text-sm">
                    Competitions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Technologies Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-20">
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-transparent rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12">
              Technologies Mastered
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-6">
              {[
                {
                  name: "React",
                  icon: "⚛️",
                  color: "from-blue-400 to-cyan-400",
                },
                { name: "Next.js", icon: "▲", color: "from-gray-400 to-white" },
                {
                  name: "TypeScript",
                  icon: "TS",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "Flutter",
                  icon: "🐦",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  name: "Python",
                  icon: "🐍",
                  color: "from-yellow-400 to-green-500",
                },
                {
                  name: "JavaScript",
                  icon: "JS",
                  color: "from-yellow-400 to-yellow-500",
                },
                {
                  name: "CSS",
                  icon: "🎨",
                  color: "from-pink-400 to-purple-500",
                },
                {
                  name: "WordPress",
                  icon: "📝",
                  color: "from-blue-600 to-blue-700",
                },
                {
                  name: "Shopify",
                  icon: "🛒",
                  color: "from-green-500 to-green-600",
                },
                {
                  name: "Node.js",
                  icon: "🟢",
                  color: "from-green-400 to-green-500",
                },
                {
                  name: "MongoDB",
                  icon: "🍃",
                  color: "from-green-600 to-green-700",
                },
                {
                  name: "Firebase",
                  icon: "🔥",
                  color: "from-orange-400 to-red-500",
                },
                {
                  name: "Docker",
                  icon: "🐳",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  name: "AI/ML",
                  icon: "🤖",
                  color: "from-purple-400 to-pink-500",
                },
              ].map((tech, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl p-3 sm:p-4 border border-white/10 group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                        {tech.icon}
                      </div>
                      <div
                        className={`text-xs sm:text-sm font-bold text-transparent bg-gradient-to-r ${tech.color} bg-clip-text`}
                      >
                        {tech.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-20">
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-transparent rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12">
              Achievement Timeline
            </h2>
            <div className="relative">
              {/* Timeline line - Hidden on very small screens, visible from sm up */}
              <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500"></div>

              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    year: "2024",
                    title: "Project Phoenix - 1st Place",
                    description: "Revolutionary web application",
                    color: "from-yellow-400 to-orange-500",
                  },
                  {
                    year: "2024",
                    title: "Talento - Special Award",
                    description: "Mobile app for talent discovery",
                    color: "from-purple-400 to-pink-500",
                  },
                  {
                    year: "2023",
                    title: "Procrash - 3rd Place",
                    description: "App designed for procrastinators",
                    color: "from-orange-400 to-red-500",
                  },
                  {
                    year: "2023",
                    title: "Started Competitive Programming",
                    description: "Began participating in hackathons",
                    color: "from-blue-400 to-cyan-500",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-start sm:ml-16">
                    {/* Timeline dot - Hidden on very small screens */}
                    <div
                      className={`hidden sm:block absolute -left-20 w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-gray-900`}
                    ></div>
                    <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-transform duration-300 w-full">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <span
                          className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-black self-start`}
                        >
                          {item.year}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recognition & Certificates Section */}
        <div className="w-full max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-20">
          <div className="relative bg-gradient-to-br from-white/5 via-white/10 to-transparent rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12">
              Recognition &amp; Certificates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Best Innovation Award",
                  issuer: "TechHack 2024",
                  icon: "🏆",
                },
                {
                  title: "Excellence in UI/UX",
                  issuer: "Design Competition",
                  icon: "🎨",
                },
                {
                  title: "Full Stack Developer",
                  issuer: "Certification Board",
                  icon: "💻",
                },
                {
                  title: "AI/ML Specialist",
                  issuer: "Tech Institute",
                  icon: "🤖",
                },
                {
                  title: "Open Source Contributor",
                  issuer: "GitHub",
                  icon: "⭐",
                },
                {
                  title: "Community Leader",
                  issuer: "Developer Community",
                  icon: "👥",
                },
              ].map((cert, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl p-4 sm:p-6 border border-white/10 group-hover:scale-105 group-hover:border-white/30 transition-all duration-300">
                    <div className="text-3xl sm:text-4xl text-center mb-3 sm:mb-4">
                      {cert.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white text-center mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-white/60 text-center text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 md:py-20">
          <div className="relative bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/20 p-6 sm:p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-emerald-500/5 rounded-2xl md:rounded-3xl animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                These achievements represent just the beginning of my journey.
                I&apos;m always looking for new challenges and opportunities to
                create innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/portfolios">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl md:rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base">
                    View My Projects
                  </button>
                </Link>
                <Link href="/Contact">
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white/30 hover:border-white/60 rounded-xl md:rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Section */}
        <div className="w-full h-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-blue-900/10 to-transparent"></div>
          {/* Fixed: Use a single via color or create multiple div elements for complex gradients */}
          <div className="absolute bottom-0 left-0 w-full h-1">
            <div className="w-full h-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-50"></div>
            <div className="absolute top-0 w-full h-full bg-gradient-to-r from-transparent via-teal-500/50 to-emerald-500 opacity-30"></div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(90deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </>
  );
}
