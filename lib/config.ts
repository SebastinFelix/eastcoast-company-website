// ─── COMPANY CONFIGURATION ────────────────────────────────────────────────────
// Edit this file to update all contact details across the entire website.
// After editing, save and the dev server will auto-reload.

export const COMPANY = {
  // ── Identity ────────────────────────────────────────────────────────────────
  name: 'Eastcoast Company',
  legalName: 'Eastcoast Company Pvt. Ltd.',
  tagline: 'Premium Apparel Manufacturing & Global Export',
  founded: '1994',

  // ── Location ────────────────────────────────────────────────────────────────
  address: 'Your Street Address Here',          // e.g. "123 Industrial Estate"
  city: 'Dindigul',
  state: 'Tamilnadu',
  pin: '624 001',
  country: 'India',
  get fullAddress() {
    return `${this.address}, ${this.city}, ${this.state} ${this.pin}, ${this.country}`;
  },
  get cityLine() {
    return `${this.city}, ${this.state} ${this.pin}`;
  },

  // ── Contact ─────────────────────────────────────────────────────────────────
  email: 'exports@eastcoastcompany.com',        // Inquiry / export email
  phone: '+91 451 XXX XXXX',                    // Office phone
  whatsapp: '+91 98XXX XXXXX',                  // WhatsApp number
  website: 'https://eastcoastcompany.com',

  // ── Social Media ─────────────────────────────────────────────────────────────
  social: {
    linkedin: 'https://linkedin.com/company/eastcoastcompany',
    instagram: 'https://instagram.com/eastcoastcompany',
    twitter: 'https://twitter.com/eastcoastcompany',
    youtube: 'https://youtube.com/@eastcoastcompany',
  },

  // ── Registration Numbers ──────────────────────────────────────────────────
  reg: {
    gst: 'GST: 33XXXXXXXXXXXXX',
    iec: 'IEC: XXXXXXXXXX',
    cin: 'CIN: U17XXXXXXXX',
  },

  // ── SEO ──────────────────────────────────────────────────────────────────────
  twitterHandle: '@eastcoastcompany',
};
