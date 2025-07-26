
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  onClick: () => void
  isActive?: boolean
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024) // Cambié a lg breakpoint
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Marcar que ya no es la carga inicial después de un momento
    const timer = setTimeout(() => {
      setIsInitialLoad(false)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const handleItemClick = (item: NavItem) => {
    item.onClick()
  }

  // En móvil no mostramos la navbar tubelight
  if (isMobile) {
    return null
  }

  return (
    <div className={cn("", className)}>
      <div 
        className="flex items-center gap-1 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
        style={{ 
          backgroundColor: 'hsl(var(--background) / 0.95)',
          border: '1px solid hsl(var(--border))'
        }}
      >
        {items.map((item) => {
          // Solo "Inicio" está coloreado por defecto y cuando isActive es true
          const isActive = item.name === "Inicio" && (isInitialLoad || item.isActive)

          return (
            <button
              key={item.name}
              onClick={() => handleItemClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 lg:px-6 py-2 rounded-full transition-all duration-300",
                "border-draw-animation-tubelight",
                isActive 
                  ? "text-white bg-palette-blue shadow-lg" 
                  : "text-foreground/80 hover:text-white hover:bg-reymasur-green-600 hover:shadow-md"
              )}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full rounded-full -z-10"
                  style={{ backgroundColor: 'hsl(var(--palette-blue) / 0.05)' }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div 
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 lg:w-8 h-1 rounded-t-full"
                    style={{ backgroundColor: 'hsl(var(--palette-blue))' }}
                  >
                    <div 
                      className="absolute w-8 lg:w-12 h-6 rounded-full blur-md -top-2 -left-1 lg:-left-2"
                      style={{ backgroundColor: 'hsl(var(--palette-blue) / 0.2)' }}
                    />
                    <div 
                      className="absolute w-6 lg:w-8 h-6 rounded-full blur-md -top-1"
                      style={{ backgroundColor: 'hsl(var(--palette-blue) / 0.2)' }}
                    />
                    <div 
                      className="absolute w-3 lg:w-4 h-4 rounded-full blur-sm top-0 left-1.5 lg:left-2"
                      style={{ backgroundColor: 'hsl(var(--palette-blue) / 0.2)' }}
                    />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
