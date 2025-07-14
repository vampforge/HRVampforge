"use client"

import { useEffect, useRef } from "react"

export function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any, camera: any, renderer: any, geometry: any, material: any, mesh: any
    let animationId: number
    let mouseX = 0,
      mouseY = 0

    const init = async () => {
      try {
        // Dynamically import Three.js to avoid SSR issues
        const THREE = await import("three")

        // Scene setup
        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 0)

        if (mountRef.current) {
          mountRef.current.appendChild(renderer.domElement)
        }

        // Create geometric shapes
        const shapes = []

        // Wireframe spheres
        for (let i = 0; i < 5; i++) {
          const sphereGeometry = new THREE.SphereGeometry(1 + Math.random() * 2, 16, 16)
          const sphereMaterial = new THREE.MeshBasicMaterial({
            color: i % 2 === 0 ? 0x00ffff : 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.3,
          })
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)

          sphere.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20)

          shapes.push(sphere)
          scene.add(sphere)
        }

        // Floating cubes
        for (let i = 0; i < 8; i++) {
          const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
          const cubeMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            wireframe: true,
            transparent: true,
            opacity: 0.4,
          })
          const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

          cube.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 30)

          shapes.push(cube)
          scene.add(cube)
        }

        // Torus rings
        for (let i = 0; i < 3; i++) {
          const torusGeometry = new THREE.TorusGeometry(2, 0.1, 8, 16)
          const torusMaterial = new THREE.MeshBasicMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.5,
          })
          const torus = new THREE.Mesh(torusGeometry, torusMaterial)

          torus.position.set((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25)

          shapes.push(torus)
          scene.add(torus)
        }

        camera.position.z = 10

        // Mouse interaction
        const handleMouseMove = (event: MouseEvent) => {
          mouseX = (event.clientX / window.innerWidth) * 2 - 1
          mouseY = -(event.clientY / window.innerHeight) * 2 + 1
        }

        window.addEventListener("mousemove", handleMouseMove)

        // Animation loop
        const animate = () => {
          animationId = requestAnimationFrame(animate)

          // Rotate all shapes
          shapes.forEach((shape, index) => {
            shape.rotation.x += 0.005 + index * 0.001
            shape.rotation.y += 0.005 + index * 0.001
            shape.rotation.z += 0.002

            // Float animation
            shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01
          })

          // Camera movement based on mouse
          camera.position.x += (mouseX * 2 - camera.position.x) * 0.05
          camera.position.y += (mouseY * 2 - camera.position.y) * 0.05

          renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
          window.removeEventListener("mousemove", handleMouseMove)
          if (animationId) {
            cancelAnimationFrame(animationId)
          }
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement)
          }
          renderer.dispose()
        }
      } catch (error) {
        console.error("Three.js initialization error:", error)
      }
    }

    init()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at center, rgba(0,20,40,0.4) 0%, rgba(0,0,0,0.9) 100%)",
      }}
    />
  )
}
