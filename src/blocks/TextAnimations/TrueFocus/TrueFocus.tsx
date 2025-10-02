import { useEffect, useRef, useState, useMemo, useCallback } from "react";

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
  blurAmount = 1.2,
  borderColor = "cyan",
  animationDuration = 0.3,
  pauseBetweenAnimations = 0.8,
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

  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Optimized position calculation with RAF
  const updateFocusRect = useCallback(() => {
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
  }, [currentIndex]);

  // Auto loop with cleanup
  useEffect(() => {
    if (words.length > 1 && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [animationDuration, pauseBetweenAnimations, words.length, isPaused]);

  // Position focus rect with RAF for smooth updates
  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    animationFrameRef.current = requestAnimationFrame(() => {
      updateFocusRect();
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateFocusRect]);

  // Memoized border style
  const borderStyle = useMemo(
    () => ({
      borderColor: borderColor,
      filter: `drop-shadow(0 0 4px ${borderColor})`,
    }),
    [borderColor]
  );

  // CSS transition instead of Framer Motion spring (same visual effect)
  const focusRectStyle: React.CSSProperties = useMemo(
    () => ({
      transform: `translate(${focusRect.x}px, ${focusRect.y}px)`,
      width: `${focusRect.width}px`,
      height: `${focusRect.height}px`,
      opacity: currentIndex >= 0 ? 1 : 0,
      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease-out, height 0.4s ease-out, opacity 0.3s ease',
    }),
    [focusRect.x, focusRect.y, focusRect.width, focusRect.height, currentIndex]
  );

  return (
    <div
      className="relative flex flex-col sm:flex-row flex-wrap gap-y-2 sm:gap-x-4 sm:gap-y-0 justify-center items-center"
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={`word-${index}`}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="relative text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 transition-all duration-300"
            style={{
              opacity: isActive ? 1 : 0.5,
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              willChange: isActive ? 'opacity, filter' : 'auto',
            }}
          >
            {index > 0 && (
              <span className="absolute -left-3 text-gray-500">•</span>
            )}
            {word}
          </span>
        );
      })}

      {/* Focus rectangle - Pure CSS transitions (visually identical to Framer Motion) */}
      <div
        className="absolute top-0 left-0 pointer-events-none box-border"
        style={focusRectStyle}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -top-2 -left-2 border-r-0 border-b-0"
          style={borderStyle}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -top-2 -right-2 border-l-0 border-b-0"
          style={borderStyle}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -bottom-2 -left-2 border-r-0 border-t-0"
          style={borderStyle}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] -bottom-2 -right-2 border-l-0 border-t-0"
          style={borderStyle}
        />
      </div>
    </div>
  );
};

export default TrueFocus;