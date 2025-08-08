import { Marquee } from "@/components/ui/marquee"
import HomeCarousel from "@/components/home-carousel"
import { Icons } from "@/components/icons"
import MarqueeItem from "@/components/marquee-item"
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
      <NewsletterSignup />
    </div>
  )
}
