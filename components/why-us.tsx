import { Target, Zap, Lock, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Target,
    title: "Proven Cross-Industry Experience",
    description: "Deep expertise across technology and operations in multiple sectors",
  },
  {
    icon: Zap,
    title: "Flexible Engagement Models",
    description: "Project-based, advisory, or fractional — we adapt to your needs",
  },
  {
    icon: Lock,
    title: "Security-First Design",
    description: "Every solution built with compliance and data protection in mind",
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    description: "End-to-end delivery from vision to implementation with clear results",
  },
]

export function WhyUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Why TradeWind Studios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            We don't just build technology — we help businesses use it intelligently and securely to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <reason.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
