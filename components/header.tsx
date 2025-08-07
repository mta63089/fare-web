"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Icons } from "./icons"
import { Button } from "./ui/button"

interface NavItem {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: { name: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  { name: "Our Menu", href: "/menu" },
  { name: "Catering", href: "/catering" },
  { name: "About", href: "/about" },
  { name: "Locations", href: "/locations" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  }

  return (
    <motion.header
      className="sticky top-0 left-0 z-50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled
          ? theme === "dark"
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : "transparent",
        boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      {/* Pinstripe bar */}
      <div className="pinstripes h-8 w-full" />
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Mobile hamburger / close button */}
          <motion.button
            className="hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
          {/* Desktop navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className="text-foreground group flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-rose-500"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                  {/* Underline animation on hover */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}
          </nav>
          {/* Logo centred on desktop; on mobile sits to the right of the hamburger */}
          <motion.div
            className="flex space-x-2"
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex space-x-2">
              <Icons.logo />
            </Link>
          </motion.div>
          {/* Right‑hand actions */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="text-foreground hidden font-medium transition-colors duration-200 hover:text-rose-500 lg:flex"
            >
              <Button variant="link">Download the app!</Button>
            </Link>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#"
                className="inline-flex items-center space-x-2 rounded-sm bg-[#003F15] px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <span>Order Now</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Full‑screen mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-[#003F15] text-white"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
          >
            {/* Top bar inside the mobile overlay */}
            <div className="flex h-16 items-center justify-between px-4">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
              >
                <X className="h-6 w-6" />
              </button>
              <Link href="/" className="flex space-x-2">
                <Icons.logo />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center space-x-2 rounded-sm bg-[#003F15] px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <span>Order Now</span>
              </Link>
            </div>
            <nav className="mt-10 flex flex-col items-start space-y-8 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative text-3xl font-medium"
                >
                  <span>{item.name}</span>
                  {/* Animated underline on hover */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative text-3xl font-medium"
              >
                <span>Download the App</span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
