'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// ─── PRODUCT CATEGORIES DATA ──────────────────────────────────────────────────
// [COMPANY_INFO: Update categories, descriptions, and image paths]
const categories = [
  {
    id: 'menswear',
    label: 'Menswear',
    sub: 'T-Shirts · Polos · Shirts · Denim · Outerwear',
    // [REPLACE_IMAGE: /images/products/menswear.jpg — high-quality fashion photography]
    gradient: 'from-[#1a1a1a] via-[#2a2a2a] to-[#111111]',
    featured: true, // large card
    moq: 'MOQ: 500 pcs',  // [COMPANY_INFO: Your actual MOQ per category]
  },
  {
    id: 'womenswear',
    label: 'Womenswear',
    sub: 'Tops · Dresses · Skirts · Co-ords',
    gradient: 'from-[#2a1a1a] via-[#1a1010] to-[#0f0f0f]',
    featured: false,
    moq: 'MOQ: 500 pcs',
  },
  {
    id: 'activewear',
    label: 'Activewear',
    sub: 'Performance · Gym · Yoga · Sports',
    gradient: 'from-[#0f1a1f] via-[#0a1520] to-[#080f18]',
    featured: false,
    moq: 'MOQ: 300 pcs',
  },
  {
    id: 'kidswear',
    label: 'Kidswear',
    sub: 'Infant · Toddler · Junior · Teen',
    gradient: 'from-[#1a1510] via-[#201810] to-[#101010]',
    featured: false,
    moq: 'MOQ: 500 pcs',
  },
  {
    id: 'sustainable',
    label: 'Sustainable',
    sub: 'GOTS Organic · Recycled · Eco-certified',
    gradient: 'from-[#0f1a10] via-[#101810] to-[#0a0f0a]',
    featured: false,
    moq: 'MOQ: 300 pcs',
  },
  {
    id: 'streetwear',
    label: 'Streetwear',
    sub: 'Hoodies · Joggers · Oversized · Drop-shoulder',
    gradient: 'from-[#1a1a1a] via-[#151515] to-[#0f0f0f]',
    featured: false,
    moq: 'MOQ: 200 pcs',
  },
  {
    id: 'basics',
    label: 'Fashion Basics',
    sub: 'Essentials · Underwear · Loungewear',
    gradient: 'from-[#181818] via-[#141414] to-[#0f0f0f]',
    featured: false,
    moq: 'MOQ: 1000 pcs',
  },
];

interface CategoryCardProps {
  category: typeof categories[0];
  index: number;
  isInView: boolean;
  size?: 'large' | 'medium' | 'small';
}

function CategoryCard({ category, index, isInView, size = 'small' }: CategoryCardProps) {
  const aspectClass =
    size === 'large'
      ? 'aspect-[3/4] lg:aspect-auto lg:h-full'
      : size === 'medium'
      ? 'aspect-[4/5]'
      : 'aspect-square';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer ${aspectClass} img-zoom-container`}
    >
      {/*
        [REPLACE_IMAGE: Add category image for {category.id}]
        Replace the gradient div below with:
          import Image from 'next/image';
          <Image
            src={`/images/products/${category.id}.jpg`}
            alt={category.label}
            fill
            className="object-cover img-zoom-target"
          />
      */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient} img-zoom-target transition-transform duration-700`}
      />

      {/* Category label badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-semibold tracking-[0.15em] uppercase text-white/80">
          {category.moq}
        </span>
      </div>

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <h3
          className={`font-heading font-bold text-white mb-1 ${
            size === 'large' ? 'text-3xl lg:text-4xl' : size === 'medium' ? 'text-2xl' : 'text-xl'
          }`}
        >
          {category.label}
        </h3>
        <p className="text-xs text-white/60 mb-4 hidden group-hover:block transition-all">
          {category.sub}
        </p>
        <motion.a
          href="#contact"
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white group-hover:opacity-100 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          Explore Range
          <ArrowUpRight size={12} />
        </motion.a>
      </div>

      {/* Accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center">
          <ArrowUpRight size={10} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductCategories() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  // categories array is used directly in the grid below

  return (
    <section id="products" className="section-padding bg-brand-bg-alt" ref={ref}>
      <div className="container-brand">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted mb-4 block"
            >
              <span className="w-6 h-px bg-brand-accent" />
              Our Categories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-brand-text"
            >
              {/* [COMPANY_INFO: Update section headline] */}
              Fashion for Every
              <br />
              <span className="text-brand-muted">Global Market.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-brand-muted max-w-sm text-sm leading-relaxed"
          >
            {/* [COMPANY_INFO: Update description] */}
            From fashion-forward streetwear to GOTS-certified organic basics — we manufacture across every segment with consistent premium quality.
          </motion.p>
        </div>

        {/* Product grid — editorial layout */}
        {/* Row 1: Featured hero card (left) + 2 medium cards (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
          {/* Featured large card */}
          <div className="lg:col-span-5 min-h-[420px] lg:min-h-[640px]">
            <CategoryCard
              category={categories[0]}
              index={0}
              isInView={isInView}
              size="large"
            />
          </div>

          {/* Right column: 2 stacked medium cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            <div className="min-h-[280px]">
              <CategoryCard category={categories[1]} index={1} isInView={isInView} size="medium" />
            </div>
            <div className="min-h-[280px]">
              <CategoryCard category={categories[2]} index={2} isInView={isInView} size="medium" />
            </div>

            {/* Bottom 4 small cards inside right column */}
            <div className="min-h-[200px]">
              <CategoryCard category={categories[3]} index={3} isInView={isInView} size="small" />
            </div>
            <div className="min-h-[200px]">
              <CategoryCard category={categories[4]} index={4} isInView={isInView} size="small" />
            </div>
          </div>

          {/* Full-width bottom row: remaining 2 categories */}
          <div className="lg:col-span-6 min-h-[220px]">
            <CategoryCard category={categories[5]} index={5} isInView={isInView} size="medium" />
          </div>
          <div className="lg:col-span-6 min-h-[220px]">
            <CategoryCard category={categories[6]} index={6} isInView={isInView} size="medium" />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-border rounded-full text-sm font-semibold text-brand-text hover:bg-brand-text hover:text-white hover:border-brand-text transition-all duration-300"
          >
            Request Full Product Catalogue
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
