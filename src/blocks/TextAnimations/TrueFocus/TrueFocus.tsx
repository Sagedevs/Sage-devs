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
  const [isMounted, setIsMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Detect mobile device
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || 'ontouchstart' in window;
  }, []);

  // Optimized position calculation - debounced for mobile
  const updateFocusRect = useCallback(() => {
    if (!isMounted || currentIndex < 0 || !wordRefs.current[currentIndex] || !containerRef.current) {
      return;
    }

    try {
      const parentRect = containerRef.current.getBoundingClientRect();
      const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      });
    } catch (error) {
      console.error('Error updating focus rect:', error);
    }
  }, [currentIndex, isMounted]);

  // Mount effect
  useEffect(() => {
    setIsMounted(true);
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      updateFocusRect();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [updateFocusRect]);

  // Auto loop with cleanup
  useEffect(() => {
    if (words.length > 1 && !isPaused && isMounted) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [animationDuration, pauseBetweenAnimations, words.length, isPaused, isMounted]);

  // Update position when index changes
  useEffect(() => {
    if (!isMounted) return;
    
    // Debounce on mobile for better performance
    if (isMobile) {
      const timer = setTimeout(() => {
        updateFocusRect();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      updateFocusRect();
    }
  }, [currentIndex, isMobile, isMounted, updateFocusRect]);

  // Handle resize with debounce
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        updateFocusRect();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [isMounted, updateFocusRect]);

  // Memoized border style
  const borderStyle = useMemo(
    () => ({
      borderColor: borderColor,
      filter: `drop-shadow(0 0 4px ${borderColor})`,
    }),
    [borderColor]
  );

  // Simplified transitions for mobile
  const focusRectStyle: React.CSSProperties = useMemo(
    () => ({
      transform: `translate(${focusRect.x}px, ${focusRect.y}px)`,
      width: `${focusRect.width}px`,
      height: `${focusRect.height}px`,
      opacity: currentIndex >= 0 && isMounted ? 1 : 0,
      transition: isMobile 
        ? 'transform 0.3s ease-out, width 0.3s ease-out, height 0.3s ease-out, opacity 0.2s ease'
        : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease-out, height 0.4s ease-out, opacity 0.3s ease',
      willChange: 'transform',
    }),
    [focusRect.x, focusRect.y, focusRect.width, focusRect.height, currentIndex, isMounted, isMobile]
  );

  // Don't render focus rect until mounted
  if (!isMounted) {
    return (
      <div className="relative flex flex-col sm:flex-row flex-wrap gap-y-2 sm:gap-x-4 sm:gap-y-0 justify-center items-center min-h-[40px]">
        {words.map((word, index) => (
          <span
            key={`word-${index}`}
            className="relative text-lg sm:text-xl md:text-2xl font-semibold text-gray-300"
          >
            {index > 0 && (
              <span className="absolute -left-3 text-gray-500">•</span>
            )}
            {word}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className="relative flex flex-col sm:flex-row flex-wrap gap-y-2 sm:gap-x-4 sm:gap-y-0 justify-center items-center min-h-[40px]"
      ref={containerRef}
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
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
              filter: isActive ? "blur(0px)" : `blur(${isMobile ? blurAmount * 0.7 : blurAmount}px)`,
              willChange: isActive ? 'opacity, filter' : 'auto',
              transform: 'translateZ(0)', // Force GPU acceleration
            }}
          >
            {index > 0 && (
              <span className="absolute -left-3 text-gray-500">•</span>
            )}
            {word}
          </span>
        );
      })}

      {/* Focus rectangle - hidden until mounted to prevent layout shift */}
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