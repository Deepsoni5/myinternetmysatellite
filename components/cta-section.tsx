"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight, Satellite } from "lucide-react"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/lib/config"

export function CTASection() {
  const router = useRouter()

  const handlePlansClick = () => {
    window.scrollTo(0, 0)
    router.push("/plans")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Journey Today
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of satisfied customers who have transformed their connectivity experience with My Internet My
            Satellite. Your adventure in unlimited connectivity starts here.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - CTA Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Choose Your Plan</h3>
                  <p className="text-gray-600">
                    Select the perfect plan for your residential, marine, or mobile needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Professional Installation</h3>
                  <p className="text-gray-600">
                    Our certified technicians handle everything from site survey to complete system setup.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Enjoy Unlimited Connectivity</h3>
                  <p className="text-gray-600">
                    Experience high-speed internet anywhere in the world with 24/7 support backing you up.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button onClick={handlePlansClick} variant="outline" size="lg" className="flex-1 bg-transparent">
                View Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Card */}
          <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Satellite className="h-16 w-16 mx-auto mb-4 text-blue-200 animate-float" />
                <h3 className="text-2xl font-bold mb-2">Ready to Get Connected?</h3>
                <p className="text-blue-100">
                  Our satellite internet experts are standing by to help you choose the perfect solution.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🎯 Free Consultation</h4>
                  <p className="text-sm text-blue-100">
                    Get personalized recommendations based on your specific needs and location.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">⚡ Quick Setup</h4>
                  <p className="text-sm text-blue-100">
                    Most installations completed within 24-48 hours of equipment delivery.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">🛡️ 30-Day Guarantee</h4>
                  <p className="text-sm text-blue-100">
                    Not satisfied? Get a full refund within 30 days, no questions asked.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-100">Call now for instant quote:</span>
                  <Button asChild variant="secondary" size="sm">
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="mr-1 h-3 w-3" />
                      {siteConfig.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
