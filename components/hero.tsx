import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
    return (
        <section className="container grid lg:grid-cols-2 items-center py-16 md:py-24 lg:py-28 gap-10 md:gap-12 lg:gap-16 max-w-screen-2xl px-4 md:px-8">
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    <span className="text-foreground">
                        Effective web solutions for businesses of any scale
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Crafting high-performance websites that increase visibility and drive business growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                    <Button asChild size="lg" className="gap-2 text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all">
                        <a href="mailto:contact@oduordaizy@gmail.com">
                            Contact on Email <ArrowRight className="w-5 h-5" />
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2 text-base h-12 px-8">
                        <a href="https://wa.me/5511999999999">
                            Chat on WhatsApp <ArrowRight className="w-5 h-5" />
                        </a>
                    </Button>
                </div>

            </div>

            {/* Enhanced Visual Element */}
            <div className="w-full aspect-square lg:aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center border border-border/50 shadow-2xl relative overflow-hidden group">
                {/* Animated grid background */}
                <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />

                {/* Floating elements */}
                <div className="absolute top-12 right-12 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                <div className="absolute bottom-12 left-12 w-12 h-12 border-2 border-primary/20 rounded-full group-hover:scale-110 transition-transform duration-700" />

                {/* Center content */}
                <div className="relative z-10 p-8 text-center space-y-4">
                    <div className="relative inline-block">
                        <div className="text-6xl md:text-7xl font-mono font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                            &lt;/&gt;
                        </div>
                        <div className="absolute inset-0 blur-2xl bg-primary/30 -z-10 group-hover:bg-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-1">
                        <div className="text-xl md:text-2xl font-bold text-foreground">Lintech Web Solutions</div>
                        <div className="text-sm text-muted-foreground font-medium tracking-wider">
                            DESIGN × DEVELOPMENT × RESULTS
                        </div>
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2 justify-center pt-4">
                        {['Fast', 'Responsive', 'SEO Optimized', 'Secure'].map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>
        </section>
    )
}