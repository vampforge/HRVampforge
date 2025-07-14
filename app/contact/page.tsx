"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/sections/contact-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div
        className="fixed inset-0 animated-bg opacity-60"
        style={{
          background: `
            radial-gradient(circle at 25% 75%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 45% 55%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
            linear-gradient(225deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(16, 185, 129, 0.1) 100%)
          `,
          backgroundSize: "600% 600%, 400% 400%, 300% 300%, 200% 200%",
          backgroundPosition: "0% 0%, 100% 100%, 50% 50%, 0% 100%",
        }}
      />

      <Navigation />

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Ready to transform your ideas into reality? Let's discuss how we can help accelerate your business growth
              with cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold font-sora mb-2">Email Us</h3>
                  <p className="text-gray-300 mb-2">support@vampforge.site</p>
                  <p className="text-sm text-gray-400">We respond within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold font-sora mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-2">+91 7464003631</p>
                  <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM IST</p>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold font-sora mb-2">Visit Us</h3>
                  <p className="text-gray-300 mb-2">Global Remote Services</p>
                  <p className="text-sm text-gray-400">Available worldwide</p>
                </CardContent>
              </Card>

              <Card className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold font-sora mb-2">Business Hours</h3>
                  <p className="text-gray-300 mb-2">24/7 Support</p>
                  <p className="text-sm text-gray-400">Always here to help</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sora mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes! We offer comprehensive support packages including maintenance, updates, security monitoring, and technical assistance to ensure your solution continues to perform optimally.",
                },
                {
                  question: "What technologies do you work with?",
                  answer:
                    "We work with modern technologies including React, Node.js, Python, AWS, and more. We choose the best tech stack based on your specific requirements and goals.",
                },
                {
                  question: "Can you work with our existing team?",
                  answer:
                    "We can integrate with your existing team, provide consulting services, or work as an extension of your development team to achieve your goals.",
                },
                {
                  question: "How do you ensure project quality?",
                  answer:
                    "We follow rigorous testing procedures, code reviews, and quality assurance processes. Every project goes through multiple testing phases before delivery.",
                },
                {
                  question: "What are your payment terms?",
                  answer:
                    "We typically work with milestone-based payments. A deposit is required to start, with remaining payments tied to project milestones and final delivery.",
                },
              ].map((faq, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white font-sora text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
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
