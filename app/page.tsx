import { Navbar } from "@/components/navbar"
import Hero from "@/components/hero"
import { About } from "@/components/about"
import Features from "@/components/features"
import Portfolio from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhyUs } from "@/components/why-us"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden selection:bg-gold/30 selection:text-navy">
      {/* Background decorations */}
      <div className="fixed inset-0 min-h-screen w-full -z-10 bg-mist-white bg-[linear-gradient(to_right,#05122B05_1px,transparent_1px),linear-gradient(to_bottom,#05122B05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-deep-blue/5 opacity-30 blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-gold/5 opacity-20 blur-[100px] pointer-events-none"></div>

      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <Portfolio />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}

