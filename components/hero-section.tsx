"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 },
      )

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.8 },
      )

      gsap.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.1 },
      )

      // Scroll-triggered gradient animation
      gsap.to(heroRef.current, {
        backgroundPosition: "200% center",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"
      style={{
        backgroundSize: "400% 400%",
        backgroundPosition: "0% center",
      }}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight"
          >
            Forge the Future with
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VAMPForge
            </span>
          </h1>

          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional software development, web solutions, and IT consulting services that transform your digital
            vision into reality.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 px-8 py-3 text-lg group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg group backdrop-blur-sm bg-transparent"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500" />
      </div>
    </section>
  )
}
