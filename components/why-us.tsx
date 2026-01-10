import { CheckCircle2, Zap, Shield, Users, TrendingUp, Award } from "lucide-react";

export function WhyUs() {
    const reasons = [
        {
            icon: Zap,
            title: "Fast Delivery",
            description: "We deliver projects on time without compromising quality. Our agile methodology ensures rapid development cycles.",
            stat: "95%",
            statLabel: "On-Time Delivery",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: Shield,
            title: "Enterprise-Grade Security",
            description: "Your data is protected with industry-leading security practices, SSL encryption, and regular security audits.",
            stat: "100%",
            statLabel: "Secure Projects",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: Users,
            title: "Dedicated Support",
            description: "24/7 support team ready to assist you. We're committed to your success beyond project delivery.",
            stat: "24/7",
            statLabel: "Support Available",
            gradient: "from-blue-500 to-cyan-500"
        },

        {
            icon: CheckCircle2,
            title: "Quality Assurance",
            description: "Rigorous testing and quality checks ensure your website performs flawlessly across all devices and browsers.",
            stat: "99.9%",
            statLabel: "Uptime Guarantee",
            gradient: "from-indigo-500 to-violet-500"
        },
        {
            icon: Shield,
            title: "Scalability",
            description: "We deliver scalable solutions that grow with you",
            stat: "100%",
            statLabel: "Secure Projects",
            gradient: "from-green-500 to-emerald-500"
        },
    ];

    return (
        <section id="why-us" className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/20">
            <div className="container max-w-screen-2xl px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Why Choose <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Lintech</span>?
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                        We combine technical excellence with creative innovation to deliver web solutions that drive real business results.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                            >
                                {/* Icon with gradient background */}
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.gradient} mb-4`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {reason.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {reason.description}
                                </p>
                                {/* Hover effect overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
