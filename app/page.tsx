import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Ventures from '@/components/Ventures';
import FeaturedAwards from '@/components/FeaturedAwards';
import BrandsWorkedWith from '@/components/BrandsWorkedWith';
import Contact from '@/components/Contact';
import Expertise from '@/components/Expertise';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Ventures />
      <FeaturedAwards />
      <BrandsWorkedWith />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
