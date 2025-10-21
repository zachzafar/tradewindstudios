import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Let's Build What's Next</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            Whether you're scaling a startup, modernizing enterprise systems, or exploring digital transformation
            opportunities — TradeWind Studios is your strategic partner for technology leadership and execution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="mailto:contact@tradewindstudios.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-primary bg-primary-foreground rounded-lg hover:bg-primary-foreground/90 transition-colors w-full sm:w-auto group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground border-2 border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/10 transition-colors w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
