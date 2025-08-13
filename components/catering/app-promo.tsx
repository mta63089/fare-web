"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"

/**
 * AppPromo
 *
 * Highlights the loyalty program for the FARE app.  The section uses a
 * soft blue background on both mobile and desktop layouts.  A
 * half‑and‑half layout presents an evocative photo on one side and
 * marketing copy with a call‑to‑action button on the other.  On
 * smaller screens the image collapses above the text.
 */
export default function AppPromo() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section ref={ref} className="text-primary bg-chart-1 py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 md:flex-row md:items-stretch md:gap-12 md:px-8">
        {/* Image on larger screens appears on the right */}
        <motion.div
          className="relative order-1 h-64 w-full overflow-hidden rounded-xl md:order-2 md:h-[28rem] md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/images/catering/app-promo.jpg"
            alt="Earn rewards with the FARE app"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        {/* Text content */}
        <motion.div
          className="order-2 flex flex-col justify-center space-y-6 md:order-1 md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-3xl font-semibold md:text-4xl">
            Feed the Team,
            <br className="hidden md:block" /> Stack the Points
          </h2>
          <p className="max-w-prose text-base md:text-lg">
            Place the order, earn the points, soak up the praise. Download the
            FARE app and get rewarded every time you fuel the crew (or
            yourself). Catering orders, pickups or solo cravings – it all counts
            towards free meals and exclusive perks.
          </p>
          <Button className="text-sidebar bg-primary hover:bg-primary/90 w-max">
            Order Through The App
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
