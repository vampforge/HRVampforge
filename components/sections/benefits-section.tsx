"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield, Target, Zap, Sparkles } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { EditableIcon } from "@/components/cms/editable-icon"

const benefits = [
  {
    id: "expert-team",
    icon: Award,
    title: "Expert Team",
    description:
      "Skilled professionals with years of experience in cutting-edge technologies and industry best practices.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "client-focused",
    icon: Users,
    title: "Client-Focused Approach",
    description: "We prioritize your success and work closely with you throughout the entire project lifecycle.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "fast-delivery",
    icon: Clock,
    title: "Rapid Development",
    description: "Efficient development processes and agile methodologies that deliver quality results on time.",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "secure-reliable",
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures and reliability standards in all our solutions and processes.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "results-driven",
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable results that directly impact your business growth and success.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "innovative",
    icon: Zap,
    title: "Innovation First",
    description: "We use the latest technologies and innovative approaches to create forward-thinking solutions.",
    color: "from-yellow-500 to-orange-500",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Why Choose Us</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="benefits-title"
              defaultValue="Unmatched Excellence"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="benefits-description"
              defaultValue="We combine technical expertise with business acumen to deliver solutions that not only work but drive real business value and competitive advantage."
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.id}
              className="glass-card group hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 fade-in-up glow-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 glow-button`}
                  >
                    <EditableIcon id={`${benefit.id}-icon`} defaultIcon={benefit.icon} className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-sora text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      <EditableText id={`${benefit.id}-title`} defaultValue={benefit.title} />
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      <EditableText id={`${benefit.id}-description`} defaultValue={benefit.description} />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in-up">
          {[
            { number: "500+", label: "Projects Completed", color: "text-cyan-400" },
            { number: "98%", label: "Client Satisfaction", color: "text-purple-400" },
            { number: "24/7", label: "Support Available", color: "text-green-400" },
            { number: "10+", label: "Years Experience", color: "text-orange-400" },
          ].map((stat, index) => (
            <div key={index} className="text-center glass-panel p-6 rounded-xl glow-on-scroll">
              <div className={`text-3xl md:text-4xl font-bold font-sora ${stat.color} mb-2`}>
                <EditableText id={`benefit-stat-${index}-number`} defaultValue={stat.number} />
              </div>
              <div className="text-gray-400 text-sm font-medium">
                <EditableText id={`benefit-stat-${index}-label`} defaultValue={stat.label} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
