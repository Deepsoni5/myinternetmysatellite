"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { siteConfig } from "@/lib/config"

export function PlansSection() {
  const router = useRouter()

  const plans = [
    {
      ...siteConfig.plans.residential,
      id: "residential",
      icon: "🏠",
      popular: false,
      description: "Perfect for home and office use",
    },
    {
      ...siteConfig.plans.roam,
      id: "roam",
      icon: "🚢",
      popular: true,
      description: "Ideal for maritime adventures",
      price: siteConfig.plans.roam.plans[1].price, // Unlimited plan
      priceLabel: "Unlimited Plan",
    },
    {
      ...siteConfig.plans.boat,
      id: "boat",
      icon: "⛵",
      popular: false,
      description: "Designed for boat enthusiasts",
      price: siteConfig.plans.boat.plans[1].price, // 1024GB plan
      priceLabel: "1024GB Plan",
    },
  ]

  const handleComparePlansClick = () => {
    window.scrollTo(0, 0)
    router.push("/plans")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Our Plans</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-xl text-gray-600">
            Whether you're at home, at sea, or on the move, we have the perfect satellite internet solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative border-none shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4 bg-gradient-to-b from-gray-50 to-white">
                <div className="text-4xl mb-2">{plan.icon}</div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-blue-600">
                    ${plan.price}
                    <span className="text-lg font-normal text-gray-600">/mo</span>
                  </div>
                  {plan.priceLabel && <p className="text-sm text-gray-600 mt-1">{plan.priceLabel}</p>}
                  <p className="text-sm text-primary font-medium mt-1">+ taxes</p>
                </div>
                <div className="text-sm font-medium text-gray-700 mt-2">{plan.speed}</div>
              </CardHeader>

              <CardContent className="bg-white">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="bg-white">
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  style={
                    plan.popular
                      ? {
                          background: "linear-gradient(to right, #2563eb, #7c3aed)",
                          border: "none",
                        }
                      : {}
                  }
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button onClick={handleComparePlansClick} variant="outline" size="lg">
            Compare All Plans
          </Button>
        </div>
      </div>
    </section>
  )
}
