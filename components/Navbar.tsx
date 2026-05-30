'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

// ─── NAVIGATION DATA ─────────────────────────────────────────────────────────
// [COMPANY_INFO: Company name shown in navbar logo]
const COMPANY_NAME = 'Eastcoast Company';

// [COMPANY_INFO: Update navigation links to match your site sections]
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products', hasMega: true },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Export Markets', href: '#export' },
  { label: 'Contact', href: '#contact' },
];

// [COMPANY_INFO: Update product categories to match your offerings]
const megaMenuCategories = [
  {
    label: 'Menswear',
    desc: 'T-shirts, Polos, Shirts, Denim',
    href: '#products',
  },
  {
    label: 'Womenswear',
    desc: 'Tops, Dresses, Co-ords, Activewear',
    href: '#products',
  },
  {
    label: 'Kidswear',
    desc: 'Infant to Teen, Casual & Schoolwear',
    href: '#products',
  },
  {
    label: 'Activewear',
    desc: 'Performance, Gym, Yoga & Sports',
    href: '#products',
  },
  {
    label: 'Sustainable',
    desc: 'Organic, Recycled & GOTS Certified',
    href: '#sustainability',
  },
  {
    label: 'Streetwear',
    desc: 'Hoodies, Joggers, Oversized Fits',
    href: '#products',
  },
  {
    label: 'Fashion Basics',
    desc: 'Essentials, Basics & Everyday Wear',
    href: '#products',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navbarBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-luxury border-b border-brand-border'
    : 'bg-transparent';

  const textColor = scrolled ? 'text-brand-text' : 'text-white';
  const logoColor = scrolled ? 'text-brand-text' : 'text-white';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBg}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-brand">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className={`font-heading font-bold text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${logoColor}`}
              whileHover={{ scale: 1.02 }}
            >
              {/* [COMPANY_INFO: Replace with your logo image or company name */}
              {COMPANY_NAME}
              <span className="text-brand-accent">.</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8" ref={megaRef}>
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label} className="relative">
                    <button
                      onMouseEnter={() => setMegaOpen(true)}
                      onClick={() => setMegaOpen((v) => !v)}
                      className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-accent ${textColor}`}
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: megaOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {megaOpen && (
                        <motion.div
                          onMouseLeave={() => setMegaOpen(false)}
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] bg-white rounded-2xl shadow-luxury-lg border border-brand-border overflow-hidden"
                        >
                          <div className="p-6">
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-muted mb-4">
                              Product Categories
                            </p>
                            <div className="grid grid-cols-2 gap-2">
                              {megaMenuCategories.map((cat) => (
                                <a
                                  key={cat.label}
                                  href={cat.href}
                                  onClick={() => setMegaOpen(false)}
                                  className="group flex flex-col gap-0.5 p-3 rounded-xl hover:bg-brand-bg transition-colors duration-200"
                                >
                                  <span className="font-heading font-semibold text-sm text-brand-text group-hover:text-brand-accent transition-colors">
                                    {cat.label}
                                  </span>
                                  <span className="text-xs text-brand-muted">{cat.desc}</span>
                                </a>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-brand-border">
                              <a
                                href="#contact"
                                onClick={() => setMegaOpen(false)}
                                className="flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all"
                              >
                                Request Custom Product Range
                                <ArrowUpRight size={14} />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-accent ${textColor}`}
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="ml-4 px-6 py-2.5 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-[#b01e2e] transition-colors duration-300 shadow-glow-red"
              >
                Get a Quote
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-brand-border">
                <span className="font-heading font-bold text-xl text-brand-text">
                  {COMPANY_NAME}<span className="text-brand-accent">.</span>
                </span>
                <button onClick={() => setMobileOpen(false)} className="p-1">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl font-medium text-brand-text hover:bg-brand-bg hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight size={14} className="opacity-40" />
                  </motion.a>
                ))}
              </nav>

              <div className="p-6 border-t border-brand-border">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 bg-brand-accent text-white font-semibold rounded-full hover:bg-[#b01e2e] transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
