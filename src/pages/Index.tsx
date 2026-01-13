import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import AboutSection from "@/components/home/AboutSection";
import SegmentsSection from "@/components/home/SegmentsSection";
import WhoWeServeSection from "@/components/home/WhoWeServeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <WhyChooseUsSection />
        <AboutSection />
        <SegmentsSection />
        <WhoWeServeSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
