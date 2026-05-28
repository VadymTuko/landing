import { Badge } from "@/components/ui/badge"

const expertiseGroups = [
  {
    title: "WordPress Engineering",
    skills: [
      "Custom themes",
      "Custom plugins",
      "Hooks/actions/filters",
      "WP REST API",
      "CPT/taxonomies",
      "Admin UX",
    ],
  },
  {
    title: "Gutenberg",
    skills: [
      "Custom blocks",
      "block.json",
      "Patterns",
      "Editor tooling",
      "Block asset pipelines",
    ],
  },
  {
    title: "ACF Systems",
    skills: [
      "Structured content models",
      "Flexible content",
      "Reusable modules",
      "Scalable publishing workflows",
    ],
  },
  {
    title: "WooCommerce",
    skills: [
      "Checkout behavior",
      "Payment gateways",
      "Transactional emails",
      "Subscription/membership-style access logic",
    ],
  },
  {
    title: "Performance & Reliability",
    skills: [
      "Caching strategy",
      "Redis object cache",
      "OPcache",
      "WebP/image pipelines",
      "Asset optimization",
    ],
  },
  {
    title: "Security & Ops",
    skills: [
      "WordPress hardening",
      "Malware cleanup",
      "Incident response",
      "Safe updates",
      "SSH",
      "DNS",
      "Email deliverability basics",
    ],
  },
]

export function CoreExpertise() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Deep technical skills across the WordPress ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseGroups.map((group) => (
            <div
              key={group.title}
              className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-muted-foreground border-border hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
