"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Zap, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "Web Applications", href: "/services/web-applications" },
    { name: "SaaS Products", href: "/services/saas-products" },
    { name: "IT Consulting", href: "/services/it-consulting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/vampforge", icon: Facebook },
  { name: "Twitter", href: "https://twitter.com/vampforge", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/vampforge", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com/vampforge", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="relative bg-black/50 backdrop-blur-lg border-t border-white/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:bg-cyan-300/30 transition-all duration-300" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                VAMPForge
              </span>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Transforming businesses through innovative technology solutions. Building the future, one project at a
              time with cutting-edge development practices.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href="mailto:support@vampforge.site" className="hover:text-cyan-400 transition-colors">
                  support@vampforge.site
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href="tel:+917464003631" className="hover:text-cyan-400 transition-colors">
                  +91 7464003631
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="glass-input bg-white/5 border-white/20 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 glass-button">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            {footerLinks.legal.map((link, index) => (
              <span key={link.name}>
                <Link href={link.href} className="hover:text-cyan-400 transition-colors">
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && <span className="ml-6">•</span>}
              </span>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VAMPForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
