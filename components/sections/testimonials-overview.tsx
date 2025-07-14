"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { EditableText } from "@/components/cms/editable-text"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "VAMPForge transformed our business with their innovative SaaS solution. The team's expertise and dedication exceeded our expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    content:
      "Outstanding custom software development. They delivered exactly what we needed, on time and within budget.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    role: "Founder, GrowthLab",
    content: "The web application they built for us has been instrumental in scaling our business. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsOverview() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
              id="testimonials-overview-title"
              defaultValue="What Our Clients Say"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="testimonials-overview-description"
              defaultValue="Don't just take our word for it. Here's what our satisfied clients have to say about working with us."
            />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="testimonial-card glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-cyan-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">
                  <EditableText id={`${testimonial.id}-content`} defaultValue={testimonial.content} />
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-sora">
                      <EditableText id={`${testimonial.id}-name`} defaultValue={testimonial.name} />
                    </h4>
                    <p className="text-gray-400 text-sm">
                      <EditableText id={`${testimonial.id}-role`} defaultValue={testimonial.role} />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg glass-button bg-transparent"
          >
            <Link href="/reviews">
              Read All Reviews
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
