import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
  sentence?: string;
  services?: string[];
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  services,
  blurAmount = 2,
  borderColor = "cyan",
  animationDuration = 0.3, // faster
  pauseBetweenAnimations = 0.8, // shorter pause
}) => {
  const words = useMemo(() => {
    if (services && services.length > 0) {
      return services;
    }
    if (sentence) {
      return sentence.split(" • ");
    }
    return ["True", "Focus"];
  }, [services, sentence]);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const [isPaused, setIsPaused] = useState(false); // 👈 hover pause state

  // Auto loop animation
  useEffect(() => {
    if (words.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [animationDuration, pauseBetweenAnimations, words.length, isPaused]);

  // Focus rectangle position
  useEffect(() => {
    if (
      currentIndex < 0 ||
      !wordRefs.current[currentIndex] ||
      !containerRef.current
    )
      return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words]);

  return (
    <div
      className="
        relative 
        flex flex-col sm:flex-row flex-wrap 
        gap-y-2 sm:gap-x-4 sm:gap-y-0 
        justify-center items-center
      "
      ref={containerRef}
      // 👉 Only desktop hover pauses
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="relative text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 transition-all duration-300"
            style={{
              opacity: isActive ? 1 : 0.4,
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
            }}
          >
            {/* Dot separator only on desktop/tablet */}
            {index > 0 && (
              <span className="hidden sm:inline absolute -left-3 text-gray-600">
                •
              </span>
            )}
            {word}
          </span>
        );
      })}

      {/* Focus rectangle */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
        }}
        style={{
          "--border-color": borderColor,
        } as React.CSSProperties}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -top-2 -left-2 border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -top-2 -right-2 border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -bottom-2 -left-2 border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -bottom-2 -right-2 border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
