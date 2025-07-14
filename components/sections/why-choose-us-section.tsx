"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield, Zap, Target } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { EditableIcon } from "@/components/cms/editable-icon"

const features = [
  {
    id: "expertise",
    icon: Award,
    title: "Expert Team",
    description: "Skilled professionals with years of experience in cutting-edge technologies.",
  },
  {
    id: "client-focused",
    icon: Users,
    title: "Client-Focused",
    description: "We prioritize your success and work closely with you throughout the project.",
  },
  {
    id: "fast-delivery",
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient development processes that deliver quality results on time.",
  },
  {
    id: "secure",
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability in all our solutions.",
  },
  {
    id: "innovative",
    icon: Zap,
    title: "Innovative Solutions",
    description: "We use the latest technologies to create forward-thinking solutions.",
  },
  {
    id: "results-driven",
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable results that impact your business.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-transparent to-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <EditableText
              id="why-choose-us-title"
              defaultValue="Why Choose Us"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="why-choose-us-description"
              defaultValue="We combine technical expertise with business acumen to deliver solutions that not only work but drive real business value."
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              className="glass-card group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <EditableIcon id={`${feature.id}-icon`} defaultIcon={feature.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      <EditableText id={`${feature.id}-title`} defaultValue={feature.title} />
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <EditableText id={`${feature.id}-description`} defaultValue={feature.description} />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
