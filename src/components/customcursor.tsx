"use client"
import React, { useEffect, useRef, useState } from "react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const idleTimer = useRef<NodeJS.Timeout | null>(null)
  const isIdle = useRef(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

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
      
      // Small sharp particles
      const size = 1 + Math.random() * 2
      
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
      
      // Very short duration for quick effect
      const duration = 1 + Math.random() * 1.5
      
      // Minimal spread
      const offsetX = (Math.random() - 0.5) * 2
      const offsetY = (Math.random() - 0.5) * 1
      
      // Simple upward movement
      const drift = (Math.random() - 0.5) * 0.5
      
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
      
      // Immediate activation
      if (isIdle.current) {
        setShowCursor(true)
        setIsVisible(true)
      }
      
      isIdle.current = false
      setIsVisible(true)
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newX}px`
        cursorRef.current.style.top = `${newY}px`
      }
      
      // Generate just a few particles behind cursor
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
      if (speed > 2) { // Only when actually moving
        const particleCount = Math.floor(Math.max(2, Math.min(speed / 8, 5)))
        
        for (let i = 0; i < particleCount; i++) {
          createSmokeParticle(
            newX + (Math.random() - 0.5) * 3,
            newY + (Math.random() - 0.5) * 3,
            velocity.current.x * 0.1,
            velocity.current.y * 0.1
          )
        }
      }
      
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        isIdle.current = true
        
        // Immediate disappearance
        setShowCursor(false)
        setIsVisible(false)
      }, 300) // Very short idle time
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.body.style.cursor = "auto"
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="smoke-cursor"
        style={{
          position: "fixed",
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 80%, transparent 100%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 8px rgba(255,255,255,0.5)",
          transition: "opacity 0.1s ease-out", // Instant transition
          opacity: (isVisible && showCursor) ? 1 : 0,
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
            transform: translate(-50%, -50%) scale(0.5);
            opacity: var(--opacity, 0.8);
          }
          50% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 1px + var(--drift, 0) * 2px), 
              calc(-50% + var(--vel-y, 0) * 1px - 8px)
            ) scale(1);
            opacity: calc(var(--opacity, 0.8) * 0.7);
          }
          100% {
            transform: translate(
              calc(-50% + var(--drift, 0) * 4px), 
              calc(-50% - 15px)
            ) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default CustomCursor