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
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return
    document.body.style.cursor = "none"

    const createSmokeParticle = (
      x: number, 
      y: number, 
      velocityX = 0, 
      velocityY = 0, 
      intensity = 1,
      isIdle = false,
      isFromCursor = false
    ) => {
      const particle = document.createElement("div")
      particle.className = "smoke-particle"
      
      // More visible and realistic smoke colors
      const smokeColors = [
        `rgba(255, 255, 255, ${0.4 + Math.random() * 0.3})`, // Bright white smoke
        `rgba(240, 240, 245, ${0.45 + Math.random() * 0.25})`, // Off-white smoke
        `rgba(220, 220, 230, ${0.5 + Math.random() * 0.2})`, // Light gray
        `rgba(180, 180, 195, ${0.35 + Math.random() * 0.3})`, // Medium gray
        `rgba(120, 120, 140, ${0.4 + Math.random() * 0.25})`, // Dark gray
        `rgba(80, 80, 100, ${0.3 + Math.random() * 0.2})`, // Charcoal smoke
        `rgba(40, 40, 60, ${0.25 + Math.random() * 0.15})`, // Very dark smoke
      ]
      
      const color = smokeColors[Math.floor(Math.random() * smokeColors.length)]
      const baseSize = isFromCursor ? 20 + Math.random() * 25 : isIdle ? 15 + Math.random() * 20 : 12 + Math.random() * 16
      const size = baseSize * (0.8 + intensity * 0.4)
      const blur = isFromCursor ? 6 + Math.random() * 8 : isIdle ? 8 + Math.random() * 10 : 6 + Math.random() * 8
      const duration = isFromCursor ? 8 + Math.random() * 4 : isIdle ? 7 + Math.random() * 5 : 4 + Math.random() * 3
      
      // More natural initial position spread
      const offsetX = (Math.random() - 0.5) * (isFromCursor ? 8 : 15)
      const offsetY = (Math.random() - 0.5) * (isFromCursor ? 6 : 12)
      
      // Enhanced wind and turbulence
      const windForce = (Math.random() - 0.5) * 0.8
      const turbulence = Math.random() * 0.8
      
      particle.style.cssText = `
        position: fixed;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${30 + Math.random() * 70}%;
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
        opacity: ${isFromCursor ? 0.8 : 0.6 + Math.random() * 0.3};
        mix-blend-mode: ${Math.random() > 0.3 ? 'normal' : 'screen'};
      `
      
      document.body.appendChild(particle)
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.remove()
        }
      }, duration * 1000)
    }

    // Function to create cursor dissolution effect
    const createCursorSmoke = (x: number, y: number) => {
      // Create multiple particles for cursor dissolution
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          createSmokeParticle(
            x + (Math.random() - 0.5) * 12,
            y + (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 2,
            -Math.random() * 1.5 - 0.5,
            1.2,
            false,
            true
          )
        }, i * 150)
      }
    }

    const handleMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY
      
      // Smoother velocity calculation
      const deltaX = newX - lastPos.current.x
      const deltaY = newY - lastPos.current.y
      velocity.current.x = velocity.current.x * 0.7 + deltaX * 0.3
      velocity.current.y = velocity.current.y * 0.7 + deltaY * 0.3
      
      lastPos.current = { x: newX, y: newY }
      
      if (isIdle.current) {
        // Cursor reappears when moving after being idle
        setShowCursor(true)
      }
      
      isIdle.current = false
      setIsMoving(true)
      setIsVisible(true)
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${newX}px`
        cursorRef.current.style.top = `${newY}px`
        
        // Dynamic cursor effects
        const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
        const intensity = Math.min(speed / 12, 2)
        const glowSize = 15 + intensity * 30
        const glowIntensity = 0.6 + intensity * 0.4
        
        cursorRef.current.style.boxShadow = `
          0 0 ${glowSize}px rgba(255,255,255,${glowIntensity}),
          0 0 ${glowSize * 0.7}px rgba(220,220,255,${glowIntensity * 0.8}),
          0 0 ${glowSize * 0.3}px rgba(255,255,255,0.9),
          inset 0 0 8px rgba(255,255,255,0.4)
        `
        
        cursorRef.current.style.transform = `translate(-50%, -50%) scale(${1 + intensity * 0.3})`
      }
      
      // Enhanced particle generation
      const speed = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2)
      const particleCount = Math.floor(Math.max(3, Math.min(speed / 6, 8)))
      const baseDelay = Math.max(20, 60 - speed)
      
      for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
          const trailOffset = i * 6
          const trailX = newX - (velocity.current.x * trailOffset * 0.15)
          const trailY = newY - (velocity.current.y * trailOffset * 0.15)
          
          createSmokeParticle(
            trailX,
            trailY,
            velocity.current.x * 0.15,
            velocity.current.y * 0.15,
            Math.min(speed / 20, 1.5)
          )
        }, i * baseDelay)
      }
      
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        isIdle.current = true
        setIsMoving(false)
        
        // Create cursor dissolution smoke effect
        createCursorSmoke(lastPos.current.x, lastPos.current.y)
        
        // Hide cursor after smoke effect starts
        setTimeout(() => {
          setShowCursor(false)
          setIsVisible(false)
        }, 800)
      }, 2000)
    }

    window.addEventListener("mousemove", handleMove)

    // Enhanced idle smoke emission
    const idleEmitter = setInterval(() => {
      const { x, y } = lastPos.current
      if (x !== 0 && y !== 0 && isIdle.current) {
        // More frequent and visible idle smoke
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            createSmokeParticle(
              x + (Math.random() - 0.5) * 25,
              y + (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 0.8,
              -Math.random() * 0.6 - 0.2,
              0.8,
              true
            )
          }, i * 600)
        }
      }
    }, 1000)

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
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: isMoving 
            ? "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,240,255,0.9) 30%, rgba(220,220,255,0.6) 60%, rgba(200,200,255,0.3) 80%, transparent 100%)"
            : "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(240,240,255,0.7) 40%, rgba(220,220,255,0.4) 70%, transparent 100%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          boxShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(220,220,255,0.5), 0 0 60px rgba(255,255,255,0.2)",
          transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out",
          opacity: (isVisible && showCursor) ? 1 : 0,
          animation: (isMoving || !showCursor) ? "none" : "luxuryPulse 3s ease-in-out infinite",
        }}
      />

      <style jsx global>{`
        body {
          background: #0a0a0f;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(30, 30, 60, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(60, 30, 90, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(20, 20, 40, 0.1) 0%, transparent 70%);
        }
        
        .smoke-particle {
          --random-x: ${Math.random() - 0.5};
          --random-y: ${Math.random() - 0.5};
          --random-rotation: ${Math.random() * 360};
        }

        @keyframes smokeRise {
          0% {
            transform: translate(-50%, -50%) scale(0.3) rotate(var(--random-rotation, 0deg));
            opacity: 0;
          }
          8% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 3px + var(--random-x) * 5px), 
              calc(-50% - 5px + var(--vel-y, 0) * 2px)
            ) scale(0.6) rotate(calc(var(--random-rotation, 0deg) + 15deg));
            opacity: var(--intensity, 0.6);
          }
          20% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 8px + var(--random-x) * 15px + var(--wind, 0) * 8px), 
              calc(-50% - 15px + var(--vel-y, 0) * 5px + var(--random-y) * 8px)
            ) scale(1) rotate(calc(var(--random-rotation, 0deg) + 40deg));
            opacity: calc(var(--intensity, 0.6) * 0.9);
          }
          40% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 12px + var(--random-x) * 30px + var(--wind, 0) * 20px), 
              calc(-50% - 35px + var(--vel-y, 0) * 8px + var(--random-y) * 18px + var(--turbulence, 0) * 12px)
            ) scale(1.6) rotate(calc(var(--random-rotation, 0deg) + 80deg));
            opacity: calc(var(--intensity, 0.6) * 0.8);
          }
          60% {
            transform: translate(
              calc(-50% + var(--vel-x, 0) * 8px + var(--random-x) * 50px + var(--wind, 0) * 40px), 
              calc(-50% - 65px + var(--random-y) * 30px + var(--turbulence, 0) * 25px)
            ) scale(2.4) rotate(calc(var(--random-rotation, 0deg) + 140deg));
            opacity: calc(var(--intensity, 0.6) * 0.6);
          }
          80% {
            transform: translate(
              calc(-50% + var(--random-x) * 70px + var(--wind, 0) * 60px), 
              calc(-50% - 95px + var(--random-y) * 45px + var(--turbulence, 0) * 40px)
            ) scale(3.5) rotate(calc(var(--random-rotation, 0deg) + 200deg));
            opacity: calc(var(--intensity, 0.6) * 0.3);
          }
          100% {
            transform: translate(
              calc(-50% + var(--random-x) * 90px + var(--wind, 0) * 75px), 
              calc(-50% - 130px + var(--random-y) * 60px + var(--turbulence, 0) * 55px)
            ) scale(5) rotate(calc(var(--random-rotation, 0deg) + 280deg));
            opacity: 0;
          }
        }

        @keyframes luxuryPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
            box-shadow: 
              0 0 20px rgba(255,255,255,0.8), 
              0 0 40px rgba(220,220,255,0.5),
              0 0 60px rgba(255,255,255,0.2);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 1;
            box-shadow: 
              0 0 30px rgba(255,255,255,1), 
              0 0 60px rgba(220,220,255,0.7),
              0 0 90px rgba(255,255,255,0.4);
          }
        }

        /* Enhanced ambient effects */
        .smoke-cursor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(220,220,255,0.04) 40%, transparent 70%);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: -1;
        }

        .smoke-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 3px;
          height: 3px;
          background: rgba(255,255,255,0.9);
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 1;
        }
      `}</style>
    </>
  )
}

export default CustomCursor