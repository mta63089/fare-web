'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  { name: 'Our Menu', href: '/menu' },
  { name: 'Catering', href: '/catering' },
  {
    name: 'About',
    href: '/about',
  },
  { name: 'Locations', href: '/locations' },
];

export default function Header1() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: {
      backdropFilter: 'blur(20px)',
      backgroundColor:
        theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300 py-4"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? 'scrolled' : 'animate'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        backgroundColor: isScrolled
          ? theme === 'dark'
            ? 'rgba(0, 0, 0, 0.8)'
            : 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
        
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
            <nav className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-foreground flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-rose-500"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  )}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        className="border-border bg-background/95 absolute top-full left-0 mt-2 w-64 overflow-hidden rounded-xl border shadow-xl backdrop-blur-lg"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="hover:bg-muted block px-4 py-3 transition-colors duration-200"
                          >
                            <div className="text-foreground font-medium">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-muted-foreground text-sm">
                                {dropdownItem.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>
          <motion.div
            className="flex items-center space-x-2"
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
<svg width="93" height="37" viewBox="0 0 93 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_148_31)">
<path d="M91.532 28.3368C91.532 31.9591 88.7885 34.6794 84.2969 34.6794H82.2644C80.8418 34.602 79.7128 33.5053 79.7128 32.1605V19.8664C79.7128 18.921 80.4855 18.1548 81.4383 18.1548H82.3345C85.9686 18.1548 87.4204 19.5937 87.4204 23.132H88.5309V11.8729H87.4204C87.4204 15.4111 85.9686 16.85 82.3345 16.85H81.4383C80.4849 16.85 79.7128 16.0839 79.7128 15.1385V3.86266C79.7128 2.46716 80.9266 1.33652 82.4237 1.33652H83.7055C88.197 1.33652 90.9406 4.05685 90.9406 7.67914H92.0511V0.0311584H71.504V1.33596C72.6151 1.33596 73.5113 2.22456 73.5113 4.13252V31.5312C73.5113 33.4013 73.2498 35.0717 71.2189 35.0717C64.7364 35.0717 69.5455 21.5857 58.912 18.0213C63.9423 16.9085 66.187 13.7541 66.187 9.1492C66.187 3.55441 62.6342 0.0311584 54.4328 0.0311584H43.04V1.33596C44.1511 1.33596 45.0473 2.22456 45.0473 4.13252V31.8828C45.0473 33.7908 44.1511 34.6794 43.04 34.6794V35.9842H53.2555V34.6794C52.1443 34.6794 51.2482 33.7908 51.2482 31.8828V20.1824C51.2482 19.2371 52.0209 18.4709 52.9743 18.4709H54.0388L54.0411 18.4731C61.8031 18.4731 55.5989 36.3798 69.8082 36.3798C71.8901 36.3798 72.6017 35.9842 73.944 35.9842H92.6431V28.3362H91.5326L91.532 28.3368ZM53.8974 17.1666H53.036C53.0113 17.1666 52.9878 17.1655 52.9631 17.1655C52.0153 17.1589 51.2487 16.3966 51.2487 15.4551V3.86377C51.2487 2.47217 52.4564 1.34375 53.9485 1.33819C57.4165 1.35766 59.3593 3.31014 59.3593 9.14753C59.3593 15.2197 57.398 17.1661 53.8969 17.1661L53.8974 17.1666Z" fill="#003F15"/>
<path d="M28.7571 0.0461828V1.25639C30.4019 1.25639 32.5029 3.34853 30.6095 6.8217L19.0069 30.3321L19.0086 30.3276C17.5125 33.3362 15.6758 34.6761 13.155 34.6761V35.9853H22.4698V34.6761C20.7022 34.6761 19.0114 33.6828 20.4822 30.6876L20.476 30.7004L22.7583 26.0766C23.334 24.9632 24.1696 24.4413 25.2863 24.4413H30.1881C31.1415 24.4413 31.9143 25.2075 31.9143 26.1528V31.8839C31.9143 33.7919 31.0181 34.6805 29.907 34.6805V35.9853H40.1224V34.6805C39.0113 34.6805 38.1151 33.7919 38.1151 31.8839V0M31.9143 21.4244C31.9143 22.3697 31.1415 23.1354 30.1887 23.1359H25.9373C25.0007 23.1359 24.7016 22.1989 25.0344 21.465L30.6965 9.9944C31.5787 8.18437 31.9148 8.32626 31.9148 10.3566V21.4249L31.9143 21.4244Z" fill="#003F15"/>
<path d="M8.22241 0.051746L0.0136719 0.0311584V1.33596C1.12478 1.33596 2.02096 2.22456 2.02096 4.13252V31.8828C2.02096 33.7908 1.12478 34.6794 0.0136719 34.6794V35.9842H10.2291V34.6794C9.11804 34.6794 8.22185 33.7908 8.22185 31.8828V19.8664C8.22185 18.921 8.99458 18.1548 9.948 18.1548H10.4328C14.067 18.1548 15.5187 19.5938 15.5187 23.132H16.6292V11.8729H15.5187C15.5187 15.4111 14.067 16.85 10.4328 16.85H9.948C8.99514 16.85 8.22241 16.0839 8.22241 15.1385V3.82649L8.2443 3.86266C8.2443 2.46716 9.4581 1.33652 10.9553 1.33652H12.237C16.7286 1.33652 19.4721 4.05685 19.4721 7.67914H20.5827V0.0311584L8.22241 0.0511895V0.051746Z" fill="#003F15"/>
</g>
<defs>
<clipPath id="clip0_148_31">
<rect width="92.6562" height="36.3804" fill="white"/>
</clipPath>
</defs>
</svg>
            </Link>
          </motion.div>

          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="/login"
              className="text-foreground font-medium transition-colors duration-200 hover:text-rose-500"
            >
                <Button variant="link">
              Download the app!
                </Button>
            </Link>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/signup"
                className="inline-flex items-center space-x-2 rounded-sm bg-[#003F15] px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
              >
                <span>Order Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

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
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="border-border bg-background/95 mt-4 space-y-2 rounded-xl border py-4 shadow-xl backdrop-blur-lg">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:bg-muted block px-4 py-3 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="space-y-2 px-4 py-2">
                  <Link
                    href="/login"
                    className="text-foreground hover:bg-muted block w-full rounded-lg py-2.5 text-center font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full rounded-lg bg-gradient-to-r from-rose-500 to-rose-700 py-2.5 text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
