"use client"
import React, { useEffect, useRef } from "react"

const SmokeTrailCursor: React.FC = () => {
  const lastPos = useRef({ x: 0, y: 0 })
  const lastTime = useRef(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    
    // Disable on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    let isInitialized = false

    const createSmokeParticle = (x: number, y: number) => {
      const particle = document.createElement("div")
      
      const size = 30 + Math.random() * 35
      const isWhite = Math.random() > 0.3
      const color = isWhite ? '255, 255, 255' : '40, 40, 60'
      const opacity = isWhite ? 0.7 + Math.random() * 0.25 : 0.5 + Math.random() * 0.3
      const duration = 1.5 + Math.random() * 1.0
      
      // Slight random offset for natural look
      const offsetX = (Math.random() - 0.5) * 15
      const offsetY = (Math.random() - 0.5) * 15
      
      // Random drift direction
      const driftX = (Math.random() - 0.5) * 60
      const driftY = -40 - Math.random() * 50
      
      // Random blur for depth
      const blur = 3 + Math.random() * 5
      
      particle.style.cssText = `
        position: fixed;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        background: rgba(${color}, ${opacity});
        border-radius: 50%;
        pointer-events: none;
        z-index: 99998;
        filter: blur(${blur}px);
        will-change: transform, opacity;
        animation: smokeRise ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        --drift-x: ${driftX}px;
        --drift-y: ${driftY}px;
      `
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
      }, duration * 1000 + 50)
    }

    const handleMove = (e: MouseEvent) => {
      const currentPos = { x: e.clientX, y: e.clientY }
      const currentTime = Date.now()
      
      // Initialize on first move
      if (!isInitialized) {
        lastPos.current = { ...currentPos }
        lastTime.current = currentTime
        isInitialized = true
        return
      }
      
      // Calculate movement
      const deltaX = currentPos.x - lastPos.current.x
      const deltaY = currentPos.y - lastPos.current.y
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const timeDelta = currentTime - lastTime.current
      
      // Only spawn particles if moving
      if (distance > 1 && timeDelta > 12) {
        // Spawn more particles for bigger trail
        const numParticles = Math.min(Math.ceil(distance / 10), 5)
        
        for (let i = 0; i < numParticles; i++) {
          // Place particles along the line from last position to current
          const t = (i + 1) / (numParticles + 1)
          const px = lastPos.current.x + deltaX * t
          const py = lastPos.current.y + deltaY * t
          
          createSmokeParticle(px, py)
        }
        
        lastTime.current = currentTime
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

        @keyframes smokeRise {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          50% {
            transform: translate(
              calc(-50% + var(--drift-x) * 0.5), 
              calc(-50% + var(--drift-y) * 0.5)
            ) scale(2.5);
            opacity: 0.4;
          }
          100% {
            transform: translate(
              calc(-50% + var(--drift-x)), 
              calc(-50% + var(--drift-y))
            ) scale(3.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default SmokeTrailCursor