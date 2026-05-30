'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// ─── INFRASTRUCTURE DATA ──────────────────────────────────────────────────────
// [COMPANY_INFO: Update all stats and descriptions with actual facility details]
const infraStats = [
  { value: '600K', unit: 'sq. ft.', label: 'Facility Area' },    // [COMPANY_INFO: Your facility size]
  { value: '400+', unit: '', label: 'Knitting Machines' },        // [COMPANY_INFO: Your machine count]
  { value: '2.5MW', unit: '', label: 'Solar Power Capacity' },    // [COMPANY_INFO: Your renewable energy]
  { value: '800+', unit: '', label: 'Skilled Operators' },        // [COMPANY_INFO: Your workforce]
];

// Masonry-style image cells
// [REPLACE_IMAGE: Replace gradient cells with actual factory photography]
const imageCells = [
  {
    label: 'Knitting Floor',
    span: 'lg:col-span-4 lg:row-span-2',
    height: 'min-h-[280px] lg:min-h-[500px]',
    gradient: 'from-[#1a1a1a] to-[#0a0a0a]',
    // [REPLACE_IMAGE: /images/infra/knitting-floor.jpg — wide shot of production floor]
  },
  {
    label: 'Dyehouse',
    span: 'lg:col-span-4',
    height: 'min-h-[220px]',
    gradient: 'from-[#1a0a0a] to-[#0a0505]',
    // [REPLACE_IMAGE: /images/infra/dyehouse.jpg]
  },
  {
    label: 'Cutting Section',
    span: 'lg:col-span-4',
    height: 'min-h-[220px]',
    gradient: 'from-[#0a0a1a] to-[#050510]',
    // [REPLACE_IMAGE: /images/infra/cutting.jpg]
  },
  {
    label: 'Quality Lab',
    span: 'lg:col-span-4',
    height: 'min-h-[280px]',
    gradient: 'from-[#0a1a0a] to-[#050f05]',
    // [REPLACE_IMAGE: /images/infra/quality-lab.jpg]
  },
  {
    label: 'Packing & Export',
    span: 'lg:col-span-4',
    height: 'min-h-[280px]',
    gradient: 'from-[#1a1a0a] to-[#0f0f05]',
    // [REPLACE_IMAGE: /images/infra/packing.jpg]
  },
  {
    label: 'Design Studio',
    span: 'lg:col-span-4',
    height: 'min-h-[280px]',
    gradient: 'from-[#100a1a] to-[#08050f]',
    // [REPLACE_IMAGE: /images/infra/design-studio.jpg]
  },
];

export default function Infrastructure() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="infrastructure" className="section-padding bg-brand-bg overflow-hidden" ref={ref}>
      <div className="container-brand">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12 lg:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted mb-4 block"
            >
              <span className="w-6 h-px bg-brand-accent" />
              Our Infrastructure
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-brand-text"
            >
              {/* [COMPANY_INFO: Update headline] */}
              Built to Deliver
              <br />
              <span className="text-brand-muted">At Scale.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-sm leading-relaxed"
          >
            {/* [COMPANY_INFO: Replace with your facility description] */}
            A fully integrated manufacturing campus built for speed, scale, and sustainability. From in-house yarn processing to export-ready packing — every step happens under one roof, monitored in real time.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 lg:mb-10"
        >
          {infraStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="bg-gray-900 rounded-2xl p-5 border border-gray-800"
            >
              <div className="font-heading font-bold text-3xl text-white mb-0.5">
                {stat.value}
                <span className="text-gray-400 text-xl">{stat.unit}</span>
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Masonry image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto gap-3">
          {imageCells.map((cell, i) => (
            <motion.div
              key={cell.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl img-zoom-container ${cell.span} ${cell.height}`}
            >
              {/*
                [REPLACE_IMAGE: Replace gradient with actual factory image]
                import Image from 'next/image';
                <Image src={cell.imagePath} alt={cell.label} fill className="object-cover img-zoom-target" />
              */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cell.gradient} img-zoom-target`}
              />

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Label */}
              <div className="absolute bottom-5 left-5 z-10">
                <span className="text-sm font-semibold text-white tracking-wide">
                  {cell.label}
                </span>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3M8 2V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width bottom band with parallax */}
      <motion.div
        style={{ y: parallaxY }}
        className="mt-16 relative overflow-hidden"
      >
        <div className="h-[200px] lg:h-[300px] w-full bg-brand-dark relative">
          {/*
            [REPLACE_IMAGE: Full-width facility aerial or dramatic factory wide shot]
            /images/infra/facility-aerial.jpg
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-[#111111] to-brand-dark" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-heading font-bold text-4xl lg:text-6xl text-white/10 tracking-tight select-none">
                {/* [COMPANY_INFO: Optional decorative text, usually facility name or tagline] */}
                MANUFACTURING EXCELLENCE
              </div>
            </div>
          </div>
          {/* Accent overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
