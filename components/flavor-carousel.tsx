"use client"

import { useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

// TODO Update to use instagram api to pull most recent X posts
export default function FlavorCarousel() {
  const images = [
    "/flavor-carousel-1.jpg",
    "/flavor-carousel-2.jpg",
    "/flavor-carousel-3.jpg",
    "/flavor-carousel-4.jpg",
    "/flavor-carousel-5.jpg",
  ]
  const autoplayPlugin = useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )

  return (
    <section className="flex w-full flex-col overflow-hidden">
      <h2 className="font-display text-primary self-center py-4 text-4xl font-semibold md:py-12">
        Follow the Flavor
      </h2>
      <Carousel
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }}
        className="pb-4 md:pb-12"
      >
        <CarouselContent>
          {images.map((imageSrc) => (
            <CarouselItem key={imageSrc} className="basis-1/3 lg:basis-1/4">
              <div className="relative flex h-64 md:h-96">
                <Image
                  src={imageSrc}
                  alt={imageSrc}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
