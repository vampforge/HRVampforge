"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Globe, Smartphone, Zap, Search, Shield, Palette } from "lucide-react"

export default function WebApplicationsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            linear-gradient(225deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)
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
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 mb-6">
                  Web Applications
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Modern Web Applications
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Build stunning, fast, and user-friendly web applications that convert visitors into customers. We use
                  the latest web technologies to create responsive designs that work perfectly across all devices and
                  platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="#contact">
                      Start Your Project
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-8 py-3 text-lg glass-button bg-transparent"
                  >
                    <a href="#features">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                  <Globe className="h-32 w-32 text-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What We Build
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web application solutions designed for modern businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Smartphone,
                  title: "Progressive Web Apps (PWA)",
                  description: "App-like experiences that work offline and can be installed on any device.",
                },
                {
                  icon: Zap,
                  title: "Single Page Applications",
                  description: "Fast, dynamic applications with smooth user interactions and navigation.",
                },
                {
                  icon: Globe,
                  title: "E-commerce Platforms",
                  description: "Complete online stores with payment processing and inventory management.",
                },
                {
                  icon: Palette,
                  title: "Content Management Systems",
                  description: "Easy-to-use systems for managing your website content and media.",
                },
                {
                  icon: Search,
                  title: "SEO Optimization",
                  description: "Built-in SEO best practices to improve your search engine rankings.",
                },
                {
                  icon: Shield,
                  title: "Security & Performance",
                  description: "Secure, fast-loading applications optimized for all devices.",
                },
              ].map((feature, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From concept to launch, we follow a proven process to deliver exceptional web applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "UI/UX Design",
                  description: "Create beautiful, user-friendly designs and prototypes.",
                },
                {
                  step: "02",
                  title: "Frontend Development",
                  description: "Build responsive, interactive user interfaces.",
                },
                {
                  step: "03",
                  title: "Backend Integration",
                  description: "Develop robust APIs and database connections.",
                },
                {
                  step: "04",
                  title: "Testing & Launch",
                  description: "Comprehensive testing followed by deployment and optimization.",
                },
              ].map((phase, index) => (
                <Card key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white group-hover:scale-110 transition-transform">
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Modern web technologies for fast, scalable, and maintainable applications.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Next.js",
                "React",
                "Vue.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Vercel",
                "GraphQL",
              ].map((tech, index) => (
                <Card key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
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
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our Web Applications?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "50% faster loading times",
                    "Mobile-responsive design",
                    "Improved search engine rankings",
                    "Enhanced user engagement",
                    "Cross-browser compatibility",
                    "Scalable architecture",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Zap className="h-32 w-32 text-green-400" />
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
                <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Build Your Web Application?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's create a stunning web application that engages your users and drives business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white border-0 px-8 py-3 text-lg glass-button glow-button"
                  >
                    <a href="/contact">
                      Get Started Today
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400 px-8 py-3 text-lg glass-button bg-transparent"
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
