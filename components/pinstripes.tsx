// components/StripedBanner.tsx
import type { ComponentProps } from "react"

export function Pinstripes(props: ComponentProps<"div">) {
  return (
    <div
      className="h-6 w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(
          to right,
          var(--tw-bg-secondary),
          var(--tw-bg-secondary) 8px,
          var(--tw-bg-primary) 8px,
          var(--tw-bg-primary) 16px
        )`,
      }}
      {...props}
    />
  )
}
