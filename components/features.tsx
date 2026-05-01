import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Code2, Search, Smartphone, Wrench, Palette, CreditCard, Rocket, TrendingUp, Shield, Gauge, ArrowRight } from "lucide-react"

export const services = [
    {
        title: "Website Development",
        description: "Enterprise-grade web applications built with Next.js, React, and modern frameworks. Lightning-fast performance with scalable architecture.",
        image: "/services/website-development.jpg",
        gradient: "from-navy to-deep-blue",
        icon: Code2
    },
    {
        title: "SEO Optimization",
        description: "Advanced search engine optimization strategies that drive organic traffic. Rank higher on Google with proven on-page and technical SEO.",
        image: "/services/seo.jpg",
        gradient: "from-deep-blue to-royal-blue",
        icon: Search
    },
    {
        title: "Responsive Design",
        description: "Mobile-first, cross-browser compatible designs that adapt flawlessly. Perfect user experience across desktop, tablet, and smartphone devices.",
        image: "/services/responsive-design.jpg",
        gradient: "from-royal-blue to-sky-blue",
        icon: Smartphone
    },
    {
        title: "Website Maintenance",
        description: "Proactive monitoring, security updates, and performance optimization. Keep your site secure, fast, and running 24/7 without downtime.",
        image: "/services/website-maintenance.jpg",
        gradient: "from-deep-blue to-navy",
        icon: Wrench
    },
    {
        title: "Custom Web Solutions",
        description: "Tailored web applications and bespoke features designed for your unique business requirements. From CRM to e-commerce platforms.",
        image: "/services/custom-solutions.jpg",
        gradient: "from-navy via-deep-blue to-gold/20",
        icon: Palette
    },
    {
        title: "Payment Integration",
        description: "Seamless M-Pesa and Stripe payment gateways. Secure checkout experiences with PCI-compliant integrations for global transactions.",
        image: "/services/payments.png",
        gradient: "from-gold/20 to-deep-blue",
        icon: CreditCard
    },
]

export default function Features() {
    return (
        <section id="services" className="py-16 md:py-24 bg-navy relative overflow-hidden">
            {/* Sapphire Mist Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(26,74,138,0.15)_0%,transparent_70%)]"></div>
            
            <div className="container max-w-screen-2xl px-4 md:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest">
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-mist-white">
                        World-Class <span className="text-gradient-gold">Solutions</span>
                    </h2>
                    <p className="text-mist-white/60 text-lg max-w-2xl mx-auto">
                        Precision-engineered digital ecosystems designed to elevate your brand and drive exponential growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative glass-dark rounded-[2rem] border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 overflow-hidden"
                        >
                            <div className="relative h-48 md:h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <div className="p-3 rounded-2xl bg-gold text-navy shadow-xl shadow-gold/20 scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-4">
                                <h3 className="text-2xl font-bold text-mist-white group-hover:text-gold transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-mist-white/50 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                
                                <div className="pt-4 flex items-center text-gold text-xs font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                    Explore Service <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold via-deep-blue to-gold w-0 group-hover:w-full transition-all duration-700"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

