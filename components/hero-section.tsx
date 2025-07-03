"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Globe, Shield, Search, Phone, Satellite, Wifi, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/lib/config"

export function HeroSection() {
  const [address, setAddress] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleAddressCheck = () => {
    // In a real app, this would check service availability
    console.log("Checking availability for:", address)
  }

  const handlePlansClick = () => {
    window.scrollTo(0, 0)
    router.push("/plans")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with 3D-like elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-30">
          {/* Animated grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Animated floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Satellite animation */}
        <div className="absolute top-20 right-20 animate-float" style={{ animationDuration: "15s" }}>
          <div className="relative">
            <div className="w-8 h-8 bg-blue-500 rounded-full blur-sm animate-pulse"></div>
            <Satellite className="absolute top-0 left-0 text-white h-8 w-8" />
          </div>
        </div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 max-w-7xl mx-auto px-4">
        {/* Left Content */}
        <div
          className={`space-y-8 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 w-fit px-4 py-1.5 text-sm font-medium">
            🏆 Rated #1 Satellite Internet Provider
          </Badge>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              Connect to the
              <div className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}
                  World{" "}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full"></span>
              </div>
              from
              <div className="mt-2 relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">
                  {" "}
                  Anywhere
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400/30 to-orange-500/30 rounded-full"></span>
              </div>
            </h1>
            <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
              Experience revolutionary satellite internet with lightning-fast speeds, unlimited data, and coverage that
              reaches even the most remote locations on Earth and sea.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-medium">Up to 500 Mbps</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <Globe className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Global Coverage</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handlePlansClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none shadow-lg shadow-blue-700/30"
            >
              View Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {siteConfig.phone}
              </a>
            </Button>
          </div>

          {/* Address Checker */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Check availability at your location:</h3>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your address or ZIP code"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button onClick={handleAddressCheck} className="bg-white text-primary hover:bg-gray-100">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-blue-100 mt-2">Instant results. No commitment required.</p>
            </CardContent>
          </Card>
        </div>

        {/* Right Content - Interactive Dashboard */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>

          <Card className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border-white/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-medium text-white">Global Network Status</span>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-none">
                Live Data
              </Badge>
            </div>

            <CardContent className="p-8 space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Download Speed</span>
                    </div>
                    <span className="font-bold text-green-600">Up to 500 Mbps</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-green-500 h-3 rounded-full w-4/5 animate-pulse-slow relative">
                      <div className="absolute top-0 right-0 h-full w-4 bg-white/50 animate-[ping_3s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Global Coverage</span>
                    </div>
                    <span className="font-bold text-blue-600">150+ Countries</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full w-11/12"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Network Uptime</span>
                    </div>
                    <span className="font-bold text-green-600">99.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Satellite className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-gray-700">Active Satellites</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">2,847</div>
                  <div className="text-xs text-green-600 flex items-center mt-1">
                    <ArrowRight className="h-3 w-3 rotate-45" />
                    <span>+12 today</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-gray-700">Secure Connection</span>
                  </div>
                  <div className="text-sm text-gray-600">Enterprise-grade encryption</div>
                  <div className="text-xs text-purple-600 mt-1">24/7 protection</div>
                </div>
              </div>

              {/* Animated connection visualization */}
              <div className="relative h-16">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-gray-200 relative">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-green-600"></div>

                    {/* Animated pulse dots */}
                    {animationComplete && (
                      <>
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-600 animate-[ping_2s_ease-in-out_infinite]"></div>
                        <div
                          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 animate-[ping_2s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="absolute top-1/2 left-2/4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-500 animate-[ping_2s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <div
                          className="absolute top-1/2 left-3/4 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-green-500 animate-[ping_2s_ease-in-out_infinite]"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                      </>
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 text-xs text-gray-500">Your Location</div>
                <div className="absolute bottom-0 right-0 text-xs text-gray-500">Satellite Network</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
