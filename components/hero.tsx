import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden bg-mist-white">
      {/* Background radial & ambient light accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,74,138,0.06)_0%,transparent_65%)] z-0"></div>
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-royal-blue/5 rounded-full blur-[140px] z-0 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 md:w-[450px] md:h-[450px] bg-gold/5 rounded-full blur-[120px] z-0"></div>

      <div className="container max-w-5xl px-4 md:px-8 relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">

          {/* Headline Node */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] md:leading-[1.08] text-navy max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Crafting Digital Masterpieces<br className="hidden sm:inline" /> for Your Business
          </h1>

          {/* Extended Descriptive Context Copy */}
          <p className="text-base md:text-lg lg:text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            We transform ambitious ideas into high-performance websites that captivate audiences and accelerate growth.
          </p>

          {/* Main Conversational CTA Action Targets */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" variant="gold" className="w-full sm:w-auto gap-2 group shadow-xl shadow-gold/20 text-base px-8 h-12" asChild>
              <a href="#contact">
                Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-navy/10 text-navy hover:bg-navy/5 hover:border-navy/20 shadow-xl shadow-navy/5 text-base px-8 h-12" asChild>
              <a href="/projects">
                View Projects
              </a>
            </Button>
          </div>
          

        </div>
      </div>
    </section>
  )
}