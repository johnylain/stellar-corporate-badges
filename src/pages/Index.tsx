import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import SegmentsSection from "@/components/SegmentsSection";
import PortfolioSection from "@/components/PortfolioSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactForm from "@/components/ContactForm";
import FooterSection from "@/components/FooterSection";
import bgTexture from "@/assets/bg-texture.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <StickyHeader />
      <HeroSection />
      <SegmentsSection />
      <PortfolioSection />
      <AdvantagesSection />
      <TechnologiesSection />
      <ProcessSection />
      <ContactForm />
      <FooterSection />
    </div>
  );
};

export default Index;
