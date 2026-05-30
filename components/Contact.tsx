'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Upload,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
} from 'lucide-react';

// ─── CONTACT INFORMATION ──────────────────────────────────────────────────────
// [COMPANY_INFO: Replace ALL contact details below with your actual information]
const CONTACT_INFO = {
  email: 'exports@yourcompany.com',       // [COMPANY_INFO: Your inquiry email]
  phone: '+91 421 XXX XXXX',              // [COMPANY_INFO: Your phone number]
  whatsapp: '+91 98XXX XXXXX',            // [COMPANY_INFO: Your WhatsApp number]
  address: 'Your Full Address Here',      // [COMPANY_INFO: Your factory address]
  city: 'Dindigul, Tamilnadu 624 001',    // [COMPANY_INFO: City, State, PIN]
  country: 'India',                       // [COMPANY_INFO: Country]
  linkedin: 'https://linkedin.com/in/yourcompany', // [COMPANY_INFO: LinkedIn URL]
  instagram: 'https://instagram.com/yourcompany', // [COMPANY_INFO: Instagram URL]
  twitter: 'https://twitter.com/yourcompany',     // [COMPANY_INFO: Twitter/X URL]
};

// [COMPANY_INFO: Update response time promise]
const RESPONSE_PROMISE = 'We respond to all inquiries within 24 hours.';

const inputClass =
  'w-full bg-white/8 border border-white/12 rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-accent/60 focus:bg-white/12 transition-all duration-300';

const labelClass = 'block text-xs font-semibold tracking-wide text-white/50 mb-2 uppercase';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);

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
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    /*
      [COMPANY_INFO: Implement your form submission logic here]
      Options:
        1. Formspree: action="https://formspree.io/f/YOUR_FORM_ID"
        2. EmailJS: emailjs.sendForm(...)
        3. Next.js API route: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
        4. Resend / SendGrid / Nodemailer via API route
    */
    await new Promise((r) => setTimeout(r, 1500)); // Simulated delay — remove in production
    setStatus('sent');
  };

  return (
    <section id="contact" className="section-padding bg-brand-dark overflow-hidden" ref={ref}>
      <div className="container-brand">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-4">
            <span className="w-6 h-px bg-brand-accent" />
            Start a Partnership
            <span className="w-6 h-px bg-brand-accent" />
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white">
            {/* [COMPANY_INFO: Update CTA headline] */}
            Let's Build Something
            <br />
            <span className="text-white/40">Exceptional Together.</span>
          </h2>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left: CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <div className="rounded-3xl bg-brand-accent/10 border border-brand-accent/20 p-8 mb-6">
              <h3 className="font-heading font-bold text-2xl text-white mb-4">
                {/* [COMPANY_INFO: Update panel headline] */}
                Ready to Manufacture?
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">
                {/* [COMPANY_INFO: Update panel body text] */}
                Share your requirements and we'll have a dedicated account manager reach out within 24 hours with samples, pricing, and a production timeline tailored to your brand.
              </p>

              {/* What to expect */}
              <div className="space-y-3 mb-8">
                {[
                  // [COMPANY_INFO: Update benefits list]
                  'Free consultation & tech pack review',
                  'Sample turnaround in 7–10 working days',
                  'Dedicated account manager assigned',
                  'Competitive per-unit pricing with volume tiers',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-xs text-white/60">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-brand-accent text-sm font-semibold hover:gap-3 transition-all group"
              >
                <Mail size={14} />
                {/* [COMPANY_INFO: Your email] */}
                {CONTACT_INFO.email}
                <ArrowRight size={12} className="ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/50 shrink-0 mt-0.5">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-0.5">Phone</div>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-sm text-white/70 hover:text-white transition-colors">
                    {/* [COMPANY_INFO: Your phone] */}
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/8 flex items-center justify-center text-white/50 shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/30 mb-0.5">Address</div>
                  {/* [COMPANY_INFO: Your address] */}
                  <address className="not-italic text-sm text-white/70 leading-relaxed">
                    {CONTACT_INFO.address}<br />
                    {CONTACT_INFO.city}<br />
                    {CONTACT_INFO.country}
                  </address>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-8">
              {[
                { Icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
                { Icon: Instagram, href: CONTACT_INFO.instagram, label: 'Instagram' },
                { Icon: Twitter, href: CONTACT_INFO.twitter, label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form — glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'sent' ? (
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 size={36} className="text-brand-accent" />
                </motion.div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
                  {/* [COMPANY_INFO: Update confirmation message] */}
                  Thank you for reaching out. Your account manager will contact you within 24 hours to discuss your requirements.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs font-semibold text-brand-accent hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10 space-y-6"
              >
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company Name *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      placeholder="Your Brand / Company"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Contact Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Business Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="country">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Your Country"
                      value={form.country}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="category">
                      Product Category *
                    </label>
                    {/* [COMPANY_INFO: Update categories to match your product range] */}
                    <select
                      id="category"
                      name="category"
                      required
                      value={form.category}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled>Select Category</option>
                      <option value="menswear">Menswear</option>
                      <option value="womenswear">Womenswear</option>
                      <option value="kidswear">Kidswear</option>
                      <option value="activewear">Activewear</option>
                      <option value="sustainable">Sustainable / Organic</option>
                      <option value="streetwear">Streetwear</option>
                      <option value="basics">Fashion Basics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* MOQ */}
                <div>
                  <label className={labelClass} htmlFor="moq">
                    Estimated MOQ *
                  </label>
                  <select
                    id="moq"
                    name="moq"
                    required
                    value={form.moq}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select Order Quantity Range</option>
                    {/* [COMPANY_INFO: Update MOQ tiers to match your minimums] */}
                    <option value="100-300">100 – 300 pcs</option>
                    <option value="300-1000">300 – 1,000 pcs</option>
                    <option value="1000-5000">1,000 – 5,000 pcs</option>
                    <option value="5000-25000">5,000 – 25,000 pcs</option>
                    <option value="25000+">25,000+ pcs</option>
                  </select>
                </div>

                {/* Requirements */}
                <div>
                  <label className={labelClass} htmlFor="requirements">
                    Product Requirements *
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    required
                    rows={4}
                    placeholder="Describe your garment specifications, fabric preferences, certifications needed, delivery timeline, target markets..."
                    value={form.requirements}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* File upload */}
                <div>
                  <label className={labelClass}>
                    Attach Tech Pack / Sketch (Optional)
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 border border-dashed border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all duration-300 group">
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png,.ai,.sketch,.fig"
                      onChange={handleFile}
                    />
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-white/40 group-hover:text-white/60 transition-colors shrink-0">
                      <Upload size={14} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white/50 group-hover:text-white/70 transition-colors">
                        {fileName ?? 'Upload tech pack, sketch, or reference image'}
                      </div>
                      <div className="text-[10px] text-white/25 mt-0.5">
                        PDF, JPG, PNG, AI, Figma · Max 10MB
                      </div>
                    </div>
                  </label>
                </div>

                {/* Privacy note */}
                <p className="text-[10px] text-white/25 leading-relaxed">
                  {/* [COMPANY_INFO: Update privacy policy link] */}
                  By submitting, you agree to our Privacy Policy. Your information is used solely for responding to your inquiry and will never be shared with third parties.
                </p>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-brand-accent text-white font-semibold rounded-xl hover:bg-[#b01e2e] disabled:opacity-70 transition-all duration-300"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending Inquiry...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={15} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-[11px] text-white/30">{RESPONSE_PROMISE}</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
