"use client"
import React, { useEffect, useRef, useState } from "react"

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const velocity = useRef({ x: 0, y: 0 })
  const idleTimer = useRef<NodeJS.Timeout | null>(null)
  const isIdle = useRef(false)
  const [isMoving, setIsMoving] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    document.body.style.cursor = "none"

    const createSmokeParticle = (
      x: number, 
      y: number, 
      velocityX = 0, 
      velocityY = 0, 
      intensity = 1,
      isIdle = false
    ) => {
      const particle = document.createElement("div")
      particle.className = "smoke-particle"
      
      // More realistic smoke colors with better opacity gradients
      const smokeColors = [
        `rgba(255, 255, 255, ${0.02 + Math.random() * 0.08})`, // Whispy white smoke
        `rgba(230, 230, 235, ${0.03 + Math.random() * 0.07})`, // Light gray smoke
        `rgba(200, 200, 210, ${0.04 + Math.random() * 0.06})`, // Soft gray
        `rgba(180, 180, 190, ${0.02 + Math.random() * 0.05})`, // Medium gray
        `rgba(160, 160, 175, ${0.03 + Math.random() * 0.04})`, // Darker gray
        `rgba(140, 140, 155, ${0.02 + Math.random() * 0.03})`, // Deep gray smoke
      ]
      
      const color = smokeColors[Math.floor(Math.random() * smokeColors.length)]
      const baseSize = isIdle ? 12 + Math.random() * 18 : 8 + Math.random() * 14
      const size = baseSize * (0.8 + intensity * 0.4)
      const blur = isIdle ? 12 + Math.random() * 12 : 8 + Math.random() * 10
      const duration = isIdle ? 6 + Math.random() * 4 : 3.5 + Math.random() * 2.5
      
      // More natural initial position spread
      const offsetX = (Math.random() - 0.5) * 12
      const offsetY = (Math.random() - 0.5) * 8
      
      // Wind effect - slight horizontal drift
      const windForce = (Math.random() - 0.5) * 0.3
      const turbulence = Math.random() * 0.4
      
      particle.style.cssText = `
        position: fixed;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${40 + Math.random() * 60}%;
        filter: blur(${blur}px);
        pointer-events: none;
        z-index: 9998;
        animation: smokeRise ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        transform: translate(-50%, -50%);
        --vel-x: ${velocityX * 0.8 + windForce};
        --vel-y: ${velocityY * 0.6};
        --intensity: ${intensity};
        --turbulence: ${turbulence};
        --wind: ${windForce};
        opacity: ${0.4 + Math.random() * 0.4};
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
      
      // Smoother velocity calculation with easing
      const deltaX = newX - lastPos.current.x
      const deltaY = newY - lastPos.current.y
      velocity.current.x = velocity.current.x * 0.7 + deltaX * 0.3
      velocity.current.y = velocity.current.y * 0.7 + deltaY * 0.3
      
      lastPos.current = { x: newX, y: newY }
      isIdle.current = false
      setIsMoving(true)
      setIsVisible(true)
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newX}px`
        cursorRef.current.style.top = `${newY}px`
        
        // Dynamic cursor glow based on movement
        const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
        const intensity = Math.min(speed / 15, 1.5)
        const glowSize = 20 + intensity * 25
        const glowIntensity = 0.4 + intensity * 0.6
        
        cursorRef.current.style.boxShadow = `
          0 0 ${glowSize}px rgba(255,255,255,${glowIntensity}),
          0 0 ${glowSize * 0.5}px rgba(200,200,255,${glowIntensity * 0.8}),
          inset 0 0 8px rgba(255,255,255,0.3)
        `
      }
      
      // More sophisticated particle generation
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
      const particleCount = Math.floor(Math.max(2, Math.min(speed / 8, 6)))
      const baseDelay = Math.max(30, 80 - speed)
      
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
          // Create particles with slight offset along movement path
          const trailOffset = i * 8
          const trailX = newX - (velocity.current.x * trailOffset * 0.1)
          const trailY = newY - (velocity.current.y * trailOffset * 0.1)
          
          createSmokeParticle(
            trailX,
            trailY,
            velocity.current.x * 0.1,
            velocity.current.y * 0.1,
            Math.min(speed / 25, 1.2)
          )
        }, i * baseDelay)
      }
      
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        isIdle.current = true
        setIsMoving(false)
        setIsVisible(false)
      }, 1200)
    }

    window.addEventListener("mousemove", handleMove)

    // Ambient smoke when idle - more luxurious
    const idleEmitter = setInterval(() => {
      const { x, y } = lastPos.current
      if (x !== 0 && y !== 0 && isIdle.current) {
        // Create gentle ambient smoke
        for (let i = 0; i < 2; i++) {
          setTimeout(() => {
            createSmokeParticle(
              x + (Math.random() - 0.5) * 20,
              y + (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 0.5,
              -Math.random() * 0.3,
              0.4,
              true
            )
          }, i * 800)
        }
      }
    }, 1500)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      clearInterval(idleEmitter)
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
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: isMoving 
            ? "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(220,220,255,0.7) 40%, rgba(200,200,255,0.3) 70%, transparent 100%)"
            : "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(230,230,255,0.4) 60%, transparent 100%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(200,200,255,0.3)",
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.08s ease-out",
          opacity: isVisible ? 1 : 0,
          animation: isMoving ? "none" : "luxuryPulse 4s ease-in-out infinite",
        }}
      />

      <style jsx global>{`
        body {
          background: #0a0a0f;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(30, 30, 60, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(60, 30, 90, 0.1) 0%, transparent 50%);
        }
        
        .smoke-particle {
          --random-x: ${Math.random() - 0.5};
          --random-y: ${Math.random() - 0.5};
          --random-rotation: ${Math.random() * 360};
        }

        @keyframes smokeRise {
          0% {
            transform: translate(-50%, -50%) scale(0.2) rotate(var(--random-rotation, 0deg));
            opacity: 0;
          }
          15% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 5px + var(--random-x) * 8px), 
              calc(-50% - 8px + var(--vel-y, 0) * 3px)
            ) scale(0.5) rotate(calc(var(--random-rotation, 0deg) + 20deg));
            opacity: var(--intensity, 0.3);
          }
          35% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 12px + var(--random-x) * 25px + var(--wind, 0) * 15px), 
              calc(-50% - 25px + var(--vel-y, 0) * 8px + var(--random-y) * 12px)
            ) scale(0.9) rotate(calc(var(--random-rotation, 0deg) + 60deg));
            opacity: calc(var(--intensity, 0.3) * 0.8);
          }
          55% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 15px + var(--random-x) * 45px + var(--wind, 0) * 35px), 
              calc(-50% - 50px + var(--vel-y, 0) * 10px + var(--random-y) * 25px + var(--turbulence, 0) * 15px)
            ) scale(1.4) rotate(calc(var(--random-rotation, 0deg) + 120deg));
            opacity: calc(var(--intensity, 0.3) * 0.6);
          }
          75% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 10px + var(--random-x) * 65px + var(--wind, 0) * 55px), 
              calc(-50% - 80px + var(--random-y) * 35px + var(--turbulence, 0) * 25px)
            ) scale(2.2) rotate(calc(var(--random-rotation, 0deg) + 180deg));
            opacity: calc(var(--intensity, 0.3) * 0.3);
          }
          90% {
            transform: translate(
              calc(-50% + var(--random-x) * 80px + var(--wind, 0) * 70px), 
              calc(-50% - 110px + var(--random-y) * 45px + var(--turbulence, 0) * 35px)
            ) scale(3.2) rotate(calc(var(--random-rotation, 0deg) + 240deg));
            opacity: calc(var(--intensity, 0.3) * 0.1);
          }
          100% {
            transform: translate(
              calc(-50% + var(--random-x) * 100px + var(--wind, 0) * 80px), 
              calc(-50% - 140px + var(--random-y) * 55px + var(--turbulence, 0) * 45px)
            ) scale(4.5) rotate(calc(var(--random-rotation, 0deg) + 300deg));
            opacity: 0;
          }
        }

        @keyframes luxuryPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
            box-shadow: 
              0 0 20px rgba(255,255,255,0.6), 
              0 0 40px rgba(200,200,255,0.3),
              0 0 60px rgba(255,255,255,0.1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
            box-shadow: 
              0 0 30px rgba(255,255,255,0.8), 
              0 0 60px rgba(200,200,255,0.5),
              0 0 90px rgba(255,255,255,0.2);
          }
        }

        /* Subtle ambient lighting effect */
        .smoke-cursor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: -1;
        }
      `}</style>
    </>
  )
}

export default CustomCursor