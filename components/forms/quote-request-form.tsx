"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { MessageSquare, Loader2 } from "lucide-react"

export function QuoteRequestForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to localStorage for admin panel
      const submissions = JSON.parse(localStorage.getItem("vampforge_quote_submissions") || "[]")
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        type: "quote",
      })
      localStorage.setItem("vampforge_quote_submissions", JSON.stringify(submissions))

      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Quote request submitted!",
        description: "We'll prepare a detailed quote and send it to you within 48 hours.",
      })

      setFormData({ name: "", email: "", company: "", budget: "", timeline: "", description: "" })
    } catch (error) {
      toast({
        title: "Error submitting request",
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
      <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
        <SelectTrigger className="glass-input">
          <SelectValue placeholder="Project Budget" />
        </SelectTrigger>
        <SelectContent className="glass-modal">
          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
          <SelectItem value="100k+">$100,000+</SelectItem>
        </SelectContent>
      </Select>
      <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
        <SelectTrigger className="glass-input">
          <SelectValue placeholder="Project Timeline" />
        </SelectTrigger>
        <SelectContent className="glass-modal">
          <SelectItem value="1-3months">1-3 months</SelectItem>
          <SelectItem value="3-6months">3-6 months</SelectItem>
          <SelectItem value="6-12months">6-12 months</SelectItem>
          <SelectItem value="12months+">12+ months</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        placeholder="Project Description & Requirements"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        className="glass-input min-h-[100px]"
        required
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 glass-button glow-button"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <MessageSquare className="mr-2 h-4 w-4" />
            Request Quote
          </>
        )}
      </Button>
    </form>
  )
}
