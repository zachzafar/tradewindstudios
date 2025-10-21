import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-mono text-xl font-bold text-foreground">&lt;tw/s&gt;</div>
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline">TradeWind Studios</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="#projects" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  )
}
