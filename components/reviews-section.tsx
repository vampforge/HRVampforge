"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    rating: 5,
    review:
      "VAMPForge transformed our business with their innovative software solution. The team was professional, responsive, and delivered beyond our expectations.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    company: "Digital Solutions Ltd.",
    role: "CTO",
    rating: 5,
    review:
      "Outstanding web development services! They created a beautiful, fast, and user-friendly website that significantly improved our online presence.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    company: "Growth Ventures",
    role: "Founder",
    rating: 5,
    review:
      "The IT consulting services provided by VAMPForge helped us streamline our operations and reduce costs by 30%. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Thompson",
    company: "Innovation Corp",
    role: "Project Manager",
    rating: 5,
    review:
      "Exceptional service and support throughout the entire project. The team at VAMPForge truly understands client needs and delivers quality results.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Wang",
    company: "Future Systems",
    role: "Director",
    rating: 5,
    review:
      "Working with VAMPForge was a game-changer for our company. Their expertise in software development is unmatched, and the results speak for themselves.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section id="reviews" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with VAMPForge
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-cyan-400 opacity-50" />
                <div className="flex space-x-1">
                  {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                "{reviews[currentIndex].review}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{reviews[currentIndex].name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{reviews[currentIndex].name}</div>
                    <div className="text-gray-400 text-sm">
                      {reviews[currentIndex].role} at {reviews[currentIndex].company}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevReview}
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextReview}
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-cyan-400 to-purple-400"
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
