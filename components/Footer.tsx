'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowUpRight,
  Send,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';

// ─── FOOTER CONTENT ───────────────────────────────────────────────────────────
// [COMPANY_INFO: Replace ALL content below with your company information]

const COMPANY_NAME = 'Eastcoast Company'; // [COMPANY_INFO: Your company name]
const COMPANY_TAGLINE =
  'Premium Apparel Manufacturing & Global Export'; // [COMPANY_INFO: Your tagline]
const COMPANY_FOUNDING = '© 2024 Eastcoast Company Pvt. Ltd.'; // [COMPANY_INFO: Legal entity name + year]

// [COMPANY_INFO: Update GST and IEC with your actual numbers]
const COMPANY_REG = {
  gst: 'GST: 33XXXXXXXXXXXXX',     // [COMPANY_INFO: Your GST number]
  iec: 'IEC: XXXXXXXXXX',          // [COMPANY_INFO: Your Import Export Code]
  cin: 'CIN: U17XXXXXXXX',         // [COMPANY_INFO: Your CIN (India) or equiv.]
};

// [COMPANY_INFO: Update all navigation links]
const footerLinks = {
  Products: [
    { label: 'Menswear', href: '#products' },
    { label: 'Womenswear', href: '#products' },
    { label: 'Kidswear', href: '#products' },
    { label: 'Activewear', href: '#products' },
    { label: 'Sustainable', href: '#sustainability' },
    { label: 'Streetwear', href: '#products' },
  ],
  Services: [
    { label: 'Custom Manufacturing', href: '#contact' },
    { label: 'Private Label', href: '#contact' },
    { label: 'Fabric Sourcing', href: '#manufacturing' },
    { label: 'Design & Sampling', href: '#manufacturing' },
    { label: 'Quality Audits', href: '#certifications' },
    { label: 'Export Documentation', href: '#export' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Factory', href: '#infrastructure' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Export Markets', href: '#export' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
};

// [COMPANY_INFO: Update all contact details]
const contactItems = [
  {
    Icon: MapPin,
    text: 'Your Factory Address, City, State, PIN, India',  // [COMPANY_INFO: Address]
  },
  {
    Icon: Mail,
    text: 'exports@yourcompany.com',   // [COMPANY_INFO: Email]
    href: 'mailto:exports@yourcompany.com',
  },
  {
    Icon: Phone,
    text: '+91 421 XXX XXXX',          // [COMPANY_INFO: Phone]
    href: 'tel:+914210000000',
  },
];

// [COMPANY_INFO: Update social media links]
const socialLinks = [
  { Icon: Linkedin, href: 'https://linkedin.com/company/yourcompany', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://instagram.com/yourcompany', label: 'Instagram' },
  { Icon: Twitter, href: 'https://twitter.com/yourcompany', label: 'Twitter' },
  { Icon: Youtube, href: 'https://youtube.com/@yourcompany', label: 'YouTube' },
];

// [COMPANY_INFO: Update certification badges to match your actual certs]
const certBadges = ['GOTS', 'OEKO-TEX', 'ISO 9001', 'WRAP', 'BSCI', 'Sedex'];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'done'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    /*
      [COMPANY_INFO: Implement newsletter subscription logic]
      Options: Mailchimp, ConvertKit, Klaviyo, etc.
      Example Mailchimp embed or API call goes here.
    */
    setSubStatus('done');
    setEmail('');
  };

  return (
    <footer className="bg-brand-dark text-white">
      {/* Top CTA band */}
      <div className="border-t border-white/8">
        <div className="container-brand py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-white mb-2">
                {/* [COMPANY_INFO: Update footer CTA headline] */}
                Ready to source smarter?
              </h3>
              <p className="text-sm text-white/50">
                {/* [COMPANY_INFO: Update footer CTA body] */}
                Partner with us for reliable, ethical, and premium apparel manufacturing at scale.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-white font-semibold rounded-full hover:bg-[#b01e2e] transition-colors shadow-glow-red"
            >
              Get a Quote
              <ArrowUpRight size={15} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="border-t border-white/8">
        <div className="container-brand py-12 lg:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 lg:gap-6">
            {/* Brand column */}
            <div className="col-span-2 lg:col-span-1">
              <div className="font-heading font-bold text-2xl mb-3">
                {COMPANY_NAME}<span className="text-brand-accent">.</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed mb-6 max-w-[220px]">
                {COMPANY_TAGLINE}
              </p>

              {/* Contact items */}
              <div className="space-y-3 mb-6">
                {contactItems.map((item) => {
                  const El = item.href ? 'a' : 'div';
                  return (
                    <El
                      key={item.text}
                      {...(item.href ? { href: item.href } : {})}
                      className="flex items-start gap-2.5 text-xs text-white/40 hover:text-white/70 transition-colors"
                    >
                      <item.Icon size={12} className="shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </El>
                  );
                })}
              </div>

              {/* Social */}
              <div className="flex gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 transition-all duration-300"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter column */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-4">
                Stay Updated
              </h4>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                {/* [COMPANY_INFO: Update newsletter pitch] */}
                Industry insights, sustainability updates, and trend reports for fashion buyers.
              </p>

              {subStatus === 'done' ? (
                <div className="flex items-center gap-2 text-xs text-brand-accent">
                  <span className="w-4 h-4 rounded-full bg-brand-accent/20 flex items-center justify-center">✓</span>
                  You're subscribed!
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3 text-xs text-white placeholder-white/25 focus:outline-none focus:border-brand-accent/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/10 hover:bg-white/15 text-xs font-semibold text-white rounded-xl transition-all duration-300"
                  >
                    Subscribe
                    <Send size={11} />
                  </button>
                </form>
              )}

              {/* Cert badges */}
              <div className="mt-6">
                <div className="text-[9px] font-semibold tracking-[0.15em] uppercase text-white/20 mb-3">
                  Certifications
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {certBadges.map((cert) => (
                    <span
                      key={cert}
                      className="text-[9px] font-semibold px-2 py-1 rounded-md bg-white/8 text-white/40 border border-white/8"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-brand py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-[11px] text-white/25">
              {/* [COMPANY_INFO: Update legal entity and year] */}
              {COMPANY_FOUNDING} · All Rights Reserved
            </div>

            <div className="flex flex-wrap gap-4 text-[11px] text-white/25">
              {/* [COMPANY_INFO: Update registration numbers] */}
              <span>{COMPANY_REG.gst}</span>
              <span>{COMPANY_REG.iec}</span>
              <span>{COMPANY_REG.cin}</span>
            </div>

            <div className="flex gap-4 text-[11px] text-white/25">
              {/* [COMPANY_INFO: Link to your actual policy pages] */}
              <a href="/privacy" className="hover:text-white/50 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white/50 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
