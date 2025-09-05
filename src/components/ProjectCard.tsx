// src/components/ProjectCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: {
    id: number;
    number: string;
    title: string;
    description: string;
    techstack: string[]; // should be like ['techstack/react.png']
    imageSrc: string; // e.g. 'projects/pictoncivil.png'
    link: string;
    categories?: string[]; // Add this line
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = React.memo(
  ({ project, index }) => {
    const pattern = index % 4;

    let numberPositionClasses = "";
    let contentAlignmentClasses = "";
    let imageOrderClass = "";
    let textOrderClass = "";

    switch (pattern) {
      case 0:
        numberPositionClasses = "top-4 left-4";
        contentAlignmentClasses = "text-right items-end";
        textOrderClass = "order-1";
        imageOrderClass = "order-2";
        break;
      case 1:
        numberPositionClasses = "bottom-4 left-4";
        contentAlignmentClasses = "text-right items-end";
        textOrderClass = "order-2";
        imageOrderClass = "order-1";
        break;
      case 2:
        numberPositionClasses = "top-4 right-4";
        contentAlignmentClasses = "text-left items-start";
        textOrderClass = "order-1";
        imageOrderClass = "order-2";
        break;
      case 3:
        numberPositionClasses = "bottom-4 right-4";
        contentAlignmentClasses = "text-left items-start";
        textOrderClass = "order-2";
        imageOrderClass = "order-1";
        break;
    }

    const handleLinkClick = () => {
      if (project.link) window.open(project.link, "_blank");
    };

    // Normalize paths (for public folder access)
    const normalizeSrc = (src: string): string =>
      src.startsWith("/") || src.startsWith("http") ? src : `/${src}`;

    return (
      <motion.div
        className="relative flex flex-col justify-between py-6 px-8 md:px-16 m-5 md:m-0 border border-white border-opacity-20 bg-transparent overflow-hidden h-full group" // Added 'group' class
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div
          className={`absolute md:text-6xl text-3xl p-6 font-bold text-white text-opacity-10 ${numberPositionClasses}`}
        >
          {project.number}
        </div>

        <div className="flex flex-col justify-between h-full">
          {/* Text Content */}
          <div
            className={`flex flex-col ${contentAlignmentClasses} ${textOrderClass} z-10 p-6`}
          >
            <h3
              className="md:text-xl text-lg font-semibold text-white mb-2 cursor-pointer transition-colors duration-300 
                         bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent
                         group-hover:from-blue-400 group-hover:to-purple-300 group-hover:brightness-125"
              onClick={handleLinkClick}
            >
              {project.title}
            </h3>
            <p className="md:text-sm text-xs text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, idx) => (
                <Image
                  key={idx}
                  src={normalizeSrc(tech)}
                  alt={`Tech ${idx + 1}`}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          {/* Project Image */}
          <motion.div
            className={`relative w-full flex-grow rounded-xl overflow-hidden z-10 cursor-pointer ${imageOrderClass}`}
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={handleLinkClick}
          >
            <Image
              src={normalizeSrc(project.imageSrc)}
              alt={`${project.title} preview`}
              width={800}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
