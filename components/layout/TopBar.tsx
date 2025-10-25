"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-black text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center gap-6">
          <a 
            href="mailto:contact@dskbrand.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">contact@dskbrand.com</span>
          </a>
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
        <Link 
          href="/contact" 
          className="bg-primary hover:bg-primary/90 text-white px-4 py-1 rounded-md transition-colors font-medium"
        >
          Book a Free Consultation
        </Link>
      </div>
    </div>
  )
}

