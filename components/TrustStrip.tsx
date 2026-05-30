'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Award, Leaf, Factory, Clock } from 'lucide-react';

// ─── TRUST METRICS ────────────────────────────────────────────────────────────
// [COMPANY_INFO: Update all numbers and labels with your actual achievements]
const trustItems = [
  {
    icon: Clock,
    value: '30+',
    label: 'Years of Excellence',
    sublabel: 'Since 1994',    // [COMPANY_INFO: Your founding year]
    color: 'text-brand-accent',
  },
  {
    icon: Globe,
    value: '60+',
    label: 'Export Countries',
    sublabel: 'Global Reach',
    color: 'text-brand-gold',
  },
  {
    icon: Factory,
    value: '1M+',
    label: 'Units / Month',
    sublabel: 'Production Capacity',  // [COMPANY_INFO: Your actual capacity]
    color: 'text-brand-accent',
  },
  {
    icon: Award,
    value: '12+',
    label: 'Certifications',
    sublabel: 'GOTS · OEKO-TEX · ISO', // [COMPANY_INFO: Your key certifications]
    color: 'text-brand-gold',
  },
  {
    icon: Leaf,
    value: '100%',
    label: 'Ethical Production',
    sublabel: 'WRAP Certified',   // [COMPANY_INFO: Your ethical certifications]
    color: 'text-brand-accent',
  },
];

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative bg-brand-dark border-t border-[#1a1a1a] overflow-hidden"
    >
      {/* Subtle accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50" />

      <div className="container-brand py-10 lg:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col items-center justify-center gap-2 px-6 py-8 bg-brand-dark hover:bg-[#141414] transition-colors duration-300 relative"
              >
                {/* Vertical divider (desktop only) */}
                {i < trustItems.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/8" />
                )}

                <div className={`p-2 rounded-xl bg-white/5 ${item.color}`}>
                  <Icon size={18} />
                </div>

                <div className="text-center">
                  <div
                    className={`font-heading font-bold text-3xl text-white tracking-tight leading-none mb-1`}
                  >
                    {item.value}
                  </div>
                  <div className="text-xs font-medium text-white/60 tracking-wide uppercase">
                    {item.label}
                  </div>
                  <div className={`text-[10px] mt-0.5 ${item.color} font-medium tracking-wide`}>
                    {item.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
