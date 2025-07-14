"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { EditableImage } from "@/components/cms/editable-image"

const reviews = [
  {
    id: "review-1",
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    rating: 5,
    review:
      "VAMPForge transformed our business with their innovative software solution. The team was professional, responsive, and delivered beyond our expectations. Our productivity increased by 40% after implementation.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Custom Software",
    industry: "Technology",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "review-2",
    name: "Michael Chen",
    company: "Digital Solutions Ltd.",
    role: "CTO",
    rating: 5,
    review:
      "Outstanding web development services! They created a beautiful, fast, and user-friendly website that significantly improved our online presence. The attention to detail was remarkable.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Web Application",
    industry: "Digital Marketing",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "review-3",
    name: "Emily Rodriguez",
    company: "Growth Ventures",
    role: "Founder",
    rating: 5,
    review:
      "The IT consulting services provided by VAMPForge helped us streamline our operations and reduce costs by 30%. Their strategic insights were invaluable for our digital transformation.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "IT Consulting",
    industry: "Finance",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "review-4",
    name: "David Thompson",
    company: "Innovation Corp",
    role: "Project Manager",
    rating: 5,
    review:
      "Exceptional service and support throughout the entire project lifecycle. The team at VAMPForge truly understands client needs and delivers quality results on time and within budget.",
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "SaaS Platform",
    industry: "Healthcare",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "review-5",
    name: "Lisa Wang",
    company: "Future Systems",
    role: "Director",
    rating: 5,
    review:
      "Working with VAMPForge was a game-changer for our company. Their expertise in software development is unmatched, and the results speak for themselves. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80",
    projectType: "Enterprise Software",
    industry: "Manufacturing",
    color: "from-indigo-500 to-purple-500",
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

  const currentReview = reviews[currentIndex]

  return (
    <section id="reviews" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.3)_0deg,transparent_60deg,transparent_300deg,rgba(139,92,246,0.3)_360deg)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="reviews-title"
              defaultValue="What Our Clients Say"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="reviews-description"
              defaultValue="Don't just take our word for it - hear from the businesses we've helped transform with our cutting-edge solutions."
            />
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto fade-in-up">
          <Card className="glass-card overflow-hidden glow-on-scroll relative">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${currentReview.color} opacity-5`} />

            <CardContent className="p-8 md:p-12 relative">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-16 w-16 text-cyan-400 opacity-50" />
                <div className="text-right">
                  <div className="flex space-x-1 mb-2">
                    {Array.from({ length: currentReview.rating }).map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">{currentReview.industry}</div>
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed min-h-[120px] font-medium">
                "<EditableText id={`${currentReview.id}-review`} defaultValue={currentReview.review} />"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <div
                      className={`w-20 h-20 rounded-full overflow-hidden bg-gradient-to-r ${currentReview.color} p-1`}
                    >
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <EditableImage
                          id={`${currentReview.id}-avatar`}
                          defaultSrc={currentReview.avatar}
                          alt={currentReview.name}
                          className="w-16 h-16 object-cover rounded-full"
                          fallback={
                            <span className="text-white font-bold text-xl">{currentReview.name.charAt(0)}</span>
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl font-sora">
                      <EditableText id={`${currentReview.id}-name`} defaultValue={currentReview.name} />
                    </div>
                    <div className="text-cyan-400 font-medium">
                      <EditableText id={`${currentReview.id}-role`} defaultValue={currentReview.role} />
                    </div>
                    <div className="text-gray-400 text-sm">
                      <EditableText id={`${currentReview.id}-company`} defaultValue={currentReview.company} />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Project: {currentReview.projectType}</div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevReview}
                    className="border-white/20 text-white hover:bg-white/10 glass-button bg-transparent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextReview}
                    className="border-white/20 text-white hover:bg-white/10 glass-button bg-transparent"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {reviews.map((review, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`relative transition-all duration-300 ${index === currentIndex ? "w-12 h-3" : "w-3 h-3"}`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${review.color} scale-125`
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Review Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
                <div className="text-gray-400">Average Rating</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-400">Success Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
