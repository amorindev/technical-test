"use client"

import { useEffect, useState } from "react"

function MouseFollower() {
  const [position, setPosition] = useState({ x: -20, y: -20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-10 size-2.5 bg-primary"
      style={{
        left: position.x,
        top: position.y,
      }}
    ></div>
  )
}

export default MouseFollower
