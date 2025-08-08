"use client"

import { useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface StarItem {
  imgSrc: string
  name: string
  farm: string
}

const allStars: StarItem[] = [
  {
    imgSrc: "/seasonal-1.png",
    name: "Summer Plums",
    farm: "Golden Harvest Orchards",
  },
  {
    imgSrc: "/seasonal-2.png",
    name: "Seasonal Greens",
    farm: "Smith Family Farm",
  },
  {
    imgSrc: "/seasonal-3.png",
    name: "Vine Ripened Tomatoes",
    farm: "Chicago Farm Collaborative",
  },
  {
    imgSrc: "/seasonal-4.png",
    name: "Organic Radishes",
    farm: "Farmers Co‑op",
  },
  {
    imgSrc: "/seasonal-5.png",
    name: "Fresh Peaches",
    farm: "Willow Acres",
  },
]

export default function SeasonalAllStars() {
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (
    <section className="w-full overflow-hidden bg-[#F9F4E0]">
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-semibold text-[#004015] sm:text-3xl md:text-5xl">
          Meet Our Seasonal Menu All Stars
        </h2>
        <div className="absolute top-8 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#D13C30] text-center text-xs font-semibold text-white md:h-20 md:w-20 md:text-sm">
          Summer
          <br />
          2025
        </div>
        {/* Desktop layout */}
        <div className="mt-10 hidden w-full items-end justify-between gap-6 md:flex">
          {allStars.map((item) => (
            <div key={item.name} className="flex flex-col items-center">
              <div className="relative flex h-40 w-40 items-end md:h-48 md:w-48">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 12rem, 100vw"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-base font-medium text-[#004015] md:text-lg">
                {item.name}
              </h3>
              <p className="text-xs text-[#555] md:text-sm">{item.farm}</p>
            </div>
          ))}
        </div>
        {/* Mobile carousel */}
        <div className="mt-8 md:hidden">
          <Carousel
            plugins={[autoplayRef.current]}
            opts={{ loop: true }}
            onMouseEnter={autoplayRef.current.stop}
            onMouseLeave={autoplayRef.current.reset}
            className="w-full"
          >
            <CarouselContent>
              {allStars.map((item) => (
                <CarouselItem key={item.name} className="basis-[80%] pl-4">
                  <div className="flex flex-col items-center">
                    <div className="relative flex h-56 w-full items-end">
                      <Image
                        src={item.imgSrc}
                        alt={item.name}
                        fill
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-[#004015]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#555]">{item.farm}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="pinstripes-secondary h-8 w-full" />
    </section>
  )
}
