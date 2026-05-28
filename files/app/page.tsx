import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { CoreExpertise } from "@/components/core-expertise"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { WorkingStyle } from "@/components/working-style"
import { Education } from "@/components/education"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <CoreExpertise />
      <Experience />
      <Projects />
      <TechStack />
      <WorkingStyle />
      <Education />
      <FinalCTA />
      <Footer />
    </main>
  )
}
