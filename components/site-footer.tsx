import Link from "next/link"

import { Icons } from "./icons"

export default function SiteFooter() {
  return (
    <footer className="bg-[#003f15] py-12 text-[#f9f6e5]">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
        {/* Our Company */}
        <div>
          <h3 className="mb-4 text-lg font-medium">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/investor-relations">Investor Relations</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Our Food */}
        <div>
          <h3 className="mb-4 text-lg font-medium">Our Food</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/sustainability">Sustainability</Link>
            </li>
            <li>
              <Link href="/nutrition">Nutritional Information</Link>
            </li>
            <li>
              <Link href="/allergens">Allergen Information</Link>
            </li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h3 className="mb-4 text-lg font-medium">Support & Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact">Contact Support</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Download & Social */}
        <div>
          <h3 className="mb-4 text-lg font-medium">Download the FARE App</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/ios">iOS</Link>
            </li>
            <li>
              <Link href="/android">Android</Link>
            </li>
          </ul>

          <h3 className="mt-6 pb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/foodbyfare" target="_blank">
              <Icons.instagram className="size-6" />
            </a>
            <a target="_blank" href="https://www.facebook.com/foodbyfare">
              <Icons.facebook className="size-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Logo Centered */}
      <div className="flex justify-center py-8">
        <Icons.footerFork />
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm">© 2025 FARE Chicago.</div>
    </footer>
  )
}
