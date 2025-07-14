"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useCMS } from "./cms-provider"
import { cn } from "@/lib/utils"
import { Upload, X } from "lucide-react"

interface EditableImageProps {
  id: string
  defaultSrc: string
  alt: string
  className?: string
  fallback?: React.ReactNode
}

export function EditableImage({ id, defaultSrc, alt, className, fallback }: EditableImageProps) {
  const { isEditMode, saveContent, getContent } = useCMS()
  const [isEditing, setIsEditing] = useState(false)
  const [imageSrc, setImageSrc] = useState(defaultSrc)
  const [imageError, setImageError] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const savedSrc = getContent(id, defaultSrc)
    setImageSrc(savedSrc)
  }, [id, defaultSrc, getContent])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        setImageSrc(result)
        saveContent(id, result)
        setIsEditing(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemove = () => {
    setImageSrc(defaultSrc)
    saveContent(id, defaultSrc)
    setIsEditing(false)
  }

  if (isEditMode && isEditing) {
    return (
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded flex items-center justify-center z-10">
          <div className="bg-white/10 border border-white/20 rounded-lg p-4 space-y-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 px-3 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
            >
              <Upload className="h-4 w-4" />
              <span>Upload Image</span>
            </button>
            <button
              onClick={handleRemove}
              className="flex items-center space-x-2 px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              <X className="h-4 w-4" />
              <span>Remove</span>
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="w-full px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        {imageError || !imageSrc ? (
          fallback || <div className={cn("bg-gray-300 rounded", className)} />
        ) : (
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            className={className}
            onError={() => setImageError(true)}
          />
        )}
      </div>
    )
  }

  if (imageError || !imageSrc) {
    return (
      <div
        className={cn(className, isEditMode && "cursor-pointer hover:opacity-80 transition-opacity")}
        onClick={() => isEditMode && setIsEditing(true)}
      >
        {fallback || <div className="bg-gray-300 rounded w-full h-full" />}
      </div>
    )
  }

  return (
    <img
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      className={cn(
        className,
        isEditMode &&
          "cursor-pointer hover:opacity-80 transition-opacity hover:outline hover:outline-2 hover:outline-cyan-400/50",
      )}
      onClick={() => isEditMode && setIsEditing(true)}
      onError={() => setImageError(true)}
    />
  )
}
