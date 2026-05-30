'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── CLIENTS / BRANDS DATA ────────────────────────────────────────────────────
// [COMPANY_INFO: Replace with your actual client/brand logos and names]
// Add logo image files to /public/images/clients/
const clientLogos = [
  // [COMPANY_INFO: Add your actual client logos]
  // Format: { name: 'Brand Name', logoPath: '/images/clients/brand.svg' }
  { name: 'Brand Alpha', initials: 'BA' },   // Replace with real logo
  { name: 'Nova Fashion', initials: 'NF' },  // Replace with real logo
  { name: 'Elara Style', initials: 'ES' },   // Replace with real logo
  { name: 'Vertex Wear', initials: 'VW' },   // Replace with real logo
  { name: 'Moda Group', initials: 'MG' },    // Replace with real logo
  { name: 'Peak Apparel', initials: 'PA' },  // Replace with real logo
  { name: 'Riviera Co.', initials: 'RC' },   // Replace with real logo
  { name: 'Crown Label', initials: 'CL' },   // Replace with real logo
  { name: 'Axis Sport', initials: 'AS' },    // Replace with real logo
  { name: 'Bloom Wear', initials: 'BW' },    // Replace with real logo
  { name: 'Drift & Co.', initials: 'DC' },   // Replace with real logo
  { name: 'Crest Mode', initials: 'CM' },    // Replace with real logo
];

// Split into two rows
const row1 = clientLogos.slice(0, 6);
const row2 = clientLogos.slice(6);

function LogoCard({ client }: { client: (typeof clientLogos)[0] }) {
  return (
    <div className="shrink-0 mx-5 flex items-center justify-center w-[160px] h-[72px] bg-white border border-brand-border rounded-xl grayscale hover:grayscale-0 hover:border-brand-accent/30 hover:shadow-luxury transition-all duration-400 cursor-default group">
      {/*
        [REPLACE_IMAGE: Replace initials block with actual logo image]
        import Image from 'next/image';
        <Image src={client.logoPath} alt={client.name} width={100} height={40} className="object-contain opacity-40 group-hover:opacity-100 transition-opacity" />
      */}
      <div className="flex flex-col items-center gap-0.5">
        <div className="font-heading font-bold text-xl text-brand-light group-hover:text-brand-accent transition-colors">
          {client.initials}
        </div>
        <div className="text-[9px] font-medium text-brand-light/60 tracking-widest uppercase group-hover:text-brand-muted transition-colors">
          {client.name}
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="clients" className="section-padding bg-brand-bg overflow-hidden" ref={ref}>
      <div className="container-brand mb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted mb-4">
            <span className="w-6 h-px bg-brand-accent" />
            Global Partners
            <span className="w-6 h-px bg-brand-accent" />
          </span>
          <h2 className="font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-brand-text mb-4">
            {/* [COMPANY_INFO: Update section headline] */}
            Trusted by the World's
            <br />
            Leading Fashion Brands
          </h2>
          <p className="text-sm text-brand-muted">
            {/* [COMPANY_INFO: Update partner/client count] */}
            180+ active buyers across 60+ countries rely on us for premium, compliant manufacturing.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 overflow-hidden">
        {/* Row 1 — forward */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

          <div className="marquee-track">
            {[...row1, ...row1].map((client, i) => (
              <LogoCard key={`r1-${i}`} client={client} />
            ))}
          </div>
        </div>

        {/* Row 2 — reverse */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

          <div className="marquee-track-reverse">
            {[...row2, ...row2].map((client, i) => (
              <LogoCard key={`r2-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust line */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="container-brand mt-12 text-center"
      >
        <p className="text-xs text-brand-muted">
          {/* [COMPANY_INFO: Update NDA/confidentiality note if needed] */}
          Partner brand names displayed with permission. Additional references available under NDA.
        </p>
      </motion.div>
    </section>
  );
}
