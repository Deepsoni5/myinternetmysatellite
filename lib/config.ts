export const siteConfig = {
  name: "My Internet My Satellite",
  description: "Premium satellite internet connectivity for residential, marine, and mobile applications worldwide",
  url: "https://my-internet-my-satellite.vercel.app",
  phone: "+1 (888) 970-1698",
  email: "support@myinternetmysatellite.site",
  address: "123 Satellite Way, Tech City, TC 12345",
  social: {
    twitter: "https://twitter.com/myinternetmysatellite",
    facebook: "https://facebook.com/myinternetmysatellite",
    linkedin: "https://linkedin.com/company/myinternetmysatellite",
  },
  plans: {
    residential: {
      name: "Residential Plan",
      price: 120,
      speed: "Low Latency Unlimited Speed",
      features: [
        "No data caps",
        "Stable and secure connectivity for your residence",
        "Enjoy seamless streaming and browsing",
        "Round-the-clock customer support",
        "99.9% reliability",
      ],
    },
    roam: {
      name: "Roam Plans",
      speed: "Up to 500 Mbps",
      plans: [
        { name: "ROAM-50GB", price: 50, data: "50GB" },
        { name: "Unlimited", price: 165, data: "Unlimited" },
      ],
      features: [
        "Reliable high-speed connectivity at sea",
        "24/7 onboard technical support",
        "Smooth streaming and seamless navigation",
        "Multi-device connectivity with secure encryption",
        "99.9% reliability",
      ],
    },
    boat: {
      name: "Boat Plans",
      speed: "Up to 300 Mbps",
      plans: [
        { name: "Mobile 50GB", price: 50, data: "50GB" },
        { name: "1024GB", price: 165, data: "1024GB" },
      ],
      features: [
        "Stable and secure connectivity on open waters",
        "Enjoy seamless streaming and browsing while offshore",
        "Round-the-clock customer support",
        "Weather-resistant equipment with easy installation",
        "End-to-end encryption for secure communications",
      ],
    },
  },
}
