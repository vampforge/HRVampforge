"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Code, Globe, Settings, Smartphone, ArrowRight, Sparkles, CheckCircle, Star } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { EditableIcon } from "@/components/cms/editable-icon"

const services = [
  {
    id: "custom-software",
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions built to meet your specific business requirements and scale with growth",
    shortDesc: "Enterprise-grade custom software solutions",
    price: "Starting from $5,000",
    duration: "2-6 months",
    rating: 4.9,
    reviews: 127,
    details:
      "We create robust, scalable software applications using cutting-edge technologies. From desktop applications to enterprise solutions, our team delivers high-quality code that drives business growth and operational efficiency.",
    features: [
      "Custom Application Development",
      "Legacy System Modernization",
      "API Development & Integration",
      "Database Design & Optimization",
      "Quality Assurance & Testing",
      "Ongoing Maintenance & Support",
      "Cloud Migration Services",
      "Performance Optimization",
    ],
    technologies: ["React", "Node.js", "Python", "Java", ".NET", "PostgreSQL", "MongoDB", "AWS"],
    process: [
      "Requirements Analysis & Planning",
      "System Architecture Design",
      "Development & Implementation",
      "Testing & Quality Assurance",
      "Deployment & Go-Live",
      "Training & Documentation",
      "Ongoing Support & Maintenance",
    ],
    benefits: [
      "Increased operational efficiency by 40%",
      "Reduced manual processes by 60%",
      "Improved data accuracy and reporting",
      "Enhanced security and compliance",
      "Scalable architecture for future growth",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: "web-applications",
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications with exceptional user experiences and performance",
    shortDesc: "High-performance web applications",
    price: "Starting from $3,000",
    duration: "1-4 months",
    rating: 4.8,
    reviews: 89,
    details:
      "Build stunning, fast, and user-friendly web applications that convert visitors into customers. We use the latest web technologies to create responsive designs that work perfectly across all devices and platforms.",
    features: [
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "E-commerce Platforms",
      "Content Management Systems",
      "Real-time Applications",
      "Performance Optimization",
      "SEO Optimization",
      "Mobile-First Design",
    ],
    technologies: ["Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    process: [
      "UI/UX Design & Prototyping",
      "Frontend Development",
      "Backend API Development",
      "Database Integration",
      "Testing & Optimization",
      "SEO Implementation",
      "Deployment & Launch",
    ],
    benefits: [
      "50% faster loading times",
      "Mobile-responsive design",
      "Improved search engine rankings",
      "Enhanced user engagement",
      "Cross-browser compatibility",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "saas-products",
    icon: Smartphone,
    title: "SaaS Products",
    description: "Scalable Software-as-a-Service platforms designed for modern businesses and growth",
    shortDesc: "Complete SaaS platform development",
    price: "Starting from $10,000",
    duration: "3-8 months",
    rating: 4.9,
    reviews: 156,
    details:
      "Develop comprehensive SaaS platforms that scale with your business. Our solutions include multi-tenancy, subscription management, analytics, and all the features needed for a successful SaaS business.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "User Analytics & Reporting",
      "Third-party Integrations",
      "Scalable Infrastructure",
      "Security & Compliance",
      "Payment Processing",
      "Admin Dashboard",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker", "Kubernetes"],
    process: [
      "Market Research & Validation",
      "MVP Development",
      "User Testing & Feedback",
      "Feature Enhancement",
      "Scaling & Optimization",
      "Go-to-Market Strategy",
      "Ongoing Development",
    ],
    benefits: [
      "Recurring revenue model",
      "Scalable to millions of users",
      "Automated billing and payments",
      "Real-time analytics and insights",
      "Enterprise-grade security",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    id: "consulting",
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology consulting and digital transformation services for enterprises",
    shortDesc: "Expert technology consulting",
    price: "Starting from $150/hour",
    duration: "Ongoing",
    rating: 4.7,
    reviews: 203,
    details:
      "Navigate the complex world of technology with our expert guidance. We help businesses make informed decisions about their IT infrastructure, digital transformation strategies, and technology investments.",
    features: [
      "Technology Strategy Planning",
      "System Architecture Design",
      "Digital Transformation",
      "Security Consulting",
      "Cloud Migration Services",
      "Performance Optimization",
      "Team Training & Mentoring",
      "Technology Audits",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "Jenkins", "Monitoring Tools"],
    process: [
      "Current State Assessment",
      "Gap Analysis",
      "Strategy Development",
      "Implementation Planning",
      "Execution & Monitoring",
      "Training & Knowledge Transfer",
      "Ongoing Support",
    ],
    benefits: [
      "30% reduction in IT costs",
      "Improved system reliability",
      "Enhanced security posture",
      "Faster time-to-market",
      "Better technology ROI",
    ],
    color: "from-orange-500 to-red-500",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="services-title"
              defaultValue="Comprehensive Solutions"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="services-description"
              defaultValue="From concept to deployment, we provide end-to-end technology solutions that transform your business and accelerate growth."
            />
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="glass-card group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 fade-in-up glow-on-scroll relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-button`}
                  >
                    <EditableIcon id={`${service.id}-icon`} defaultIcon={service.icon} className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">{service.rating}</span>
                      <span className="text-xs text-gray-400">({service.reviews})</span>
                    </div>
                    <Badge className={`bg-gradient-to-r ${service.color} text-white`}>{service.duration}</Badge>
                  </div>
                </div>

                <CardTitle className="text-white text-2xl font-sora mb-3">
                  <EditableText id={`${service.id}-title`} defaultValue={service.title} />
                </CardTitle>

                <CardDescription className="text-gray-300 text-lg leading-relaxed mb-4">
                  <EditableText id={`${service.id}-description`} defaultValue={service.description} />
                </CardDescription>

                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                  <span className="text-sm text-gray-400">{service.shortDesc}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 group glass-button bg-transparent"
                    >
                      View Details & Process
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glass-modal max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-sora bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center">
                        <service.icon className="mr-3 h-8 w-8 text-cyan-400" />
                        <EditableText id={`${service.id}-modal-title`} defaultValue={service.title} />
                      </DialogTitle>
                      <DialogDescription className="text-gray-300 text-lg leading-relaxed">
                        <EditableText id={`${service.id}-modal-description`} defaultValue={service.details} />
                      </DialogDescription>
                    </DialogHeader>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-cyan-400 font-sora">Key Features:</h4>
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-300 glass-panel p-3 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              <EditableText id={`${service.id}-feature-${idx}`} defaultValue={feature} />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-purple-400 font-sora">Our Process:</h4>
                        <div className="space-y-3">
                          {service.process.map((step, idx) => (
                            <div key={idx} className="flex items-start text-gray-300 glass-panel p-3 rounded-lg">
                              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                                {idx + 1}
                              </div>
                              <EditableText id={`${service.id}-process-${idx}`} defaultValue={step} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold mb-4 text-green-400 font-sora">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold mb-4 text-yellow-400 font-sora">Expected Benefits:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                            <EditableText id={`${service.id}-benefit-${idx}`} defaultValue={benefit} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  asChild
                  className={`w-full bg-gradient-to-r ${service.color} hover:scale-105 text-white border-0 glass-button glow-button transition-all duration-300`}
                >
                  <a href="#contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
