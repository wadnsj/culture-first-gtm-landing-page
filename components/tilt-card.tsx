'use client'

import { useRef, useState, type PointerEvent, type ReactNode } from 'react'

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  lift = 6,
  glare = true,
}: {
  children: ReactNode
  className?: string
  maxTilt?: number
  lift?: number
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height

    setTilt({
      x: (py - 0.5) * -maxTilt * 2,
      y: (px - 0.5) * maxTilt * 2,
    })
  }

  function handlePointerLeave() {
    setHovering(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div className="h-full [perspective:1400px]">
      <div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={handlePointerLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${
            hovering ? `translateY(-${lift}px)` : 'translateY(0px)'
          }`,
        }}
        className={`group/tilt relative h-full [transform-style:preserve-3d] transition-transform duration-300 ease-out will-change-transform ${className}`}
      >
        {children}
        {glare && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/15 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          />
        )}
      </div>
    </div>
  )
}
