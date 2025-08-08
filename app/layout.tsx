import type { Metadata } from "next"
import { Geist_Mono, Work_Sans } from "next/font/google"
import localFont from "next/font/local"

import { ThemeProvider } from "@/components/theme-provider"

import "../styles/globals.css"

const fontSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
})
//  TODO convert this to loading via json for speed https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/og/route.tsx
const fontDisplay = localFont({
  src: [
    {
      path: "./CLAYO.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CLAYO-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CLAYO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./CLAYO-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./CLAYO-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-display",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fare",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${geistMono.variable} ${fontDisplay.variable} group/body text-foreground min-h-svh overscroll-none font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex flex-1 flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
