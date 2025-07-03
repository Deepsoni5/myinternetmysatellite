"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Satellite } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Plans", href: "/plans" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const handleLinkClick = (href: string) => {
    // Scroll to top immediately
    window.scrollTo(0, 0)
    // Close mobile menu if open
    setIsOpen(false)
    // Then navigate
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <button onClick={() => handleLinkClick("/")} className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Satellite className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleLinkClick(item.href)}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden sm:inline-flex">
            <Link href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.href)}
                    className="text-lg font-medium transition-colors hover:text-primary text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <Button asChild className="mt-4">
                  <Link href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {siteConfig.phone}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
