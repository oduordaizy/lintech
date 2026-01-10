import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Search, Smartphone, Wrench, Palette, CreditCard, Rocket, TrendingUp, Shield, Gauge } from "lucide-react"

export const services = [
    {
        title: "Website Development",
        description: "Enterprise-grade web applications built with Next.js, React, and modern frameworks. Lightning-fast performance with scalable architecture.",
        icon: Code2,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "SEO Optimization",
        description: "Advanced search engine optimization strategies that drive organic traffic. Rank higher on Google with proven on-page and technical SEO.",
        icon: Search,
        gradient: "from-green-500 to-emerald-500",
    },
    {
        title: "Responsive Design",
        description: "Mobile-first, cross-browser compatible designs that adapt flawlessly. Perfect user experience across desktop, tablet, and smartphone devices.",
        icon: Smartphone,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "Website Maintenance, and updates",
        description: "Proactive monitoring, security updates, and performance optimization. Keep your site secure, fast, and running 24/7 without downtime.",
        icon: Wrench,
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Custom Web Solutions",
        description: "Tailored web applications and bespoke features designed for your unique business requirements. From CRM to e-commerce platforms and to startups.",
        icon: Palette,
        gradient: "from-indigo-500 to-blue-500",
    },

    {
        title: "Payment Integration",
        description: "Seamless M-Pesa and Stripe payment gateways. Secure checkout experiences with PCI-compliant integrations for global transactions.",
        icon: CreditCard,
        gradient: "from-yellow-500 to-orange-500",
    },
]

export default function Features() {
    return (
        <section id="services" className="container py-20 md:py-28 px-4 md:px-8 max-w-screen-2xl">
            <div className="text-center mb-16 md:mb-20 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Our Services
                    </span>
                </h2>

                <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                    We offer the following services to help you succeed in the digital world.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        className="group relative bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Gradient background effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                        <CardHeader className="space-y-4 pb-4">
                            {/* Icon container with gradient */}
                            <div className="relative">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                                        <service.icon className={`w-7 h-7 bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} strokeWidth={2.5} />
                                    </div>
                                </div>
                                {/* Glow effect */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                            </div>

                            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                {service.title}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                {service.description}
                            </CardDescription>
                        </CardContent>

                        {/* Bottom accent line */}
                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                    </Card>
                ))}
            </div>
        </section>
    )
}