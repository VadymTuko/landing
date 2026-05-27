const experiences = [
  {
    title: "Senior Full-Stack WordPress Developer",
    company: "Brightgrove Ltd. / CrispWP",
    period: "2022 – 2025",
    highlights: [
      "Delivered production-grade WordPress solutions with maintainable architecture.",
      "Built reusable Gutenberg/ACF component systems.",
      "Implemented WooCommerce customizations and stable release workflows.",
      "Improved performance and reliability through profiling, query optimization, asset optimization, and caching strategy.",
      "Owned production support, hotfixes, safe updates, malware cleanup, and refactoring.",
    ],
  },
  {
    title: "Full-Stack WordPress Developer",
    company: "Premiere Creative",
    period: "2022 – 2026",
    highlights: [
      "Built WordPress websites from design handoff with pixel-accurate responsive implementation.",
      "Designed ACF-driven page architectures with modular sections and predictable templates.",
      "Delivered integrations, migrations, DNS changes, launch support, and post-launch stabilization.",
    ],
  },
  {
    title: "Full-Stack WordPress Developer",
    company: "DGlance",
    period: "2020 – 2022",
    highlights: [
      "Delivered full-cycle WordPress builds and enhancements across PHP and JavaScript.",
      "Developed custom plugin logic, integrations, and admin-side UX improvements.",
      "Maintained and refactored legacy codebases.",
      "Worked with Git, task trackers, NPM, and Webpack.",
    ],
  },
  {
    title: "Full-Stack WordPress Developer",
    company: "Freelance",
    period: "2018 – 2020",
    highlights: [
      "Built and supported WordPress websites, corporate sites, landing pages, and eCommerce projects.",
      "Performed migrations, DNS configuration, and email infrastructure setup.",
      "Implemented performance and security improvements.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            7+ years of professional WordPress development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 top-2" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="bg-card/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2">{exp.title}</h3>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                    <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "" : "md:text-left"}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
