import { homeCta } from "@/lib/cta"
import { Marquee } from "@/components/ui/marquee"
import CallToAction from "@/components/call-to-action"
import FlavorCarousel from "@/components/flavor-carousel"
import HomeCarousel from "@/components/home-carousel"
import { Icons } from "@/components/icons"
import LocationsPreview from "@/components/locations-preview"
import MarqueeItem from "@/components/marquee-item"
import MenuPreview from "@/components/menu-preview"
import NewsletterSignup from "@/components/newsletter-signup"
import SeasonalAllStars from "@/components/seasonal-all-stars"

export default function Home() {
  return (
    <div className="flex h-full w-full flex-1 flex-col">
      {/* menu */}
      <HomeCarousel />
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
        <MarqueeItem
          icon={<Icons.blueBanana className="size-6" />}
          href="#"
          text="SEE MORE INFO"
        />
      </Marquee>
      <SeasonalAllStars />
      <MenuPreview />
      <LocationsPreview />
      <div className="pinstripes-primary h-8 w-full" />
      <CallToAction {...homeCta[0]} />
      <CallToAction {...homeCta[1]} />
      <FlavorCarousel />
      <CallToAction {...homeCta[2]} />
      <div className="pinstripes-secondary h-8 w-full" />
      <NewsletterSignup />
    </div>
  )
}
