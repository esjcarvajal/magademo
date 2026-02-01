import { Layout } from "@/components/layout";
import { HeroSection, ServicesSection, AboutSection, CTASection } from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </Layout>
  );
};

export default Index;