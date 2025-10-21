import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: "BookOS",
    tagline: "Caribbean Rental Management Platform",
    description:
      "A modern SaaS platform built for Caribbean rental businesses — from villas to car fleets. BookOS unifies bookings, payments, and owner reporting under one roof, helping operators manage their businesses seamlessly across web and mobile.",
    tags: ["SaaS", "Payments", "Multi-tenant", "Mobile"],
    link: "https://bookos.xyz",
  },
  {
    name: "CareIsle",
    tagline: "Healthcare Data Exchange Platform",
    description:
      "A healthcare data platform that enables providers to securely share patient information across systems and facilities. CareIsle connects EHRs, labs, and referrals to improve care coordination and data exchange in compliance with health data regulations.",
    tags: ["Healthcare", "HIPAA", "Integration", "Security"],
    link: "https://careisle.health",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Projects We Power</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Real-world solutions delivering measurable impact across industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-8 border border-border hover:border-accent/50 transition-all hover:shadow-lg group block"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">{project.name}</h3>
                    <p className="text-sm font-medium text-accent">{project.tagline}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
