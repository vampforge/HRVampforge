"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { EditableText } from "@/components/cms/editable-text"

const brands = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/512px-Spotify_logo_without_text.svg.png",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/512px-Airbnb_Logo_Bélo.svg.png",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/512px-Tesla_T_symbol.svg.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png",
  },
]

export function BrandMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const marquee = marqueeRef.current
    if (!marquee) return

    const animation = gsap.to(marquee, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    })

    return () => animation.kill()
  }, [])

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold font-sora">
            <EditableText
              id="brands-title"
              defaultValue="Trusted by Leading Companies"
              className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <EditableText
              id="brands-description"
              defaultValue="Join hundreds of companies worldwide that trust VAMPForge for their digital transformation and technology solutions"
            />
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Enhanced gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div ref={marqueeRef} className="flex space-x-8 min-w-max">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 group hover:scale-110 transition-all duration-500"
              >
                <div className="glass-panel p-12 rounded-3xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 relative overflow-hidden w-48 h-32 flex items-center justify-center">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      style={{ maxWidth: "120px", maxHeight: "60px" }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=60&width=120"
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
