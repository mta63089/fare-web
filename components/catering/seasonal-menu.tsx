"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"

const MENU_CATEGORIES = [
  {
    id: "veggie",
    title: "Veggie Trays",
    image: "/catering/veggie-trays.jpg",
  },
  {
    id: "breakfast",
    title: "Breakfast Favorites",
    image: "/catering/breakfast-favorites.jpg",
  },
  {
    id: "lunch-dinner",
    title: "Lunch & Dinner",
    image: "/catering/lunch-dinner.jpg",
  },
] as const

export default function SeasonalMenu() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section ref={ref} className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-4">
          <motion.h2
            className="font-display text-primary text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Our Seasonal Catering Menu
          </motion.h2>
          <Button
            variant="link"
            className="text-primary h-auto self-start p-0 underline underline-offset-4"
          >
            View Full Catering Menu
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MENU_CATEGORIES.map((item, idx) => (
            <motion.div
              key={item.id}
              className=""
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <div className="relative h-[60] w-full overflow-hidden rounded-xl md:h-[460px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-display text-primary mt-4 text-xl font-medium">
                {item.title}
              </h3>
              <Button
                variant="link"
                className="text-primary mt-1 h-auto p-0 underline underline-offset-2"
              >
                Order Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
