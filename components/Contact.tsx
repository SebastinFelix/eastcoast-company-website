'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, Upload,
  CheckCircle2, ArrowRight, Linkedin, Instagram, Twitter, AlertCircle,
  Clock, Users, FileCheck,
} from 'lucide-react';
import { COMPANY } from '@/lib/config';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputBase =
  'w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 bg-white placeholder-gray-400 caret-red-600 focus:outline-none focus:ring-0 focus:border-red-500 transition-all duration-200';

const selectBase =
  'w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-900 bg-white caret-red-600 focus:outline-none focus:ring-0 focus:border-red-500 transition-all duration-200 appearance-none cursor-pointer';

const labelBase =
  'block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileRef, setFileRef] = useState<File | null>(null);

  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    country: '',
    category: '',
    moq: '',
    requirements: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFileRef(f);
    setFileName(f ? f.name : null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, v));
      if (fileRef) data.append('file', fileRef);
      const res = await fetch('/api/contact', { method: 'POST', body: data });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');
      setStatus('sent');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#F4F4F2] overflow-hidden" ref={ref}>
      <div className="container-brand">

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-brand-muted mb-4"
          >
            <span className="w-6 h-px bg-brand-accent" />
            Get In Touch
            <span className="w-6 h-px bg-brand-accent" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold text-brand-text"
          >
            Request a Quote
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-base mt-3 max-w-lg mx-auto"
          >
            Fill in your requirements below and our team will respond within 24 hours with pricing, lead times, and samples.
          </motion.p>
        </div>

        {/* ── Main grid ────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 items-start">

          {/* ── Left: Contact info sidebar ───────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28 space-y-4"
          >
            {/* Company card */}
            <div className="bg-brand-text text-white rounded-2xl p-6">
              <div className="font-heading font-bold text-xl mb-1">
                {COMPANY.name}<span className="text-brand-accent">.</span>
              </div>
              <div className="text-xs text-white/50 mb-6">{COMPANY.tagline}</div>

              <div className="space-y-4">
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/30 transition-colors">
                    <Mail size={14} className="text-white/70" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Email</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors break-all">
                      {COMPANY.email}
                    </div>
                  </div>
                </a>

                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/30 transition-colors">
                    <Phone size={14} className="text-white/70" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Phone</div>
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">
                      {COMPANY.phone}
                    </div>
                    <div className="text-xs text-white/40 mt-0.5">WhatsApp: {COMPANY.whatsapp}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-white/70" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/40 uppercase tracking-widest mb-0.5">Address</div>
                    <address className="not-italic text-sm text-white/70 leading-relaxed">
                      {COMPANY.address}<br />
                      {COMPANY.cityLine}<br />
                      {COMPANY.country}
                    </address>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-2 mt-6 pt-5 border-t border-white/10">
                {[
                  { Icon: Linkedin,  href: COMPANY.social.linkedin,  label: 'LinkedIn' },
                  { Icon: Instagram, href: COMPANY.social.instagram, label: 'Instagram' },
                  { Icon: Twitter,   href: COMPANY.social.twitter,   label: 'Twitter' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/50 hover:bg-brand-accent hover:text-white transition-all duration-300"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>

            {/* Why us cards */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">
                What to Expect
              </h4>
              {[
                { Icon: Clock,     text: 'Response within 24 hours' },
                { Icon: FileCheck, text: 'Free tech pack & consultation' },
                { Icon: Users,     text: 'Dedicated account manager' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-brand-accent" />
                  </div>
                  <span className="text-sm text-gray-600">{text}</span>
                </div>
              ))}
            </div>

            {/* Direct CTA */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center justify-between gap-2 w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl hover:border-brand-accent hover:shadow-luxury transition-all duration-300 group"
            >
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Prefer email directly?</div>
                <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-accent transition-colors">
                  {COMPANY.email}
                </div>
              </div>
              <ArrowRight size={16} className="text-gray-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
            </a>
          </motion.aside>

          {/* ── Right: The Form ───────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'sent' ? (
              /* ── Success state ── */
              <div className="bg-white rounded-3xl border border-gray-100 shadow-luxury p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 14, stiffness: 180 }}
                  className="w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={36} className="text-green-500" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-gray-900 mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. Your account manager will contact you within 24 hours. A confirmation has been sent to your inbox.
                </p>
                <button
                  onClick={() => {
                    setStatus('idle');
                    setForm({ company:'',name:'',email:'',phone:'',country:'',category:'',moq:'',requirements:'' });
                    setFileName(null);
                    setFileRef(null);
                  }}
                  className="mt-8 text-sm font-semibold text-brand-accent hover:underline"
                >
                  Submit another inquiry →
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl border border-gray-100 shadow-luxury divide-y divide-gray-100"
              >
                {/* Form header */}
                <div className="px-8 py-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-base text-gray-900">
                      Buyer Inquiry Form
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">All fields marked * are required</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-medium text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Accepting Inquiries
                  </div>
                </div>

                {/* Error banner */}
                {status === 'error' && (
                  <div className="mx-8 mt-4 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                    <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">{errorMsg}</p>
                  </div>
                )}

                <div className="px-8 py-7 space-y-6">

                  {/* Row 1 — Company + Name */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelBase} htmlFor="company">
                        Company Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="company" name="company" type="text" required
                        placeholder="Your Brand or Company"
                        value={form.company} onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={labelBase} htmlFor="name">
                        Contact Person <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        placeholder="Your Full Name"
                        value={form.name} onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Row 2 — Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelBase} htmlFor="email">
                        Business Email <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        placeholder="you@company.com"
                        value={form.email} onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={labelBase} htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone" name="phone" type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone} onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Row 3 — Country + Category */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelBase} htmlFor="country">Country</label>
                      <input
                        id="country" name="country" type="text"
                        placeholder="Your Country"
                        value={form.country} onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={labelBase} htmlFor="category">
                        Product Category <span className="text-brand-accent">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="category" name="category" required
                          value={form.category} onChange={handleChange}
                          className={selectBase}
                        >
                          <option value="" disabled style={{ color: '#9ca3af', background: '#fff' }}>Select a category</option>
                          {['Menswear','Womenswear','Kidswear','Activewear','Sustainable / Organic','Streetwear','Fashion Basics','Other'].map(o => (
                            <option key={o} value={o} style={{ color: '#111111', background: '#ffffff', fontWeight: '500' }}>{o}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 4 — MOQ */}
                  <div>
                    <label className={labelBase} htmlFor="moq">
                      Estimated Order Quantity <span className="text-brand-accent">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="moq" name="moq" required
                        value={form.moq} onChange={handleChange}
                        className={selectBase}
                      >
                        <option value="" disabled style={{ color: '#9ca3af', background: '#fff' }}>Select quantity range</option>
                        {['100 – 300 pcs','300 – 1,000 pcs','1,000 – 5,000 pcs','5,000 – 25,000 pcs','25,000+ pcs'].map(o => (
                          <option key={o} value={o} style={{ color: '#111111', background: '#ffffff', fontWeight: '500' }}>{o}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 5 — Requirements */}
                  <div>
                    <label className={labelBase} htmlFor="requirements">
                      Product Requirements <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      id="requirements" name="requirements" required rows={5}
                      placeholder="Describe your garment specifications, fabric type, certifications needed, delivery timeline, target markets, colours, and any other details..."
                      value={form.requirements} onChange={handleChange}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {/* Row 6 — File upload */}
                  <div>
                    <label className={labelBase}>
                      Attach Tech Pack / Sketch
                      <span className="ml-1 text-gray-300 normal-case font-normal">(optional)</span>
                    </label>
                    <label
                      className={`flex items-center gap-4 p-4 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${
                        fileName
                          ? 'border-brand-accent/40 bg-brand-accent/5'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="file" className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png,.ai,.zip,.fig"
                        onChange={handleFile}
                      />
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        fileName ? 'bg-brand-accent/15 text-brand-accent' : 'bg-gray-200 text-gray-400'
                      }`}>
                        <Upload size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-medium truncate ${fileName ? 'text-brand-accent' : 'text-gray-500'}`}>
                          {fileName ?? 'Click to upload or drag & drop'}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          PDF, JPG, PNG, AI, ZIP · Max 10MB
                        </div>
                      </div>
                      {fileName && (
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); setFileName(null); setFileRef(null); }}
                          className="text-gray-300 hover:text-gray-500 shrink-0 text-lg leading-none"
                        >
                          ×
                        </button>
                      )}
                    </label>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-gray-400 leading-relaxed">
                    By submitting this form you agree to our Privacy Policy. Your information is used solely to respond to your inquiry and is never shared with third parties.
                  </p>
                </div>

                {/* Form footer — submit */}
                <div className="px-8 py-5 bg-gray-50 rounded-b-3xl flex flex-col sm:flex-row items-center gap-4">
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status !== 'sending' ? 1.02 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2.5 px-8 py-3.5 bg-brand-text text-white text-sm font-semibold rounded-xl hover:bg-brand-accent disabled:opacity-60 transition-all duration-300 w-full sm:w-auto"
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send size={14} />
                      </>
                    )}
                  </motion.button>
                  <p className="text-xs text-gray-400 text-center sm:text-left">
                    <Clock size={11} className="inline mr-1" />
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
