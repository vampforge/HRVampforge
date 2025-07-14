"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CMSContextType {
  isAuthenticated: boolean
  isEditMode: boolean
  login: (username: string, password: string) => boolean
  logout: () => void
  toggleEditMode: () => void
  saveContent: (id: string, content: any) => void
  getContent: (id: string, defaultValue?: any) => any
  exportData: () => void
  resetToDefaults: () => void
}

const CMSContext = createContext<CMSContextType | undefined>(undefined)

const validCredentials = [
  { username: "admin", password: "vampforge2025" },
  { username: "aman", password: "founder123" },
  { username: "cms", password: "cms@2025" },
]

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("vampforge_auth")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const login = (username: string, password: string): boolean => {
    const isValid = validCredentials.some((cred) => cred.username === username && cred.password === password)

    if (isValid) {
      setIsAuthenticated(true)
      localStorage.setItem("vampforge_auth", "true")
      localStorage.setItem("vampforge_user", username)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setIsEditMode(false)
    localStorage.removeItem("vampforge_auth")
    localStorage.removeItem("vampforge_user")
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const saveContent = (id: string, content: any) => {
    const existingContent = JSON.parse(localStorage.getItem("vampforge_content") || "{}")
    existingContent[id] = content
    localStorage.setItem("vampforge_content", JSON.stringify(existingContent))
  }

  const getContent = (id: string, defaultValue: any = "") => {
    const content = JSON.parse(localStorage.getItem("vampforge_content") || "{}")
    return content[id] !== undefined ? content[id] : defaultValue
  }

  const exportData = () => {
    const content = localStorage.getItem("vampforge_content") || "{}"
    const data = {
      timestamp: new Date().toISOString(),
      version: "2.1.0",
      content: JSON.parse(content),
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `vampforge-content-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const resetToDefaults = () => {
    localStorage.removeItem("vampforge_content")
  }

  return (
    <CMSContext.Provider
      value={{
        isAuthenticated,
        isEditMode,
        login,
        logout,
        toggleEditMode,
        saveContent,
        getContent,
        exportData,
        resetToDefaults,
      }}
    >
      {children}
    </CMSContext.Provider>
  )
}

export function useCMS() {
  const context = useContext(CMSContext)
  if (context === undefined) {
    throw new Error("useCMS must be used within a CMSProvider")
  }
  return context
}
