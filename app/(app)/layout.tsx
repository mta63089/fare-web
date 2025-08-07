import type { Metadata } from "next"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Fare - Home",
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooter />
    </>
  )
}
