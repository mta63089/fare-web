"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

export interface CallToActionProps extends React.ComponentProps<"section"> {
  /**
   * Path to the image displayed alongside the text. Should reference an asset
   * in your Next.js public directory (e.g. "/images/hero.jpg").
   */
  imageSrc: string
  /**
   * Large heading text shown in the content area.
   */
  header: string
  /**
   * Body copy supporting the call to action. Accepts plain text with
   * automatic wrapping.
   */
  content: string
  /**
   * URL the button should link to.
   */
  src: string
  /**
   * Label displayed inside the call‑to‑action button.
   */
  buttonContent: string
  /**
   * Additional Tailwind classes applied to the button. Use this to override
   * colours or add custom spacing.
   */
  buttonCn?: string
  /**
   * Alignment of the image on larger screens. When set to "left" the
   * image appears on the left and text on the right; when set to "right"
   * the image appears on the right. On mobile, the image always stacks
   * above the text.
   */
  align?: "left" | "right"
}

export default function CallToAction({
  imageSrc,
  header,
  content,
  src,
  buttonContent,
  buttonCn,
  align = "left",
  className = "",
  ...props
}: CallToActionProps) {
  const imageOrder =
    align === "right" ? "order-1 lg:order-2" : "order-1 lg:order-1"
  const textOrder =
    align === "right" ? "order-2 lg:order-1" : "order-2 lg:order-2"

  return (
    <section className={cn("w-full py-16", className)} {...props}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 lg:flex-row lg:items-stretch lg:gap-12">
        {/* Image container */}
        <div
          className={cn(
            "relative h-64 w-full overflow-hidden rounded-2xl lg:h-96 lg:w-1/2",
            imageOrder
          )}
        >
          <Image
            src={imageSrc}
            alt={header}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Text and button */}
        <div
          className={cn(
            "flex w-full flex-col justify-center lg:w-1/2",
            textOrder
          )}
        >
          <h2 className="font-display text-3xl leading-tight font-semibold lg:text-4xl">
            {header}
          </h2>
          <p className="mt-4 max-w-prose text-base leading-tight lg:mt-6 lg:text-lg">
            {content}
          </p>
          <Link href={src} className="mt-6 w-max lg:mt-8">
            <Button className={buttonCn ?? ""}>{buttonContent}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
