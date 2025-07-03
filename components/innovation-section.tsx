import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Cpu, Shield, Zap, Globe, Award } from "lucide-react"

export function InnovationSection() {
  const innovations = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Next-Gen Satellites",
      description: "Advanced Low Earth Orbit constellation with cutting-edge beamforming technology",
      highlight: "2,000+ Active Satellites",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "AI-Powered Network",
      description: "Machine learning algorithms optimize performance and predict maintenance needs",
      highlight: "Smart Routing",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Military-Grade Security",
      description: "End-to-end encryption with enterprise-level security protocols",
      highlight: "256-bit Encryption",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Ultra-Low Latency",
      description: "Revolutionary technology reducing latency to terrestrial internet levels",
      highlight: "20-40ms Latency",
    },
  ]

  const achievements = [
    { year: "2024", milestone: "Launched 500th satellite", icon: <Rocket className="h-5 w-5" /> },
    { year: "2023", milestone: "Achieved 99.9% uptime globally", icon: <Globe className="h-5 w-5" /> },
    { year: "2022", milestone: "Reached 500K+ customers", icon: <Award className="h-5 w-5" /> },
    { year: "2021", milestone: "First maritime 500 Mbps service", icon: <Zap className="h-5 w-5" /> },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-800">Innovation</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Innovation &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pushing the boundaries of satellite technology to deliver tomorrow's connectivity solutions today. Our
            commitment to innovation drives everything we do.
          </p>
        </div>

        {/* Innovation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {innovations.map((innovation, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {innovation.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{innovation.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{innovation.description}</p>
                <Badge variant="outline" className="text-primary border-primary">
                  {innovation.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Innovation Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Innovation Journey</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From our first satellite launch to becoming the world's leading satellite internet provider, we've
              consistently pushed the boundaries of what's possible in space-based communications.
            </p>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="text-primary">{achievement.icon}</div>
                  </div>
                  <div>
                    <div className="font-bold text-primary">{achievement.year}</div>
                    <div className="text-gray-700">{achievement.milestone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <Rocket className="h-16 w-16 mx-auto mb-6 text-orange-200 animate-bounce-slow" />
                  <h4 className="text-2xl font-bold mb-4">Future Innovations</h4>
                  <p className="text-orange-100 mb-6 leading-relaxed">
                    We're already working on the next generation of satellite technology, including quantum
                    communications and interplanetary connectivity.
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">2025</div>
                      <div className="text-sm text-orange-100">Quantum Encryption</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold">2026</div>
                      <div className="text-sm text-orange-100">1 Gbps Speeds</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
