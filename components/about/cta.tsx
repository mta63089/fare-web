"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CallToAction() {
  const content = {
    title: "Our Mission is To Prove That Fast Food Can be Real Food.",
    subtitle: "Fresh. Flavorful, and Craveworthy.",
    content:
      "We serve fresh, seasonal, and thoughtfully made food that's fast, satisfying, and full of flavor, no weird ingredients, no compromises, just real meals you'll actually crave.",
  }

  return (
    <section className="bg-chart-1 min-w-xs">
      <motion.div className="max-w-8xl mx-auto flex flex-1 flex-col gap-y-12 p-4 md:flex-row md:gap-y-0 md:p-8">
        <div className="order-2 flex w-full flex-col gap-y-4 md:order-1 md:h-[54rem] md:w-1/2 md:px-10">
          <motion.h2
            initial={{ x: -500, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-primary font-display text-4xl md:text-5xl"
          >
            {content.title}
          </motion.h2>
          <motion.h2
            initial={{ x: -500, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-primary-foreground font-display text-4xl md:text-5xl"
          >
            {content.subtitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-primary md:text-lg"
          >
            {content.content}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="hover:text-primary/80 text-primary self-end underline underline-offset-4"
          >
            View Our Seasonal Menu
          </motion.div>
        </div>
        <div className="relative order-1 flex h-[25rem] w-full flex-col self-center md:order-2 md:h-[52rem] md:w-1/2">
          <Image
            alt="Food"
            fill
            className="object-cover"
            src="/about/cta-2.jpg"
          />
        </div>
      </motion.div>
    </section>
  )
}
