"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"

/**
 * Data describing each catering idea bundle.  Images should be placed in
 * the `public/images/catering` directory with the names referenced
 * below.  Tags indicate the recommended group size (e.g. 1‑3, 4‑15,
 * 15+) and are rendered in small badge bubbles on the image overlay.
 */
const IDEAS = [
  {
    id: "meal-prep",
    title: "The Meal Prep Pro",
    subtitle: "Meal Prep Bundle",
    description:
      "Make life simpler with ready‑to‑go meals for the week – perfect for you or your whole household.",
    tags: ["1-3"],
    image: "/catering/meal-prep.jpg",
  },
  {
    id: "office-gathering",
    title: "The Office Favorite",
    subtitle: "Office Gathering Bundle",
    description:
      "A crowd‑pleasing mix of bowls, sides and sauces that make you the hero of the lunch room.",
    tags: ["4-15"],
    image: "/catering/office-gathering.jpg",
  },
  {
    id: "large-event",
    title: "The Event of the Year",
    subtitle: "Large Event Bundle",
    description:
      "Designed to feed a hungry crowd in style – ideal for parties, celebrations, or ‘we went all out’ moments.",
    tags: ["15+"],
    image: "/catering/large-event.jpg",
  },
] as const

export default function CateringIdeas() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  return (
    <section
      ref={ref}
      className="text-sidebar bg-primary relative py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <motion.h2
          className="font-display mb-8 text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Catering Ideas
        </motion.h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-6 md:space-x-0 md:overflow-visible">
          {IDEAS.map((idea, idx) => (
            <motion.div
              key={idea.id}
              className="w-80 flex-shrink-0 md:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
            >
              <div className="group relative h-72 w-full overflow-hidden rounded-xl md:h-96">
                <Image
                  src={idea.image}
                  alt={idea.subtitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
                {/* Overlay for title and tags */}
                <div className="bg-primary/50 absolute inset-0 flex flex-col justify-end p-4">
                  <div className="mb-2 flex justify-end space-x-2">
                    {idea.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-primary bg-sidebar inline-flex items-center justify-center rounded-full px-2 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-2xl leading-tight font-semibold">
                    {idea.title}
                  </h3>
                </div>
              </div>
              <div className="mt-4 space-y-2 px-1 md:px-0">
                <h4 className="font-display text-lg font-medium">
                  {idea.subtitle}
                </h4>
                <p className="text-sidebar/80 text-sm">{idea.description}</p>
                <Button
                  variant="link"
                  className="text-sidebar hover:text-sidebar/80 h-auto p-0 underline underline-offset-2"
                >
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
