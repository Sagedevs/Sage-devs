"use client"
import React, { useEffect, useRef, useState } from "react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    document.body.style.cursor = "none"

    const createSmokeParticle = (
      x: number, 
      y: number, 
      velocityX = 0, 
      velocityY = 0
    ) => {
      const particle = document.createElement("div")
      particle.className = "smoke-particle"
      
      // Increased particle size
      const size = 3 + Math.random() * 6  // Changed from 1-4 to 3-9
      
      // Clear black and white particle distribution
      const isWhite = Math.random() > 0.5
      let color, opacity
      
      if (isWhite) {
        // Pure white particles
        color = `rgb(255, 255, 255)`
        opacity = 0.8 + Math.random() * 0.2
      } else {
        // Pure black particles
        color = `rgb(0, 0, 0)`
        opacity = 0.6 + Math.random() * 0.3
      }
      
      // Reduced duration for faster disappearing
      const duration = 0.8 + Math.random() * 1.2  // Changed from 1.5-3.5 to 0.8-2.0
      
      // Spread for particles
      const offsetX = (Math.random() - 0.5) * 8
      const offsetY = (Math.random() - 0.5) * 6
      
      // Movement variation
      const drift = (Math.random() - 0.5) * 1.5
      
      particle.style.cssText = `
        position: fixed;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: ${opacity};
        animation: quickSmoke ${duration}s ease-out forwards;
        transform: translate(-50%, -50%);
        --drift: ${drift};
        --vel-x: ${velocityX * 0.3};
        --vel-y: ${velocityY * 0.2};
      `
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
      }, duration * 1000)
    }

    const handleMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY
      
      const deltaX = newX - lastPos.current.x
      const deltaY = newY - lastPos.current.y
      velocity.current.x = deltaX
      velocity.current.y = deltaY
      
      lastPos.current = { x: newX, y: newY }
      
      setIsVisible(true)
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newX}px`
        cursorRef.current.style.top = `${newY}px`
      }
      
      // Generate more particles behind cursor
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
      if (speed > 1) { // Lower threshold for particle generation
        const particleCount = Math.floor(Math.max(8, Math.min(speed / 3, 20))) // More particles
        
        for (let i = 0; i < particleCount; i++) {
          createSmokeParticle(
            newX + (Math.random() - 0.5) * 8,
            newY + (Math.random() - 0.5) * 8,
            velocity.current.x * 0.1,
            velocity.current.y * 0.1
          )
        }
      }
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="smoke-cursor"
        style={{
          position: "fixed",
          width: "16px", 
          height: "16px", 
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0.4) 80%, transparent 100%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 16px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.8)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.1s ease-out",
        }}
      />

      <style jsx global>{`
        body {
          background: #0f0f0f;
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(25, 25, 35, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(35, 25, 45, 0.2) 0%, transparent 50%);
        }

        @keyframes quickSmoke {
          0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: var(--opacity, 0.8);
          }
          30% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 1px + var(--drift, 0) * 1px), 
              calc(-50% + var(--vel-y, 0) * 1px - 5px)
            ) scale(0.8);
            opacity: calc(var(--opacity, 0.8) * 0.8);
          }
          70% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 2px + var(--drift, 0) * 3px), 
              calc(-50% + var(--vel-y, 0) * 2px - 12px)
            ) scale(1.2);
            opacity: calc(var(--opacity, 0.8) * 0.4);
          }
          100% {
            transform: translate(
              calc(-50% + var(--drift, 0) * 6px), 
              calc(-50% - 20px)
            ) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default CustomCursor