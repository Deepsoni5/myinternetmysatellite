import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Return Policy",
  description: "Learn about My Internet My Satellite return policy, refunds, and equipment exchange procedures.",
}

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Return Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. 30-Day Money-Back Guarantee</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {siteConfig.name} offers a 30-day money-back guarantee on all new service activations. If you're not
                completely satisfied with your service, you may cancel within 30 days for a full refund of service fees
                paid.
              </p>
              <h3 className="text-xl font-medium mb-2">Guarantee Includes</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Full refund of monthly service fees</li>
                <li>Refund of installation fees (if applicable)</li>
                <li>No early termination fees</li>
                <li>Free equipment return shipping</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Equipment Returns</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All equipment must be returned in good condition within 30 days of service cancellation:
              </p>
              <h3 className="text-xl font-medium mb-2">Return Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Equipment must be in original condition</li>
                <li>All accessories and documentation included</li>
                <li>Original packaging preferred but not required</li>
                <li>No physical damage beyond normal wear</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Return Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4">To initiate a return:</p>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                <li>Contact customer service at {siteConfig.phone}</li>
                <li>Provide your account information and reason for return</li>
                <li>Receive return authorization and shipping label</li>
                <li>Package equipment securely</li>
                <li>Ship using provided prepaid label</li>
                <li>Receive confirmation and refund processing</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Refund Timeline</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Refund processing times:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Equipment received and inspected: 2-3 business days</li>
                <li>Refund processed: 3-5 business days</li>
                <li>Credit card refunds: 5-10 business days</li>
                <li>Bank transfers: 7-14 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Exchanges and Upgrades</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Equipment exchanges and plan upgrades:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Defective equipment replaced at no charge</li>
                <li>Plan upgrades available anytime</li>
                <li>Equipment upgrades may require additional fees</li>
                <li>Downgrade restrictions may apply</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Damaged Equipment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If equipment is damaged during your use:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Accidental damage coverage available</li>
                <li>Replacement fees may apply for severe damage</li>
                <li>Weather-related damage typically covered</li>
                <li>Intentional damage not covered</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Service Cancellation</h2>
              <p className="text-gray-600 leading-relaxed mb-4">To cancel your service:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>30-day notice required for cancellation</li>
                <li>No early termination fees within guarantee period</li>
                <li>Prorated refunds for unused service time</li>
                <li>Equipment must be returned within 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Exceptions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">The following are not covered by our return policy:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Service used for commercial purposes (different terms apply)</li>
                <li>Equipment damaged by customer negligence</li>
                <li>Returns initiated after 30-day period</li>
                <li>Incomplete equipment returns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For return questions or to initiate a return, contact us at {siteConfig.email} or {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
