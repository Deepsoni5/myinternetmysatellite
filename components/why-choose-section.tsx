import { Card, CardContent } from "@/components/ui/card"
import { Satellite, Shield, Zap, Users, Globe, Award } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function WhyChooseSection() {
  const features = [
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Advanced Satellite Technology",
      description: "State-of-the-art Low Earth Orbit satellites providing superior connectivity and reduced latency.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "99.9% Reliability",
      description: "Enterprise-grade infrastructure with redundant systems ensuring consistent, dependable service.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning-Fast Speeds",
      description: "Up to 500 Mbps download speeds enabling seamless streaming, gaming, and video conferencing.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from certified professionals who understand your needs.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Coverage",
      description: "Comprehensive coverage across 150+ countries, from remote islands to bustling cities.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Leading",
      description: "Rated #1 satellite internet provider with thousands of satisfied customers worldwide.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">{siteConfig.name}</span>?
          </h2>
          <p className="text-xl text-gray-600">
            We're not just another internet provider. We're your gateway to unlimited possibilities, connecting you to
            what matters most, wherever you are in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
