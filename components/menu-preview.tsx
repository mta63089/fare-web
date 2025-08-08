import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

const items = [
  {
    display: "Seasonal Bowls & Plates",
    imageSrc: "/home-menu-1.png",
    src: "/menu",
  },
  {
    display: "Breakfast Favorites",
    imageSrc: "/home-menu-2.png",
    src: "/menu",
  },
  {
    display: "Coffee, Tea, and Smoothies",
    imageSrc: "/home-menu-3.png",
    src: "/menu",
  },
]

export default function MenuPreview({
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className="w-full py-16" {...props}>
      {/* Heading and call to action link */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-primary text-3xl font-semibold lg:text-4xl">
          Our Menu
        </h2>
        <Link href="/menu">
          <Button
            variant="link"
            className="hover:text-primary/50 p-0 text-sm underline lg:text-base"
          >
            View Full Menu
          </Button>
        </Link>
      </div>
      <div className="mt-8 w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={item.display}
                className="basis-full lg:basis-1/3"
              >
                <div className="flex h-full flex-col px-4 lg:px-6">
                  <div className="relative h-80 w-full overflow-hidden rounded-2xl lg:h-96">
                    <Image
                      src={item.imageSrc}
                      alt={item.display}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-[#004015] lg:mt-6">
                    <h3 className="text-lg font-medium lg:text-xl">
                      {item.display}
                    </h3>
                    <Link href={item.src} className="mt-1 inline-block">
                      <Button
                        variant="link"
                        className="p-0 text-sm lg:text-base"
                      >
                        Order Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
