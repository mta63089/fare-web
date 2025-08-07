import { Marquee } from "@/components/ui/marquee"
import CallToAction from "@/components/cta"
import { Icons } from "@/components/icons"
import MarqueeItem from "@/components/marquee-item"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      {/* menu */}
      <CallToAction />
      <Marquee
        className="text-primary-foreground bg-primary font-display w-full [--duration:20s]"
        pauseOnHover
      >
        <MarqueeItem
          icon={<Icons.star className="size-8" />}
          href="#"
          text="SEE MORE INFO"
        />
        <MarqueeItem
          icon={<Icons.tomato className="size-8" />}
          href="#"
          text="5 NEW LOCATIONS COMING SOON"
        />
      </Marquee>
      <NewsletterSignup />
    </div>
  )
}
