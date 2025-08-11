import HeroBanner from "@/components/hero-banner"
import Menu from "@/components/menu"

export default function MenuPage() {
  return (
    <div>
      <HeroBanner
        imageSrc="/menu/hero.jpg"
        heading="Real Food, Ready When You Are"
        button={{
          text: "Order Now",
          href: "https://order.foodbyfare.com/",
          className: "bg-chart-4 text-primary-foreground hover:bg-chart-4/80",
        }}
      />
      <Menu />
    </div>
  )
}
