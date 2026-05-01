import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

export const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        content: "LinTech transformed our digital presence completely. The team's attention to detail and technical expertise is unmatched in the industry.",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Director, Creative Solutions",
        content: "Working with LinTech was a breeze. They understood our vision perfectly and delivered a website that exceeded our expectations.",
        rating: 5,
    },
    {
        name: "David Ochieng",
        role: "Founder, Safari Adventures",
        content: "The SEO optimization services provided by LinTech helped us double our organic traffic in just three months. Highly recommended!",
        rating: 5,
    },

]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(65,105,225,0.1)_0%,transparent_50%)]"></div>
            
            <div className="container max-w-screen-2xl px-4 md:px-8 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-blue/20 border border-deep-blue/30 text-gold text-xs font-bold uppercase tracking-widest">
                        <span>Success Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-mist-white">
                        Trusted by <span className="text-gradient-gold">Visionaries</span>
                    </h2>
                    <p className="text-mist-white/60 text-lg max-w-2xl mx-auto">
                        We take pride in delivering excellence. Here's how we've helped brands reach their digital peak.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="glass-dark p-8 rounded-[2rem] border-white/5 hover:border-gold/20 transition-all duration-500 group relative"
                        >
                            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gold to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                                <Quote className="w-6 h-6 text-navy" />
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                    ))}
                                </div>
                                
                                <p className="text-mist-white/80 italic text-lg leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-deep-blue/40 border border-white/10 flex items-center justify-center font-bold text-gold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-mist-white">{testimonial.name}</h4>
                                        <p className="text-xs font-bold uppercase tracking-widest text-gold/60">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

