import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Globe, Shield, Phone } from "lucide-react"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Choose the perfect satellite internet plan for your needs. Residential, marine, and mobile options available.",
}

export default function PlansPage() {
  const allPlans = [
    {
      ...siteConfig.plans.residential,
      id: "residential",
      icon: "🏠",
      popular: false,
      description: "Perfect for home and office use",
      category: "Residential",
    },
    {
      name: "ROAM-50GB",
      price: 50,
      speed: "Up to 500 Mbps",
      id: "roam-50gb",
      icon: "🚢",
      popular: false,
      description: "50GB data for light maritime use",
      category: "Marine",
      features: [
        "50GB monthly data allowance",
        "Reliable high-speed connectivity at sea",
        "24/7 onboard technical support",
        "Multi-device connectivity",
        "99.9% reliability",
      ],
    },
    {
      name: "ROAM Unlimited",
      price: 165,
      speed: "Up to 500 Mbps",
      id: "roam-unlimited",
      icon: "🚢",
      popular: true,
      description: "Unlimited data for heavy maritime use",
      category: "Marine",
      features: siteConfig.plans.roam.features,
    },
    {
      name: "Boat Mobile 50GB",
      price: 50,
      speed: "Up to 300 Mbps",
      id: "boat-50gb",
      icon: "⛵",
      popular: false,
      description: "50GB for recreational boating",
      category: "Boat",
      features: [
        "50GB monthly data allowance",
        "Stable connectivity on open waters",
        "Round-the-clock customer support",
        "Weather-resistant equipment",
        "End-to-end encryption",
      ],
    },
    {
      name: "Boat 1024GB",
      price: 165,
      speed: "Up to 300 Mbps",
      id: "boat-1024gb",
      icon: "⛵",
      popular: false,
      description: "1TB data for extended voyages",
      category: "Boat",
      features: siteConfig.plans.boat.features,
    },
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Up to 500 Mbps download speeds",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Coverage",
      description: "Available in 150+ countries worldwide",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "99.9% uptime with enterprise encryption",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plans & Pricing</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Choose the perfect satellite internet plan for your lifestyle. From residential to maritime adventures.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-blue-300 mb-3">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Available Plans</h2>
              <p className="text-xl text-gray-600">Compare features and find the perfect plan for your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {allPlans.map((plan) => (
                <Card key={plan.id} className={`relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <Badge variant="outline" className="w-fit mx-auto mb-2">
                      {plan.category}
                    </Badge>
                    <div className="text-4xl mb-2">{plan.icon}</div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold">
                        ${plan.price}
                        <span className="text-lg font-normal text-gray-600">/mo</span>
                      </div>
                      <p className="text-sm text-primary font-medium mt-1">+ taxes</p>
                    </div>
                    <div className="text-sm font-medium text-gray-700 mt-2">{plan.speed}</div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                      <a href={`tel:${siteConfig.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.phone}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Plan Comparison</h2>
              <p className="text-gray-600">Compare all features side by side</p>
            </div>

            <div className="overflow-x-auto max-w-6xl mx-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="text-center p-6 font-semibold">Residential</th>
                    <th className="text-center p-6 font-semibold">ROAM Unlimited</th>
                    <th className="text-center p-6 font-semibold">Boat 1024GB</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Monthly Price</td>
                    <td className="text-center p-6">$120/mo</td>
                    <td className="text-center p-6">$165/mo</td>
                    <td className="text-center p-6">$165/mo</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Data Allowance</td>
                    <td className="text-center p-6">Unlimited</td>
                    <td className="text-center p-6">Unlimited</td>
                    <td className="text-center p-6">1024GB</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">Max Speed</td>
                    <td className="text-center p-6">Unlimited Speed</td>
                    <td className="text-center p-6">Up to 500 Mbps</td>
                    <td className="text-center p-6">Up to 300 Mbps</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-6 font-medium">24/7 Support</td>
                    <td className="text-center p-6">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-medium">99.9% Reliability</td>
                    <td className="text-center p-6">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
