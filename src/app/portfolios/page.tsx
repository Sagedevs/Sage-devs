"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import AnimatedCounter from "@/components/AnimatedCounter"; // Import AnimatedCounter

// Additional projects specific to portfolio page
const portfolioSpecificProjects = [
  {
    id: 106, // Changed from 1 to 106
    number: "07",
    title: "GDSC PLM",
    description: "WordPress Developer",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/js.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg"
    ],
    imageSrc: "/proj/projectTwo.webp", // Corrected from "/proj/gdsc.webp"
    link: "https://www.gdsc-plm.org/",
    categories: ["Portfolio & Community"],
  },
  {
    id: 107, // Changed from 2 to 107
    number: "08", // Corrected from "02"
    title: "The Ikigai",
    description: "WordPress Developer",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/js.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg"
    ],
    imageSrc: "/proj/ikigai.webp",
    link: "https://theikigai.co/",
    categories: ["WordPress"],
  },
  {
    id: 108, // Changed from 3 to 108
    number: "09", // Corrected from "03"
    title: "Jamachi Plastic Surgery",
    description: "WordPress Developer",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/js.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg"
    ],
    imageSrc: "/proj/jamichi.webp",
    link: "https://jamachi.com.au/",
    categories: ["WordPress"],
  },
  {
    id: 109, // Changed from 4 to 109
    number: "10", // Corrected from "04"
    title: "EMS Innovations",
    description: "WordPress Developer",
    techstack: [
      "/techstack/html.svg",
      "/techstack/css.svg",
      "/techstack/js.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg"
    ],
    imageSrc: "/proj/ems.webp",
    link: "https://emsinnovations.com.au/",
    categories: ["WordPress"],
  },
  {
    id: 101,
    number: "11", // Corrected from "07"
    title: "Dark‑Mode React Admin Dashboard",
    description: "Lead Front‑End Developer & DevOps Engineer",
    techstack: [
      "/techstack/react.svg",
      "/techstack/nextjs.svg",
      "/techstack/ts.svg",
    ],
    imageSrc: "/proj/reactdashboard.webp",
    link: "https://abdulahad-2.github.io/admin-dashboard/#/dashboard",
    categories: ["Portfolio & Community"],
  },
  {
    id: 102,
    number: "12", // Corrected from "08"
    title: "Responsive Personal Branding Website Design & Development",
    description: "Lead Web Designer & Front‑End Developer",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/igor.webp",
    link: "https://igorvainshtein.com/",
    categories: ["WordPress", "Portfolio & Community"],
  },
  {
    id: 103,
    number: "13", // Corrected from "09"
    title: "Responsive B2B Consulting Website Design & Development",
    description: " Lead Web Designer & Front‑End Developer",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/priotize.webp",
    link: "https://priorityib.com.au/",
    categories: ["WordPress"],
  },
  {
    id: 104,
    number: "14", // Corrected from "10"
    title: "Nonprofit Advocacy Website Design & Development",
    description: " Lead Web Designer & WordPress Developer",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/australia.webp",
    link: "https://aidn.org.au/",
    categories: ["WordPress"],
  },
  {
    id: 105,
    number: "15", // Corrected from "11"
    title: "The Mehfil – Modern Catering & Events Website",
    description: "The Mehfil – Modern Catering & Events Website",
    techstack: [
      "/techstack/javascript.svg",
      "/techstack/css.svg",
      "/techstack/html.svg",
      "/techstack/wordpress.svg",
      "/techstack/php.svg",
    ],
    imageSrc: "/proj/mehfil.webp",
    link: "https://themehfil.ca/",
    categories: ["eCommerce", "WordPress"],
  },
];

// Enhanced skills array with more technologies
const skills = [
  "React & Next.js",
  "TypeScript",
  "Shopify",
  "Node.js",
  "WordPress",
  "UI/UX Design",
  "DevOps",
  "JavaScript",
  "CSS3",
  "HTML5",
  "PHP",
  "Responsive Design",
  "MongoDB",
  "MySQL",
  "Express.js",
  "REST APIs",
  "Git & GitHub",
  "Figma",
  "Adobe Creative Suite",
  "Tailwind CSS",
  "Bootstrap",
  "SASS/SCSS",
  "Python",
  "Firebase",
  "Vercel",
  "SEO Optimization",
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed", decimal: false },
  { value: 3, suffix: "+", label: "Years Experience", decimal: false },
  { value: 100, suffix: "%", label: "Client Satisfaction", decimal: false }, // Assuming 100 is the number
  { value: 24, suffix: "/7", label: "Support Available", decimal: false }, // Assuming 24 is the number
];

// Define the line type
interface Line {
  id: number;
  left: number;
  top: number;
  width: number;
  rotation: number;
  delay: number;
}

// Floating lines component
const FloatingLines = () => {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines = [];
      for (let i = 0; i < 8; i++) {
        newLines.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          width: Math.random() * 200 + 100,
          rotation: Math.random() * 360,
          delay: Math.random() * 2,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-0.5 bg-gradient-to-r from-purple-500/20 via-purple-400/30 to-transparent animate-pulse"
          style={{
            left: `${line.left}%`,
            top: `${line.top}%`,
            width: `${line.width}px`,
            transform: `rotate(${line.rotation}deg)`,
            animationDelay: `${line.delay}s`,
            animationDuration: "4s",
          }}
        />
      ))}
    </div>
  );
};

export default function PortfoliosPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  // Combine original projects with portfolio-specific ones
  const allProjects = [...projects, ...portfolioSpecificProjects];

  const filters = [
    "All",
    "eCommerce",
    "WordPress",
    "Web Apps",
    "Portfolio & Community",
  ];

  const filteredProjects = activeFilter === "All"
    ? allProjects
    : allProjects.filter(project => project.categories && project.categories.includes(activeFilter));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle "Start a Project" button click (Email)
  const handleStartProject = () => {
    const subject = encodeURIComponent("Project Collaboration Inquiry");
    const body = encodeURIComponent(`Hi Abdul Ahad,

I'm interested in working with you on a new project. Here are some initial details:

Project Type: [Web Development/UI-UX Design/Full-Stack/Other]
Timeline: [When do you need this completed?]
Budget Range: [Your budget range]
Project Description: [Brief description of what you need]

I'd love to schedule a call to discuss this further.

Best regards,
[Your Name]
[Your Company/Organization]
[Your Phone Number]`);

    window.open(
      `mailto:abdul.ahadt732@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  // Function to handle WhatsApp contact
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi Abdul Ahad! 👋 I'm interested in discussing a new project with you. Could we schedule a time to talk about my requirements?"
    );
    // Replace with your actual WhatsApp number (include country code without + sign)
    window.open(`https://wa.me/923259684493?text=${message}`, "_blank");
  };

  // Function to handle "View Resume" button click
  const handleViewResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a");
    link.href = "/resume/myResume.docx"; // Corrected filename
    link.download = "Abdul_Ahad_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(147,51,234,0.1),transparent)]" />
      </div>

      {/* Floating purple lines */}
      <FloatingLines />

      <div className="relative z-10 text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section
            className={`mb-16 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                My Portfolio
              </h1>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences through innovative solutions,
              cutting-edge technologies, and pixel-perfect designs that bring
              ideas to life.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 sm:p-6 text-center transform transition-all duration-500 hover:scale-105 hover:border-purple-400/40 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    decimal={stat.decimal}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-6xl mx-auto">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/40 to-purple-800/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:border-purple-400/60 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Filter Section */}
          <section className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-purple-200">
              Explore My Work
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                      : "bg-purple-900/20 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-800/30 hover:text-white hover:shadow-md hover:shadow-purple-500/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {filteredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <ProjectCard index={idx} project={project} />
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center py-16">
            <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Ready to bring your vision to life? Let&apos;s collaborate and
                create something extraordinary that exceeds expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleStartProject}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 hover:from-purple-500 hover:to-purple-400 transform active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    📧 Start a Project
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </button>

                <button
                  onClick={handleWhatsAppContact}
                  className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full font-semibold text-white shadow-lg shadow-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 hover:from-green-500 hover:to-green-400 transform active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    💬 WhatsApp Me
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      📱
                    </span>
                  </span>
                </button>

                <button
                  onClick={handleViewResume}
                  className="group px-8 py-4 border border-purple-500/50 rounded-full font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-900/20 hover:scale-105 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 transform active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    📄 View Resume
                    <span className="group-hover:rotate-12 transition-transform duration-300">
                      ⬇
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
