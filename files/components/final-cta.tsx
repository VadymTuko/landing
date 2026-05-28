import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Need a senior WordPress developer for a serious project?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Available for remote WordPress, WooCommerce, Gutenberg, ACF, performance, migration, and production support work. NDA-compliant cooperation is available.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 min-w-[180px]">
              <Link href="mailto:000000vt@gmail.com">
                <Mail className="h-4 w-4" />
                Email Vadym
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 min-w-[180px]">
              <Link
                href="https://www.linkedin.com/in/vadym-tushchenko-342423157/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                Open LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 min-w-[180px]">
              <Link
                href="https://github.com/VadymTuko"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            GitHub/code examples available upon request, NDA-compliant
          </p>
        </div>
      </div>
    </section>
  )
}
