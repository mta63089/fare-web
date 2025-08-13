"use client"

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

const items = [
  {
    imgSrc: "/home-1.png",
    display: "Now Serving Fresh Flavor in Logan Square",
    button: {
      display: "Find Your FARE",
      href: "#",
      className: "bg-chart-4 text-primary",
    },
  },
  {
    imgSrc: "/home-2.png",
    display: "Built to Fuel, Styled to Crave",
    button: {
      display: "Try the Smoky Chicken Bowl",
      href: "#",
      className: "bg-primary text-sidebar",
    },
  },
  {
    imgSrc: "/home-3.png",
    display: "What's in Season is What's on Our Plate",
    button: {
      display: "See What's New",
      href: "#",
      className: "bg-chart-4 text-primary",
    },
  },
  {
    imgSrc: "/home-4.png",
    display: "Where Good Food Meets Good Energy.",
    button: {
      display: "Get To Know Us",
      href: "#",
      className: "bg-sidebar text-primary",
    },
  },
  {
    imgSrc: "/home-5.png",
    display: "Sip Something Seasonal",
    button: {
      display: "Order Now",
      href: "#",
      className: "bg-sidebar text-primary",
    },
  },
  {
    imgSrc: "/home-6.png",
    display: "Feed the Team, Win the Day",
    button: {
      display: "See Our Catering Menu",
      href: "#",
      className: "bg-chart-4 text-primary",
    },
  },
  {
    imgSrc: "/home-7.png",
    display: "Your New A.M. Ritual",
    button: {
      display: "Order Breakfast",
      href: "#",
      className: "bg-chart-2 text-primary",
    },
  },
  {
    imgSrc: "/home-8.png",
    display: "Good Food, Good People, Great Energy.",
    button: {
      display: "View Open Roles",
      href: "#",
      className: "bg-secondary text-primary",
    },
  },
] as const

function SlideArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next"
  onClick?: () => void
}) {
  const isNext = direction === "next"
  return (
    <button
      type="button"
      aria-label={isNext ? "Next slide" : "Previous slide"}
      onClick={onClick}
      className="absolute inset-y-0 z-20 flex w-[3.5rem] items-center justify-center transition-colors hover:bg-black/10"
      style={{ [isNext ? "right" : "left"]: 0 }}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-8 text-white"
      >
        {isNext ? (
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}

export default function HomeCarousel() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 20000, stopOnInteraction: false })
  )
  const [api, setApi] = React.useState<CarouselApi>()

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
            <div className="relative h-[70vh] w-full overflow-hidden md:h-[896px]">
              <Image
                src={item.imgSrc}
                alt={item.display}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-4 md:px-0 md:pt-[260px]">
                <h2 className="font-display max-w-[90%] text-center text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl md:text-6xl lg:text-7xl">
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
      <SlideArrow direction="prev" onClick={handlePrev} />
      <SlideArrow direction="next" onClick={handleNext} />
    </Carousel>
  )
}
