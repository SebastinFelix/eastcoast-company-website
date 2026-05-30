'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, TrendingUp, Package } from 'lucide-react';

// ─── EXPORT MARKETS DATA ──────────────────────────────────────────────────────
// [COMPANY_INFO: Update regions, countries, and statistics with your actual export data]
const regions = [
  {
    id: 'north-america',
    label: 'North America',
    countries: ['USA', 'Canada', 'Mexico'],
    share: '32%',
    value: '$160M+',     // [COMPANY_INFO: Your actual export value to this region]
    buyers: '45+',       // [COMPANY_INFO: Your number of buyers in this region]
    growth: '+18% YoY',
    color: '#D72638',
    position: { left: '18%', top: '35%' },
    accent: true,
  },
  {
    id: 'europe',
    label: 'Europe',
    countries: ['Germany', 'UK', 'France', 'Netherlands', 'Spain', 'Sweden'],
    share: '28%',
    value: '$140M+',
    buyers: '60+',
    growth: '+12% YoY',
    color: '#3B82F6',
    position: { left: '46%', top: '28%' },
    accent: false,
  },
  {
    id: 'uk',
    label: 'United Kingdom',
    countries: ['England', 'Scotland', 'Wales'],
    share: '10%',
    value: '$50M+',
    buyers: '20+',
    growth: '+8% YoY',
    color: '#8B5CF6',
    position: { left: '43%', top: '24%' },
    accent: false,
  },
  {
    id: 'japan-apac',
    label: 'Japan & APAC',
    countries: ['Japan', 'Australia', 'South Korea', 'Singapore'],
    share: '14%',
    value: '$70M+',
    buyers: '25+',
    growth: '+22% YoY',
    color: '#F59E0B',
    position: { left: '78%', top: '36%' },
    accent: false,
  },
  {
    id: 'middle-east',
    label: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
    share: '8%',
    value: '$40M+',
    buyers: '15+',
    growth: '+30% YoY',
    color: '#C19A6B',
    position: { left: '58%', top: '42%' },
    accent: false,
  },
  {
    id: 'latam',
    label: 'Latin America',
    countries: ['Brazil', 'Chile', 'Colombia'],
    share: '5%',
    value: '$25M+',
    buyers: '10+',
    growth: '+25% YoY',
    color: '#10B981',
    position: { left: '25%', top: '60%' },
    accent: false,
  },
  {
    id: 'africa',
    label: 'Africa',
    countries: ['South Africa', 'Kenya', 'Nigeria'],
    share: '3%',
    value: '$15M+',
    buyers: '8+',
    growth: '+40% YoY',
    color: '#EC4899',
    position: { left: '50%', top: '58%' },
    accent: false,
  },
];

// [COMPANY_INFO: Update global stats]
const globalStats = [
  { value: '60+', label: 'Export Countries' },
  { value: '$500M+', label: 'Annual Export Value' },
  { value: '180+', label: 'Active Buyers' },
  { value: '98%', label: 'On-Time Delivery' },
];

export default function ExportMarkets() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeRegion, setActiveRegion] = useState<string | null>('north-america');

  const active = regions.find((r) => r.id === activeRegion) ?? regions[0];

  return (
    <section id="export" className="section-padding bg-white overflow-hidden" ref={ref}>
      <div className="container-brand">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted mb-4 block"
          >
            <span className="w-6 h-px bg-brand-accent" />
            Global Footprint
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-brand-text"
          >
            {/* [COMPANY_INFO: Update headline] */}
            Serving Fashion
            <br />
            <span className="text-brand-muted">Across 60+ Nations.</span>
          </motion.h2>
        </div>

        {/* Global stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {globalStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.07 }}
              className="bg-gray-900 rounded-2xl p-5 border border-gray-800"
            >
              <div className="font-heading font-bold text-3xl text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* World map + region list */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Stylized world map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative bg-gray-900 rounded-3xl border border-gray-700 p-8 overflow-hidden min-h-[360px] lg:min-h-[460px]"
          >
            {/* Map background placeholder */}
            {/*
              [REPLACE_IMAGE: Add an SVG world map or use a library like react-simple-maps]
              Recommended: https://www.npmjs.com/package/react-simple-maps
              Or add a flat world map SVG at /images/world-map.svg
            */}
            <div className="absolute inset-8 rounded-xl overflow-hidden">
              {/* Decorative world map grid lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Latitude lines */}
                {[80, 140, 200, 260, 320].map((y) => (
                  <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#333333" strokeWidth="1" />
                ))}
                {/* Longitude lines */}
                {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                  <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#333333" strokeWidth="1" />
                ))}
                {/* Equator accent */}
                <line x1="0" y1="200" x2="800" y2="200" stroke="#555555" strokeWidth="1.5" />

                {/* Continent silhouettes */}
                <path d="M 80 80 L 200 80 L 220 180 L 180 220 L 100 200 L 80 140 Z" fill="#2a2a2a" stroke="#444444" strokeWidth="1"/>
                <path d="M 140 240 L 200 240 L 210 340 L 160 360 L 130 320 Z" fill="#2a2a2a" stroke="#444444" strokeWidth="1"/>
                <path d="M 360 60 L 440 60 L 450 140 L 380 160 L 350 120 Z" fill="#2a2a2a" stroke="#444444" strokeWidth="1"/>
                <path d="M 380 170 L 440 170 L 450 310 L 400 340 L 360 300 L 360 200 Z" fill="#2a2a2a" stroke="#444444" strokeWidth="1"/>
                <path d="M 460 50 L 680 60 L 700 180 L 620 220 L 500 200 L 450 140 Z" fill="#2a2a2a" stroke="#444444" strokeWidth="1"/>
                <path d="M 620 250 L 720 250 L 730 330 L 650 350 L 610 310 Z" fill="#2a2a2a" stroke="#444444" strokeWidth="1"/>
              </svg>

              {/* Animated region markers */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={region.position}
                >
                  {/* Pulse ring */}
                  <span
                    className="absolute inset-0 rounded-full animate-pulse-glow opacity-50"
                    style={{
                      background: region.color,
                      transform: 'scale(2)',
                    }}
                  />
                  {/* Dot */}
                  <span
                    className={`relative block w-3 h-3 rounded-full border-2 border-white shadow-lg transition-transform duration-200 ${
                      activeRegion === region.id ? 'scale-150' : 'group-hover:scale-125'
                    }`}
                    style={{ background: region.color }}
                  />
                  {/* Tooltip */}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-brand-dark text-white text-[10px] font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {region.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="absolute bottom-6 left-8 text-[10px] text-gray-400">
              <MapPin size={10} className="inline mr-1" />
              Click a region for details
            </div>
          </motion.div>

          {/* Region details panel */}
          <div className="space-y-3">
            {/* Active region detail */}
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900 rounded-2xl border border-gray-700 p-6 mb-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: active.color }}
                  />
                  <h3 className="font-heading font-bold text-lg text-white">
                    {active.label}
                  </h3>
                  <span className="ml-auto text-xs text-gray-400">{active.share} of exports</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-3 bg-gray-800 rounded-xl">
                    <div className="font-heading font-bold text-xl text-white">{active.value}</div>
                    <div className="text-[10px] text-gray-400">Export Value</div>
                  </div>
                  <div className="text-center p-3 bg-gray-800 rounded-xl">
                    <div className="font-heading font-bold text-xl text-white">{active.buyers}</div>
                    <div className="text-[10px] text-gray-400">Buyers</div>
                  </div>
                  <div className="text-center p-3 rounded-xl" style={{ background: `${active.color}10` }}>
                    <div className="font-heading font-bold text-xl" style={{ color: active.color }}>
                      {active.growth}
                    </div>
                    <div className="text-[10px] text-brand-muted">Growth</div>
                  </div>
                </div>

                <div className="text-xs text-gray-400">
                  <span className="font-medium text-gray-300">Key Markets: </span>
                  {active.countries.join(' · ')}
                </div>
              </motion.div>
            )}

            {/* Region list */}
            <div className="space-y-2">
              {regions.map((region, i) => (
                <motion.button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-300 ${
                    activeRegion === region.id
                      ? 'border-gray-700 bg-gray-900'
                      : 'border-transparent hover:bg-gray-900 hover:border-gray-700'
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: region.color }}
                  />
                  <span className="text-sm font-medium text-white flex-1 text-left">
                    {region.label}
                  </span>
                  <span className="text-xs text-gray-400">{region.share}</span>
                  <TrendingUp size={11} className="text-gray-500" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
