"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { EditableImage } from "@/components/cms/editable-image"

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO & Founder",
    rating: 5,
    review:
      "VAMPForge transformed our business with their innovative SaaS platform. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40% after implementation.",
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    company: "Digital Solutions Ltd.",
    role: "CTO",
    rating: 5,
    review:
      "Outstanding development services! They created a beautiful, fast, and user-friendly application that significantly improved our customer engagement. The attention to detail was remarkable.",
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    company: "Growth Ventures",
    role: "Product Manager",
    rating: 5,
    review:
      "The consulting services provided by VAMPForge helped us streamline our operations and reduce costs by 30%. Their strategic insights were invaluable for our digital transformation.",
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "testimonial-4",
    name: "David Thompson",
    company: "Innovation Corp",
    role: "Director of Technology",
    rating: 5,
    review:
      "Exceptional service and support throughout the entire project lifecycle. The team at VAMPForge truly understands client needs and delivers quality results on time and within budget.",
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "testimonial-5",
    name: "Lisa Wang",
    company: "Future Systems",
    role: "VP of Engineering",
    rating: 5,
    review:
      "Working with VAMPForge was a game-changer for our company. Their expertise in software development is unmatched, and the results speak for themselves. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80",
    color: "from-indigo-500 to-purple-500",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="testimonials-title"
              defaultValue="What Our Clients Say"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="testimonials-description"
              defaultValue="Don't just take our word for it - hear from the businesses we've helped transform with our cutting-edge solutions."
            />
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto fade-in-up">
          <Card className="glass-card overflow-hidden glow-on-scroll">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-16 w-16 text-cyan-400 opacity-50" />
                <div className="flex space-x-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed min-h-[120px] font-medium">
                "<EditableText id={`${currentTestimonial.id}-review`} defaultValue={currentTestimonial.review} />"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r ${currentTestimonial.color} p-0.5`}
                    >
                      <EditableImage
                        id={`${currentTestimonial.id}-avatar`}
                        defaultSrc={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover rounded-full bg-black"
                        fallback={
                          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">{currentTestimonial.name.charAt(0)}</span>
                          </div>
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg font-sora">
                      <EditableText id={`${currentTestimonial.id}-name`} defaultValue={currentTestimonial.name} />
                    </div>
                    <div className="text-cyan-400 font-medium">
                      <EditableText id={`${currentTestimonial.id}-role`} defaultValue={currentTestimonial.role} />
                    </div>
                    <div className="text-gray-400 text-sm">
                      <EditableText id={`${currentTestimonial.id}-company`} defaultValue={currentTestimonial.company} />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="border-white/20 text-white hover:bg-white/10 glass-button bg-transparent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="border-white/20 text-white hover:bg-white/10 glass-button bg-transparent"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400 scale-125"
                    : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
