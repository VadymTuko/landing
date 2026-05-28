import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Progress Platform",
    subtitle: "eLearning Commerce & Subscriptions",
    url: "https://progressplatform.com.ua/",
    stack: ["WordPress", "WooCommerce", "LearnDash", "PHP", "JavaScript", "MySQL", "LiqPay", "WayForPay"],
    description:
      "An eLearning commerce platform with paid enrollment, gated course access, subscription offers, payment integrations, and certification/testing workflows.",
    highlights: [
      "Course catalog and paid enrollment",
      "Custom access and billing rules",
      "LiqPay and WayForPay integration",
      "Transactional and lifecycle messaging",
      "Editor-friendly course page structure",
    ],
  },
  {
    title: "Groundsure",
    subtitle: "Corporate/Product Website",
    url: "https://groundsure.com/",
    stack: ["WordPress", "ACF", "PHP", "JavaScript"],
    description:
      "Corporate/product website with multiple product areas, content hubs, lead-capture flows, and modular ACF architecture.",
    highlights: [
      "ACF-driven modular system",
      "Product areas and content hubs",
      "Contact forms and newsletter CTAs",
      "Responsive UX and platform handoff journeys",
    ],
  },
  {
    title: "Lawa Leather",
    subtitle: "Shopify eCommerce Storefront",
    url: "https://lawaleather.com/",
    stack: ["Shopify", "Theme configuration", "Multilingual storefront"],
    description:
      "Catalog-driven multilingual Shopify storefront focused on merchandising, product discovery, and localized user experience.",
    highlights: [
      "PL/UA/EN multilingual setup",
      "Collection browsing patterns",
      "Filtering and sorting",
      "Accounts and wishlist-style UX",
    ],
  },
  {
    title: "More4apps",
    subtitle: "B2B Marketing Site + Resource Library",
    url: "https://more4apps.com/",
    stack: ["WordPress", "ACF", "Gutenberg", "PHP", "JavaScript"],
    description:
      "B2B product and marketing website with scalable landing pages, resource library, gated content, and conversion-focused CTAs.",
    highlights: [
      "ACF + Gutenberg landing-page system",
      "Resource Library with filtering/sorting",
      "Case studies, whitepapers, videos, blogs, webinars",
      "Gated lead-generation flows",
    ],
  },
  {
    title: "KFZ Gutachtenzentrale",
    subtitle: "Services Website + Block System + Optimization",
    url: "https://kfz-gutachtenzentrale.de/",
    stack: ["WordPress", "Gutenberg", "block.json", "ACF", "PHP", "JavaScript"],
    description:
      "Service-driven WordPress website with local service catalog, conversion-first landing pages, lead capture, online booking, and custom Gutenberg block library.",
    highlights: [
      "Large local service catalog",
      "Structured lead capture",
      "Embedded appointment booking",
      "Gutenberg block library with ACF support",
      "Custom plugin for shared UI/CTA components",
    ],
  },
  {
    title: "CITEK Studio",
    subtitle: "Portfolio Website + WebP Pipeline",
    url: "http://citek.net/",
    stack: ["WordPress", "ACF", "PHP", "JavaScript", "WebP automation"],
    description:
      "Bilingual studio website with services, portfolio, blog, contacts, ACF content architecture, and WebP generation/delivery workflow.",
    highlights: [
      "Bilingual website",
      "ACF-based content architecture",
      "WebP generation and fallback handling",
      "Internal linking between services, projects, and content",
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world WordPress solutions delivered for clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                  </div>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors flex-shrink-0"
                    aria-label={`Visit ${project.title} website`}
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="space-y-2 mb-4 flex-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-border text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
