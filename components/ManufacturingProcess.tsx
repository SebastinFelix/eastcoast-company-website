'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers,
  Zap,
  Droplets,
  Printer,
  Scissors,
  ShieldCheck,
  Package,
  Globe,
} from 'lucide-react';

// ─── PROCESS STEPS ────────────────────────────────────────────────────────────
// [COMPANY_INFO: Update process steps to match your actual manufacturing flow]
const steps = [
  {
    step: '01',
    label: 'Yarn Sourcing',
    desc: 'Premium certified yarns sourced from verified sustainable suppliers globally.',
    detail:
      'We partner with certified yarn mills to source 100% organic cotton, recycled polyester, and innovative blended fibres. Full traceability from farm to facility.',
    icon: Layers,
    accent: '#D72638',
  },
  {
    step: '02',
    label: 'Knitting',
    desc: 'State-of-the-art circular and flat-knitting machines for all fabric constructions.',
    detail:
      'Our knitting floor houses 400+ modern circular knitting machines capable of producing jersey, rib, interlock, piqué, and technical performance fabrics.',
    icon: Zap,
    accent: '#C19A6B',
  },
  {
    step: '03',
    label: 'Dyeing',
    desc: 'Reactive, pigment, and AOP dyeing with zero-liquid discharge processing.',
    detail:
      'Our dyehouse uses GOTS-approved dyes with closed-loop water recycling. Zero liquid discharge (ZLD) system ensures zero harmful effluents.',
    icon: Droplets,
    accent: '#D72638',
  },
  {
    step: '04',
    label: 'Printing',
    desc: 'Screen, digital, discharge, and rotary printing with premium finishing.',
    detail:
      'From photorealistic digital prints to classic screen prints — our printing division handles up to 12-colour registration with Pantone accuracy.',
    icon: Printer,
    accent: '#C19A6B',
  },
  {
    step: '05',
    label: 'Stitching',
    desc: 'Expert tailors with automated cutting and precision sewing technology.',
    detail:
      'Our stitching floor employs 800+ skilled operators with single-needle, overlock, flatlock, and specialized machines. CAD-driven auto-cutters minimise fabric waste.',
    icon: Scissors,
    accent: '#D72638',
  },
  {
    step: '06',
    label: 'Quality Control',
    desc: '4-point AQL inline and final inspections. Zero-defect policy.',
    detail:
      'Multi-stage QC: inline inspection, end-of-line checks, random AQL sampling, and independent third-party audits before shipment. We maintain <0.5% defect rate.',
    icon: ShieldCheck,
    accent: '#C19A6B',
  },
  {
    step: '07',
    label: 'Packing',
    desc: 'Buyer-compliant packing with custom labeling, tagging, and hangers.',
    detail:
      'We offer retail-ready packing — polybag, carton, hanger, and vacuum options. Barcode scanning and RFID tagging available for direct-to-retail models.',
    icon: Package,
    accent: '#D72638',
  },
  {
    step: '08',
    label: 'Export',
    desc: 'FCL/LCL shipments to 60+ countries with full documentation support.',
    detail:
      'Our dedicated export team handles all documentation — GSP, CO, packing lists, commercial invoices — for frictionless customs clearance across all major markets.',
    icon: Globe,
    accent: '#C19A6B',
  },
];

export default function ManufacturingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const active = steps[activeStep];
  const Icon = active.icon;

  return (
    <section id="manufacturing" className="section-padding bg-brand-dark overflow-hidden" ref={ref}>
      <div className="container-brand">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4 block"
          >
            <span className="w-6 h-px bg-brand-accent" />
            How We Make It
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white"
          >
            {/* [COMPANY_INFO: Update section headline] */}
            From Yarn to
            <br />
            <span className="text-white/40">Your Doorstep.</span>
          </motion.h2>
        </div>

        {/* Interactive Process — step list + detail panel */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">
          {/* Left: Horizontal scroll steps (mobile) / stacked list (desktop) */}
          <div>
            {/* Mobile: horizontal scroll */}
            <div
              ref={scrollRef}
              className="lg:hidden flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory mask-gradient-right"
            >
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                const isActive = i === activeStep;
                return (
                  <motion.button
                    key={step.label}
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.05 }}
                    className={`snap-start shrink-0 flex flex-col gap-2 p-4 rounded-2xl border transition-all duration-300 w-[160px] text-left ${
                      isActive
                        ? 'border-brand-accent bg-brand-accent/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className={`${isActive ? 'text-brand-accent' : 'text-white/40'}`}>
                      <StepIcon size={18} />
                    </div>
                    <div className="text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase">
                      {step.step}
                    </div>
                    <div className="font-heading font-semibold text-sm text-white">
                      {step.label}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop: stacked process list with connector line */}
            <div className="hidden lg:block relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-6 bottom-6 w-px bg-white/10" />
              {/* Active progress line */}
              <motion.div
                className="absolute left-6 top-6 w-px bg-brand-accent origin-top"
                animate={{
                  height: `${((activeStep + 0.5) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="space-y-2">
                {steps.map((step, i) => {
                  const StepIcon = step.icon;
                  const isActive = i === activeStep;
                  return (
                    <motion.button
                      key={step.label}
                      onClick={() => setActiveStep(i)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.06 }}
                      className={`relative w-full flex items-center gap-5 px-4 py-4 rounded-xl text-left transition-all duration-300 group ${
                        isActive ? 'bg-white/8' : 'hover:bg-white/4'
                      }`}
                    >
                      {/* Step dot */}
                      <div
                        className={`relative z-10 w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'border-brand-accent bg-brand-accent text-white scale-110'
                            : 'border-white/20 bg-brand-dark text-white/40 group-hover:border-white/30'
                        }`}
                      >
                        <StepIcon size={16} />
                      </div>

                      <div>
                        <div className="text-[10px] font-bold tracking-[0.15em] text-white/30 uppercase mb-0.5">
                          Step {step.step}
                        </div>
                        <div
                          className={`font-heading font-semibold text-base transition-colors ${
                            isActive ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                          }`}
                        >
                          {step.label}
                        </div>
                        <div className="text-xs text-white/30 mt-0.5 max-w-xs">{step.desc}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Detail panel */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              {/* Step visual */}
              {/*
                [REPLACE_IMAGE: Add process step image for each manufacturing stage]
                Use Next.js Image component here with /images/process/{step.id}.jpg
              */}
              <div
                className="aspect-video flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${active.accent}22 0%, #0A0A0A 100%)`,
                }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ background: `${active.accent}22`, border: `2px solid ${active.accent}44` }}
                >
                  <Icon size={40} style={{ color: active.accent }} />
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full"
                    style={{ color: active.accent, background: `${active.accent}18` }}
                  >
                    Step {active.step}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  {active.label}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">{active.detail}</p>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className="text-xs font-semibold text-white/40 hover:text-white disabled:opacity-20 transition-colors"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i === activeStep ? 'bg-brand-accent w-4' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className="text-xs font-semibold text-white/40 hover:text-white disabled:opacity-20 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
