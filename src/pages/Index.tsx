import { Layout } from "@/components/layout";
import { HeroSection, ServicesSection, ImageCarousel, AboutSection, CTASection } from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ImageCarousel />
      <AboutSection />
      <CTASection />
    </Layout>
  );
};

export default Index;