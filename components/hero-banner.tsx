"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

export interface HeroBannerProps extends React.ComponentProps<"section"> {
  /** Background image to display. Must reference an asset in the public folder. */
  imageSrc: string
  /** Main headline text to overlay on the image. */
  heading: string
  /** Optional object defining the call‑to‑action button. If omitted the button is hidden. */
  button?: {
    /** Text shown inside the button. */
    text: string
    /** Destination the button links to. */
    href: string
    /** Optional additional Tailwind classes for the button. */
    className?: string
  }
}

export default function HeroBanner({
  imageSrc,
  heading,
  button,
  className,
  ...props
}: HeroBannerProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      {...props}
    >
      <div className="relative h-[60vh] w-full md:h-[70vh]">
        <Image
          src={imageSrc}
          alt={heading}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="font-display text-background text-5xl font-semibold md:w-2/3 md:text-7xl">
            {heading}
          </h1>
          {button && (
            <Link href={button.href} className="mt-6 inline-block">
              <Button
                className={cn(
                  `px-8 py-3 text-base font-medium`,
                  button.className ??
                    "text-primary bg-chart-4 hover:bg-chart-4/90"
                )}
              >
                {button.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
