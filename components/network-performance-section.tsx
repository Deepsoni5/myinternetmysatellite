import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, TrendingUp, Wifi, Signal } from "lucide-react"

export function NetworkPerformanceSection() {
  const performanceMetrics = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Ultra-Low Latency",
      value: "20-40ms",
      description: "Industry-leading latency for real-time applications",
      color: "text-green-600",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Download Speed",
      value: "Up to 500 Mbps",
      description: "Lightning-fast downloads and streaming",
      color: "text-blue-600",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Upload Speed",
      value: "Up to 50 Mbps",
      description: "Reliable uploads for video calls and file sharing",
      color: "text-purple-600",
    },
    {
      icon: <Signal className="h-6 w-6" />,
      title: "Network Uptime",
      value: "99.9%",
      description: "Guaranteed reliability with redundant systems",
      color: "text-emerald-600",
    },
  ]

  const regionalCoverage = [
    { region: "North America", latency: "22ms", speed: "450 Mbps", uptime: "99.95%" },
    { region: "Europe", latency: "25ms", speed: "420 Mbps", uptime: "99.92%" },
    { region: "Asia Pacific", latency: "28ms", speed: "380 Mbps", uptime: "99.88%" },
    { region: "Latin America", latency: "32ms", speed: "350 Mbps", uptime: "99.85%" },
    { region: "Africa", latency: "35ms", speed: "320 Mbps", uptime: "99.80%" },
    { region: "Middle East", latency: "30ms", speed: "360 Mbps", uptime: "99.87%" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800">Network Performance</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unmatched Performance &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Regional Coverage
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced satellite network delivers consistent, high-performance connectivity across all regions,
            optimized for both residential and maritime applications.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`${metric.color} mb-4 flex justify-center`}>{metric.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="font-medium mb-2">{metric.title}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Performance Table */}
        <Card className="shadow-xl max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Regional Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Region</th>
                    <th className="text-center p-4 font-semibold">Avg. Latency</th>
                    <th className="text-center p-4 font-semibold">Max Speed</th>
                    <th className="text-center p-4 font-semibold">Uptime</th>
                  </tr>
                </thead>
                <tbody>
                  {regionalCoverage.map((region, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{region.region}</td>
                      <td className="text-center p-4">
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {region.latency}
                        </Badge>
                      </td>
                      <td className="text-center p-4">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {region.speed}
                        </Badge>
                      </td>
                      <td className="text-center p-4">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          {region.uptime}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Performance Guarantee */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-none">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Performance Guarantee</h3>
              <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                We stand behind our network performance with a 99.9% uptime guarantee and service level agreements that
                ensure you get the speeds and reliability you pay for, backed by our 24/7 monitoring and support team.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
