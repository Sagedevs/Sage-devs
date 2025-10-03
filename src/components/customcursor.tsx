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
      
      const size = 25 + Math.random() * 25
      const isWhite = Math.random() > 0.25
      const color = isWhite ? '255, 255, 255' : '60, 60, 80'
      const opacity = isWhite ? 0.5 + Math.random() * 0.3 : 0.3 + Math.random() * 0.3
      const duration = 1.8 + Math.random() * 1.2
      
      // Better spacing for particles
      const offsetX = (Math.random() - 0.5) * 20
      const offsetY = (Math.random() - 0.5) * 20
      
      // Random drift direction - varied for natural spread
      const driftX = (Math.random() - 0.5) * 50
      const driftY = -15 - Math.random() * 30
      
      // Random blur for depth
      const blur = 2 + Math.random() * 4
      
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
      
      // ALWAYS spawn particles when moving, no time restriction
      if (distance > 0.1) {
        // Fewer particles but better spaced
        const numParticles = Math.max(1, Math.min(Math.ceil(distance / 8), 6))
        
        for (let i = 0; i < numParticles; i++) {
          // Spread particles evenly along the movement path
          const t = i / numParticles
          const px = lastPos.current.x + deltaX * t
          const py = lastPos.current.y + deltaY * t
          
          createSmokeParticle(px, py)
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

        @keyframes smokeRise {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 1;
          }
          25% {
            transform: translate(
              calc(-50% + var(--drift-x) * 0.25), 
              calc(-50% + var(--drift-y) * 0.25)
            ) scale(1.5);
            opacity: 0.8;
          }
          50% {
            transform: translate(
              calc(-50% + var(--drift-x) * 0.5), 
              calc(-50% + var(--drift-y) * 0.5)
            ) scale(2.5);
            opacity: 0.5;
          }
          75% {
            transform: translate(
              calc(-50% + var(--drift-x) * 0.75), 
              calc(-50% + var(--drift-y) * 0.75)
            ) scale(3.5);
            opacity: 0.2;
          }
          100% {
            transform: translate(
              calc(-50% + var(--drift-x)), 
              calc(-50% + var(--drift-y))
            ) scale(4.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default SmokeTrailCursor