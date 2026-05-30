import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import About from '@/components/About';
import ProductCategories from '@/components/ProductCategories';
import ManufacturingProcess from '@/components/ManufacturingProcess';
import Infrastructure from '@/components/Infrastructure';
import Sustainability from '@/components/Sustainability';
import Certifications from '@/components/Certifications';
import ExportMarkets from '@/components/ExportMarkets';
import Clients from '@/components/Clients';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <ProductCategories />
      <ManufacturingProcess />
      <Infrastructure />
      <Sustainability />
      <Certifications />
      <ExportMarkets />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
