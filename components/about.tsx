import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function About() {

    return (
        <section id="about" className="container py-20 md:py-28 px-4 md:px-8 max-w-screen-2xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Visual Column */}
                <div className="relative order-2 lg:order-1">
                    <div className="aspect-square md:aspect-[4/3] rounded-2xl bg-muted overflow-hidden relative group">
                        <Image
                            src="/about.jpg"
                            alt="About LinTech"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />

                        {/* Decorative elements */}
                        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/30 rounded-full" />
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                    </div>

                </div>

                {/* Content Column */}
                <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            Driven by Innovation, <br />
                            <span className="text-primary">Defined by Quality.</span>
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            At LinTech, we are more than just developers; we are digital architects.
                            Founded with a passion for clean code and exceptional design, we help businesses
                            transform their ideas into powerful digital realities.
                        </p>
                        <p className="text-muted-foreground">
                            Our team specializes in creating custom web solutions that are not only visually stunning
                            but also highly functional and scalable. We believe in building long-term partnerships
                            with our clients through transparency, reliability, and excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
