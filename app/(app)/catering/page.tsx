import { cateringCta } from "@/lib/cta"
import CallToAction from "@/components/call-to-action"
import ContactCTA from "@/components/catering/contact-cta"
import CateringFAQ from "@/components/catering/faq"
import HeroCatering from "@/components/catering/hero"
import CateringIdeas from "@/components/catering/ideas"
import SeasonalMenu from "@/components/catering/seasonal-menu"

export default function CateringPage() {
  return (
    <div className="bg-background">
      <HeroCatering />
      <div className="pinstripes-primary h-8 w-full" />
      <CateringIdeas />
      <SeasonalMenu />
      <CallToAction {...cateringCta[0]} />
      <CateringFAQ />
      <ContactCTA />
    </div>
  )
}
