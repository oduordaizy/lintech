import { CheckCircle2, Zap, Shield, Users, TrendingUp, Award } from "lucide-react";

export function WhyUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Rapid Execution",
            description: "We accelerate your time-to-market with agile workflows and high-performance technologies.",
            stat: "2x",
            statLabel: "Faster Launch",
            gradient: "from-gold to-orange-400"
        },
        {
            icon: Shield,
            title: "Elite Security",
            description: "Fortified architecture with top-tier encryption and continuous vulnerability monitoring.",
            stat: "100%",
            statLabel: "Data Integrity",
            gradient: "from-deep-blue to-navy"
        },
        {
            icon: Award,
            title: "Expert Craftsmanship",
            description: "Our solutions are precision-engineered by senior developers with a focus on code quality.",
            stat: "10+",
            statLabel: "Years Experience",
            gradient: "from-royal-blue to-deep-blue"
        },
    ];

    return (
        <section id="why-us" className="py-16 md:py-28 bg-gradient-to-b from-background to-muted/20">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.05)_0%,transparent_50%)]"></div>
            
            <div className="container max-w-screen-2xl px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
                                Why Visionary Brands <br />
                                <span className="text-gradient-gold">Choose Us</span>
                            </h2>
                            <p className="text-navy/60 text-lg max-w-lg leading-relaxed">
                                We don't just build websites; we architect digital ecosystems that power global businesses.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-gold">99.9%</div>
                                <div className="text-sm font-semibold uppercase tracking-widest text-navy/40">Uptime Reliability</div>
                            </div>
                            {/* <div className="space-y-2">
                                <div className="text-4xl font-bold text-gold">150+</div>
                                <div className="text-sm font-semibold uppercase tracking-widest text-mist-white/40">Projects Delivered</div>
                            </div> */}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={index}
                                    className="group glass-dark p-8 rounded-2xl border-white/5 hover:border-gold/30 transition-all duration-500 flex gap-6 items-start"
                                >
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 group-hover:border-gold/50 transition-colors">
                                        <Icon className="w-6 h-6 text-gold" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
                                        <p className="text-navy/50 text-sm leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

