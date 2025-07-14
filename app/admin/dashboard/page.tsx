"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useCMS } from "@/components/cms/cms-provider"
import { MessageSquare, Calendar, LogOut, Mail, Download, Trash2, FileText, BarChart3 } from "lucide-react"

interface Submission {
  name: string
  email: string
  timestamp: string
  type: string
  [key: string]: any
}

export default function AdminDashboard() {
  const { isAuthenticated, logout, exportData, resetToDefaults } = useCMS()
  const [contactSubmissions, setContactSubmissions] = useState<Submission[]>([])
  const [quoteSubmissions, setQuoteSubmissions] = useState<Submission[]>([])
  const [callSubmissions, setCallSubmissions] = useState<Submission[]>([])
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin")
      return
    }

    // Load submissions
    const contacts = JSON.parse(localStorage.getItem("vampforge_contact_submissions") || "[]")
    const quotes = JSON.parse(localStorage.getItem("vampforge_quote_submissions") || "[]")
    const calls = JSON.parse(localStorage.getItem("vampforge_call_submissions") || "[]")

    setContactSubmissions(contacts)
    setQuoteSubmissions(quotes)
    setCallSubmissions(calls)
  }, [isAuthenticated, router])

  const handleLogout = () => {
    logout()
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin panel.",
    })
    router.push("/admin")
  }

  const handleExportData = () => {
    exportData()
    toast({
      title: "Data exported",
      description: "Your data has been downloaded as JSON.",
    })
  }

  const handleResetData = () => {
    if (confirm("Are you sure you want to reset all data? This cannot be undone.")) {
      resetToDefaults()
      localStorage.removeItem("vampforge_contact_submissions")
      localStorage.removeItem("vampforge_quote_submissions")
      localStorage.removeItem("vampforge_call_submissions")
      setContactSubmissions([])
      setQuoteSubmissions([])
      setCallSubmissions([])
      toast({
        title: "Data reset",
        description: "All data has been reset to defaults.",
      })
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const totalSubmissions = contactSubmissions.length + quoteSubmissions.length + callSubmissions.length

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                VAMPForge Admin Dashboard
              </h1>
              <div className="flex items-center space-x-4">
                <Button onClick={handleExportData} variant="outline" size="sm" className="glass-button bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
                <Button onClick={handleLogout} variant="outline" size="sm" className="glass-button bg-transparent">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Contact Forms</p>
                    <p className="text-2xl font-bold text-cyan-400">{contactSubmissions.length}</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Quote Requests</p>
                    <p className="text-2xl font-bold text-purple-400">{quoteSubmissions.length}</p>
                  </div>
                  <FileText className="h-8 w-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Scheduled Calls</p>
                    <p className="text-2xl font-bold text-green-400">{callSubmissions.length}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Leads</p>
                    <p className="text-2xl font-bold text-yellow-400">{totalSubmissions}</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submissions */}
          <Tabs defaultValue="contacts" className="space-y-6">
            <TabsList className="glass-card">
              <TabsTrigger value="contacts" className="data-[state=active]:bg-cyan-500/20">
                Contact Forms ({contactSubmissions.length})
              </TabsTrigger>
              <TabsTrigger value="quotes" className="data-[state=active]:bg-purple-500/20">
                Quote Requests ({quoteSubmissions.length})
              </TabsTrigger>
              <TabsTrigger value="calls" className="data-[state=active]:bg-green-500/20">
                Scheduled Calls ({callSubmissions.length})
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-orange-500/20">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Contact Form Submissions</CardTitle>
                </CardHeader>
                <CardContent>
                  {contactSubmissions.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No contact submissions yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {contactSubmissions.map((submission, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-white font-semibold">{submission.name}</h3>
                              <p className="text-gray-400 text-sm flex items-center">
                                <Mail className="mr-1 h-3 w-3" />
                                {submission.email}
                              </p>
                            </div>
                            <Badge className="bg-cyan-500/20 text-cyan-400">
                              {submission.projectType || "General"}
                            </Badge>
                          </div>
                          <p className="text-gray-300 mb-2">{submission.message}</p>
                          <p className="text-gray-500 text-xs">{new Date(submission.timestamp).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quotes">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Quote Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  {quoteSubmissions.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No quote requests yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {quoteSubmissions.map((submission, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-white font-semibold">{submission.name}</h3>
                              <p className="text-gray-400 text-sm">{submission.company}</p>
                              <p className="text-gray-400 text-sm flex items-center">
                                <Mail className="mr-1 h-3 w-3" />
                                {submission.email}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-purple-500/20 text-purple-400 mb-1">{submission.budget}</Badge>
                              <Badge className="bg-green-500/20 text-green-400 block">{submission.timeline}</Badge>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-2">{submission.description}</p>
                          <p className="text-gray-500 text-xs">{new Date(submission.timestamp).toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="calls">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Scheduled Calls</CardTitle>
                </CardHeader>
                <CardContent>
                  {callSubmissions.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No scheduled calls yet.</p>
                  ) : (
                    <div className="space-y-4">
                      {callSubmissions.map((submission, index) => (
                        <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-white font-semibold">{submission.name}</h3>
                              <p className="text-gray-400 text-sm flex items-center">
                                <Mail className="mr-1 h-3 w-3" />
                                {submission.email}
                              </p>
                              <p className="text-gray-400 text-sm">{submission.phone}</p>
                            </div>
                            <Badge className="bg-green-500/20 text-green-400">
                              {submission.date} at {submission.time}
                            </Badge>
                          </div>
                          {submission.message && <p className="text-gray-300 mb-2">{submission.message}</p>}
                          <p className="text-gray-500 text-xs">
                            Submitted: {new Date(submission.timestamp).toLocaleString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

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
                    <Button onClick={handleResetData} className="w-full" variant="destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Reset All Data
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">System Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Version:</span>
                      <span className="text-white">1.0.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Login:</span>
                      <span className="text-white">{new Date().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Storage Used:</span>
                      <span className="text-white">{Math.round(JSON.stringify(localStorage).length / 1024)} KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Submissions:</span>
                      <span className="text-white">{totalSubmissions}</span>
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
