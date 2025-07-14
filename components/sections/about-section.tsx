"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Target, Code, Zap, Globe, Rocket } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EditableText } from "@/components/cms/editable-text"
import { EditableIcon } from "@/components/cms/editable-icon"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const milestones = [
  {
    id: "founded",
    year: "2024",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through innovative technology solutions",
  },
  {
    id: "first-client",
    year: "2024",
    title: "First Major Client",
    description: "Delivered our first enterprise-level solution, setting the foundation for growth",
  },
  {
    id: "team-expansion",
    year: "2024",
    title: "Team Formation",
    description: "Built a team of skilled professionals across multiple cutting-edge technologies",
  },
  {
    id: "technology-stack",
    year: "2024",
    title: "Advanced Tech Stack",
    description: "Implemented modern development practices with AI-powered solutions",
  },
  {
    id: "client-success",
    year: "2024",
    title: "Client Success Stories",
    description: "Successfully delivered multiple projects with exceptional client satisfaction",
  },
]

const techStack = [
  {
    id: "modern-frameworks",
    icon: Code,
    title: "Modern Frameworks",
    description: "React, Next.js, Vue, Angular",
  },
  {
    id: "cloud-native",
    icon: Globe,
    title: "Cloud Native",
    description: "AWS, Azure, Google Cloud",
  },
  {
    id: "ai-powered",
    icon: Zap,
    title: "AI-Powered Solutions",
    description: "Machine Learning & AI Integration",
  },
  {
    id: "scalable-architecture",
    icon: Rocket,
    title: "Scalable Architecture",
    description: "Microservices & Serverless",
  },
  {
    id: "security-first",
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security",
  },
  {
    id: "performance-optimized",
    icon: Target,
    title: "Performance Optimized",
    description: "Lightning-fast applications",
  },
]

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const techStackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.fromTo(
        ".milestone-item",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Tech stack animation
      gsap.fromTo(
        ".tech-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: techStackRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold font-sora">
            <EditableText
              id="about-title"
              defaultValue="About VAMPForge"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <EditableText
              id="about-description"
              defaultValue="We are a cutting-edge technology company founded in 2024, dedicated to delivering innovative software solutions that drive digital transformation and business success through modern development practices."
            />
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-24">
          <Card className="glass-card max-w-5xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold text-cyan-400 font-sora">
                <EditableText id="mission-title" defaultValue="Our Mission" />
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <EditableText
                  id="mission-description"
                  defaultValue="To empower businesses with cutting-edge technology solutions that transform ideas into reality. We believe in creating software that not only meets today's needs but anticipates tomorrow's challenges, driving innovation and growth for our clients through AI-powered development and modern architecture."
                />
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-24" ref={timelineRef}>
          <h3 className="text-4xl font-bold text-center mb-16 text-white font-sora">
            <EditableText id="timeline-title" defaultValue="Our Journey" />
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400" />
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className={`milestone-item flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <Card className="glass-card hover:scale-105 transition-all duration-300">
                    <CardContent className="p-8 space-y-4">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
                        <EditableText id={`${milestone.id}-year`} defaultValue={milestone.year} />
                      </Badge>
                      <h4 className="text-2xl font-bold text-white font-sora">
                        <EditableText id={`${milestone.id}-title`} defaultValue={milestone.title} />
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        <EditableText id={`${milestone.id}-description`} defaultValue={milestone.description} />
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black" />
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div ref={techStackRef}>
          <h3 className="text-4xl font-bold text-center mb-16 text-white font-sora">
            <EditableText id="tech-stack-title" defaultValue="Our Technology Stack" />
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <Card
                key={tech.id}
                className="tech-item glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <EditableIcon id={`${tech.id}-icon`} defaultIcon={tech.icon} className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-sora">
                    <EditableText id={`${tech.id}-title`} defaultValue={tech.title} />
                  </h4>
                  <p className="text-gray-300">
                    <EditableText id={`${tech.id}-description`} defaultValue={tech.description} />
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
