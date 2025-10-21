import { Code2, Users, Database, Shield } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "CTO / CIO as a Service",
    description:
      "Access executive-level technology leadership without the full-time cost. Our on-demand CTO/CIO service provides strategic direction, infrastructure oversight, cybersecurity management, and digital innovation leadership.",
    features: ["Strategic Planning", "Infrastructure Oversight", "Cybersecurity Management", "Innovation Leadership"],
  },
  {
    icon: Code2,
    title: "Project Management",
    description:
      "Delivering complex technology projects on time, on budget, and with measurable results. We apply Agile and hybrid frameworks to manage initiatives from concept to delivery.",
    features: ["Agile Frameworks", "Clear Communication", "Accountability", "Continuous Optimization"],
  },
  {
    icon: Database,
    title: "System Implementation & Integration",
    description:
      "We design and connect the systems that power your business. From ERP and CRM to e-commerce and analytics, we ensure your tools work seamlessly together.",
    features: ["ERP & Accounting", "CRM Platforms", "E-commerce", "Analytics & BI"],
  },
  {
    icon: Shield,
    title: "Data Management & Security",
    description:
      "Your data is your most valuable asset. We help you protect and use it intelligently with governance, compliance, analytics, and multi-layer protection.",
    features: ["Data Governance", "Compliance (GDPR, HIPAA)", "Analytics & Reporting", "Encryption & Access Control"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            We bridge the gap between business goals and technical execution — empowering teams to innovate, scale, and
            operate securely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 lg:p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 lg:p-8 bg-card rounded-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Platform Expertise</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Salesforce",
              "HubSpot",
              "Sage",
              "QuickBooks",
              "Shopify",
              "Stripe",
              "Power BI",
              "Tableau",
              "Charm",
              "Guidewire",
              "Zoho",
              "PayPal",
            ].map((platform) => (
              <div
                key={platform}
                className="text-center py-3 px-4 rounded-lg bg-muted text-sm font-medium text-muted-foreground"
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
