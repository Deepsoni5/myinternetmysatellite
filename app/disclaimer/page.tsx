import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers and limitations regarding My Internet My Satellite services.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Service Performance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While {siteConfig.name} strives to provide reliable, high-speed satellite internet service, actual
                performance may vary based on several factors:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Geographic location and satellite coverage</li>
                <li>Weather conditions and atmospheric interference</li>
                <li>Network congestion and peak usage times</li>
                <li>Equipment condition and proper installation</li>
                <li>User device capabilities and configuration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Speed and Data Disclaimers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Advertised speeds represent maximum theoretical speeds under optimal conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Actual speeds may be lower than advertised maximums</li>
                <li>Upload speeds are typically lower than download speeds</li>
                <li>Data usage may be subject to fair access policies</li>
                <li>Network management practices may affect performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Service Availability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Service availability is subject to various factors beyond our control:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Satellite coverage areas and beam patterns</li>
                <li>Regulatory approvals and licensing requirements</li>
                <li>Local zoning and installation restrictions</li>
                <li>Technical feasibility assessments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Weather and Environmental Factors</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Satellite internet service can be affected by environmental conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Heavy rain, snow, or severe weather may cause signal degradation</li>
                <li>Atmospheric conditions can affect signal quality</li>
                <li>Physical obstructions may block satellite signals</li>
                <li>Seasonal variations in performance may occur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Equipment and Installation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Equipment performance and installation considerations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Professional installation recommended for optimal performance</li>
                <li>Equipment placement critical for signal reception</li>
                <li>Customer responsible for maintaining clear line of sight</li>
                <li>Equipment may require periodic maintenance and updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{siteConfig.name} disclaims liability for:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Service interruptions due to factors beyond our control</li>
                <li>Data loss or corruption during transmission</li>
                <li>Incompatibility with specific applications or services</li>
                <li>Consequential or indirect damages from service issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Regarding third-party services and content:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>We do not control or endorse third-party websites or services</li>
                <li>Performance with specific applications may vary</li>
                <li>Third-party terms and conditions apply to their services</li>
                <li>We are not responsible for third-party service availability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Regulatory Compliance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Our services are subject to regulatory oversight:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>FCC regulations and licensing requirements</li>
                <li>International telecommunications agreements</li>
                <li>Local and regional regulatory compliance</li>
                <li>Changes in regulations may affect service delivery</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Information Accuracy</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive for accuracy in all information provided, specifications, pricing, and service details
                are subject to change without notice. Please contact us at {siteConfig.email} or {siteConfig.phone} for
                the most current information.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
