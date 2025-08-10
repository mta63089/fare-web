import { CallToActionProps } from "@/components/call-to-action"

export const homeCta: CallToActionProps[] = [
  {
    className: "bg-chart-1 text-primary",
    imageSrc: "/home-cta-1.png",
    header: "Real Food. No Fuss.",
    content:
      "Food isn't just fuel, it's a form of self care. A way to take care of yourself without overthinking it. That's why we started FARE: to make eating well effortless, delicious, and something you actually look forward to.",
    src: "/about",
    buttonContent: "Dig Into Our Story",
    align: "right",
  },
  {
    className: "bg-[#f2e7ca] text-primary",
    imageSrc: "/home-cta-2.png",
    header:
      "Crave-Worthy Catering That Keeps Everyone Happy for Office Lunches, Dinner Parties, and Everything in Between",
    content:
      "Feeding a group? We make it easy. Pick your proteins, sides, seasonal bases - and don't forget our signature sauces. We'll bring the goods, including feel-good desserts that always get a second look. Perfect for offices, parties, or any moment that deserves better-than-average everything.",
    src: "/catering",
    buttonContent: "View Catering Menu",
    align: "left",
  },
  {
    className: "bg-primary text-primary-foreground",
    imageSrc: "/home-cta-3.png",
    header: "Good Taste Pays Off",
    content:
      "Say hello to the FARE app — your new shortcut to points, perks, and free meals. Order ahead, skip the line, and get rewarded just for doing your thing.",
    src: "#",
    buttonContent: "Download the App",
    buttonCn:
      "bg-primary-foreground text-primary hover:bg-primary-foreground/50",
    align: "left",
  },
  {
    className: "bg-[#f2e7ca] text-primary",
    imageSrc: "/menu/cta-1.png",
    header: "Good Taste Pays Off",
    content:
      "Say hello to the FARE app — your new shortcut to points, perks, and free meals. Order ahead, skip the line, and get rewarded just for doing your thing.",
    src: "#",
    buttonContent: "Download the App",
    buttonCn:
      "bg-primary-foreground text-primary hover:bg-primary-foreground/50",
    align: "left",
  },
]
