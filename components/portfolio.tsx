'use client'
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Eye, ChevronDown, ChevronUp } from "lucide-react"

const projects = [
    {
        title: "iTravas",
        description: "A travel booking platform that allows for ridesharing",
        category: "Web Development",
        imageUrl: "/projects/itravas.jpg",
        gradient: "bg-gradient-to-b from-indigo-500 via-blue-600 to-cyan-700",
        tech: ["React", "D3.js", "Django"],
        stats: { views: "8.5K", conversion: "4.1%" },
        url: "https://itravas.com",
    },
    {
        title: "Avoworld Website",
        description: "A website for a Avocado logistics and transportation company",
        category: "Web Development",
        imageUrl: "/projects/avoworld.jpg",
        gradient: "bg-gradient-to-b from-indigo-500 via-blue-600 to-cyan-700",
        tech: ["React", "D3.js", "Django"],
        stats: { views: "8.5K", conversion: "4.1%" },
        url: "https://avoworldafrica.co.ke/",
    },
    // {
    //     title: "Demeters' Gardens Website",
    //     description: "Full-featured online store with Stripe payment integration, inventory management, and real-time order tracking.",
    //     category: "Web Development",
    //     imageUrl: "/projects/demeters.jpg",
    //     gradient: "bg-gradient-to-b from-indigo-500 via-blue-600 to-cyan-700",
    //     tech: ["React", "D3.js", "Node.js"],
    //     stats: { views: "8.5K", conversion: "4.1%" },
    //     url: "https://lintechwebsolutions.co.ke",
    // },
    // {
    //     title: "Medicare Website",
    //     description: "Modern, accessible healthcare platform with patient portals, appointment booking, and HIPAA-compliant secure messaging.",
    //     category: "Healthcare",
    //     imageUrl: "/projects/medicare.jpg",
    //     gradient: "bg-gradient-to-b from-blue-600 via-indigo-700 to-purple-700",
    //     tech: ["WordPress", "HIPAA", "SEO"],
    //     stats: { views: "15K", conversion: "5.8%" },
    //     url: "https://lintechwebsolutions.co.ke",
    // },

]

export default function Portfolio() {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([])

    const handleScroll = (index: number, direction: 'up' | 'down') => {
        const container = scrollRefs.current[index]
        if (container) {
            const scrollAmount = 300
            const newScrollTop = direction === 'down'
                ? container.scrollTop + scrollAmount
                : container.scrollTop - scrollAmount

            container.scrollTo({
                top: newScrollTop,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="portfolio" className="py-16 md:py-24 bg-mist-white relative">
            <div className="container max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-blue/5 border border-deep-blue/10 text-deep-blue text-xs font-bold uppercase tracking-widest">
                            <Award className="w-3.5 h-3.5" />
                            <span>Our Work</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy text-center">
                            Selected <span className="text-gradient-gold">Works</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-md">
                        A curated showcase of digital experiences we've crafted for world-class brands and innovative startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className="relative aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden border border-navy/5 shadow-2xl shadow-navy/5 bg-white transition-all duration-500 group-hover:shadow-gold/10 group-hover:border-gold/20">
                                {/* Browser Frame UI */}
                                <div className="absolute top-0 left-0 right-0 h-10 bg-muted/30 border-b border-navy/5 flex items-center px-4 gap-2 z-20">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/40"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40"></div>
                                    </div>
                                    <div className="mx-auto w-1/2 h-5 bg-white/50 rounded text-[10px] flex items-center justify-center text-navy/40 font-medium overflow-hidden whitespace-nowrap">
                                        {project.url}
                                    </div>
                                </div>

                                <div
                                    ref={(el) => {
                                        scrollRefs.current[index] = el
                                    }}
                                    className="relative h-full pt-10 overflow-y-auto overflow-x-hidden scroll-smooth hide-scrollbar bg-slate-50"
                                >
                                    <style jsx>{`
                                        .hide-scrollbar::-webkit-scrollbar { display: none; }
                                        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                                    `}</style>

                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-auto object-top"
                                        />
                                    ) : (
                                        <div className={`w-full min-h-full ${project.gradient} flex items-center justify-center p-12`}>
                                            <div className="text-white/20 text-4xl font-bold uppercase tracking-tighter opacity-20">Preview</div>
                                        </div>
                                    )}

                                    {/* Scroll Controls */}
                                    <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleScroll(index, 'up'); }}
                                            className="w-12 h-12 rounded-full glass border-white/40 flex items-center justify-center pointer-events-auto hover:bg-white/40 transition-all hover:scale-110"
                                        >
                                            <ChevronUp className="w-6 h-6 text-navy" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleScroll(index, 'down'); }}
                                            className="w-12 h-12 rounded-full glass border-white/40 flex items-center justify-center pointer-events-auto hover:bg-white/40 transition-all hover:scale-110"
                                        >
                                            <ChevronDown className="w-6 h-6 text-navy" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold text-navy group-hover:text-deep-blue transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                                </div>
                                <Button variant="gold" size="sm" asChild className="rounded-full gap-2 shadow-lg shadow-gold/20">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        View Live <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
