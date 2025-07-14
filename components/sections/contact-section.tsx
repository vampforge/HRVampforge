"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Sparkles, Clock, Users, Award } from "lucide-react"
import { EditableText } from "@/components/cms/editable-text"
import { ContactForm } from "@/components/forms/contact-form"
import { QuoteRequestForm } from "@/components/forms/quote-request-form"
import { ScheduleCallForm } from "@/components/forms/schedule-call-form"

export function ContactSection() {
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
            <span className="text-sm font-medium text-cyan-400">Get In Touch</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            <EditableText
              id="contact-title"
              defaultValue="Let's Build Something Amazing"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <EditableText
              id="contact-description"
              defaultValue="Ready to transform your ideas into reality? Let's discuss how we can help accelerate your business growth with cutting-edge technology solutions."
            />
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 fade-in-up">
          <Card className="glass-card glow-on-scroll group hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold font-sora mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">
                <EditableText id="contact-email" defaultValue="support@vampforge.site" />
              </p>
              <p className="text-sm text-gray-400">We respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="glass-card glow-on-scroll group hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold font-sora mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">
                <EditableText id="contact-phone" defaultValue="+91 7464003631" />
              </p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM IST</p>
            </CardContent>
          </Card>

          <Card className="glass-card glow-on-scroll group hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 glow-button">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold font-sora mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-2">
                <EditableText id="contact-location" defaultValue="Global Remote Services" />
              </p>
              <p className="text-sm text-gray-400">Available worldwide</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Forms Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="glass-card fade-in-up glow-on-scroll lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center font-sora text-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <div>
                  <EditableText id="contact-form-title" defaultValue="Start Your Project" />
                  <p className="text-sm text-gray-400 font-normal">Get a free consultation</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ContactForm />

              {/* Quick Stats */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-4 w-4 text-cyan-400 mr-1" />
                    </div>
                    <div className="text-sm font-semibold text-white">24h</div>
                    <div className="text-xs text-gray-400">Response</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-purple-400 mr-1" />
                    </div>
                    <div className="text-sm font-semibold text-white">500+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Award className="h-4 w-4 text-green-400 mr-1" />
                    </div>
                    <div className="text-sm font-semibold text-white">98%</div>
                    <div className="text-xs text-gray-400">Success</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quote Request Form */}
          <Card className="glass-card fade-in-up glow-on-scroll lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center font-sora text-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <EditableText id="quote-form-title" defaultValue="Request a Quote" />
                  <p className="text-sm text-gray-400 font-normal">Get detailed pricing</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <QuoteRequestForm />

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                    Detailed project breakdown
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                    Timeline estimation
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                    Technology recommendations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Call Form */}
          <Card className="glass-card fade-in-up glow-on-scroll lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center font-sora text-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <EditableText id="schedule-form-title" defaultValue="Schedule a Call" />
                  <p className="text-sm text-gray-400 font-normal">Book a free consultation</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <ScheduleCallForm />

              {/* Call Benefits */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    Free 30-minute consultation
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    Expert technical advice
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    Project roadmap discussion
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 fade-in-up">
          <div className="glass-panel p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-sora">Why Choose VAMPForge?</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
