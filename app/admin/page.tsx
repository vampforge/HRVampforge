"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Lock, User, Zap } from "lucide-react"
import { useCMS } from "@/components/cms/cms-provider"
import { useToast } from "@/hooks/use-toast"
import { gsap } from "gsap"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login, isAuthenticated } = useCMS()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin/cms")
    }

    // Animate login form
    gsap.fromTo(
      ".login-card",
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    )

    // Animate floating particles
    gsap.to(".floating-particle", {
      y: "random(-100, 100)",
      x: "random(-50, 50)",
      rotation: "random(-180, 180)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random",
      },
    })
  }, [isAuthenticated, router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check credentials - Updated login credentials
    const validCredentials = [
      { username: "admin", password: "vampforge2025" },
      { username: "aman", password: "founder123" },
      { username: "cms", password: "cms@2025" },
    ]

    const isValid = validCredentials.some((cred) => cred.username === username && cred.password === password)

    if (isValid) {
      // Use the CMS login function
      const success = login(username, password)
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome to VAMPForge CMS",
        })

        // Animate success
        gsap.to(".login-card", {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        })

        setTimeout(() => {
          router.push("/admin/cms")
        }, 500)
      }
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password",
        variant: "destructive",
      })

      // Animate error
      gsap.to(".login-card", {
        x: [-10, 10, -10, 10, 0],
        duration: 0.5,
        ease: "power2.inOut",
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="login-card w-full max-w-md glass-card border-white/10 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <Zap className="h-12 w-12 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 blur-lg" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold font-sora">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                VAMPForge CMS
              </span>
            </CardTitle>
            <p className="text-gray-400 mt-2">Sign in to manage your content</p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium text-gray-300">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 glass-input bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 glass-input bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 glass-button glow-button font-semibold py-3"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                Demo Credentials
              </h4>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>Admin:</span>
                  <span className="text-gray-300">admin / vampforge2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Founder:</span>
                  <span className="text-gray-300">aman / founder123</span>
                </div>
                <div className="flex justify-between">
                  <span>CMS:</span>
                  <span className="text-gray-300">cms / cms@2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
