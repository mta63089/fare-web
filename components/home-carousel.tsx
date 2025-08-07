"use client"

/*
 * A responsive hero carousel built with the shadcn/ui Carousel component and
 * Tailwind CSS v4. This implementation maps over an array of slides and
 * automatically cycles through them every 20 seconds. The design
 * intentionally preserves the relative positioning, colours and spacing of
 * the provided mock‑ups while replacing the brittle absolute positioning
 * with modern flexbox utilities. Each slide uses a Next.js `Image` for
 * optimized loading and a semi‑transparent black overlay to ensure text
 * legibility. On mobile the headline scales down and the navigation arrows
 * reposition to suit a narrower viewport.
 */

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

/**
 * The data for each slide. The `imgSrc` property points to a local static
 * asset under the `public` directory and the `button` object holds the
 * call‑to‑action label, destination and colour classes. Feel free to
 * customise these values or load them from an API.
 */
const items = [
  {
    imgSrc: "/home-1.png",
    display: "Now Serving Fresh Flavor in Logan Square",
    button: {
      display: "Find Your FARE",
      href: "#",
      className: "bg-[#3faf54] text-[#003f15]",
    },
  },
  {
    imgSrc: "/home-2.png",
    display: "Built to Fuel, Styled to Crave",
    button: {
      display: "Try the Smoky Chicken Bowl",
      href: "#",
      className: "bg-[#003f15] text-[#f9f6e5]",
    },
  },
  {
    imgSrc: "/home-3.png",
    display: "What's in Season is What's on Our Plate",
    button: {
      display: "See What's New",
      href: "#",
      className: "bg-[#3faf54] text-[#003f15]",
    },
  },
  {
    imgSrc: "/home-4.png",
    display: "Where Good Food Meets Good Energy.",
    button: {
      display: "Get To Know Us",
      href: "#",
      className: "bg-[#f9f6e5] text-[#66290a]",
    },
  },
  {
    imgSrc: "/home-5.png",
    display: "Sip Something Seasonal",
    button: {
      display: "Order Now",
      href: "#",
      className: "bg-[#f9f6e5] text-[#66290a]",
    },
  },
  {
    imgSrc: "/home-6.png",
    display: "Feed the Team, Win the Day",
    button: {
      display: "See Our Catering Menu",
      href: "#",
      className: "bg-[#3faf54] text-[#003f15]",
    },
  },
  {
    imgSrc: "/home-7.png",
    display: "Your New A.M. Ritual",
    button: {
      display: "Order Breakfast",
      href: "#",
      className: "bg-[#e6d262] text-[#66290a]",
    },
  },
  {
    imgSrc: "/home-8.png",
    display: "Good Food, Good People, Great Energy.",
    button: {
      display: "View Open Roles",
      href: "#",
      className: "bg-[#cdeaf9] text-[#003f15]",
    },
  },
] as const

/**
 * A reusable arrow component that dispatches a carousel scroll action when
 * clicked. It renders an `svg` path similar to the provided mock‑ups.
 */
function SlideArrow({ direction, onClick }: { direction: "prev" | "next"; onClick?: () => void }) {
  // The arrow points left when `direction` is "prev" and right when "next"
  const isNext = direction === "next"
  return (
    <button
      type="button"
      aria-label={isNext ? "Next slide" : "Previous slide"}
      onClick={onClick}
      className="absolute inset-y-0 z-20 flex w-[3.5rem] items-center justify-center hover:bg-black/10 transition-colors"
      style={{ [isNext ? "right" : "left"]: 0 }}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
      >
        {isNext ? (
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

/**
 * The main carousel component. It leverages the Embla autoplay plugin to
 * automatically advance slides every 20 seconds and loops infinitely.
 */
export default function HomeCarousel() {
  // Keep a reference to the Embla plugin so we can access its methods later.
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 20000, stopOnInteraction: false })
  )
  const [api, setApi] = React.useState<CarouselApi>()

  // Handlers for our custom arrows. They invoke the Embla API when available.
  const handlePrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])
  const handleNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      plugins={[autoplayPlugin.current]}
      opts={{ loop: true }}
      className="relative w-full"
      onMouseEnter={autoplayPlugin.current.stop}
      onMouseLeave={autoplayPlugin.current.reset}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="relative h-[70vh] md:h-[896px] w-full overflow-hidden">
              {/* Background image */}
              <Image
                src={item.imgSrc}
                alt={item.display}
                fill
                priority={index === 0}
                className="object-cover"
              />
              {/* Overlay to improve legibility */}
              <div className="absolute inset-0 bg-black/30" />
              {/* Headline and button */}
              <div
                className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-4 md:px-0 md:pt-[260px]"
              >
                <h2
                  className="max-w-[90%] text-center font-medium text-white [text-wrap:balance] text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
                >
                  {item.display}
                </h2>
                <Link
                  href={item.button.href}
                  className={`rounded-lg px-8 py-3 text-base font-semibold transition-colors hover:opacity-90 ${item.button.className}`}
                >
                  {item.button.display}
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Custom navigation arrows – hidden on very small screens */}
      <SlideArrow direction="prev" onClick={handlePrev} />
      <SlideArrow direction="next" onClick={handleNext} />
    </Carousel>
  )
}