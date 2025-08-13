"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDownIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const FAQS = [
  {
    question: "How do I place a catering order?",
    answer:
      "Orders can be placed online via our catering page. Simply select the bundles and menu items that suit your gathering and follow the checkout prompts.",
  },
  {
    question: "Need to make changes or check on an existing order?",
    answer:
      "You can update your order up to 24 hours in advance. Just reply to your confirmation email or contact us at catering@foodbyfare.com with your order number.",
  },
  {
    question: "Is there an order minimum?",
    answer:
      "We accommodate events of all sizes. Please refer to the recommended group sizes for each bundle or reach out to us for a custom quote.",
  },
  {
    question: "When is catering available?",
    answer:
      "Catering is available seven days a week. Advance notice of at least 24 hours is appreciated for larger orders.",
  },
  {
    question: "Do you offer pickup or delivery?",
    answer:
      "Yes! You can choose pickup at a nearby FARE location or delivery to your event venue when placing your order.",
  },
  {
    question: "Can I place a same‑day order?",
    answer:
      "Same‑day catering is available for select items and subject to availability. Call us to see how we can accommodate your request.",
  },
  {
    question: "What’s on the catering menu?",
    answer:
      "Our catering menu features build‑your‑own bowl bars, shareable sides, proteins, and seasonal specials. Check out the menu section above for more details.",
  },
] as const

export default function CateringFAQ() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <h2 className="font-display text-primary mb-8 text-3xl md:text-4xl">
          Catering Made Simple: FAQS
        </h2>
        <Accordion type="single" className="divide-primary/30 divide-y">
          {FAQS.map((item, i) => (
            <AccordionItem value={`question-${i}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-primary text-lg font-medium">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-primary ml-4"
        >
          <ChevronDownIcon className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-primary/80 mt-2 text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
