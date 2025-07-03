import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how My Internet My Satellite collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At My Internet My Satellite, we collect information you provide directly to us, such as when you create
                an account, subscribe to our services, contact us for support, or communicate with us in any other way.
              </p>
              <h3 className="text-xl font-medium mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Service usage data and preferences</li>
                <li>Technical information about your equipment and connection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Processing your service requests and transactions</li>
                <li>Providing customer support and technical assistance</li>
                <li>Sending you service-related communications</li>
                <li>Improving our network performance and service quality</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Service providers who assist us in operating our business</li>
                <li>Legal requirements or to protect our rights and safety</li>
                <li>Business transfers (mergers, acquisitions, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure
                data transmission, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at {siteConfig.email} or call{" "}
                {siteConfig.phone}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
