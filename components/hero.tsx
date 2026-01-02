import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 max-w-screen-2xl px-4 md:px-8">
            <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent pb-2">
                    Building Digital <br />
                    Experiences That Matter
                </h1>
                <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
                    We craft stunning, high-performance websites that drive growth and engage your audience.
                    Expert design meets cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg" className="gap-2">
                        <a href="mailto:contact@oduordaizy@gmail.com">
                            Email <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <a href="https://wa.me/5511999999999">
                            WhatsApp <ArrowRight className="w-4 h-4" />
                        </a>
                    </Button>
                </div>
            </div>

            {/* Visual Element / Placeholder for 3D or abstract art */}
            <div className="w-full aspect-square lg:aspect-video rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center border border-border/50 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="relative z-10 p-8 text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 animate-pulse blur-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <div className="relative text-3xl font-mono text-primary/80">&lt;Code /&gt;</div>
                    <div className="text-sm text-muted-foreground mt-2">Design x Engineering</div>
                </div>
            </div>
        </section>
    )
}
