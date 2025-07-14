"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Code, Rocket, Users } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EditableText } from "@/components/cms/editable-text"
import { ThreeBackground } from "@/components/three-background"
import Link from "next/link"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const lightningRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Initial animations with stagger
      const tl = gsap.timeline({ delay: 0.5 })

      tl.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
      )
        .fromTo(
          subtitleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        )

      // Lightning scroll effect
      gsap.to(lightningRef.current, {
        backgroundPosition: "200% center",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Parallax effect for hero content
      gsap.to(".hero-content", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Glow intensity on scroll
      gsap.to(".glow-on-scroll", {
        filter: "brightness(1.3) saturate(1.2)",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "center top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* 3D Background */}
      <ThreeBackground />

      {/* Lightning Background Effect */}
      <div
        ref={lightningRef}
        className="absolute inset-0 opacity-40 glow-on-scroll"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
            linear-gradient(45deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)
          `,
          backgroundSize: "400% 400%",
          backgroundPosition: "0% center",
        }}
      />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="container mx-auto text-center relative z-10 hero-content">
        <div className="max-w-6xl mx-auto">
          <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold font-sora mb-6 leading-tight">
            <EditableText
              id="hero-title-1"
              defaultValue="Build the Future"
              className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent block"
            />
            <EditableText
              id="hero-title-2"
              defaultValue="with VAMPForge"
              className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient glow-text"
            />
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <EditableText
              id="hero-description"
              defaultValue="Transform your ideas into powerful SaaS applications with our cutting-edge development platform. Build, deploy, and scale with confidence."
            />
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 px-8 py-4 text-lg font-semibold group glass-button glow-button transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/contact">
                Start Building Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-4 text-lg font-semibold group glass-button transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/services">
                <Code className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Services
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered", icon: Rocket },
              { number: "98%", label: "Client Satisfaction", icon: Users },
              { number: "24/7", label: "Support Available", icon: Code },
              { number: "50+", label: "Expert Developers", icon: Users },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl glow-on-scroll fade-in-up group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold font-sora bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  <EditableText id={`hero-stat-${index}-number`} defaultValue={stat.number} />
                </div>
                <div className="text-gray-400 text-sm">
                  <EditableText id={`hero-stat-${index}-label`} defaultValue={stat.label} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse glow-cyan"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
