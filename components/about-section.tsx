"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Clock, Shield } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology",
  },
  { year: "2017", title: "First Major Client", description: "Delivered our first enterprise-level solution" },
  { year: "2020", title: "Team Expansion", description: "Grew to a team of 25+ skilled professionals" },
  {
    year: "2023",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management",
  },
  { year: "2024", title: "100+ Projects", description: "Successfully completed over 100 projects worldwide" },
]

const credentials = [
  { icon: Award, title: "ISO 9001:2015 Certified", description: "Quality Management System" },
  { icon: Users, title: "50+ Happy Clients", description: "Across various industries" },
  { icon: Clock, title: "10+ Years Experience", description: "In software development" },
  { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security" },
]

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
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
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About VAMPForge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate developers and consultants dedicated to delivering innovative technology
            solutions that drive business success.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that transform ideas into reality. We
                believe in creating software that not only meets today's needs but anticipates tomorrow's challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16" ref={timelineRef}>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400" />
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone-item flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white mb-2">
                        {milestone.year}
                      </Badge>
                      <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                      <p className="text-gray-300">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black" />
              </div>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <credential.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{credential.title}</h4>
                  <p className="text-gray-300 text-sm">{credential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
