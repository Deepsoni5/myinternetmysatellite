import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the terms and conditions for using My Internet My Satellite services.",
}

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using {siteConfig.name} services, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {siteConfig.name} provides satellite internet connectivity services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Residential satellite internet plans</li>
                <li>Marine and maritime connectivity solutions</li>
                <li>Mobile and boat internet services</li>
                <li>Technical support and customer service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                Service availability depends on geographic location, weather conditions, and satellite coverage. While
                we strive for 99.9% uptime, we cannot guarantee uninterrupted service due to factors beyond our control
                including but not limited to severe weather, satellite maintenance, and force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Payment terms include:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Monthly service fees are due in advance</li>
                <li>Installation and equipment fees may apply</li>
                <li>Late payment fees may be charged for overdue accounts</li>
                <li>Service may be suspended for non-payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You agree not to use our services for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Illegal activities or violation of any laws</li>
                <li>Transmitting harmful, threatening, or offensive content</li>
                <li>Interfering with network security or integrity</li>
                <li>Excessive bandwidth usage that affects other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate this agreement with 30 days written notice. We reserve the right to terminate
                service immediately for violation of these terms or non-payment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions regarding these terms, please contact us at {siteConfig.email} or {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
