"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Loader2 } from "lucide-react"

export function ScheduleCallForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save to localStorage for admin panel
      const submissions = JSON.parse(localStorage.getItem("vampforge_call_submissions") || "[]")
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        type: "call",
      })
      localStorage.setItem("vampforge_call_submissions", JSON.stringify(submissions))

      // Simulate email sending
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Call scheduled successfully!",
        description: "We'll contact you at the scheduled time.",
      })

      setFormData({ name: "", email: "", phone: "", date: "", time: "", message: "" })
    } catch (error) {
      toast({
        title: "Error scheduling call",
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
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="glass-input"
        required
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="glass-input"
          required
        />
        <Input
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
          className="glass-input"
          required
        />
      </div>
      <Textarea
        placeholder="Additional Notes (Optional)"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="glass-input"
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 glass-button glow-button"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Scheduling...
          </>
        ) : (
          <>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Call
          </>
        )}
      </Button>
    </form>
  )
}
