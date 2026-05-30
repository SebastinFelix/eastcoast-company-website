'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Zap, Wind, Recycle, Leaf, Sun, Target, TrendingDown } from 'lucide-react';

// ─── SUSTAINABILITY DATA ──────────────────────────────────────────────────────
// [COMPANY_INFO: Replace all metrics with your actual ESG/sustainability data]
const esgMetrics = [
  {
    icon: Droplets,
    title: 'Water Stewardship',
    stat: '70%',
    statLabel: 'Water recycled via ZLD',
    desc: 'Zero liquid discharge system. Closed-loop water recycling reduces freshwater consumption by 70% compared to conventional dyehouses.',
    // [COMPANY_INFO: Replace with your actual water recycling %]
    tag: 'Water',
    color: '#3B82F6',
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    stat: '2.5MW',
    statLabel: 'Solar capacity on-site',
    desc: 'Our 2.5MW rooftop solar installation covers 35% of total energy needs. Wind energy PPAs cover another 20% of our annual consumption.',
    // [COMPANY_INFO: Replace with your actual renewable energy capacity]
    tag: 'Energy',
    color: '#F59E0B',
  },
  {
    icon: Wind,
    title: 'Carbon Commitment',
    stat: 'Net Zero',
    statLabel: 'Target by 2030',
    desc: 'Science-based emissions targets aligned with the Paris Agreement. We\'ve reduced Scope 1 and 2 emissions by 42% since 2019.',
    // [COMPANY_INFO: Replace with your carbon targets and reduction achievements]
    tag: 'Carbon',
    color: '#10B981',
  },
  {
    icon: Recycle,
    title: 'Circular Waste',
    stat: '95%',
    statLabel: 'Fabric waste diverted',
    desc: 'Fabric offcuts are repurposed into industrial rags, recycled yarn, or composted. We target zero-waste-to-landfill by 2026.',
    // [COMPANY_INFO: Replace with your waste diversion / recycling stats]
    tag: 'Waste',
    color: '#8B5CF6',
  },
];

// [COMPANY_INFO: Update sustainable practices list]
const practices = [
  { icon: Leaf, label: 'GOTS Certified Organic Cotton' },
  { icon: Recycle, label: 'Recycled Polyester & Nylon Blends' },
  { icon: Target, label: 'Living Wage & Fair Labour Policy' },
  { icon: TrendingDown, label: '42% Scope 1 & 2 Emissions Reduction' },
  { icon: Droplets, label: 'Zero Liquid Discharge Dyehouse' },
  { icon: Sun, label: '35% Energy from On-site Solar' },
];

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sustainability" className="section-padding bg-brand-dark overflow-hidden relative" ref={ref}>
      {/* Radial accent glow */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container-brand relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-16 lg:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4 block"
            >
              <span className="w-6 h-px bg-[#10B981]" />
              Sustainability & ESG
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white"
            >
              {/* [COMPANY_INFO: Update sustainability headline] */}
              Fashion That
              <br />
              <span className="text-white/40">Respects the Planet.</span>
            </motion.h2>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm leading-relaxed mb-6"
            >
              {/* [COMPANY_INFO: Replace with your sustainability mission statement] */}
              Sustainability isn't a checkbox for us — it's built into every thread. From the raw material we source to the carton we seal, every decision is weighed against our commitment to people and planet.
            </motion.p>

            {/* 2030 target pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#10B981]/30 bg-[#10B981]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse-glow" />
              {/* [COMPANY_INFO: Update target year and goal] */}
              <span className="text-xs font-semibold text-[#10B981] tracking-wide">
                Net Zero Target · 2030
              </span>
            </motion.div>
          </div>
        </div>

        {/* ESG Cards — glassmorphism */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {esgMetrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl p-6 border border-white/8 bg-white/4 backdrop-blur-sm hover:bg-white/8 hover:border-white/15 transition-all duration-300 overflow-hidden"
              >
                {/* Tag */}
                <div
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full mb-5"
                  style={{ color: metric.color, background: `${metric.color}18` }}
                >
                  {metric.tag}
                </div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${metric.color}15`, color: metric.color }}
                >
                  <Icon size={18} />
                </div>

                {/* Stat */}
                <div
                  className="font-heading font-bold text-4xl mb-1"
                  style={{ color: metric.color }}
                >
                  {metric.stat}
                </div>
                <div className="text-xs text-white/40 mb-4">{metric.statLabel}</div>

                {/* Description */}
                <p className="text-xs text-white/50 leading-relaxed">{metric.desc}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 40px ${metric.color}10` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Practices row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="border-t border-white/8 pt-12"
        >
          <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-8">
            {/* [COMPANY_INFO: Update heading] */}
            Our Sustainable Practices
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {practices.map((p, i) => {
              const PIcon = p.icon;
              return (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-center group cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/50 group-hover:text-white/80 group-hover:bg-white/12 transition-all">
                    <PIcon size={15} />
                  </div>
                  <span className="text-[11px] font-medium text-white/50 leading-tight group-hover:text-white/70 transition-colors">
                    {p.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
