import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, ThumbsUp, Award, Quote } from "lucide-react"
import Image from "next/image"

export function CustomerSatisfactionSection() {
  const testimonials = [
    {
      name: "Captain Maria Santos",
      role: "Commercial Fishing Vessel",
      location: "Pacific Ocean",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
      quote:
        "My Internet My Satellite has revolutionized our operations at sea. Crystal clear video calls with our families and reliable weather updates have made all the difference.",
    },
    {
      name: "Dr. Robert Kim",
      role: "Research Station Director",
      location: "Antarctica",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
      quote:
        "In one of the world's most remote locations, My Internet My Satellite keeps us connected to the global scientific community. Absolutely essential for our research.",
    },
    {
      name: "Jennifer Walsh",
      role: "Remote Worker",
      location: "Rural Montana",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
      quote:
        "Finally, reliable high-speed internet in the mountains! I can work from anywhere now. The customer support team is incredibly helpful too.",
    },
  ]

  const satisfactionStats = [
    { icon: <Star className="h-6 w-6" />, label: "Customer Rating", value: "4.9/5", color: "text-yellow-600" },
    { icon: <Users className="h-6 w-6" />, label: "Happy Customers", value: "500K+", color: "text-blue-600" },
    { icon: <ThumbsUp className="h-6 w-6" />, label: "Satisfaction Rate", value: "99.2%", color: "text-green-600" },
    { icon: <Award className="h-6 w-6" />, label: "Industry Awards", value: "15+", color: "text-purple-600" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800">Customer Success</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Customer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Satisfaction
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our customers are at the heart of everything we do. Their success stories and feedback drive our continuous
            improvement and innovation.
          </p>
        </div>

        {/* Satisfaction Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {satisfactionStats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className={`${stat.color} mb-3 flex justify-center`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Success Guarantee */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white border-none">
          <CardContent className="p-8 text-center">
            <Award className="h-12 w-12 mx-auto mb-4 text-green-200" />
            <h3 className="text-2xl font-bold mb-4">Our Customer Success Guarantee</h3>
            <p className="text-green-100 max-w-3xl mx-auto leading-relaxed mb-6">
              We're so confident in our service quality that we offer a 30-day money-back guarantee. If you're not
              completely satisfied, we'll refund your service fees and arrange free equipment return.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-bold text-lg">30-Day</div>
                <div className="text-sm text-green-100">Money-Back Guarantee</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-sm text-green-100">Customer Support</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="font-bold text-lg">Free</div>
                <div className="text-sm text-green-100">Equipment Return</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
