"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg p-4">
      <Link
        href="/contact"
        className="bg-primary hover:bg-primary/90 text-white w-full py-3 rounded-lg transition-all font-semibold flex items-center justify-center gap-2"
      >
        <Phone className="w-5 h-5" />
        Book Free Consultation
      </Link>
    </div>
  )
}

