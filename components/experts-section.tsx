import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Satellite } from "lucide-react"
import Image from "next/image"

export function ExpertsSection() {
  const experts = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      experience: "15+ years",
      specialization: "Satellite Communications",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop",
      achievements: ["PhD in Aerospace Engineering", "Former NASA Engineer", "50+ Patents"],
      description: "Leading our technical innovation with expertise in next-generation satellite technology.",
    },
    {
      name: "Captain Mike Rodriguez",
      role: "Maritime Solutions Director",
      experience: "20+ years",
      specialization: "Marine Communications",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&h=300&auto=format&fit=crop",
      achievements: ["Master Mariner License", "Former Navy Communications", "Global Maritime Expert"],
      description: "Ensuring reliable connectivity for maritime professionals worldwide.",
    },
    {
      name: "Emily Thompson",
      role: "Customer Success Manager",
      experience: "12+ years",
      specialization: "Technical Support",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop",
      achievements: ["Certified Network Engineer", "Customer Service Excellence", "24/7 Support Leader"],
      description: "Dedicated to providing exceptional customer support and technical assistance.",
    },
    {
      name: "Dr. James Park",
      role: "Network Operations Director",
      experience: "18+ years",
      specialization: "Network Infrastructure",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop",
      achievements: ["PhD in Telecommunications", "Network Architecture Expert", "Global Operations"],
      description: "Overseeing our global network operations and ensuring optimal performance.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-purple-100 text-purple-800">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The brilliant minds behind your connection. Our team of industry veterans and technical experts work
            tirelessly to deliver the best satellite internet experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {experts.map((expert, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                    <Image
                      src={expert.image || "/placeholder.svg"}
                      alt={expert.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                    <Award className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{expert.name}</h3>
                <p className="text-primary font-medium mb-2">{expert.role}</p>
                <Badge variant="outline" className="mb-4">
                  {expert.experience}
                </Badge>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{expert.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Specialization:</p>
                  <p className="text-sm text-primary">{expert.specialization}</p>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500 mb-2">Key Achievements:</p>
                  <div className="space-y-1">
                    {expert.achievements.map((achievement, idx) => (
                      <p key={idx} className="text-xs text-gray-600">
                        • {achievement}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center border-none shadow-lg">
            <CardContent className="p-8">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Technical Experts</div>
              <p className="text-sm text-gray-500 mt-2">Certified professionals worldwide</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg">
            <CardContent className="p-8">
              <Satellite className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Network Monitoring</div>
              <p className="text-sm text-gray-500 mt-2">Round-the-clock system oversight</p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg">
            <CardContent className="p-8">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
              <p className="text-sm text-gray-500 mt-2">Based on customer surveys</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
