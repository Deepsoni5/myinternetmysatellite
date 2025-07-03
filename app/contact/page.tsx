import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with My Internet My Satellite for support, sales inquiries, or general questions about our satellite internet services.",
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: siteConfig.phone,
      description: "Call us for immediate assistance",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: siteConfig.email,
      description: "Send us your questions anytime",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: siteConfig.address,
      description: "Visit our headquarters",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: "24/7 Support Available",
      description: "We're here when you need us",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to experience premium satellite internet? Our team is here to help you find the perfect solution.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">{info.icon}</div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="font-medium text-gray-900 mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="planInterest">Plan Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Plan</SelectItem>
                        <SelectItem value="roam-50gb">ROAM-50GB</SelectItem>
                        <SelectItem value="roam-unlimited">ROAM Unlimited</SelectItem>
                        <SelectItem value="boat-50gb">Boat Mobile 50GB</SelectItem>
                        <SelectItem value="boat-1024gb">Boat 1024GB</SelectItem>
                        <SelectItem value="not-sure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your needs..." className="min-h-[120px]" />
                  </div>

                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Response Guarantee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      We understand that connectivity is crucial for your operations. That's why we guarantee:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Response within 2 hours for urgent inquiries</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>24-hour response for general questions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>Dedicated account manager for enterprise clients</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">For urgent technical support or emergency situations:</p>
                    <Button asChild className="w-full bg-transparent" variant="outline">
                      <a href={`tel:${siteConfig.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call Emergency Line
                      </a>
                    </Button>
                    <p className="text-sm text-gray-500 mt-2 text-center">Available 24/7 for existing customers</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sales Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Ready to get started? Our sales team can help you choose the perfect plan and get you connected
                      quickly.
                    </p>
                    <div className="space-y-2">
                      <Button asChild className="w-full">
                        <a href={`tel:${siteConfig.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Sales Team
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <a href={`mailto:${siteConfig.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Email Sales
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
