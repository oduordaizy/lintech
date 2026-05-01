import Image from "next/image"
import { Button } from "./ui/button"

export function About() {
    const stats = [
        { value: "10+", label: "Years Experience" },
        { Value: "150+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
    ]

    const pillars = [
        {
            number: "01",
            title: "Digital Architecture",
            body: "We don't just build websites; we engineer scalable digital systems that grow with your business.",
        },
        {
            number: "02",
            title: "Performance First",
            body: "Every pixel and line of code is optimized for lightning-fast delivery and flawless user experience.",
        },
        {
            number: "03",
            title: "Strategic Partnership",
            body: "We work as an extension of your team, dedicated to achieving your long-term business goals.",
        },
    ]

    return (
        <section
            id="about"
            className="relative py-24 mddden
        >
            {/* Sapphire Decorations */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-deep-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="container max-w-screen-xl px-6 md:px-12 mx-auto relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-center">
                    
                    {/* Left: Image + Experience Card */}
                    <div className="relative">
                        <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/5">
                            <Image
                                src="/ab.png"
                                alt="Lintech team"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                        </div>
                        
                        {/* Floating Experience Card */}
                        {/* <div className="absolute -bottom-10 -right-10 glass-dark p-8 rounded-3xl shadow-2xl border-white/10 hidden md:block">
                            <div className="text-5xl font-bold text-gold mb-2 tracking-tighter">10+</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-mist-white/60">Years of <br />Digital Leadership</div>
                        </div> */}
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest">
                                <span>Corporate Excellence</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-mist-white leading-tight">
                                We Are Digital <br />
                                <span className="text-gradient-gold">Visionaries</span>
                            </h2>
                            <p className="text-mist-white/60 text-lg leading-relaxed max-w-lg">
                                At Lintech, we architect high-performance digital ecosystems for global enterprises. We combine technical rigor with refined design to deliver trust and depth.
                            </p>
                        </div>

                        {/* Pillars */}
                        <div className="grid gap-4 md:gap-6">
                            {pillars.map((p) => (
                                <div key={p.number} className="group flex gap-4 md:gap-6 p-4 md:p-6 rounded-xl md:rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                                    <span className="text-xl font-bold text-gold opacity-30 group-hover:opacity-100 transition-opacity">{p.number}</span>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-mist-white text-lg">{p.title}</h3>
                                        <p className="text-mist-white/40 text-sm leading-relaxed">{p.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 md:gap-6 pt-4">
                            <Button size="lg" variant="gold" className="rounded-full shadow-lg shadow-gold/20">
                                Meet Our Experts
                            </Button>
                            <Button variant="link" className="font-bold text-mist-white hover:text-gold group">
                                Learn More <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
