"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useCMS } from "./cms-provider"
import { cn } from "@/lib/utils"

interface EditableTextProps {
  id: string
  defaultValue: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  multiline?: boolean
}

export function EditableText({
  id,
  defaultValue,
  className,
  as: Component = "span",
  multiline = false,
}: EditableTextProps) {
  const { isEditMode, saveContent, getContent } = useCMS()
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    const savedValue = getContent(id, defaultValue)
    setValue(savedValue)
  }, [id, defaultValue, getContent])

  const handleSave = () => {
    saveContent(id, value)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault()
      handleSave()
    }
    if (e.key === "Escape") {
      setValue(getContent(id, defaultValue))
      setIsEditing(false)
    }
  }

  if (isEditMode && isEditing) {
    return multiline ? (
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={cn(
          "bg-white/10 border border-cyan-400/50 rounded px-2 py-1 text-white resize-none min-h-[100px]",
          className,
        )}
        autoFocus
      />
    ) : (
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className={cn("bg-white/10 border border-cyan-400/50 rounded px-2 py-1 text-white", className)}
        autoFocus
      />
    )
  }

  return (
    <Component
      className={cn(
        className,
        isEditMode &&
          "cursor-pointer hover:bg-white/5 hover:outline hover:outline-1 hover:outline-cyan-400/50 rounded px-1 transition-all",
      )}
      onClick={() => isEditMode && setIsEditing(true)}
    >
      {value}
    </Component>
  )
}
