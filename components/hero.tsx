export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Navigating Digital Transformation
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Technology Leadership
            <br />
            <span className="text-muted-foreground">with Precision and Purpose</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            At TradeWind Studios, we help organizations accelerate digital transformation through technology leadership,
            project management, data strategy, and system integration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              Explore Services
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground bg-secondary rounded-lg hover:bg-secondary/80 transition-colors w-full sm:w-auto"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
