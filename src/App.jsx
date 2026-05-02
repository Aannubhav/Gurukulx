import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Showcase />
        <Features />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
