import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold font-heading text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold font-heading mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-10">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all font-semibold group"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

