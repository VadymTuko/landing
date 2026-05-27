import { Badge } from "@/components/ui/badge"
import { GraduationCap, Globe } from "lucide-react"

const education = [
  {
    institution: "SPD University",
    degree: "Junior Specialist, Frontend & JavaScript",
    period: "2018–2019",
  },
  {
    institution: "College of Arts and Technology",
    degree: "Associate Degree, Web Design",
    period: "2010–2014",
  },
]

const languages = [
  { name: "English", level: "B1" },
  { name: "Ukrainian", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "Polish", level: "Conversational" },
]

export function Education() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="border-l-2 border-border pl-6 hover:border-primary/50 transition-colors"
                >
                  <span className="text-sm text-primary font-medium">{edu.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{edu.institution}</h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Languages</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <Badge
                  key={lang.name}
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50"
                >
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground ml-2">({lang.level})</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
