import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Satellite, Ship, Home } from "lucide-react"
import Image from "next/image"

export function GlobalCoverageSection() {
  const coverageStats = [
    { icon: <Globe className="h-6 w-6" />, label: "Countries", value: "150+" },
    { icon: <Satellite className="h-6 w-6" />, label: "Satellites", value: "2,000+" },
    { icon: <Ship className="h-6 w-6" />, label: "Maritime Coverage", value: "Global Oceans" },
    { icon: <Home className="h-6 w-6" />, label: "Residential Areas", value: "Remote & Urban" },
  ]

  const regions = [
    { name: "North America", coverage: "99%", color: "bg-green-500" },
    { name: "Europe", coverage: "98%", color: "bg-green-500" },
    { name: "Asia Pacific", coverage: "95%", color: "bg-blue-500" },
    { name: "Latin America", coverage: "92%", color: "bg-blue-500" },
    { name: "Africa", coverage: "88%", color: "bg-yellow-500" },
    { name: "Middle East", coverage: "90%", color: "bg-blue-500" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Global Network</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Connecting the World with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Satellite Technology
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Our advanced satellite constellation provides unparalleled global coverage, ensuring you stay connected
            whether you're at home, at sea, or exploring the world's most remote locations.
          </p>
        </div>

        {/* Coverage Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {coverageStats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-lg">
              <CardContent className="p-6">
                <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Coverage Map Representation */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Worldwide Coverage</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our Low Earth Orbit satellite constellation ensures comprehensive coverage across all continents and
              oceans. From the Arctic Circle to Antarctica, we provide reliable connectivity where traditional internet
              infrastructure cannot reach.
            </p>

            <div className="space-y-4">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{region.name}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${region.color}`} style={{ width: region.coverage }} />
                    </div>
                    <span className="text-sm font-medium w-12">{region.coverage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=600&h=400&auto=format&fit=crop"
                alt="Global Satellite Coverage"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h4 className="text-white text-xl font-bold mb-2">Global Satellite Network</h4>
                <p className="text-white/80 text-sm">Our constellation covers every corner of the Earth</p>
              </div>

              {/* Animated satellite dots */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <div
                className="absolute top-1/3 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <Card className="absolute -bottom-8 -right-8 border-none shadow-lg bg-white w-48">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Satellite className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="text-sm font-medium">Live Satellites</div>
                    <div className="text-lg font-bold text-blue-600">2,847</div>
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
