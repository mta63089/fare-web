"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

import { categories } from "@/lib/menu"

export default function Menu() {
  const [activeId, setActiveId] = useState(categories[0].id)

  // Get a MotionValue that tracks the page’s scroll position
  const { scrollY } = useScroll()

  // Listen to scroll changes and determine which section is active.
  // This replaces the IntersectionObserver logic.
  useMotionValueEvent(scrollY, "change", () => {
    // Abort if running on the server or window isn’t defined
    if (typeof window === "undefined") return

    const viewportHeight = window.innerHeight
    // Define the same view thresholds as your previous IntersectionObserver
    const thresholdTop = viewportHeight * 0.3
    const thresholdBottom = viewportHeight * 0.6

    for (const { id } of categories) {
      const section = document.getElementById(id)
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= thresholdTop && rect.bottom >= thresholdBottom) {
          setActiveId(id)
          break
        }
      }
    }
  })

  // Smoothly scroll to the section and update activeId on click
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setActiveId(id)
  }

  return (
    <div className="w-full">
      <nav className="sticky top-[6rem] z-40 w-full border-b border-[#EDEAE0] bg-[#F9F6E5] py-1 md:top-[7rem] md:py-2">
        <ul className="mx-auto flex max-w-7xl overflow-x-auto px-4 py-3 text-sm font-medium md:justify-center md:space-x-8 md:text-base">
          {categories.map((cat) => {
            const isActive = activeId === cat.id
            return (
              <li
                key={cat.id}
                className="relative mx-1 cursor-pointer px-1 md:mx-4"
                onClick={handleNavClick(cat.id)}
              >
                <span
                  className={`group text-primary text-sm transition-colors duration-200 md:text-lg ${
                    isActive ? "font-semibold" : "font-normal"
                  }`}
                >
                  {cat.label}
                </span>
                {/* Animated underline using Framer Motion */}
                <motion.span
                  className="bg-primary absolute bottom-0 left-0 h-[2px]"
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Content sections */}
      <div className="mx-auto mt-8 max-w-7xl space-y-20 px-4">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-28">
            <h2 className="font-display text-primary mb-6 py-18 text-5xl">
              {cat.label}
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {cat.items.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="text-primary absolute top-3 right-3 flex space-x-2 text-lg font-semibold">
                      {item.isGlutenFree && (
                        <span className="size-10 place-content-center-safe rounded-full bg-[#7CA7D6] text-center">
                          GF
                        </span>
                      )}
                      {item.isVegan && (
                        <span className="size-10 place-content-center-safe rounded-full bg-[#3FAF54] text-center">
                          V
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-primary mt-4 text-lg font-medium md:text-xl">
                    {item.name}
                  </h3>
                  <p className="text-primary/80 mt-1 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
