"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Code, Database, Cloud, Shield, Zap, Users } from "lucide-react"

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)
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
                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 mb-6">
                  Custom Software Development
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Tailored Software Solutions
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We create robust, scalable software applications using cutting-edge technologies. From desktop
                  applications to enterprise solutions, our team delivers high-quality code that drives business growth
                  and operational efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Code className="h-32 w-32 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What We Deliver
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive custom software solutions designed to meet your specific business requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Custom Application Development",
                  description: "Built from scratch to match your exact specifications and business processes.",
                },
                {
                  icon: Database,
                  title: "Database Design & Optimization",
                  description: "Efficient data structures and optimized queries for maximum performance.",
                },
                {
                  icon: Cloud,
                  title: "Cloud Integration",
                  description: "Seamless integration with cloud platforms for scalability and reliability.",
                },
                {
                  icon: Shield,
                  title: "Security Implementation",
                  description: "Enterprise-grade security measures to protect your data and users.",
                },
                {
                  icon: Zap,
                  title: "Performance Optimization",
                  description: "Fast, efficient applications that handle high loads with ease.",
                },
                {
                  icon: Users,
                  title: "User-Centric Design",
                  description: "Intuitive interfaces designed for maximum user adoption and satisfaction.",
                },
              ].map((feature, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 font-sora">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery every time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Requirements Analysis",
                  description: "Deep dive into your business needs and technical requirements.",
                },
                {
                  step: "02",
                  title: "System Design",
                  description: "Create detailed architecture and design specifications.",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Build your solution using best practices and modern technologies.",
                },
                {
                  step: "04",
                  title: "Testing & Deployment",
                  description: "Rigorous testing followed by smooth deployment and support.",
                },
              ].map((phase, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
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

        {/* Technologies Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies to build robust and scalable solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "React",
                "Node.js",
                "Python",
                "Java",
                ".NET",
                "PostgreSQL",
                "MongoDB",
                "AWS",
                "Docker",
                "Kubernetes",
                "TypeScript",
                "GraphQL",
              ].map((tech, index) => (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {tech}
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose Our Custom Software?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Increased operational efficiency by 40%",
                    "Reduced manual processes by 60%",
                    "Improved data accuracy and reporting",
                    "Enhanced security and compliance",
                    "Scalable architecture for future growth",
                    "24/7 ongoing support and maintenance",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <Star className="h-32 w-32 text-green-400" />
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
                <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Ready to Build Your Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss your requirements and create a tailored software solution that drives your business
                  forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <a href="/contact">Schedule Consultation</a>
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
