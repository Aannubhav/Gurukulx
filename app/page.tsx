import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Products from "@/components/sections/Products";
import Features from "@/components/sections/Features";
import Interactive3D from "@/components/sections/Interactive3D";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#08080C]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Products />
        <Features />
        <Interactive3D />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
