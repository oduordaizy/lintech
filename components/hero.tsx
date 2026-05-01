import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] md:min-h-[90vh] flex items-center pt-16 md:pt-24 pb-8 md:pb-16 overflow-hidden bg-mist-white">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(26,74,138,0.05)_0%,transparent_70%)] z-0"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-royal-blue/5 rounded-full blur-[120px] z-0 animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-gold/5 rounded-full blur-[100px] z-0"></div>

            <div className="container max-w-screen-2xl px-4 md:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-blue/5 border border-deep-blue/10 backdrop-blur-sm animate-in fade-in slide-in-from-top-4 duration-1000">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="text-sm font-bold text-deep-blue/60 tracking-widest uppercase">Premier Web Development Agency</span>
                    </div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] md:leading-[1.1] text-navy animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                        Crafting Digital <br />
                        <span className="text-gradient-gold">Masterpieces</span> <br />
                        for Your Business
                    </h1>

                    <p className="text-base md:text-lg text-navy/60 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
                        We transform ambitious ideas into high-performance websites that captivate audiences and accelerate growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-2 md:pt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <Button size="lg" variant="gold" className="gap-2 group shadow-xl shadow-gold/20" asChild>
                            <a href="#contact">
                                Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="border-navy/10 text-navy hover:bg-navy/5 hover:border-navy/20 shadow-xl shadow-navy/5" asChild>
                            <a href="#portfolio">
                                View Portfolio
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="relative group animate-in fade-in zoom-in duration-1000 delay-300">
                    <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-royal-blue/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all opacity-30"></div>
                    <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-navy/5 shadow-2xl shadow-navy/10 group-hover:scale-[1.02] transition-transform duration-700 max-w-xs md:max-w-sm lg:max-w-lg mx-auto flex items-center justify-center">
                        <Image
                            src="/hero-img-3.png"
                            alt="Lintech Web Solutions"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-60"></div>
                        
                        {/* Floating Tech Badges */}
                        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex flex-wrap gap-2 md:gap-3">
                            {['Innovation', 'Performance', 'Security'].map((tag) => (
                                <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-xl">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


