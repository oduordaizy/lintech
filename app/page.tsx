import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Portfolio } from "@/components/portfolio"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Background decorations */}
      <div className="fixed inset-0 min-h-screen w-full -z-10 bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px] pointer-events-none"></div>

      <Navbar />
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
