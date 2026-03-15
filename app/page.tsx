import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { HowItWorks } from '@/components/how-it-works'
import { MentorPreview } from '@/components/mentor-preview'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <MentorPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

