// src/app/Achievements/achievemententry.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface AchievementEntryProps {
  entryNumber: string;
  title: string;
  award: string;
  description: string;
  imageSrc?: string;
  projectLink?: string;
  trophyType: "first" | "second" | "third" | "special" | "participant" | string;
  techStackIcons?: string[];
}

const trophyImagePaths: Record<string, string> = {
  first: "/trophies/gold_trophy.webp",
  second: "/trophies/silver_trophy.webp",
  third: "/trophies/bronze_trophy.webp",
  special: "/trophies/special_trophy.webp",
  participant: "/trophies/participant_trophy.webp",
};

const AchievementEntry: React.FC<AchievementEntryProps> = ({
  entryNumber,
  title,
  award,
  description,
  imageSrc,
  projectLink,
  trophyType,
  techStackIcons,
}) => {
  const trophyImagePath = trophyImagePaths[trophyType];

  return (
    <div className="flex flex-col md:flex-row items-start w-full border-b border-white/[.15] py-6 md:py-10 pt-12 md:pt-16 last:border-b-0">
      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0 w-full md:w-auto text-center md:text-left">
        {entryNumber}
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        <div className="w-full md:w-1/3 aspect-video flex items-center justify-center rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0 bg-gray-800">
          {imageSrc ? (
            projectLink ? (
              <Link
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageSrc}
                  alt={`Project for ${title}`}
                  width={500}
                  height={300}
                  className="object-contain w-full h-full rounded-sm"
                />
              </Link>
            ) : (
              <Image
                src={imageSrc}
                alt={`Project for ${title}`}
                width={500}
                height={300}
                className="object-contain w-full h-full rounded-sm"
              />
            )
          ) : (
            <span className="text-gray-500 text-sm sm:text-base">
              Project Image
            </span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center text-white/80 text-sm mb-2">
            {trophyImagePath && (
              <Image
                src={trophyImagePath}
                alt={`${award} Trophy`}
                width={20}
                height={20}
                className="w-5 h-5 sm:w-6 sm:h-6 mr-1 object-contain"
              />
            )}
            <span>{award}</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
            {title}
          </h3>

          {techStackIcons && techStackIcons.length > 0 && (
            <div className="flex items-center space-x-2 mb-4">
              {techStackIcons.map((iconPath, idx) => (
                <Image
                  key={idx}
                  src={iconPath}
                  alt="Tech Stack Icon"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              ))}
            </div>
          )}

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AchievementEntry;
