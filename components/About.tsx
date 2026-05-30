'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// ─── ABOUT CONTENT ────────────────────────────────────────────────────────────
// [COMPANY_INFO: Replace all content with your company's actual information]

const SECTION_EYEBROW = 'Who We Are';
const ABOUT_HEADLINE = 'Three Decades of Precision. One Unwavering Standard.';
// [COMPANY_INFO: Replace headline with your core brand statement]

const ABOUT_BODY =
  'We are a vertically integrated apparel manufacturer based in Dindigul, Tamilnadu, India. From raw yarn to finished export-ready garments, every step is engineered with obsessive quality control, ethical practices, and a deep commitment to the planet.';
// [COMPANY_INFO: Replace with your company story / positioning paragraph]

const ABOUT_HIGHLIGHTS = [
  'Vertically integrated from yarn to export',       // [COMPANY_INFO: Your key differentiators]
  'In-house design and sampling studio',
  'Real-time production tracking for buyers',
  'Dedicated compliance and CSR team',
];

// [COMPANY_INFO: Update counter values with your real numbers]
const counters = [
  { end: 30, suffix: '+', label: 'Years in Business' },
  { end: 1200, suffix: '+', label: 'Skilled Employees' },
  { end: 60, suffix: '+', label: 'Export Countries' },
  { end: 500, prefix: '$', suffix: 'M+', label: 'Annual Revenue' },
];

// Animated counter component
function Counter({ end, suffix = '', prefix = '', label }: typeof counters[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="font-heading font-bold text-4xl lg:text-5xl text-brand-text tracking-tight">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="text-sm text-brand-muted font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-brand-bg overflow-hidden">
      <div className="container-brand">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-24"
          ref={sectionRef}
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted">
            <span className="w-6 h-px bg-brand-accent" />
            {SECTION_EYEBROW}
          </span>
        </motion.div>

        {/* Editorial grid — asymmetric layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 lg:mb-32">
          {/* Left: Text column */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-brand-text mb-8"
            >
              {/* [COMPANY_INFO: Replace headline */}
              {ABOUT_HEADLINE}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-brand-muted leading-relaxed mb-8 font-light"
            >
              {/* [COMPANY_INFO: Replace body text */}
              {ABOUT_BODY}
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-text">
                  <CheckCircle2
                    size={16}
                    className="text-brand-accent mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-4 transition-all duration-300 group"
            >
              Partner With Us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right: Image column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/*
              [REPLACE_IMAGE: Add your factory / brand photo here]
              Use Next.js Image:
                import Image from 'next/image';
                <Image src="/images/about-factory.jpg" alt="Our manufacturing facility"
                  fill className="object-cover rounded-3xl" />
            */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-luxury-lg">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/20">
                  <div className="text-6xl font-heading font-bold tracking-tight mb-2">Factory</div>
                  <div className="text-sm tracking-widest uppercase">Replace with your image</div>
                </div>
              </div>
              {/* Decorative overlay card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-5 text-white">
                  <div className="text-xs tracking-[0.15em] uppercase text-white/60 mb-1">
                    {/* [COMPANY_INFO: Update location] */}
                    Dindigul, Tamilnadu, India
                  </div>
                  <div className="font-heading font-semibold text-lg">
                    {/* [COMPANY_INFO: Update facility description] */}
                    600,000 sq. ft. Integrated Facility
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 bg-brand-accent text-white rounded-2xl p-5 shadow-luxury-lg w-36"
            >
              <div className="font-heading font-bold text-3xl">
                {/* [COMPANY_INFO: Update year] */}
                '94
              </div>
              <div className="text-xs text-white/80 mt-1">Founded</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Counter strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-brand-border"
        >
          {counters.map((c) => (
            <Counter key={c.label} {...c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
