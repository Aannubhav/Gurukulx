import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
