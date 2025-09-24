"use client"
import React, { useEffect, useRef, useState } from "react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const currentPos = useRef({ x: 0, y: 0 })
  const targetPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const animationId = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    
    // Force cursor to be hidden on all elements
    const style = document.createElement('style')
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
      a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)
    
    document.body.style.cursor = "none"

    const createSmokeParticle = (
      x: number, 
      y: number, 
      velocityX = 0, 
      velocityY = 0
    ) => {
      const particle = document.createElement("div")
      particle.className = "smoke-particle"
      
      const size = 3 + Math.random() * 6
      
      const isWhite = Math.random() > 0.5
      let color, opacity
      
      if (isWhite) {
        color = `rgb(255, 255, 255)`
        opacity = 0.8 + Math.random() * 0.2
      } else {
        color = `rgb(0, 0, 0)`
        opacity = 0.6 + Math.random() * 0.3
      }
      
      const duration = 0.8 + Math.random() * 1.2
      
      const offsetX = (Math.random() - 0.5) * 8
      const offsetY = (Math.random() - 0.5) * 6
      
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
        z-index: 99998;
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

    // Smooth animation loop
    const animate = () => {
      // Smooth interpolation - adjust these values for different smoothness levels
      const smoothness = 0.15 // Lower = smoother but more lag, Higher = more responsive
      
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * smoothness
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * smoothness
      
      // Calculate velocity for particle generation
      const deltaX = currentPos.current.x - lastPos.current.x
      const deltaY = currentPos.current.y - lastPos.current.y
      velocity.current.x = deltaX
      velocity.current.y = deltaY
      
      // Update cursor position smoothly
      if (cursorRef.current) {
        cursorRef.current.style.left = `${currentPos.current.x}px`
        cursorRef.current.style.top = `${currentPos.current.y}px`
      }
      
      // Generate smoke particles
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
      if (speed > 0.5) {
        const particleCount = Math.floor(Math.max(4, Math.min(speed * 2, 12)))
        
        for (let i = 0; i < particleCount; i++) {
          createSmokeParticle(
            currentPos.current.x + (Math.random() - 0.5) * 6,
            currentPos.current.y + (Math.random() - 0.5) * 6,
            velocity.current.x * 0.1,
            velocity.current.y * 0.1
          )
        }
      }
      
      lastPos.current = { ...currentPos.current }
      
      animationId.current = requestAnimationFrame(animate)
    }

    const handleMove = (e: MouseEvent) => {
      // Update target position immediately (this follows the actual mouse)
      targetPos.current.x = e.clientX
      targetPos.current.y = e.clientY
      
      setIsVisible(true)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Initialize positions
    const initPos = (e: MouseEvent) => {
      currentPos.current.x = e.clientX
      currentPos.current.y = e.clientY
      targetPos.current.x = e.clientX
      targetPos.current.y = e.clientY
      lastPos.current.x = e.clientX
      lastPos.current.y = e.clientY
    }

    // Start animation loop
    animationId.current = requestAnimationFrame(animate)

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    
    // Initialize on first mouse move
    const initHandler = (e: MouseEvent) => {
      initPos(e)
      window.removeEventListener("mousemove", initHandler)
    }
    window.addEventListener("mousemove", initHandler)

    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current)
      }
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      document.body.style.cursor = "auto"
      
      // Remove the injected style
      const customStyle = document.querySelector('style')
      if (customStyle && customStyle.innerHTML.includes('cursor: none !important')) {
        customStyle.remove()
      }
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
          zIndex: 99999,
          boxShadow: "0 0 16px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.8)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.2s ease-out",
          // Remove any CSS transitions on position for smoother movement
          willChange: "transform, left, top"
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