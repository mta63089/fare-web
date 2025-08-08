import Image from "next/image"
import Link from "next/link"

import { Button } from "./ui/button"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"

const items = [
  {
    display: "Northwestern Memorial Hospital",
    imageSrc: "/locations/nw-hospital.jpg",
    city: "Chicago",
  },
  {
    display: "Riverside",
    imageSrc: "/locations/riverside.jpg",
    city: "Chicago",
  },
  {
    display: "Logan Square",
    imageSrc: "/locations/logan-square-1.jpg",
    city: "Chicago",
  },
  {
    display: "From Here On",
    imageSrc: "/locations/from-here-on.jpg",
    city: "Chicago",
  },
  {
    display: "Franklin Street",
    imageSrc: "/locations/franklin-street.jpg",
    city: "Chicago",
  },
  {
    display: "Sterling Food Hall",
    imageSrc: "/locations/sterling-food-hall.jpg",
    city: "Chicago",
  },
]

export default function LocationsPreview({
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className="text-primary-foreground bg-primary w-full py-16"
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-display text-3xl font-semibold lg:text-4xl">
          Our Locations
        </h2>
        <Link href="/locations" className="inline-block">
          <Button
            variant="link"
            className="hover:text-primary-foreground/50 text-primary-foreground p-0 text-sm underline transition-colors lg:text-base"
          >
            Find My Nearest Location
          </Button>
        </Link>
      </div>
      <div className="mt-8 w-full">
        <Carousel opts={{ loop: true }} className="w-full">
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
                  <div className="mt-4 lg:mt-6">
                    <h3 className="text-lg font-medium lg:text-xl">
                      {item.display}
                    </h3>
                    <div>{item.city}</div>
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
