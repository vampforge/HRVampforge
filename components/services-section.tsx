"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Code, Globe, Settings, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
    details:
      "We create robust, scalable software applications using cutting-edge technologies. From desktop applications to enterprise solutions, our team delivers high-quality code that drives business growth.",
    features: [
      "Custom Application Development",
      "API Integration",
      "Database Design",
      "Quality Assurance",
      "Maintenance & Support",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications",
    details:
      "Build stunning, fast, and user-friendly websites that convert visitors into customers. We use the latest web technologies to create responsive designs that work perfectly on all devices.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "CMS Development",
      "SEO Optimization",
      "Performance Optimization",
    ],
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology consulting and digital transformation",
    details:
      "Navigate the complex world of technology with our expert guidance. We help businesses make informed decisions about their IT infrastructure and digital transformation strategies.",
    features: [
      "Technology Strategy",
      "System Architecture",
      "Digital Transformation",
      "Security Consulting",
      "Cloud Migration",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 group bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-black/90 backdrop-blur-xl border-white/20 text-white max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {service.title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-300 text-base">{service.details}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-4 text-cyan-400">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
