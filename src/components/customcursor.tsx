"use client"
import React, { useEffect, useRef } from "react"

const SmokeTrailCursor: React.FC = () => {
  const lastPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return
    
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    let isInitialized = false

    const createSmokeParticle = (
      x: number, 
      y: number, 
      velocityX = 0, 
      velocityY = 0
    ) => {
      const particle = document.createElement("div")
      particle.className = "smoke-particle"
      
      const size = 8 + Math.random() * 8
      
      const isWhite = Math.random() > 0.5
      let color, opacity
      
      if (isWhite) {
        color = `rgb(255, 255, 255)`
        opacity = 0.7 + Math.random() * 0.2
      } else {
        color = `rgb(0, 0, 0)`
        opacity = 0.5 + Math.random() * 0.3
      }
      
      const duration = 1.0 + Math.random() * 0.8
      
      const offsetX = (Math.random() - 0.5) * 8
      const offsetY = (Math.random() - 0.5) * 8
      
      const drift = (Math.random() - 0.5) * 2
      
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
        animation: smokeTrail ${duration}s ease-out forwards;
        transform: translate(-50%, -50%);
        --drift: ${drift};
        --vel-x: ${velocityX * 0.4};
        --vel-y: ${velocityY * 0.3};
      `
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
      }, duration * 1000)
    }

    let currentPos = { x: 0, y: 0 }

    const handleMove = (e: MouseEvent) => {
      currentPos = { x: e.clientX, y: e.clientY }
      
      // Initialize position on first move
      if (!isInitialized) {
        lastPos.current = { ...currentPos }
        isInitialized = true
        return
      }
      
      // Calculate velocity
      const deltaX = currentPos.x - lastPos.current.x
      const deltaY = currentPos.y - lastPos.current.y
      velocity.current.x = deltaX
      velocity.current.y = deltaY
      
      // Generate smoke particles based on movement
      const speed = Math.sqrt(deltaX ** 2 + deltaY ** 2)
      if (speed > 0.3) {
        const particleCount = Math.floor(Math.max(3, Math.min(speed * 0.6, 10)))
        
        for (let i = 0; i < particleCount; i++) {
          // Create particles in a line behind the cursor
          const progress = i / particleCount
          const trailX = currentPos.x - (deltaX * progress * 0.8) + (Math.random() - 0.5) * 4
          const trailY = currentPos.y - (deltaY * progress * 0.8) + (Math.random() - 0.5) * 4
          
          createSmokeParticle(
            trailX,
            trailY,
            deltaX * 0.1,
            deltaY * 0.1
          )
        }
      }
      
      lastPos.current = { ...currentPos }
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body {
          background: #0f0f0f;
          background-image: 
            radial-gradient(circle at 30% 20%, rgba(25, 25, 35, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(35, 25, 45, 0.2) 0%, transparent 50%);
        }

        @keyframes smokeTrail {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: var(--opacity, 0.7);
          }
          20% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 0.5px + var(--drift, 0) * 0.5px), 
              calc(-50% + var(--vel-y, 0) * 0.5px - 2px)
            ) scale(0.8);
            opacity: calc(var(--opacity, 0.7) * 0.95);
          }
          40% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 1px + var(--drift, 0) * 1px), 
              calc(-50% + var(--vel-y, 0) * 1px - 5px)
            ) scale(1.0);
            opacity: calc(var(--opacity, 0.7) * 0.8);
          }
          60% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 1.5px + var(--drift, 0) * 2px), 
              calc(-50% + var(--vel-y, 0) * 1.5px - 10px)
            ) scale(1.2);
            opacity: calc(var(--opacity, 0.7) * 0.5);
          }
          80% {
            transform: translate(
              calc(-50% + var(--drift, 0) * 3px), 
              calc(-50% - 18px)
            ) scale(1.4);
            opacity: calc(var(--opacity, 0.7) * 0.2);
          }
          100% {
            transform: translate(
              calc(-50% + var(--drift, 0) * 4px), 
              calc(-50% - 25px)
            ) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default SmokeTrailCursor