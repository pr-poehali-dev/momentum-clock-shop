import { HeroSection } from '@/components/home/HeroSection';
import { BenefitsSection } from '@/components/home/BenefitsSection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { AboutSection } from '@/components/home/AboutSection';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FeaturedProductsSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
