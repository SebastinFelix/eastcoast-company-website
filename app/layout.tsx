import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// ─── FONTS ──────────────────────────────────────────────────────────────────
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// ─── SEO METADATA ───────────────────────────────────────────────────────────
// [COMPANY_INFO: Update all metadata fields with your company details]
export const metadata: Metadata = {
  // [COMPANY_INFO: Replace with your company name]
  title: 'Eastcoast Company — Premium Apparel Manufacturing & Global Export',
  // [COMPANY_INFO: Replace with your company description (150–160 chars)]
  description:
    'Global leader in premium apparel manufacturing and export. Ethical, certified, and sustainable garment production for the world\'s top fashion brands.',
  keywords: [
    // [COMPANY_INFO: Add your specific keywords, certifications, product types]
    'apparel manufacturing',
    'garment export',
    'ethical fashion',
    'GOTS certified',
    'sustainable clothing',
    'Dindigul manufacturer',
  ],
  authors: [
    // [COMPANY_INFO: Replace with your company name and website]
    { name: 'Eastcoast Company', url: 'https://eastcoastcompany.com' },
  ],
  // [COMPANY_INFO: Replace with your actual domain]
  metadataBase: new URL('https://eastcoastcompany.com'),
  openGraph: {
    type: 'website',
    // [COMPANY_INFO: Replace with your OG title]
    title: 'Eastcoast Company — Premium Apparel Manufacturing & Global Export',
    // [COMPANY_INFO: Replace with your OG description]
    description:
      'Crafting tomorrow\'s fashion today. Certified, ethical, and globally trusted apparel manufacturer.',
    // [COMPANY_INFO: Replace with your domain]
    url: 'https://eastcoastcompany.com',
    // [COMPANY_INFO: Replace with your OG image in /public/og-image.jpg]
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    // [COMPANY_INFO: Replace with your Twitter/X handle]
    site: '@eastcoastcompany',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-brand-bg text-brand-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
