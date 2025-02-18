import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ReviewsSection from './components/ReviewsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
} 