import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Code, Users, Headphones } from "lucide-react"

const workingCards = [
  {
    icon: ClipboardList,
    title: "Requirements-first approach",
  },
  {
    icon: Code,
    title: "Clean implementation and maintainable architecture",
  },
  {
    icon: Users,
    title: "Editor-friendly systems for non-technical teams",
  },
  {
    icon: Headphones,
    title: "Production support, stabilization and long-term reliability",
  },
]

export function WorkingStyle() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Built for agencies, product teams and business-critical WordPress projects.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {workingCards.map((card) => (
            <Card
              key={card.title}
              className="bg-card/50 border-border hover:border-primary/30 transition-colors duration-300"
            >
              <CardContent className="pt-6">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-foreground">{card.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vadym combines technical execution with business-aware communication: requirements discovery, pragmatic solution design, clean delivery, and support after launch.
          </p>
        </div>
      </div>
    </section>
  )
}
