"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useCMS } from "./cms-provider"
import { cn } from "@/lib/utils"

interface EditableButtonProps {
  id: string
  defaultText: string
  defaultHref?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  children?: React.ReactNode
}

export function EditableButton({
  id,
  defaultText,
  defaultHref = "#",
  className,
  variant = "default",
  children,
}: EditableButtonProps) {
  const { isEditMode, saveContent, getContent } = useCMS()
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(defaultText)
  const [href, setHref] = useState(defaultHref)

  useEffect(() => {
    const savedData = getContent(id, { text: defaultText, href: defaultHref })
    setText(savedData.text || defaultText)
    setHref(savedData.href || defaultHref)
  }, [id, defaultText, defaultHref, getContent])

  const handleSave = () => {
    saveContent(id, { text, href })
    setIsEditing(false)
  }

  if (isEditMode && isEditing) {
    return (
      <div className="space-y-2 p-2 bg-white/10 rounded border border-cyan-400/50">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Button text"
          className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm"
        />
        <input
          type="text"
          value={href}
          onChange={(e) => setHref(e.target.value)}
          placeholder="Button link"
          className="w-full bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm"
        />
        <div className="flex space-x-2">
          <button onClick={handleSave} className="px-2 py-1 bg-green-500 text-white rounded text-xs">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="px-2 py-1 bg-gray-500 text-white rounded text-xs">
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <Button
      asChild
      variant={variant}
      className={cn(className, isEditMode && "relative hover:outline hover:outline-1 hover:outline-cyan-400/50")}
      onClick={isEditMode ? () => setIsEditing(true) : undefined}
    >
      <a href={href}>
        {text}
        {children}
      </a>
    </Button>
  )
}
