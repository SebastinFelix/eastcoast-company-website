'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, ExternalLink } from 'lucide-react';

const certifications = [
  {
    code: 'GOTS',
    name: 'Global Organic Textile Standard',
    body: 'Control Union Certifications',
    certNo: 'CU12345678',
    desc: 'Certified organic fibre processing covering ecological and social criteria across the entire supply chain.',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-600 text-white',
    icon: 'text-emerald-600',
    category: 'Sustainability',
  },
  {
    code: 'OEKO-TEX',
    name: 'OEKO-TEX® STANDARD 100',
    body: 'Hohenstein Institute',
    certNo: 'OT-23-98765',
    desc: 'Every component tested for harmful substances. Certified safe for human health at all processing stages.',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-600 text-white',
    icon: 'text-blue-600',
    category: 'Chemical Safety',
  },
  {
    code: 'ISO 9001',
    name: 'Quality Management System',
    body: 'Bureau Veritas',
    certNo: 'BV/QMS/2024/001',
    desc: 'International quality management standard ensuring consistent product quality and continuous improvement.',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-600 text-white',
    icon: 'text-violet-600',
    category: 'Quality',
  },
  {
    code: 'WRAP',
    name: 'Worldwide Responsible Accredited Production',
    body: 'WRAP International',
    certNo: 'WRAP-2024-IN-001',
    desc: 'Platinum certification for ethical manufacturing. Covers safe working conditions, fair wages, and legal compliance.',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-600 text-white',
    icon: 'text-amber-600',
    category: 'Labour Ethics',
  },
  {
    code: 'BSCI',
    name: 'Business Social Compliance Initiative',
    body: 'amfori BSCI',
    certNo: 'BSCI-IN-2024',
    desc: 'Grade A social audit. Verifies fair labour practices, worker rights, and safe working environments.',
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-600 text-white',
    icon: 'text-red-600',
    category: 'Social Audit',
  },
  {
    code: 'Sedex',
    name: 'Supplier Ethical Data Exchange',
    body: 'Sedex Global',
    certNo: 'ZC000123456789',
    desc: 'SMETA 4-pillar audit member. Full supply chain transparency for ethical sourcing buyers.',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-600 text-white',
    icon: 'text-orange-600',
    category: 'Transparency',
  },
  {
    code: 'GRS',
    name: 'Global Recycled Standard',
    body: 'Textile Exchange',
    certNo: 'GRS-2024-001',
    desc: 'Certified for recycled content claims. Ensures recycled fibres are used with responsible practices.',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    badge: 'bg-cyan-600 text-white',
    icon: 'text-cyan-600',
    category: 'Recycled Content',
  },
  {
    code: 'SA8000',
    name: 'Social Accountability Standard',
    body: 'Social Accountability International',
    certNo: 'SA-8000-2023',
    desc: 'Globally recognised social certification covering child labour, forced labour, health & safety, and worker rights.',
    bg: 'bg-lime-50',
    border: 'border-lime-200',
    badge: 'bg-lime-600 text-white',
    icon: 'text-lime-600',
    category: 'Social Standards',
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section-padding bg-white" ref={ref}>
      <div className="container-brand">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block"
          >
            <span className="w-6 h-px bg-brand-accent" />
            Certifications & Compliance
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-gray-900"
          >
            Verified. Audited.
            <br />
            <span className="text-gray-400">Globally Trusted.</span>
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
              className={`group relative rounded-2xl p-6 border-2 ${cert.bg} ${cert.border} hover:shadow-luxury transition-all duration-300`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide ${cert.badge}`}>
                  {cert.code}
                </span>
                <Award size={16} className={cert.icon} />
              </div>

              {/* Name */}
              <div className="mb-3">
                <h3 className="font-heading font-semibold text-sm text-gray-900 leading-snug mb-1">
                  {cert.name}
                </h3>
                <div className="text-[11px] text-gray-500 font-medium">{cert.body}</div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                {cert.desc}
              </p>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-4 border-t border-black/8">
                <div>
                  <div className="text-[9px] text-gray-400 uppercase tracking-[0.12em] mb-0.5">Certificate No.</div>
                  <div className="text-[11px] font-mono text-gray-700 font-semibold">{cert.certNo}</div>
                </div>
                <ShieldCheck size={14} className={cert.icon} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-gray-200"
        >
          <p className="text-sm text-gray-500">
            All certifications are annually renewed. Third-party audit reports available upon NDA request.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:gap-3 transition-all whitespace-nowrap"
          >
            Request Compliance Documents
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
