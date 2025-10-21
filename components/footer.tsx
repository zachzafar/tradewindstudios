export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="font-mono text-xl font-bold text-foreground">&gt;tw/s&gt;</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TradeWind Studios Inc.
              <br />
              Navigating Digital Transformation with Precision and Purpose
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  CTO/CIO as a Service
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  System Integration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Data Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Projects</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  BookOS
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Careisle
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contact@tradewindstudios.com" className="hover:text-accent transition-colors">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TradeWind Studios Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
