import { Badge } from "@/components/ui/badge"

const techCategories = [
  {
    title: "CMS/eCommerce",
    items: ["WordPress", "WooCommerce", "Elementor", "LearnDash"],
  },
  {
    title: "Languages",
    items: ["PHP 5.6 / 7.x / 8.x", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    items: ["jQuery", "AJAX", "JSON", "SCSS", "SASS", "LESS", "Responsive UI"],
  },
  {
    title: "Performance",
    items: ["Redis object caching", "OPcache", "WebP", "Caching strategy", "Asset optimization"],
  },
  {
    title: "Tools/Plugins",
    items: [
      "Advanced Custom Fields",
      "Elementor Pro",
      "Beaver Builder",
      "Bricks",
      "Oxygen",
      "WPBakery",
      "Gravity Forms",
      "Contact Form 7",
      "Yoast SEO",
      "Wordfence",
      "WP Rocket",
    ],
  },
  {
    title: "Workflow",
    items: [
      "Git",
      "Composer",
      "NPM",
      "Webpack",
      "Jira",
      "Trello",
      "Odoo",
      "Redmine",
      "Figma",
      "Photoshop",
      "Adobe XD",
      "Sketch",
    ],
  },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-sm px-3 py-1.5 bg-secondary/50 text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item}
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
