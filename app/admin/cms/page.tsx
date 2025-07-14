"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useCMS } from "@/components/cms/cms-provider"
import {
  Edit3,
  Save,
  Upload,
  Download,
  Trash2,
  Eye,
  EyeOff,
  ImageIcon,
  Settings,
  FileText,
  Users,
  BarChart3,
  Database,
  Code,
  Globe,
  Shield,
  Terminal,
  Server,
  Monitor,
  Activity,
} from "lucide-react"

export default function CMSPanel() {
  const { isAuthenticated, isEditMode, toggleEditMode, saveContent, getContent, exportData, resetToDefaults } = useCMS()
  const [activeTab, setActiveTab] = useState("content")
  const [contentItems, setContentItems] = useState<any[]>([])
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [editValue, setEditValue] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }

    loadContentItems()
  }, [isAuthenticated, router])

  const loadContentItems = () => {
    const allContent = localStorage.getItem("vampforge_content")
    if (allContent) {
      try {
        const content = JSON.parse(allContent)
        const items = Object.entries(content).map(([key, value]) => ({
          id: key,
          value: value,
          type: detectContentType(key, value),
          category: detectCategory(key),
          lastModified: new Date().toISOString(),
        }))
        setContentItems(items)
      } catch (error) {
        console.error("Error loading content:", error)
      }
    }
  }

  const detectContentType = (key: string, value: any) => {
    if (key.includes("image") || key.includes("avatar") || key.includes("logo")) return "image"
    if (key.includes("icon")) return "icon"
    if (key.includes("button")) return "button"
    if (typeof value === "string" && value.length > 100) return "textarea"
    return "text"
  }

  const detectCategory = (key: string) => {
    if (key.includes("hero")) return "Hero Section"
    if (key.includes("services")) return "Services"
    if (key.includes("testimonial") || key.includes("review")) return "Testimonials"
    if (key.includes("contact")) return "Contact"
    if (key.includes("about")) return "About"
    if (key.includes("brand") || key.includes("logo")) return "Branding"
    if (key.includes("footer")) return "Footer"
    return "General"
  }

  const handleSaveItem = () => {
    if (selectedItem) {
      saveContent(selectedItem.id, editValue)
      setContentItems((prev) =>
        prev.map((item) =>
          item.id === selectedItem.id ? { ...item, value: editValue, lastModified: new Date().toISOString() } : item,
        ),
      )
      setSelectedItem(null)
      setEditValue("")
      toast({
        title: "Content updated",
        description: "Your changes have been saved successfully.",
      })
    }
  }

  const handleEditItem = (item: any) => {
    setSelectedItem(item)
    setEditValue(typeof item.value === "string" ? item.value : JSON.stringify(item.value))
  }

  const handleDeleteItem = (itemId: string) => {
    if (confirm("Are you sure you want to delete this content item?")) {
      const allContent = JSON.parse(localStorage.getItem("vampforge_content") || "{}")
      delete allContent[itemId]
      localStorage.setItem("vampforge_content", JSON.stringify(allContent))
      loadContentItems()
      toast({
        title: "Content deleted",
        description: "The content item has been removed.",
      })
    }
  }

  const handleExportData = () => {
    exportData()
    toast({
      title: "Data exported",
      description: "Your content has been downloaded as JSON.",
    })
  }

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)
          if (data.content) {
            localStorage.setItem("vampforge_content", JSON.stringify(data.content))
            loadContentItems()
            toast({
              title: "Data imported",
              description: "Content has been successfully imported.",
            })
          }
        } catch (error) {
          toast({
            title: "Import failed",
            description: "Invalid file format.",
            variant: "destructive",
          })
        }
      }
      reader.readAsText(file)
    }
  }

  const handleResetData = () => {
    if (confirm("Are you sure you want to reset all content? This cannot be undone.")) {
      resetToDefaults()
      loadContentItems()
      toast({
        title: "Content reset",
        description: "All content has been reset to defaults.",
      })
    }
  }

  const filteredItems = contentItems.filter((item) => {
    const matchesSearch =
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof item.value === "string" && item.value.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = filterCategory === "all" || item.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const groupedContent = filteredItems.reduce(
    (acc, item) => {
      const category = item.category
      if (!acc[category]) acc[category] = []
      acc[category].push(item)
      return acc
    },
    {} as Record<string, any[]>,
  )

  const categories = [...new Set(contentItems.map((item) => item.category))]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-6 w-6 text-cyan-400" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    VAMPForge CMS
                  </h1>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  <Activity className="h-3 w-3 mr-1" />
                  Online
                </Badge>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={toggleEditMode}
                  variant="outline"
                  size="sm"
                  className={`glass-button ${isEditMode ? "bg-cyan-500/20 border-cyan-400" : "bg-transparent"}`}
                >
                  {isEditMode ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                  {isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
                </Button>
                <Button onClick={handleExportData} variant="outline" size="sm" className="glass-button bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
                <Button
                  onClick={() => router.push("/")}
                  variant="outline"
                  size="sm"
                  className="glass-button bg-transparent"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  View Site
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="glass-card grid grid-cols-5 w-full max-w-2xl mx-auto">
              <TabsTrigger value="content" className="data-[state=active]:bg-cyan-500/20">
                <FileText className="mr-2 h-4 w-4" />
                Content
              </TabsTrigger>
              <TabsTrigger value="media" className="data-[state=active]:bg-purple-500/20">
                <ImageIcon className="mr-2 h-4 w-4" />
                Media
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-orange-500/20">
                <BarChart3 className="mr-2 h-4 w-4" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="system" className="data-[state=active]:bg-green-500/20">
                <Server className="mr-2 h-4 w-4" />
                System
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-red-500/20">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Content Management */}
            <TabsContent value="content">
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white flex items-center">
                          <Database className="mr-2 h-5 w-5 text-cyan-400" />
                          Content Management ({filteredItems.length} items)
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <Input
                            placeholder="Search content..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="glass-input w-64"
                          />
                          <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="glass-input bg-black/50 border-white/20 text-white"
                          >
                            <option value="all">All Categories</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="max-h-[600px] overflow-y-auto">
                      <div className="space-y-6">
                        {Object.entries(groupedContent).map(([category, items]) => (
                          <div key={category}>
                            <div className="flex items-center space-x-2 mb-4">
                              <Code className="h-4 w-4 text-cyan-400" />
                              <h3 className="text-lg font-semibold text-cyan-400 font-mono">{category}</h3>
                              <Badge className="bg-white/10 text-white text-xs">{items.length}</Badge>
                            </div>
                            <div className="space-y-2">
                              {items.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
                                >
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-3 mb-2">
                                      <Badge
                                        className={`text-xs ${
                                          item.type === "text"
                                            ? "bg-blue-500/20 text-blue-400"
                                            : item.type === "textarea"
                                              ? "bg-green-500/20 text-green-400"
                                              : item.type === "image"
                                                ? "bg-purple-500/20 text-purple-400"
                                                : "bg-orange-500/20 text-orange-400"
                                        }`}
                                      >
                                        {item.type}
                                      </Badge>
                                      <span className="text-sm font-mono text-cyan-300">{item.id}</span>
                                    </div>
                                    <div className="text-sm text-gray-400 truncate max-w-md font-mono">
                                      {typeof item.value === "string" ? item.value : JSON.stringify(item.value)}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                      Modified: {new Date(item.lastModified).toLocaleString()}
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Button
                                      onClick={() => handleEditItem(item)}
                                      size="sm"
                                      variant="outline"
                                      className="glass-button bg-transparent hover:bg-cyan-500/20"
                                    >
                                      <Edit3 className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      onClick={() => handleDeleteItem(item.id)}
                                      size="sm"
                                      variant="outline"
                                      className="glass-button bg-transparent text-red-400 border-red-400/50 hover:bg-red-400/10"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Edit Panel */}
                <div>
                  <Card className="glass-card sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Edit3 className="mr-2 h-5 w-5 text-purple-400" />
                        Content Editor
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {selectedItem ? (
                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium text-gray-400 mb-2 block">Content ID</label>
                            <Input value={selectedItem.id} disabled className="glass-input font-mono text-xs" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-400 mb-2 block">Type</label>
                            <Badge
                              className={`${
                                selectedItem.type === "text"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : selectedItem.type === "textarea"
                                    ? "bg-green-500/20 text-green-400"
                                    : selectedItem.type === "image"
                                      ? "bg-purple-500/20 text-purple-400"
                                      : "bg-orange-500/20 text-orange-400"
                              }`}
                            >
                              {selectedItem.type}
                            </Badge>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-400 mb-2 block">Content</label>
                            {selectedItem.type === "textarea" ? (
                              <Textarea
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="glass-input min-h-[120px] font-mono text-sm"
                                placeholder="Enter content..."
                              />
                            ) : (
                              <Input
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="glass-input font-mono text-sm"
                                placeholder="Enter content..."
                              />
                            )}
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              onClick={handleSaveItem}
                              className="bg-gradient-to-r from-green-500 to-teal-500 glass-button flex-1"
                            >
                              <Save className="mr-2 h-4 w-4" />
                              Save
                            </Button>
                            <Button
                              onClick={() => {
                                setSelectedItem(null)
                                setEditValue("")
                              }}
                              variant="outline"
                              className="glass-button bg-transparent"
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-400">
                          <Monitor className="h-12 w-12 mx-auto mb-4 opacity-50" />
                          <p>Select a content item to edit</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Media Library */}
            <TabsContent value="media">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <ImageIcon className="mr-2 h-5 w-5 text-purple-400" />
                    Media Library
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Media Management</h3>
                    <p className="text-gray-400 mb-6">Upload and manage images, videos, and other media files.</p>
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 glass-button">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Media
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics */}
            <TabsContent value="analytics">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Page Views</p>
                        <p className="text-2xl font-bold text-white">12,543</p>
                      </div>
                      <BarChart3 className="h-8 w-8 text-cyan-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Unique Visitors</p>
                        <p className="text-2xl font-bold text-white">8,921</p>
                      </div>
                      <Users className="h-8 w-8 text-purple-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Bounce Rate</p>
                        <p className="text-2xl font-bold text-white">23.4%</p>
                      </div>
                      <Activity className="h-8 w-8 text-green-400" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Avg. Session</p>
                        <p className="text-2xl font-bold text-white">4m 32s</p>
                      </div>
                      <Monitor className="h-8 w-8 text-orange-400" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* System */}
            <TabsContent value="system">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Server className="mr-2 h-5 w-5 text-green-400" />
                      System Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Server Status</span>
                      <Badge className="bg-green-500/20 text-green-400">Online</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Database</span>
                      <Badge className="bg-green-500/20 text-green-400">Connected</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">CDN</span>
                      <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">SSL Certificate</span>
                      <Badge className="bg-green-500/20 text-green-400">Valid</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-cyan-400" />
                      Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Firewall</span>
                      <Badge className="bg-green-500/20 text-green-400">Protected</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">DDoS Protection</span>
                      <Badge className="bg-green-500/20 text-green-400">Active</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Backup Status</span>
                      <Badge className="bg-green-500/20 text-green-400">Up to date</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Last Security Scan</span>
                      <span className="text-white text-sm">2 hours ago</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">Data Management</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button onClick={handleExportData} className="w-full glass-button bg-transparent" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Export All Data
                    </Button>
                    <div>
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportData}
                        className="hidden"
                        id="import-file"
                      />
                      <Button asChild className="w-full glass-button bg-transparent" variant="outline">
                        <label htmlFor="import-file" className="cursor-pointer">
                          <Upload className="mr-2 h-4 w-4" />
                          Import Data
                        </label>
                      </Button>
                    </div>
                    <Button onClick={handleResetData} className="w-full" variant="destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Reset All Data
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">System Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 font-mono text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Version:</span>
                        <span className="text-white">v2.1.0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Content Items:</span>
                        <span className="text-white">{contentItems.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Storage Used:</span>
                        <span className="text-white">{Math.round(JSON.stringify(localStorage).length / 1024)} KB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Edit Mode:</span>
                        <Badge
                          className={isEditMode ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}
                        >
                          {isEditMode ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Backup:</span>
                        <span className="text-white">Today, 3:42 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
