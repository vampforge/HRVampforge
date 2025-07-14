"use client"

import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, Shield, Target, Lightbulb, Mail, Linkedin, Twitter } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through innovative technology solutions",
  },
  {
    year: "2017",
    title: "First Major Client",
    description: "Delivered our first enterprise-level solution, setting the foundation for growth",
  },
  {
    year: "2020",
    title: "Team Expansion",
    description: "Grew to a team of skilled professionals across multiple technologies",
  },
  {
    year: "2023",
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management systems",
  },
  {
    year: "2024",
    title: "100+ Projects",
    description: "Successfully completed over 100 projects for clients worldwide",
  },
]

const achievements = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality Management System",
  },
  {
    icon: Users,
    title: "50+ Happy Clients",
    description: "Across various industries",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "In software development",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security",
  },
  {
    icon: Target,
    title: "98% Success Rate",
    description: "Project completion rate",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Cutting-edge solutions",
  },
]

const founder = {
  name: "Aman Jaiswal",
  role: "Founder & CEO",
  image: "/images/founder-aman.jpeg",
  bio: "Visionary leader with over 10 years of experience in software development and business strategy. Passionate about creating innovative solutions that drive digital transformation and help businesses achieve their goals through cutting-edge technology.",
  social: {
    email: "aman@vampforge.com",
    linkedin: "https://linkedin.com/in/amanjaiswal",
    twitter: "https://twitter.com/amanjaiswal",
  },
}

export default function AboutPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const founderRef = useRef<HTMLDivElement>(null)

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

      // Achievements animation
      gsap.fromTo(
        ".achievement-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: achievementsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Founder animation
      gsap.fromTo(
        founderRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, timelineRef)

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sora">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About VAMPForge
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate developers and consultants dedicated to delivering innovative technology
              solutions that drive business success and digital transformation.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 font-sora">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that transform ideas into reality. We
                  believe in creating software that not only meets today's needs but anticipates tomorrow's challenges,
                  driving innovation and growth for our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-sora">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Leadership
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Meet the visionary behind VAMPForge</p>
            </div>

            <div ref={founderRef} className="max-w-4xl mx-auto">
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/placeholder.svg?height=400&width=400"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2 font-sora">{founder.name}</h3>
                      <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white mb-4">
                        {founder.role}
                      </Badge>
                      <p className="text-gray-300 mb-6 leading-relaxed">{founder.bio}</p>

                      <div className="flex space-x-4">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="glass-button bg-transparent border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                        >
                          <a href={`mailto:${founder.social.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="glass-button bg-transparent border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                        >
                          <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="glass-button bg-transparent border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                        >
                          <a href={founder.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4" ref={timelineRef}>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-sora">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Journey
                </span>
              </h2>
              <p className="text-gray-400 text-lg">Key milestones in our growth story</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400" />
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`milestone-item flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="glass-card hover:scale-105 transition-all duration-300">
                      <CardContent className="p-6">
                        <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white mb-3">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-3 font-sora">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-4" ref={achievementsRef}>
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-sora">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </h2>
              <p className="text-gray-400 text-lg">What sets us apart from the competition</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="achievement-item glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-sora">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
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
                <h2 className="text-3xl font-bold text-white mb-6 font-sora">Ready to Work Together?</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how VAMPForge can help transform your business with innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 glass-button glow-button"
                  >
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 glass-button bg-transparent"
                  >
                    <Link href="/services">View Services</Link>
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
