"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function HeroCatering() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="bg-sidebar relative overflow-hidden py-16 md:py-24"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 px-4 md:flex-row md:gap-20">
        <motion.div
          className="space-y-6 md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-primary text-3xl font-semibold md:text-5xl md:leading-tight">
            Feeding a Crowd? Make it Fresh,
            <br className="hidden md:block" />
            Seasonal, and Seriously Delicious.
          </h1>
          <p className="text-primary/80 max-w-lg text-base md:text-lg">
            Whether it's an office lunch, birthday bash, or just a Tuesday that
            needs better food - we've got you. Choose from our build‑your‑own
            bowl bars, shareable sides, and crowd‑pleasing proteins, all made
            with seasonal ingredients and signature sauces. Need dessert? We've
            got that covered too. Simple to order, easy to love, and always
            delivered with flavour in mind.
          </p>
          <div className="flex flex-col items-start space-y-4 pt-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              View Catering Menu
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Order Catering
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative h-64 w-full overflow-hidden rounded-lg md:h-[50rem] md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Replace the src below with an appropriate image in your public/images directory */}
          <Image
            src="/catering/hero.jpg"
            alt="Friends enjoying catered food"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
