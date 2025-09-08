import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface TrueFocusProps {
    sentence?: string;
    services?: string[];
    manualMode?: boolean;
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
    manualMode = false,
    blurAmount = 1,
    borderColor = "cyan",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    // FIX 1: useMemo prevents the 'words' array from being recreated on every render, stopping the infinite loop.
    const words = useMemo(() => {
        if (services && services.length > 0) {
            return services;
        }
        if (sentence) {
            return sentence.split(" • "); // Split by the separator for multi-word phrases
        }
        return ["True", "Focus"];
    }, [services, sentence]);

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

    // This useEffect handles the automatic animation cycling
    useEffect(() => {
        if (!manualMode && words.length > 1) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, (animationDuration + pauseBetweenAnimations) * 1000);
            return () => clearInterval(interval);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

    // This useEffect calculates the position of the focus rectangle
    useEffect(() => {
        if (currentIndex < 0 || !wordRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex, words]); // The 'words' dependency is now stable thanks to useMemo

    const handleInteraction = (index: number | null) => {
        if (manualMode) {
            // FIX 2: On mouse leave (index is null), revert to 0 instead of -1 to keep the first item visible.
            setCurrentIndex(index === null ? 0 : index);
        }
    };

    return (
        <div
            className="relative flex gap-x-4 gap-y-2 justify-center items-center flex-wrap"
            ref={containerRef}
            onMouseLeave={() => handleInteraction(null)}
        >
            {words.map((word, index) => {
                const isActive = index === currentIndex;
                return (
                    <span
                        key={index}
                        ref={(el) => { wordRefs.current[index] = el; }}
                        className="relative text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 transition-opacity duration-500 cursor-pointer"
                        style={{
                            opacity: isActive ? 1 : 0.5,
                            filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
                        }}
                        onMouseEnter={() => handleInteraction(index)}
                    >
                        {index > 0 && <span className="absolute -left-3 text-gray-600">•</span>}
                        {word}
                    </span>
                );
            })}

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
                    stiffness: 150,
                }}
                style={{
                    "--border-color": borderColor,
                } as React.CSSProperties}
            >
                <span className="absolute w-4 h-4 border-[3px] rounded-[3px] -top-2 -left-2 border-r-0 border-b-0" style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}></span>
                <span className="absolute w-4 h-4 border-[3px] rounded-[3px] -top-2 -right-2 border-l-0 border-b-0" style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}></span>
                <span className="absolute w-4 h-4 border-[3px] rounded-[3px] -bottom-2 -left-2 border-r-0 border-t-0" style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}></span>
                <span className="absolute w-4 h-4 border-[3px] rounded-[3px] -bottom-2 -right-2 border-l-0 border-t-0" style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}></span>
            </motion.div>
        </div>
    );
};

export default TrueFocus;