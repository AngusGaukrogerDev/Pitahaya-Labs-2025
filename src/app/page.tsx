import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CaseStudiesSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
} 