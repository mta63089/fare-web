import CallToAction from "@/components/about/cta"
import HeroBanner from "@/components/hero-banner"

export default function AboutPage() {
  return (
    <div>
      <HeroBanner
        imageSrc="/about/hero.jpg"
        heading="Real Food. Real Flavor. Real Good."
      />
      <CallToAction />
    </div>
  )
}
