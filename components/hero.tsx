import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star, TrendingUp, Zap, ShieldCheck } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-36 pb-20 overflow-hidden bg-slate-950 text-white">
      {/* 1. Creative Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      {/* 2. Dynamic Ambient Light Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-royal-blue/20 rounded-full blur-[140px] z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-gold/15 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="container max-w-6xl px-4 md:px-8 relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* 3. Availability Badge */}
          

          {/* 4. Main Headline with Gradient Masking */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Crafting <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">Digital Masterpieces</span> for High-Growth Brands
          </h1>

          {/* 5. Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            We engineer tailored web apps, high-converting platforms, and bespoke digital experiences that captivate audiences and accelerate revenue.
          </p>

          {/* 6. CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button size="lg" className="w-full sm:w-auto gap-2 group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold shadow-xl shadow-amber-500/10 text-base px-8 h-13 rounded-xl transition-all hover:scale-[1.02]" asChild>
              <a href="#contact">
                Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 text-slate-200 hover:bg-white/5 hover:border-white/20 text-base px-8 h-13 rounded-xl backdrop-blur-sm" asChild>
              <a href="/projects">
                Explore Our Work
              </a>
            </Button>
          </div>

        

      

        </div>
      </div>
    </section>
  )
}