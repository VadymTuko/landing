import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, Shield, Headphones } from "lucide-react"

const heroBadges = [
  "7+ years commercial experience",
  "WordPress & WooCommerce",
  "Gutenberg / ACF",
  "Performance & Security",
  "Remote from Portugal",
]

const statsCards = [
  { icon: Calendar, label: "Since 2018" },
  { icon: MapPin, label: "Remote-ready" },
  { icon: Shield, label: "NDA-friendly" },
  { icon: Headphones, label: "Production support" },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Senior WordPress Developer for custom, scalable and performance-focused websites.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty">
                Full-stack WordPress engineer based in Portugal, helping agencies and businesses build custom themes, plugins, WooCommerce solutions, Gutenberg blocks, ACF systems, and high-performance production websites.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm font-medium"
                >
                  {badge}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  Contact Vadym
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#projects">View selected projects</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Visual Block */}
          <div className="relative lg:pl-8">
            {/* Code Editor Card */}
            <div className="relative">
              <div className="bg-card border border-border rounded-xl p-6 shadow-2xl shadow-primary/5">
                {/* Editor Header */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">wordpress-engineer.php</span>
                </div>
                
                {/* Code Content */}
                <div className="font-mono text-sm space-y-2">
                  <div className="text-muted-foreground">
                    <span className="text-primary">{"<?php"}</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-chart-2">{"// Custom WordPress Engineering"}</span>
                  </div>
                  <div>
                    <span className="text-primary">class</span>{" "}
                    <span className="text-foreground">WordPress_Engineer</span>{" "}
                    <span className="text-muted-foreground">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-primary">private</span>{" "}
                    <span className="text-muted-foreground">$skills</span>{" "}
                    <span className="text-foreground">=</span>{" "}
                    <span className="text-muted-foreground">[</span>
                  </div>
                  <div className="pl-8 text-chart-4">{`'themes', 'plugins',`}</div>
                  <div className="pl-8 text-chart-4">{`'gutenberg', 'acf',`}</div>
                  <div className="pl-8 text-chart-4">{`'woocommerce', 'rest-api'`}</div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">];</span>
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {statsCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card/50 backdrop-blur border border-border rounded-lg p-4 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-md bg-primary/10">
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
