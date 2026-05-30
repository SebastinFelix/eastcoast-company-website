'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

// ─── HERO CONTENT ─────────────────────────────────────────────────────────────
// [COMPANY_INFO: Replace all text content below with your company messaging]

const HERO_EYEBROW = 'Est. 1994 · Dindigul, Tamilnadu, India'; // [COMPANY_INFO: Founded year + location]
const HERO_HEADLINE_1 = 'Crafting Tomorrow\'s';
const HERO_HEADLINE_2 = 'Fashion. Today.';
const HERO_SUBTEXT =
  'Premium garment manufacturing and global export — built on 30 years of precision, ethics, and craftsmanship trusted by the world\'s leading fashion brands.';
// [COMPANY_INFO: Update subtext with your specific value proposition]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* ── Video / Image Background ─────────────────────────────────────── */}
      {/*
        [REPLACE_IMAGE: Add your cinematic hero video or high-quality garment
        manufacturing / fashion photography image here]

        For VIDEO:
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/hero-reel.mp4"     ← [COMPANY_INFO: your video path]
            poster="/images/hero-poster.jpg" ← [COMPANY_INFO: fallback image]
          />

        For IMAGE (Next.js):
          import Image from 'next/image';
          <Image
            src="/images/hero.jpg"   ← [COMPANY_INFO: your hero image path]
            alt="Premium garment manufacturing"
            fill className="object-cover"
            priority
          />
      */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 placeholder-hero"
        aria-hidden
      >
        {/* Placeholder gradient — replace with video/image above */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#141414] to-[#1a1a1a]" />
        {/* Decorative fabric-like texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}
        />
      </motion.div>

      {/* Dark overlay with parallax */}
      <motion.div
        className="absolute inset-0 bg-brand-dark"
        style={{ opacity: overlayOpacity }}
        aria-hidden
      />

      {/* Accent color sweep — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D72638 0%, transparent 70%)' }}
        aria-hidden
      />

      {/* ── Hero Content ─────────────────────────────────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 container-brand text-white"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
              <span className="w-8 h-px bg-brand-accent" />
              {/* [COMPANY_INFO: Update eyebrow text] */}
              {HERO_EYEBROW}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight mb-8"
          >
            {/* [COMPANY_INFO: Update headline — keep it short, punchy, bold] */}
            <span className="block">{HERO_HEADLINE_1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              {HERO_HEADLINE_2}
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed mb-12 font-light"
          >
            {HERO_SUBTEXT}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(215,38,56,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 bg-brand-accent text-white font-semibold rounded-full text-base transition-all duration-300"
            >
              Request a Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>

            <motion.a
              href="#manufacturing"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full text-base hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white/50 group-hover:border-white transition-colors">
                <Play size={8} fill="currentColor" />
              </span>
              See How We Work
            </motion.a>
          </motion.div>

          {/* Quick Stats Row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              // [COMPANY_INFO: Update these stats with your actual numbers]
              { value: '30+', label: 'Years of Excellence' },
              { value: '60+', label: 'Export Countries' },
              { value: '1M+', label: 'Units / Month' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-heading font-bold text-3xl text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-white/50 tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
