import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import DeviceShowcase from "@/components/sections/DeviceShowcase";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F4]">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <SocialProof />
        <DeviceShowcase />
        <Features />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
