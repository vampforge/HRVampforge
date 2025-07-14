"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { BrandMarquee } from "@/components/sections/brand-marquee"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section"
import { ContactCTA } from "@/components/sections/contact-cta"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { useCMS } from "@/components/cms/cms-provider"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const { isEditMode } = useCMS()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Enhanced background animation on scroll
    gsap.to(".animated-bg", {
      backgroundPosition: "100% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })

    // Parallax sections
    gsap.utils.toArray(".parallax-section").forEach((section: any) => {
      gsap.to(section, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    })

    // Floating particles animation
    gsap.to(".floating-particle", {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      rotation: "random(-180, 180)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random",
      },
    })
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)
          `,
          backgroundSize: "400% 400%, 400% 400%, 300% 300%, 200% 200%",
          backgroundPosition: "0% 0%, 100% 100%, 50% 50%, 0% 100%",
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <Navigation />

      <main className="relative z-10 pt-24">
        <div className="space-y-32">
          <HeroSection />
          <div className="parallax-section">
            <BrandMarquee />
          </div>
          <div className="parallax-section">
            <WhyChooseUsSection />
          </div>
          <div className="parallax-section">
            <ContactCTA />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppChat />

      {/* CMS Edit Mode Indicator */}
      {isEditMode && (
        <div className="fixed top-24 right-4 z-50 glass-panel px-4 py-2 rounded-lg">
          <span className="text-cyan-400 text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse" />
            Edit Mode Active
          </span>
        </div>
      )}
    </div>
  )
}
