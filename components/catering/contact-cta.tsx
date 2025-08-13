"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { MailIcon, PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

/**
 * ContactCTA
 *
 * Provides a call‑to‑action for users who may need help planning their
 * event.  Displays contact information and a button to start a catering
 * order.  On larger screens the content is split with a photograph on
 * the right.
 */
export default function ContactCTA() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section ref={ref} className="bg-sidebar py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 md:flex-row md:items-stretch md:gap-12 md:px-8">
        {/* Left column with text */}
        <motion.div
          className="order-2 space-y-6 md:order-1 md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-display text-primary text-3xl font-semibold md:text-4xl">
            Craving Easy Planning for Your Next Event?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <PhoneIcon className="text-primary h-6 w-6" />
              <div>
                <p className="text-primary font-semibold">Give us a call</p>
                <a
                  href="tel:8776647684"
                  className="text-primary/80 underline underline-offset-2"
                >
                  877.664.7684
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MailIcon className="text-primary h-6 w-6" />
              <div>
                <p className="text-primary font-semibold">Email us</p>
                <a
                  href="mailto:catering@foodbyfare.com"
                  className="text-primary/80 underline underline-offset-2"
                >
                  catering@foodbyfare.com
                </a>
              </div>
            </div>
          </div>
          <Button className="text-sidebar bg-primary hover:bg-primary/90 mt-6">
            Order Catering Now
          </Button>
        </motion.div>
        {/* Right column with image */}
        <motion.div
          className="relative order-1 h-64 w-full overflow-hidden rounded-xl md:order-2 md:h-[28rem] md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/images/catering/contact.jpg"
            alt="Delicious catered meal on a table"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
