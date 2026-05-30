'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

// ─── CERTIFICATIONS DATA ──────────────────────────────────────────────────────
// [COMPANY_INFO: Update with your actual certifications, certificate numbers, and details]
const certifications = [
  {
    code: 'GOTS',
    name: 'Global Organic Textile Standard',
    body: 'Control Union Certifications',
    certNo: 'CU12345678',     // [COMPANY_INFO: Your actual certificate number]
    desc: 'Certified organic fibre processing. Covers ecological and social criteria across the entire supply chain.',
    color: '#10B981',
    category: 'Sustainability',
  },
  {
    code: 'OEKO-TEX',
    name: 'OEKO-TEX® STANDARD 100',
    body: 'Hohenstein Institute',
    certNo: 'OT-23-98765',    // [COMPANY_INFO: Your actual certificate number]
    desc: 'Every component tested for harmful substances. Certified safe for human health at all processing stages.',
    color: '#3B82F6',
    category: 'Chemical Safety',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management System',
    body: 'Bureau Veritas',
    certNo: 'BV/QMS/2024/001', // [COMPANY_INFO: Your actual certificate number]
    desc: 'International quality management standard ensuring consistent product quality and continuous improvement.',
    color: '#8B5CF6',
    category: 'Quality',
  },
  {
    code: 'WRAP',
    name: 'Worldwide Responsible Accredited Production',
    body: 'WRAP International',
    certNo: 'WRAP-2024-IN-001', // [COMPANY_INFO: Your actual certificate number]
    desc: 'Platinum certification for ethical manufacturing. Covers safe working conditions, fair wages, and legal compliance.',
    color: '#F59E0B',
    category: 'Labour Ethics',
  },
  {
    code: 'BSCI',
    name: 'Business Social Compliance Initiative',
    body: 'amfori BSCI',
    certNo: 'BSCI-IN-2024',    // [COMPANY_INFO: Your BSCI audit status]
    desc: 'Grade A social audit. Verifies fair labour practices, worker rights, and safe working environments.',
    color: '#EF4444',
    category: 'Social Audit',
  },
  {
    code: 'Sedex',
    name: 'Supplier Ethical Data Exchange',
    body: 'Sedex Global',
    certNo: 'ZC000123456789',  // [COMPANY_INFO: Your Sedex membership/audit ID]
    desc: 'SMETA 4-pillar audit member. Full supply chain transparency for ethical sourcing buyers.',
    color: '#C19A6B',
    category: 'Transparency',
  },
  {
    code: 'GRS',
    name: 'Global Recycled Standard',
    body: 'Textile Exchange',
    certNo: 'GRS-2024-001',    // [COMPANY_INFO: Your GRS certificate number]
    desc: 'Certified for recycled content claims. Ensures recycled fibres are used with responsible social and environmental practices.',
    color: '#06B6D4',
    category: 'Recycled Content',
  },
  {
    code: 'SA8000',
    name: 'Social Accountability Standard',
    body: 'Social Accountability International',
    certNo: 'SA-8000-2023',    // [COMPANY_INFO: Your SA8000 certificate number]
    desc: 'Globally recognised social certification covering child labour, forced labour, health & safety, and worker rights.',
    color: '#84CC16',
    category: 'Social Standards',
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section-padding bg-brand-bg" ref={ref}>
      <div className="container-brand">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted mb-4 block"
          >
            <span className="w-6 h-px bg-brand-accent" />
            Certifications & Compliance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-brand-text"
          >
            {/* [COMPANY_INFO: Update headline] */}
            Verified. Audited.
            <br />
            <span className="text-brand-muted">Globally Trusted.</span>
          </motion.h2>
        </div>

        {/* Certifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-white border border-brand-border rounded-2xl p-6 hover:border-transparent hover:shadow-card-hover transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Hover accent background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${cert.color}06 0%, transparent 100%)` }}
              />

              {/* Top row */}
              <div className="flex items-start justify-between mb-5 relative z-10">
                {/* Code badge */}
                <div
                  className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide"
                  style={{ color: cert.color, background: `${cert.color}15` }}
                >
                  {cert.code}
                </div>
                <div className="text-brand-border group-hover:text-brand-muted transition-colors">
                  <Award size={16} />
                </div>
              </div>

              {/* Name */}
              <div className="relative z-10 mb-4">
                <h3 className="font-heading font-semibold text-sm text-brand-text leading-snug mb-1">
                  {cert.name}
                </h3>
                <div className="text-[11px] text-brand-muted">{cert.body}</div>
              </div>

              {/* Description */}
              <p className="text-xs text-brand-muted leading-relaxed mb-4 relative z-10">
                {cert.desc}
              </p>

              {/* Bottom row */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-brand-border">
                <div>
                  <div className="text-[9px] text-brand-light uppercase tracking-[0.12em] mb-0.5">
                    Certificate
                  </div>
                  <div className="text-[11px] font-mono text-brand-muted">{cert.certNo}</div>
                </div>
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${cert.color}15`, color: cert.color }}
                >
                  <ShieldCheck size={10} />
                </div>
              </div>

              {/* Category tag */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[9px] font-semibold tracking-[0.12em] uppercase text-brand-muted">
                  {cert.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-brand-border"
        >
          <p className="text-xs text-brand-muted">
            {/* [COMPANY_INFO: Update with your audit statement] */}
            All certifications are annually renewed. Third-party audit reports available upon NDA request.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:gap-3 transition-all"
          >
            Request Compliance Documents
            <ExternalLink size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
