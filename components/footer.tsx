"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Satellite, Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Footer() {
  const router = useRouter()

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Plans", href: "/plans" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
      { name: "Shipping Policy", href: "/shipping-policy" },
      { name: "Return Policy", href: "/return-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  }

  const handleLinkClick = (href: string) => {
    // Scroll to top immediately
    window.scrollTo(0, 0)
    // Then navigate
    router.push(href)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2" onClick={() => handleLinkClick("/")}>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Satellite className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-gray-400 text-sm">{siteConfig.description}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <p className="text-gray-400 text-sm mb-4">Ready to experience premium satellite internet?</p>
            <button
              onClick={() => handleLinkClick("/contact")}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
