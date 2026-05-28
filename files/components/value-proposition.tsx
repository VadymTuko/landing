import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Blocks, ShoppingCart, Shield } from "lucide-react"

const valueCards = [
  {
    icon: Code2,
    title: "Custom WordPress Engineering",
    description:
      "Custom themes, plugins, hooks, REST API integrations, CPTs, taxonomies, and admin UX tailored to business workflows.",
  },
  {
    icon: Blocks,
    title: "Gutenberg & ACF Systems",
    description:
      "Reusable block systems, block.json development, flexible content models, modular sections, and scalable editorial workflows.",
  },
  {
    icon: ShoppingCart,
    title: "WooCommerce Customization",
    description:
      "Checkout behavior, payment gateway logic, transactional emails, subscription-style access rules, and business-specific eCommerce flows.",
  },
  {
    icon: Shield,
    title: "Performance, Security & Support",
    description:
      "Caching strategy, Redis/object caching, OPcache, WebP pipelines, asset optimization, malware cleanup, safe updates, and production triage.",
  },
]

export function ValueProposition() {
  return (
    <section id="expertise" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Engineering-focused WordPress development for real business needs.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {valueCards.map((card) => (
            <Card
              key={card.title}
              className="bg-card/50 border-border hover:border-primary/50 transition-colors duration-300"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
