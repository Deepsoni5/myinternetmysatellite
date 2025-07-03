import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Satellite, Users, Globe, Award, Zap, Shield } from "lucide-react"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about My Internet My Satellite - your trusted partner for premium satellite internet connectivity worldwide.",
}

export default function AboutPage() {
  const stats = [
    { number: "150+", label: "Countries Covered", icon: <Globe className="h-6 w-6" /> },
    { number: "500K+", label: "Happy Customers", icon: <Users className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="h-6 w-6" /> },
    { number: "24/7", label: "Customer Support", icon: <Award className="h-6 w-6" /> },
  ]

  const values = [
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Innovation",
      description: "We leverage cutting-edge satellite technology to deliver unparalleled connectivity solutions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description: "Our 99.9% uptime guarantee ensures you stay connected when it matters most.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "24/7 support and personalized service are at the heart of everything we do.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "From remote islands to bustling cities, we connect the world without boundaries.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white/20 text-white mb-6">About {siteConfig.name}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Connecting the World Through
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}
                  Innovation
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We're pioneering the future of satellite internet connectivity, bringing high-speed, reliable internet
                to every corner of the globe - from your home to the open seas.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded with a vision to eliminate digital divides, {siteConfig.name} emerged from the understanding
                    that reliable internet connectivity shouldn't be limited by geography.
                  </p>
                  <p>
                    Our journey began when our founders, experienced telecommunications engineers, witnessed firsthand
                    the challenges faced by maritime professionals, remote communities, and mobile workers who struggled
                    with unreliable internet connections.
                  </p>
                  <p>
                    Today, we're proud to serve over 500,000 customers across 150+ countries, providing them with the
                    freedom to work, communicate, and explore without connectivity constraints.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <CardContent className="p-8">
                    <Satellite className="h-16 w-16 mb-6 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-blue-100 leading-relaxed">
                      To democratize internet access by providing reliable, high-speed satellite connectivity that
                      empowers individuals and businesses to thrive anywhere on Earth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and drive us to deliver exceptional service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <Card className="bg-gradient-to-br from-green-500 to-blue-600 text-white">
                  <CardContent className="p-8">
                    <Zap className="h-16 w-16 mb-6 text-green-200" />
                    <h3 className="text-2xl font-bold mb-4">Advanced Technology</h3>
                    <ul className="space-y-3 text-green-100">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                        <span>Low Earth Orbit (LEO) satellite constellation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                        <span>Advanced beamforming technology</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                        <span>Enterprise-grade encryption</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-300 rounded-full" />
                        <span>Weather-resistant equipment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Cutting-Edge Infrastructure</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Our state-of-the-art satellite network leverages the latest in space technology to deliver
                    unprecedented performance and reliability.
                  </p>
                  <p>
                    With our Low Earth Orbit constellation, we've dramatically reduced latency while increasing
                    bandwidth capacity, ensuring smooth streaming, gaming, and video conferencing experiences.
                  </p>
                  <p>
                    Every component of our system is designed with redundancy and resilience in mind, from our ground
                    stations to our user terminals, guaranteeing consistent service even in challenging conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
