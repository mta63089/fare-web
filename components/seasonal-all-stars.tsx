"use client"

import { useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Icons } from "./icons"

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
      <div className="py-12 lg:py-16">
        {/* Heading and season badge */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-start gap-4 px-4 lg:gap-0">
          <h2 className="font-display text-2xl font-semibold text-[#004015] lg:text-5xl">
            Meet Our Seasonal
            <br />
            Menu All Stars
          </h2>
          <div className="relative ml-auto flex-shrink-0">
            <div className="relative size-22 lg:size-36">
              <Icons.apple className="h-full w-full text-[#D13C30]" />
              <span className="absolute inset-0 flex place-content-center items-center font-semibold text-[#004015]">
                <span className="font-display text-center text-xs leading-snug font-semibold lg:text-xl">
                  <br />
                  Summer
                  <br />
                  2025
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {allStars.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="basis-1/2 lg:basis-1/4"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative flex h-64 w-full items-end">
                      <Image
                        src={item.imgSrc}
                        alt={item.name}
                        fill
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-[#004015] lg:text-xl">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#555] lg:text-base">
                      {item.farm}
                    </p>
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
