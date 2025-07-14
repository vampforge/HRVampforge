"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2, ArrowRight, Sparkles, Mail, Phone, MapPin } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { useState } from "react"

export function ContactCTA() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to localStorage for admin panel
      const submissions = JSON.parse(localStorage.getItem("vampforge_contact_submissions") || "[]")
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        type: "contact",
        source: "homepage",
      })
      localStorage.setItem("vampforge_contact_submissions", JSON.stringify(submissions))

      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      setFormData({ name: "", email: "", company: "", projectType: "", message: "" })
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(6,182,212,0.2)_12%,transparent_12.5%,transparent_87%,rgba(6,182,212,0.2)_87.5%,rgba(6,182,212,0.2)),linear-gradient(150deg,rgba(6,182,212,0.2)_12%,transparent_12.5%,transparent_87%,rgba(6,182,212,0.2)_87.5%,rgba(6,182,212,0.2))] bg-[size:20px_35px]" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center glass-panel px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-sm font-medium text-cyan-400">Get Started</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="contact-cta-title"
              defaultValue="Ready to Transform Your Business?"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="contact-cta-description"
              defaultValue="Let's discuss how we can help accelerate your business growth with cutting-edge technology solutions."
            />
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card fade-in-up glow-on-scroll">
            <CardHeader>
              <CardTitle className="text-white flex items-center font-sora text-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <EditableText id="contact-cta-form-title" defaultValue="Start Your Project" />
                  <p className="text-sm text-gray-400 font-normal">Get a free consultation</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-input h-12"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-input h-12"
                    required
                  />
                </div>
                <Input
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="glass-input h-12"
                />
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="glass-input h-12">
                    <SelectValue placeholder="What do you need help with?" />
                  </SelectTrigger>
                  <SelectContent className="glass-modal">
                    <SelectItem value="web-app">Web Application</SelectItem>
                    <SelectItem value="custom-software">Custom Software</SelectItem>
                    <SelectItem value="saas-product">SaaS Product</SelectItem>
                    <SelectItem value="consulting">IT Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-input min-h-[120px]"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 glass-button glow-button h-12 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 fade-in-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-sora">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Ready to start your project? We're here to help you transform your ideas into powerful digital
                solutions.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-sora">Email Us</h4>
                      <p className="text-gray-300">
                        <EditableText id="contact-cta-email" defaultValue="support@vampforge.site" />
                      </p>
                      <p className="text-sm text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-sora">Call Us</h4>
                      <p className="text-gray-300">
                        <EditableText id="contact-cta-phone" defaultValue="+91 7464003631" />
                      </p>
                      <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold font-sora">Visit Us</h4>
                      <p className="text-gray-300">
                        <EditableText id="contact-cta-location" defaultValue="Global Remote Services" />
                      </p>
                      <p className="text-sm text-gray-400">Available worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-6">
              <Button
                asChild
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-8 py-3 text-lg glass-button bg-transparent"
              >
                <a href="/contact">
                  More Contact Options
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
