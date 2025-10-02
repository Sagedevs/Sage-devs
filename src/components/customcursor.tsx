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
        opacity = 0.6 + Math.random() * 0.3
      } else {
        color = `rgb(0, 0, 0)`
        opacity = 0.4 + Math.random() * 0.4
      }
      
      const duration = 0.8 + Math.random() * 1.2
      
      const offsetX = (Math.random() - 0.5) * 12
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
      
      // Calculate velocity
      const deltaX = currentPos.x - lastPos.current.x
      const deltaY = currentPos.y - lastPos.current.y
      velocity.current.x = deltaX
      velocity.current.y = deltaY
      
      // Generate smoke particles based on movement
      const speed = Math.sqrt(deltaX ** 2 + deltaY ** 2)
      if (speed > 1) {
        const particleCount = Math.floor(Math.max(2, Math.min(speed * 0.3, 8)))
        
        for (let i = 0; i < particleCount; i++) {
          // Create particles slightly behind the cursor
          const trailX = currentPos.x - (deltaX * 0.3) + (Math.random() - 0.5) * 8
          const trailY = currentPos.y - (deltaY * 0.3) + (Math.random() - 0.5) * 8
          
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

    // Initialize positions
    const initPos = (e: MouseEvent) => {
      lastPos.current.x = e.clientX
      lastPos.current.y = e.clientY
    }

    window.addEventListener("mousemove", handleMove)
    
    // Initialize on first mouse move
    const initHandler = (e: MouseEvent) => {
      initPos(e)
      window.removeEventListener("mousemove", initHandler)
    }
    window.addEventListener("mousemove", initHandler)

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
            transform: translate(-50%, -50%) scale(0.4);
            opacity: var(--opacity, 0.6);
          }
          25% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 1px + var(--drift, 0) * 1px), 
              calc(-50% + var(--vel-y, 0) * 1px - 3px)
            ) scale(0.7);
            opacity: calc(var(--opacity, 0.6) * 0.9);
          }
          50% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 2px + var(--drift, 0) * 2px), 
              calc(-50% + var(--vel-y, 0) * 2px - 8px)
            ) scale(1);
            opacity: calc(var(--opacity, 0.6) * 0.6);
          }
          75% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 2px + var(--drift, 0) * 4px), 
              calc(-50% + var(--vel-y, 0) * 2px - 15px)
            ) scale(1.3);
            opacity: calc(var(--opacity, 0.6) * 0.3);
          }
          100% {
            transform: translate(
              calc(-50% + var(--drift, 0) * 6px), 
              calc(-50% - 25px)
            ) scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default SmokeTrailCursor