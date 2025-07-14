"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Zap, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Custom Software", href: "/services/custom-software" },
      { name: "Web Applications", href: "/services/web-applications" },
      { name: "SaaS Products", href: "/services/saas-products" },
      { name: "IT Consulting", href: "/services/it-consulting" },
    ],
  },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Zap className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <div className="absolute inset-0 bg-cyan-400/20 blur-lg group-hover:bg-cyan-300/30 transition-all" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VAMPForge
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center space-x-1"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="glass-panel border-white/20 bg-black/80 backdrop-blur-lg">
                        {item.dropdown.map((subItem) => (
                          <DropdownMenuItem key={subItem.name} asChild>
                            <Link
                              href={subItem.href}
                              className="text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                            >
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-gray-300 hover:text-white transition-all duration-200 px-3 py-2 rounded-md hover:bg-white/10 ${
                        pathname === item.href ? "text-cyan-400 bg-white/5" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 glass-button bg-transparent"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 glass-button glow-button"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-panel bg-black/90 backdrop-blur-lg border-white/20">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Zap className="h-6 w-6 text-cyan-400" />
                  <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    VAMPForge
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="space-y-2">
                        <div className="text-gray-300 font-medium px-3 py-2">{item.name}</div>
                        <div className="pl-4 space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10 ${
                          pathname === item.href ? "text-cyan-400 bg-white/5" : ""
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 glass-button bg-transparent"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Quote
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white border-0 glass-button glow-button"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
