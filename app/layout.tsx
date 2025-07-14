import type React from "react"
import "./globals.css"
import { Sora, Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { CMSProvider } from "@/components/cms/cms-provider"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "VAMPForge - Next-Gen SaaS Development Platform",
  description:
    "Transform your ideas into powerful SaaS applications with VAMPForge's cutting-edge development platform",
  keywords: "SaaS, software development, web applications, custom software, VAMPForge",
  openGraph: {
    title: "VAMPForge - Next-Gen SaaS Development Platform",
    description: "Transform your ideas into powerful SaaS applications",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CMSProvider>
            {children}
            <Toaster />
          </CMSProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
