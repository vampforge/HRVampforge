"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
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
      })
      localStorage.setItem("vampforge_contact_submissions", JSON.stringify(submissions))

      // Simulate email sending (replace with EmailJS integration)
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="glass-input"
        required
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="glass-input"
        required
      />
      <Input
        placeholder="Company Name"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="glass-input"
      />
      <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
        <SelectTrigger className="glass-input">
          <SelectValue placeholder="Project Type" />
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
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 glass-button glow-button"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
