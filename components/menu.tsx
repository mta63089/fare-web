"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { menuCta } from "@/lib/cta"
import { categories } from "@/lib/menu"

import CallToAction from "./call-to-action"

interface MenuItem {
  name: string
  description: string
  imageSrc: string
  tags: string[]
}

interface Category {
  id: string
  label: string
  items: MenuItem[]
}

export default function Menu() {
  const navRef = useRef<HTMLUListElement>(null)
  const [activeId, setActiveId] = useState(categories[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id")
            if (id) setActiveId(id)
          }
        })
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
      }
    )
    categories.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="w-full">
      <nav className="sticky top-[7rem] z-40 w-full border-b border-[#EDEAE0] bg-[#F9F6E5] py-4">
        <ul
          ref={navRef}
          className="mx-auto flex max-w-7xl overflow-x-auto px-4 py-3 text-sm font-medium lg:justify-center lg:space-x-8 lg:text-base"
        >
          {categories.map((cat) => {
            const isActive = activeId === cat.id
            return (
              <li
                key={cat.id}
                className="relative mx-2 cursor-pointer px-1 lg:mx-4"
                onClick={handleNavClick(cat.id)}
              >
                <span
                  className={`group text-[#004015] transition-colors duration-200 ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                >
                  {cat.label}
                </span>
                {/* static black underline */}
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-black" />
                {/* animated yellow underline */}
                <motion.span
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="absolute bottom-0 left-0 h-[2px] bg-[#D9A600]"
                  animate={{ width: isActive ? "100%" : "0%" }}
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
            {cat.id == "veggie-sides" && <CallToAction {...menuCta[0]} />}
            <h2 className="font-display text-primary mb-6 text-2xl lg:text-5xl">
              {cat.label}
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
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
                    <div className="text-primary absolute top-3 right-3 flex space-x-2 font-semibold">
                      {item.isGlutenFree && (
                        <span className="rounded-full bg-[#7CA7D6] p-2">
                          GF
                        </span>
                      )}
                      {item.isVegan && (
                        <span className="rounded-full bg-[#3FAF54] p-2">V</span>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-[#004015] lg:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#004015]/80 lg:text-base">
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
