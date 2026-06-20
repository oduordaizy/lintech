import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Users, Target, Award, Clock, CheckCircle, Star, Quote, ArrowRight } from "lucide-react"

export function About() {
    const stats = [
        { value: "10+", label: "Years Experience" },
        { value: "150+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "24/7", label: "Support Available" },
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

    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We deliver nothing less than exceptional quality in every project we undertake."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Success is a team effort. We work closely with clients to achieve shared goals."
        },
        {
            icon: Award,
            title: "Innovation",
            description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
        },
        {
            icon: Clock,
            title: "Reliability",
            description: "We honor our commitments and deliver on time, every time."
        }
    ]

    const team = [
        {
            name: "John Kamau",
            role: "Founder & CEO",
            image: "/team/john.jpg",
            expertise: "Full-Stack Development"
        },
        {
            name: "Sarah Wanjiku",
            role: "Lead Designer",
            image: "/team/sarah.jpg",
            expertise: "UI/UX Design"
        },
        {
            name: "David Ochieng",
            role: "Technical Director",
            image: "/team/david.jpg",
            expertise: "System Architecture"
        },
        {
            name: "Grace Mwangi",
            role: "Project Manager",
            image: "/team/grace.jpg",
            expertise: "Agile Methodology"
        }
    ]

    const process = [
        {
            step: "01",
            title: "Discovery",
            description: "We dive deep into understanding your business, goals, and target audience."
        },
        {
            step: "02",
            title: "Strategy",
            description: "We craft a comprehensive roadmap tailored to your unique requirements."
        },
        {
            step: "03",
            title: "Development",
            description: "Our experts build your solution using industry best practices."
        },
        {
            step: "04",
            title: "Launch & Support",
            description: "We ensure smooth deployment and provide ongoing support."
        }
    ]

    const testimonials = [
        {
            name: "Michael Omondi",
            role: "CEO, Avoworld Africa",
            content: "Lintech transformed our logistics operations with a custom platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
            rating: 5
        },
        {
            name: "Dr. Mary Njoroge",
            role: "Director, Afritox Labs",
            content: "The mobile lab platform Lintech developed has revolutionized how we deliver healthcare services in remote areas. Truly life-changing work.",
            rating: 5
        },
        {
            name: "James Kipkorir",
            role: "Founder, iTravas",
            content: "Professional, responsive, and incredibly skilled. Lintech delivered our ridesharing platform on time and within budget.",
            rating: 5
        }
    ]

    return (
        <>
            {/* Hero Section */}
            <section
                id="about"
                className="relative py-16 md:py-24 lg:py-36 overflow-hidden bg-navy"
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
                        </div>

                        {/* Right: Content */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                
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

         
           

            {/* Mission, Vision & Values */}
            <section className="py-16 md:py-24 bg-navy">
                <div className="container max-w-screen-xl px-6 md:px-12 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-mist-white mb-4">
                            Our <span className="text-gradient-gold">Core Values</span>
                        </h2>
                        <p className="text-mist-white/60 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-amber-500/20 flex items-center justify-center mb-4">
                                    <value.icon className="w-6 h-6 text-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-mist-white mb-2">{value.title}</h3>
                                <p className="text-mist-white/60 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-16 md:py-24 bg-mist-white">
                <div className="container max-w-screen-xl px-6 md:px-12 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            How We <span className="text-gradient-gold">Work</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our proven methodology ensures successful project delivery
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-2xl p-6 border border-navy/5 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                    <div className="text-5xl font-bold text-gold/20 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                        <ArrowRight className="w-6 h-6 text-gold" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           
            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-mist-white">
                <div className="container max-w-screen-xl px-6 md:px-12 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                            What Our <span className="text-gradient-gold">Clients Say</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Don't just take our word for it
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 border border-navy/5 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="font-bold text-navy">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-navy to-deep-blue">
                <div className="container max-w-screen-xl px-6 md:px-12 mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-mist-white mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-mist-white/60 max-w-2xl mx-auto mb-8">
                        Let's create something extraordinary together. Get in touch with our team to discuss your next project.
                    </p>
                    <Button size="lg" variant="gold" className="rounded-full shadow-lg shadow-gold/20">
                        Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </section>
        </>
    )
}
