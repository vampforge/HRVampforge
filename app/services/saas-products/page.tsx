"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Smartphone, Users, CreditCard, BarChart3, Shield, Cloud } from "lucide-react"

export default function SaaSProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            linear-gradient(315deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)
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
                <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 mb-6">
                  SaaS Products
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Scalable SaaS Platforms
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Develop comprehensive SaaS platforms that scale with your business. Our solutions include
                  multi-tenancy, subscription management, analytics, and all the features needed for a successful SaaS
                  business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-400/50 text-green-400 hover:bg-green-400/10 hover:border-green-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
                  <Smartphone className="h-32 w-32 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Complete SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build and scale a successful Software-as-a-Service business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Multi-tenant Architecture",
                  description: "Secure, isolated environments for each customer with shared infrastructure.",
                },
                {
                  icon: CreditCard,
                  title: "Subscription Management",
                  description: "Complete billing system with multiple payment options and automated invoicing.",
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Reporting",
                  description: "Comprehensive dashboards and reports to track usage and business metrics.",
                },
                {
                  icon: Cloud,
                  title: "Scalable Infrastructure",
                  description: "Auto-scaling cloud infrastructure that grows with your user base.",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade security with compliance standards like SOC 2 and GDPR.",
                },
                {
                  icon: Smartphone,
                  title: "API-First Design",
                  description: "RESTful APIs and webhooks for seamless third-party integrations.",
                },
              ].map((feature, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                SaaS Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From MVP to market leader, we guide you through every stage of SaaS development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Market Research",
                  description: "Validate your idea and understand your target market needs.",
                },
                {
                  step: "02",
                  title: "MVP Development",
                  description: "Build a minimum viable product to test core functionality.",
                },
                {
                  step: "03",
                  title: "Scale & Optimize",
                  description: "Add features, optimize performance, and scale infrastructure.",
                },
                {
                  step: "04",
                  title: "Go-to-Market",
                  description: "Launch strategy, marketing automation, and growth optimization.",
                },
              ].map((phase, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                SaaS Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Modern, scalable technologies for building enterprise-grade SaaS platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "React",
                "Node.js",
                "PostgreSQL",
                "Redis",
                "Stripe",
                "AWS",
                "Docker",
                "Kubernetes",
                "TypeScript",
                "GraphQL",
                "Elasticsearch",
                "Monitoring",
              ].map((tech, index) => (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Why Choose Our SaaS Development?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Recurring revenue model",
                    "Scalable to millions of users",
                    "Automated billing and payments",
                    "Real-time analytics and insights",
                    "Enterprise-grade security",
                    "24/7 monitoring and support",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
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
                <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Ready to Build Your SaaS Platform?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create a scalable SaaS solution that generates recurring revenue and grows with your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-400/50 text-green-400 hover:bg-green-400/10 hover:border-green-400 px-8 py-3 text-lg glass-button bg-transparent"
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
