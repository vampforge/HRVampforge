"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Globe, Layers, Settings } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EditableText } from "@/components/cms/editable-text"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software",
    description: "Tailored solutions built specifically for your business needs",
    href: "/services/custom-software",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "web-applications",
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications that scale with your business",
    href: "/services/web-applications",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "saas-products",
    icon: Layers,
    title: "SaaS Products",
    description: "Complete SaaS platforms from concept to deployment",
    href: "/services/saas-products",
    gradient: "from-green-500 to-teal-500",
  },
  {
    id: "it-consulting",
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology guidance to accelerate your growth",
    href: "/services/it-consulting",
    gradient: "from-orange-500 to-red-500",
  },
]

export function ServicesOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
            <EditableText
              id="services-overview-title"
              defaultValue="Our Services"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="services-overview-description"
              defaultValue="We provide comprehensive technology solutions to help your business thrive in the digital age"
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="service-card glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sora">
                  <EditableText id={`service-${service.id}-title`} defaultValue={service.title} />
                </h3>
                <p className="text-gray-300 text-sm mb-6 flex-grow">
                  <EditableText id={`service-${service.id}-description`} defaultValue={service.description} />
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 glass-button bg-transparent group"
                >
                  <Link href={service.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
