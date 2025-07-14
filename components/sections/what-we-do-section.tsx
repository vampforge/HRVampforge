"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Smartphone } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { EditableIcon } from "@/components/cms/editable-icon"

const services = [
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software",
    description:
      "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
  },
  {
    id: "web-apps",
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications with cutting-edge technologies and seamless user experiences.",
  },
  {
    id: "saas-products",
    icon: Smartphone,
    title: "SaaS Products",
    description: "Scalable Software-as-a-Service platforms designed for performance, security, and user engagement.",
  },
]

export function WhatWeDoSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <EditableText
              id="what-we-do-title"
              defaultValue="What We Do"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            <EditableText
              id="what-we-do-description"
              defaultValue="We specialize in creating innovative digital solutions that drive business growth and transform ideas into reality."
            />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="glass-card group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <EditableIcon id={`${service.id}-icon`} defaultIcon={service.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  <EditableText id={`${service.id}-title`} defaultValue={service.title} />
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <EditableText id={`${service.id}-description`} defaultValue={service.description} />
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
