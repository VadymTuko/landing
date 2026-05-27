import Link from "next/link"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "000000vt@gmail.com",
    href: "mailto:000000vt@gmail.com",
  },
  {
    icon: Phone,
    label: "+351 964 626 669",
    href: "tel:+351964626669",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vadym-tushchenko-342423157/",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/VadymTuko",
    external: true,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Vadym Tushchenko</h3>
            <p className="text-muted-foreground">Senior Full-Stack WordPress Developer</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Portugal / Remote</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              <Link
                href="#expertise"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Expertise
              </Link>
              <Link
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Vadym Tushchenko. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Available for remote work worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
