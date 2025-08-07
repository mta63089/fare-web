import Link from "next/link"

interface MarqueeItemProps extends React.ComponentProps<"div"> {
  text: string
  href: string
  icon: React.ReactNode
}

export default function MarqueeItem({ text, href, icon }: MarqueeItemProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-x-4">
      <Link href={href} className="transition-all hover:underline">
        {text}
      </Link>
      {icon}
    </div>
  )
}
