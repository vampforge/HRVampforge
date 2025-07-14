"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const [projectForm, setProjectForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })
  const [callForm, setCallForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  })

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Save to localStorage (CMS functionality)
    const submissions = JSON.parse(localStorage.getItem("projectSubmissions") || "[]")
    submissions.push({
      ...projectForm,
      timestamp: new Date().toISOString(),
      type: "project",
    })
    localStorage.setItem("projectSubmissions", JSON.stringify(submissions))

    // Here you would integrate with EmailJS
    toast({
      title: "Project inquiry submitted!",
      description: "We'll get back to you within 24 hours.",
    })

    setProjectForm({ name: "", email: "", projectType: "", message: "" })
  }

  const handleCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Save to localStorage (CMS functionality)
    const submissions = JSON.parse(localStorage.getItem("callSubmissions") || "[]")
    submissions.push({
      ...callForm,
      timestamp: new Date().toISOString(),
      type: "call",
    })
    localStorage.setItem("callSubmissions", JSON.stringify(submissions))

    toast({
      title: "Call scheduled!",
      description: "We'll contact you at the scheduled time.",
    })

    setCallForm({ name: "", email: "", date: "", time: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Let's discuss how we can help transform your ideas into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">support@vampforge.site</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">+91 7464003631</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">Global Remote Services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Form */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Send className="mr-2 h-5 w-5 text-cyan-400" />
                Start Your Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProjectSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={projectForm.name}
                  onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={projectForm.email}
                  onChange={(e) => setProjectForm({ ...projectForm, email: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Select
                  value={projectForm.projectType}
                  onValueChange={(value) => setProjectForm({ ...projectForm, projectType: value })}
                >
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black/90 border-white/20">
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="consulting">IT Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Project Details"
                  value={projectForm.message}
                  onChange={(e) => setProjectForm({ ...projectForm, message: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[100px]"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Call Scheduling Form */}
          <Card className="bg-white/5 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-cyan-400" />
                Schedule a Call
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCallSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={callForm.name}
                  onChange={(e) => setCallForm({ ...callForm, name: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={callForm.email}
                  onChange={(e) => setCallForm({ ...callForm, email: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  type="date"
                  value={callForm.date}
                  onChange={(e) => setCallForm({ ...callForm, date: e.target.value })}
                  className="bg-white/5 border-white/20 text-white"
                  required
                />
                <Input
                  type="time"
                  value={callForm.time}
                  onChange={(e) => setCallForm({ ...callForm, time: e.target.value })}
                  className="bg-white/5 border-white/20 text-white"
                  required
                />
                <Textarea
                  placeholder="Additional Notes"
                  value={callForm.message}
                  onChange={(e) => setCallForm({ ...callForm, message: e.target.value })}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400"
                >
                  Schedule Call
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
