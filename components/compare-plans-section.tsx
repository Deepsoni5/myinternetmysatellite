import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

export function ComparePlansSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">Compare Options</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Comparison</h2>
          <p className="text-xl text-gray-600">
            Compare all features side by side to find the perfect satellite internet solution for your needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <th className="text-left p-6 font-semibold">Features</th>
                      <th className="text-center p-6 font-semibold">
                        <div className="text-lg">Residential</div>
                        <div className="text-sm font-normal text-blue-100">For homes & offices</div>
                      </th>
                      <th className="text-center p-6 font-semibold bg-blue-700/30">
                        <div className="text-lg">ROAM Unlimited</div>
                        <div className="text-sm font-normal text-blue-100">For maritime use</div>
                      </th>
                      <th className="text-center p-6 font-semibold">
                        <div className="text-lg">Boat 1024GB</div>
                        <div className="text-sm font-normal text-blue-100">For extended voyages</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">Monthly Price</td>
                      <td className="text-center p-6">
                        <div className="text-xl font-bold text-blue-600">$120</div>
                        <div className="text-xs text-gray-500">per month + taxes</div>
                      </td>
                      <td className="text-center p-6 bg-blue-50/50">
                        <div className="text-xl font-bold text-blue-600">$165</div>
                        <div className="text-xs text-gray-500">per month + taxes</div>
                      </td>
                      <td className="text-center p-6">
                        <div className="text-xl font-bold text-blue-600">$165</div>
                        <div className="text-xs text-gray-500">per month + taxes</div>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">Data Allowance</td>
                      <td className="text-center p-6">
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                          Unlimited
                        </Badge>
                      </td>
                      <td className="text-center p-6 bg-blue-50/50">
                        <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                          Unlimited
                        </Badge>
                      </td>
                      <td className="text-center p-6">
                        <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                          1024GB
                        </Badge>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">Max Speed</td>
                      <td className="text-center p-6">Unlimited Speed</td>
                      <td className="text-center p-6 bg-blue-50/50">Up to 500 Mbps</td>
                      <td className="text-center p-6">Up to 300 Mbps</td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">Installation</td>
                      <td className="text-center p-6">Professional Installation</td>
                      <td className="text-center p-6 bg-blue-50/50">Marine Specialist Setup</td>
                      <td className="text-center p-6">Boat Mounting Kit</td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">Equipment</td>
                      <td className="text-center p-6">Standard Satellite Dish</td>
                      <td className="text-center p-6 bg-blue-50/50">Maritime Stabilized Antenna</td>
                      <td className="text-center p-6">Compact Marine Antenna</td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">24/7 Support</td>
                      <td className="text-center p-6">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-blue-50/50">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-6">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">99.9% Reliability</td>
                      <td className="text-center p-6">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-6 bg-blue-50/50">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="text-center p-6">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-6 font-medium">Weather Resistance</td>
                      <td className="text-center p-6">Standard</td>
                      <td className="text-center p-6 bg-blue-50/50">Enhanced Marine Grade</td>
                      <td className="text-center p-6">Marine Grade</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td className="p-6"></td>
                      <td className="p-4 text-center">
                        <Button asChild className="w-full">
                          <a href={`tel:${siteConfig.phone}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            {siteConfig.phone}
                          </a>
                        </Button>
                      </td>
                      <td className="p-4 text-center bg-blue-50/50">
                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <a href={`tel:${siteConfig.phone}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            {siteConfig.phone}
                          </a>
                        </Button>
                      </td>
                      <td className="p-4 text-center">
                        <Button asChild className="w-full">
                          <a href={`tel:${siteConfig.phone}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            {siteConfig.phone}
                          </a>
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
