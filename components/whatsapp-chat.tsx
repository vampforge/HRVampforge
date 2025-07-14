"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"
import { useCMS } from "@/components/cms/cms-provider"

export function WhatsAppChat() {
  const { getContent } = useCMS()
  const [isVisible, setIsVisible] = useState(true)
  const [whatsappSettings, setWhatsappSettings] = useState({
    number: "+917464003631",
    message: "Hi, I have a query about VAMPForge services.",
    enabled: true,
  })

  useEffect(() => {
    // Load WhatsApp settings from CMS
    const settings = getContent("whatsapp-settings", whatsappSettings)
    setWhatsappSettings(settings)
  }, [getContent])

  const handleWhatsAppClick = () => {
    const cleanNumber = whatsappSettings.number.replace(/[^0-9]/g, "")
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsappSettings.message)}`
    window.open(url, "_blank")
  }

  if (!whatsappSettings.enabled || !isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 group relative glass-button"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />

        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg group-hover:bg-green-300/30 transition-all" />

        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      </Button>

      {/* Close button for testing */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-400 text-white rounded-full"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  )
}
