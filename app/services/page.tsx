"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Globe, Layers, Settings, CheckCircle, Star, Clock, Users } from "lucide-react"
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
    title: "Custom Software Development",
    description: "Tailored software solutions built specifically for your unique business requirements",
    features: ["Custom Architecture", "Scalable Solutions", "API Integration", "Database Design"],
    price: "Starting from $5,000",
    timeline: "4-12 weeks",
    href: "/services/custom-software",
    gradient: "from-blue-500 to-cyan-500",
    rating: 4.9,
  },
  {
    id: "web-applications",
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications that provide exceptional user experiences",
    features: ["Responsive Design", "Progressive Web Apps", "Real-time Features", "Cloud Deployment"],
    price: "Starting from $3,000",
    timeline: "3-8 weeks",
    href: "/services/web-applications",
    gradient: "from-purple-500 to-pink-500",
    rating: 4.8,
  },
  {
    id: "saas-products",
    icon: Layers,
    title: "SaaS Products",
    description: "Complete Software-as-a-Service platforms from concept to deployment",
    features: ["Multi-tenant Architecture", "Subscription Management", "Analytics Dashboard", "Auto-scaling"],
    price: "Starting from $10,000",
    timeline: "8-16 weeks",
    href: "/services/saas-products",
    gradient: "from-green-500 to-teal-500",
    rating: 4.9,
  },
  {
    id: "it-consulting",
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology guidance to accelerate your business growth",
    features: ["Technology Strategy", "Architecture Review", "Performance Optimization", "Security Audit"],
    price: "Starting from $150/hour",
    timeline: "1-4 weeks",
    href: "/services/it-consulting",
    gradient: "from-orange-500 to-red-500",
    rating: 4.7,
  },
]

const processSteps = [
  {
    id: "discovery",
    title: "Discovery & Planning",
    description: "We analyze your requirements and create a detailed project roadmap",
    icon: "1",
  },
  {
    id: "design",
    title: "Design & Architecture",
    description: "Our team designs the user experience and technical architecture",
    icon: "2",
  },
  {
    id: "development",
    title: "Development & Testing",
    description: "We build your solution using best practices and rigorous testing",
    icon: "3",
  },
  {
    id: "deployment",
    title: "Deployment & Support",
    description: "We deploy your solution and provide ongoing support and maintenance",
    icon: "4",
  },
]

export default function ServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

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
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".process-step",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, servicesRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <Navigation />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-8">
              <Settings className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-cyan-400">Our Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sora">
              <EditableText
                id="services-hero-title"
                defaultValue="Comprehensive Technology Solutions"
                className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              />
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <EditableText
                id="services-hero-description"
                defaultValue="From custom software development to complete SaaS platforms, we provide end-to-end technology solutions that drive business growth and digital transformation."
              />
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4" ref={servicesRef}>
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="service-card glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm text-gray-300">{service.rating}</span>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400">Popular</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white font-sora">
                      <EditableText id={`service-${service.id}-title`} defaultValue={service.title} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-6">
                      <EditableText id={`service-${service.id}-description`} defaultValue={service.description} />
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">Timeline</span>
                        </div>
                        <span className="text-cyan-400 font-semibold">{service.timeline}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400">
                          <Users className="h-4 w-4 mr-2" />
                          <span className="text-sm">Starting Price</span>
                        </div>
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0 glass-button group`}
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
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4" ref={processRef}>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
                <EditableText
                  id="process-title"
                  defaultValue="Our Development Process"
                  className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                />
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                <EditableText
                  id="process-description"
                  defaultValue="We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations."
                />
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card
                  key={step.id}
                  className="process-step glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-3 font-sora">
                      <EditableText id={`process-${step.id}-title`} defaultValue={step.title} />
                    </h4>
                    <p className="text-gray-300 text-sm">
                      <EditableText id={`process-${step.id}-description`} defaultValue={step.description} />
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sora">
                  <EditableText
                    id="services-cta-title"
                    defaultValue="Ready to Start Your Project?"
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                  />
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  <EditableText
                    id="services-cta-description"
                    defaultValue="Let's discuss your requirements and create a solution that drives your business forward."
                  />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <Link href="/contact">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
