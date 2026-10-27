"use client"

import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

function BackToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return <button
    type="button"
    onClick={()=>  window.scrollTo({top:0, behavior: "smooth"})}
    className="fixed right-6 bottom-6 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground"
  >
    <ArrowUp/>
  </button>
}

export default BackToTop
