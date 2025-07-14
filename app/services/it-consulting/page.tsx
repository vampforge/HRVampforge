"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Settings, Cloud, Shield, BarChart3, Users, Lightbulb } from "lucide-react"

export default function ITConsultingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 35% 65%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 65% 35%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            linear-gradient(45deg, rgba(249, 115, 22, 0.1) 0%, rgba(239, 68, 68, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)
          `,
          backgroundSize: "400% 400%, 400% 400%, 300% 300%, 200% 200%",
          backgroundPosition: "0% 0%, 100% 100%, 50% 50%, 0% 100%",
        }}
      />

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 mb-6">
                  IT Consulting
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Strategic IT Consulting
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Navigate the complex world of technology with our expert guidance. We help businesses make informed
                  decisions about their IT infrastructure, digital transformation strategies, and technology
                  investments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="#contact">
                      Start Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <a href="#services">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center">
                  <Settings className="h-32 w-32 text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Consulting Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT consulting services to optimize your technology investments and strategy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Technology Strategy Planning",
                  description: "Develop comprehensive technology roadmaps aligned with your business goals.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Migration Services",
                  description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency.",
                },
                {
                  icon: Shield,
                  title: "Security Consulting",
                  description: "Comprehensive security assessments and implementation of best practices.",
                },
                {
                  icon: BarChart3,
                  title: "Performance Optimization",
                  description: "Analyze and optimize your systems for maximum performance and efficiency.",
                },
                {
                  icon: Users,
                  title: "Team Training & Mentoring",
                  description: "Upskill your team with the latest technologies and best practices.",
                },
                {
                  icon: Settings,
                  title: "System Architecture Design",
                  description: "Design scalable, maintainable architectures for your applications.",
                },
              ].map((service, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 font-sora">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Our Consulting Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to understanding your needs and delivering actionable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Comprehensive analysis of your current technology landscape.",
                },
                {
                  step: "02",
                  title: "Strategy",
                  description: "Develop customized strategies aligned with your business objectives.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Execute the strategy with detailed planning and expert guidance.",
                },
                {
                  step: "04",
                  title: "Support",
                  description: "Ongoing support and optimization to ensure continued success.",
                },
              ].map((phase, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                      {phase.step}
                    </div>
                    <CardTitle className="text-xl font-sora text-white text-center">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deep knowledge across modern technologies and platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "AWS",
                "Azure",
                "Google Cloud",
                "Docker",
                "Kubernetes",
                "Terraform",
                "Jenkins",
                "Monitoring",
                "Security",
                "DevOps",
                "Microservices",
                "Architecture",
              ].map((expertise, index) => (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {expertise}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Why Choose Our IT Consulting?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "30% reduction in IT costs",
                    "Improved system reliability",
                    "Enhanced security posture",
                    "Faster time-to-market",
                    "Better technology ROI",
                    "Expert guidance and support",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="h-32 w-32 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Ready to Optimize Your IT Strategy?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT consulting services can help you make better technology decisions and drive
                  business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="/contact">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10 hover:border-orange-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
