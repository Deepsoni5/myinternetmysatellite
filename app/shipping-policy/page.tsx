import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Learn about My Internet My Satellite equipment shipping, delivery times, and installation services.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Equipment Shipping</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {siteConfig.name} provides all necessary equipment for your satellite internet service, including
                satellite dishes, modems, and installation hardware.
              </p>
              <h3 className="text-xl font-medium mb-2">What's Included</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Satellite dish and mounting hardware</li>
                <li>Modem/router with Wi-Fi capability</li>
                <li>All necessary cables and connectors</li>
                <li>Installation guide and documentation</li>
                <li>Weather protection accessories</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Delivery Times</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Standard Delivery</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Continental US: 3-5 business days</li>
                    <li>Alaska & Hawaii: 5-7 business days</li>
                    <li>International: 7-14 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Expedited Delivery</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Next business day (additional fees apply)</li>
                    <li>2-day delivery (additional fees apply)</li>
                    <li>Available for most locations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Shipping Costs</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Shipping costs vary based on location and service level:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Standard shipping: Free for orders over $500</li>
                <li>Expedited shipping: Additional fees apply</li>
                <li>International shipping: Calculated based on destination</li>
                <li>Remote locations may incur additional charges</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Installation Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer professional installation services in most areas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Certified technician installation</li>
                <li>Site survey and optimal placement</li>
                <li>Complete system setup and testing</li>
                <li>Customer training and support</li>
                <li>Warranty on installation work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Marine and Mobile Equipment</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Special considerations for marine and mobile installations:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Ruggedized equipment for harsh environments</li>
                <li>Specialized mounting systems</li>
                <li>Waterproof and corrosion-resistant components</li>
                <li>Mobile installation services available</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Tracking and Delivery</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Stay informed about your shipment:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Tracking number provided upon shipment</li>
                <li>Email and SMS notifications available</li>
                <li>Signature required for delivery</li>
                <li>Safe delivery to authorized personnel only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Damaged or Missing Items</h2>
              <p className="text-gray-600 leading-relaxed mb-4">If your equipment arrives damaged or incomplete:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Inspect all items immediately upon delivery</li>
                <li>Report damage within 48 hours</li>
                <li>Contact customer service at {siteConfig.phone}</li>
                <li>Replacement equipment shipped immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For shipping questions or to track your order, contact us at {siteConfig.email} or {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
