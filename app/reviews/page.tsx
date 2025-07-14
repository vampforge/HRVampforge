"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Award, TrendingUp } from "lucide-react"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 40% 60%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            linear-gradient(180deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)
          `,
          backgroundSize: "400% 400%, 400% 400%, 300% 300%, 200% 200%",
          backgroundPosition: "0% 0%, 100% 100%, 50% 50%, 0% 100%",
        }}
      />

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 mb-6">
              Client Reviews
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Read authentic reviews from businesses we've helped transform with our cutting-edge technology solutions.
            </p>

            {/* Review Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-400">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Reviews Section */}
        <ReviewsSection />

        {/* Additional Reviews Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how we've helped businesses across different industries achieve their goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  company: "StartupXYZ",
                  role: "Founder",
                  rating: 5,
                  review:
                    "VAMPForge helped us build our MVP in record time. Their expertise in modern web technologies is outstanding.",
                  industry: "Startup",
                  project: "Web Application",
                },
                {
                  name: "Maria Garcia",
                  company: "RetailCorp",
                  role: "IT Director",
                  rating: 5,
                  review:
                    "The e-commerce platform they built for us increased our online sales by 200%. Exceptional work!",
                  industry: "Retail",
                  project: "E-commerce Platform",
                },
                {
                  name: "Robert Johnson",
                  company: "HealthTech Solutions",
                  role: "CEO",
                  rating: 5,
                  review:
                    "Their SaaS development expertise helped us create a platform that now serves thousands of users daily.",
                  industry: "Healthcare",
                  project: "SaaS Platform",
                },
                {
                  name: "Anna Lee",
                  company: "FinanceFlow",
                  role: "CTO",
                  rating: 5,
                  review:
                    "Security and compliance were critical for us. VAMPForge delivered a solution that exceeded all requirements.",
                  industry: "Finance",
                  project: "Custom Software",
                },
                {
                  name: "Carlos Rodriguez",
                  company: "EduTech Inc",
                  role: "Product Manager",
                  rating: 5,
                  review: "The learning management system they built is intuitive and scalable. Our users love it!",
                  industry: "Education",
                  project: "LMS Platform",
                },
                {
                  name: "Sophie Wilson",
                  company: "GreenEnergy Co",
                  role: "Operations Director",
                  rating: 5,
                  review:
                    "Their IT consulting helped us optimize our infrastructure and reduce costs by 40%. Highly recommended!",
                  industry: "Energy",
                  project: "IT Consulting",
                },
              ].map((review, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge className="bg-white/10 text-white text-xs">{review.industry}</Badge>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">"{review.review}"</p>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="text-white font-semibold font-sora">{review.name}</div>
                        <div className="text-gray-400 text-sm">
                          {review.role} at {review.company}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Project: {review.project}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Breakdown */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We've successfully delivered projects across various industries and sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { industry: "Technology", projects: "150+", rating: "4.9" },
                { industry: "Healthcare", projects: "80+", rating: "4.8" },
                { industry: "Finance", projects: "120+", rating: "4.9" },
                { industry: "E-commerce", projects: "200+", rating: "4.9" },
                { industry: "Education", projects: "60+", rating: "4.8" },
                { industry: "Manufacturing", projects: "40+", rating: "4.7" },
                { industry: "Real Estate", projects: "30+", rating: "4.8" },
                { industry: "Startups", projects: "100+", rating: "4.9" },
              ].map((item, index) => (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 font-sora">{item.industry}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{item.projects}</div>
                    <div className="text-sm text-gray-400 mb-2">Projects</div>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-yellow-400">{item.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
