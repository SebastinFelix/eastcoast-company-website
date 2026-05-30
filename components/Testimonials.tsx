'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// ─── TESTIMONIALS DATA ────────────────────────────────────────────────────────
// [COMPANY_INFO: Replace with actual client testimonials / references]
const testimonials = [
  {
    id: 1,
    quote:
      'They\'ve been our manufacturing partner for 8 years. Consistent quality, transparent communication, and they\'ve never missed a shipment window. Exactly what a global brand needs.',
    // [COMPANY_INFO: Actual buyer name]
    author: 'Sarah Mitchell',
    // [COMPANY_INFO: Actual buyer title]
    title: 'VP Sourcing & Supply Chain',
    // [COMPANY_INFO: Actual buyer company]
    company: 'Vertex Fashion Group',
    // [COMPANY_INFO: Buyer location]
    country: 'New York, USA',
    // [COMPANY_INFO: Replace with actual person photo: /images/testimonials/sarah.jpg]
    initials: 'SM',
    color: '#D72638',
    stars: 5,
  },
  {
    id: 2,
    quote:
      'The sampling speed is unmatched. We went from sketch to bulk production in 6 weeks. Their design team understood our aesthetic perfectly, and GOTS certification made our sustainability reporting effortless.',
    // [COMPANY_INFO: Actual buyer name]
    author: 'Lukas Bauer',
    title: 'Head of Product Development',
    company: 'Nova Collective',
    country: 'Berlin, Germany',
    initials: 'LB',
    color: '#3B82F6',
    stars: 5,
  },
  {
    id: 3,
    quote:
      'We switched from our previous vendor after years of quality issues. Within one season, we saw our customer returns drop by 40%. Their QC process is genuinely world-class.',
    author: 'Yuki Tanaka',
    title: 'Procurement Director',
    company: 'Elara Japan K.K.',
    country: 'Tokyo, Japan',
    initials: 'YT',
    color: '#F59E0B',
    stars: 5,
  },
  {
    id: 4,
    quote:
      'The WRAP certification and their social audit transparency gave our ESG team complete confidence. Buyers in our network ask specifically for their compliance documentation. It\'s a real differentiator.',
    author: 'Priya Sharma',
    title: 'Sustainability Manager',
    company: 'Bloom Ethical Wear',
    country: 'London, UK',
    initials: 'PS',
    color: '#10B981',
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-brand-dark overflow-hidden" ref={ref}>
      <div className="container-brand">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4"
          >
            <span className="w-6 h-px bg-brand-accent" />
            Client Voices
            <span className="w-6 h-px bg-brand-accent" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-white"
          >
            {/* [COMPANY_INFO: Update testimonial section headline] */}
            What Our Buyers Say
          </motion.h2>
        </div>

        {/* Main testimonial card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-white/5 border border-white/8 rounded-3xl p-8 lg:p-12 backdrop-blur-sm"
            >
              {/* Decorative quote icon */}
              <div
                className="absolute top-8 right-8 opacity-10"
                style={{ color: t.color }}
              >
                <Quote size={80} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-heading text-xl lg:text-2xl text-white font-medium leading-relaxed mb-10 relative z-10">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/*
                  [REPLACE_IMAGE: Replace initials avatar with actual photo]
                  import Image from 'next/image';
                  <Image src={t.photoPath} alt={t.author} width={56} height={56}
                    className="rounded-full object-cover" />
                */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-heading font-bold text-lg text-white shrink-0"
                  style={{ background: `${t.color}30`, border: `2px solid ${t.color}40` }}
                >
                  {t.initials}
                </div>

                <div>
                  <div className="font-heading font-semibold text-base text-white">
                    {t.author}
                  </div>
                  <div className="text-sm text-white/50">
                    {t.title} · {t.company}
                  </div>
                  <div className="text-xs text-white/30 mt-0.5">{t.country}</div>
                </div>

                {/* Company accent */}
                <div className="ml-auto hidden lg:block">
                  <span
                    className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
                    style={{ color: t.color, background: `${t.color}15` }}
                  >
                    {t.company.split(' ')[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev/Next */}
            <div className="flex gap-3">
              <motion.button
                onClick={prev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={next}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-1.5 bg-brand-accent'
                      : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="text-xs text-white/30 font-mono tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Mini cards row — other testimonials */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12 lg:mt-16 max-w-4xl mx-auto">
          {testimonials.filter((_, i) => i !== current).slice(0, 3).map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(testimonials.indexOf(t))}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.08 }}
              className="text-left p-4 rounded-xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
            >
              <p className="text-xs text-white/40 line-clamp-2 mb-3 group-hover:text-white/60 transition-colors">
                "{t.quote.slice(0, 80)}..."
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: `${t.color}30` }}
                >
                  {t.initials}
                </div>
                <span className="text-[11px] font-medium text-white/50 truncate">{t.author}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
