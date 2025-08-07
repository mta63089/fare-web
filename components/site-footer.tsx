import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="bg-[#003f15] text-[#f9f6e5] py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-8">
        {/* Our Company */}
        <div>
          <h3 className="text-lg font-medium mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/locations">Locations</Link></li>
            <li><Link href="/investor-relations">Investor Relations</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Our Food */}
        <div>
          <h3 className="text-lg font-medium mb-4">Our Food</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/nutrition">Nutritional Information</Link></li>
            <li><Link href="/allergens">Allergen Information</Link></li>
          </ul>
        </div>

        {/* Support & Legal */}
        <div>
          <h3 className="text-lg font-medium mb-4">Support & Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact">Contact Support</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Download & Social */}
        <div>
          <h3 className="text-lg font-medium mb-4">Download the FARE App</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/ios">iOS</Link></li>
            <li><Link href="/android">Android</Link></li>
          </ul>

          <h3 className="text-lg font-medium mt-6 mb-4">Social</h3>
          <div className="flex space-x-4">
            <Link href="#" className="w-3 h-3 bg-[#f9f6e5] rounded-sm" />
            <Link href="#" className="w-3 h-3 bg-[#f9f6e5] rounded-sm" />
            <Link href="#" className="w-3 h-3 bg-[#f9f6e5] rounded-sm" />
            <Link href="#" className="w-3 h-3 bg-[#f9f6e5] rounded-sm" />
          </div>
        </div>
      </div>

      {/* Logo Centered */}
      <div className="flex justify-center py-8">
        <svg
          width={140}
          height={140}
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20"
        >
          <g clipPath="url(#clip0_148_531)">
            <path d="M69.9997 139.335C108.659 139.335 139.999 108.144 139.999 69.6677C139.999 31.1913 108.659 0 69.9997 0C31.3399 0 0 31.1913 0 69.6677C0 108.144 31.3399 139.335 69.9997 139.335Z" fill="#3FAF54" />
            <path d="M123.68 65.7715C121.108 62.5279 117.525 61.541 116.509 61.298C114.51 60.82 112.488 60.8614 110.634 61.0965C110.01 61.0459 109.439 60.6815 109.168 60.1102C108.859 59.4589 109.017 58.6814 109.526 58.1502C112.158 55.3951 114.818 51.4482 115.576 46.2479C115.896 44.0548 116.86 37.444 112.468 32.5293C107.352 26.8049 98.6324 27.5062 94.7821 28.9678C94.732 28.9869 94.6819 29.0059 94.6324 29.0256C91.6702 30.1845 88.4315 28.432 88.0475 25.2875C87.4439 20.3452 85.2555 15.9124 81.6751 12.9117C76.8801 8.89324 71.11 8.71859 70.3032 8.70545C69.559 8.69298 63.397 8.6805 58.3276 12.9117C54.734 15.9111 52.5298 20.3413 51.9248 25.2704C51.5389 28.4163 48.3042 30.1661 45.338 29.0131..." fill="#003F15" />
          </g>
          <defs>
            <clipPath id="clip0_148_531">
              <rect width={140} height={140} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        © 2025 FARE Chicago.
      </div>
    </footer>
  );
}