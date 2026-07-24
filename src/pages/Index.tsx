import Navbar from "./_components/Navbar.tsx";
import HeroSection from "./_components/HeroSection.tsx";
import AboutSection from "./_components/AboutSection.tsx";
import ServicesSection from "./_components/ServicesSection.tsx";
import DifferentialsSection from "./_components/DifferentialsSection.tsx";
import TestimonialsSection from "./_components/TestimonialsSection.tsx";
import CtaSection from "./_components/CtaSection.tsx";
import Footer from "./_components/Footer.tsx";
import WhatsAppButton from "./_components/WhatsAppButton.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}