"use client"

import { useState, useEffect } from "react"
import { useCMS } from "./cms-provider"
import { cn } from "@/lib/utils"
import * as Icons from "lucide-react"

interface EditableIconProps {
  id: string
  defaultIcon: any
  className?: string
}

const iconOptions = [
  "Code",
  "Globe",
  "Smartphone",
  "Settings",
  "Users",
  "Award",
  "Clock",
  "Shield",
  "Target",
  "Zap",
  "Lightbulb",
  "Mail",
  "Phone",
  "MapPin",
  "Send",
  "Calendar",
  "MessageSquare",
  "Star",
  "Quote",
  "ChevronLeft",
  "ChevronRight",
  "ArrowRight",
  "Play",
  "Menu",
  "X",
  "Download",
  "Upload",
  "Edit",
  "Trash2",
  "Plus",
  "Minus",
]

export function EditableIcon({ id, defaultIcon, className }: EditableIconProps) {
  const { isEditMode, saveContent, getContent } = useCMS()
  const [isEditing, setIsEditing] = useState(false)
  const [selectedIcon, setSelectedIcon] = useState(defaultIcon.name || "Code")

  useEffect(() => {
    const savedIcon = getContent(id, defaultIcon.name || "Code")
    setSelectedIcon(savedIcon)
  }, [id, defaultIcon, getContent])

  const handleSave = (iconName: string) => {
    setSelectedIcon(iconName)
    saveContent(id, iconName)
    setIsEditing(false)
  }

  const IconComponent = (Icons as any)[selectedIcon] || defaultIcon

  if (isEditMode && isEditing) {
    return (
      <div className="absolute z-50 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg p-4 max-w-xs">
        <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
          {iconOptions.map((iconName) => {
            const Icon = (Icons as any)[iconName]
            if (!Icon) return null

            return (
              <button
                key={iconName}
                onClick={() => handleSave(iconName)}
                className={cn(
                  "p-2 rounded hover:bg-white/10 transition-colors",
                  selectedIcon === iconName && "bg-cyan-500/20 border border-cyan-400/50",
                )}
              >
                <Icon className="h-4 w-4 text-white" />
              </button>
            )
          })}
        </div>
        <button
          onClick={() => setIsEditing(false)}
          className="mt-2 w-full px-2 py-1 bg-gray-500 text-white rounded text-xs"
        >
          Cancel
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      <IconComponent
        className={cn(className, isEditMode && "cursor-pointer hover:scale-110 transition-transform")}
        onClick={() => isEditMode && setIsEditing(true)}
      />
    </div>
  )
}
