'use client'
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Eye, ChevronDown, ChevronUp, Calendar, Filter, Star } from "lucide-react"
import { Badge } from "./ui/badge"

const projects = [
    {
        title: "iTravas",
        description: "A modern ridesharing platform connecting drivers with empty seats to passengers seeking affordable, secure, and convenient travel across Kenya. Features real-time tracking, secure payments, and driver verification.",
        category: "Web Development",
        imageUrl: "/projects/itravas.jpg",
        gradient: "bg-gradient-to-b from-indigo-500 via-blue-600 to-cyan-700",
        tech: ["React", "Django", "PostgreSQL"],
        stats: { views: "8.5K", conversion: "4.1%" },
        url: "https://itravas.com",
        featured: true,
        year: "2024",
    },
    {
        title: "Avoworld Africa Website",
        description: "A comprehensive website for Avocado logistics and transportation company. Includes fleet management, real-time shipment tracking, and customer portal for booking and monitoring deliveries.",
        category: "Logistics",
        imageUrl: "/projects/avoworld.jpg",
        gradient: "bg-gradient-to-b from-emerald-500 via-teal-600 to-cyan-700",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        stats: { views: "12K", conversion: "6.2%" },
        url: "https://avoworldafrica.co.ke/",
        year: "2024",
    },
    {
        title: "Afritox Mobile Lab",
        description: "A mobile laboratory platform for medical testing in Kenya. Enables patients to book mobile lab services, view test results securely, and track sample collection in real-time.",
        category: "Healthcare",
        imageUrl: "/projects/afritox.png",
        gradient: "bg-gradient-to-b from-rose-500 via-pink-600 to-purple-700",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        stats: { views: "5.2K", conversion: "8.3%" },
        url: "http://187.127.229.137:3005",
        year: "2026",
    },
    {
        title: "Elite Africa Football Academy",
        description: "A Informational website for a modern football academy website that includes a blog for news and updates.",
        category: "Web Development",
        imageUrl: "/projects/eafa.jpg",
        gradient: "bg-gradient-to-b from-amber-500 via-orange-600 to-red-700",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", ".NET Core"],
        stats: { views: "15K", conversion: "7.8%" },
        url: "http://187.127.229.137:5006/",
        year: "2026",
    },
    /*
    {
        title: "Medicare Healthcare Platform",
        description: "Modern, accessible healthcare platform with patient portals, appointment booking, and HIPAA-compliant secure messaging. Features telemedicine integration and prescription management.",
        category: "W",
        imageUrl: "/projects/medicare.jpg",
        gradient: "bg-gradient-to-b from-blue-600 via-indigo-700 to-purple-700",
        tech: ["WordPress", "HIPAA", "SEO", "Twilio"],
        stats: { views: "15K", conversion: "5.8%" },
        url: "https://lintechwebsolutions.co.ke",
        year: "2023",
    },
    {
        title: "EduLearn Learning Management",
        description: "Comprehensive LMS for educational institutions with course management, student progress tracking, interactive quizzes, and video conferencing integration for remote learning.",
        category: "Education",
        imageUrl: "/projects/edulearn.jpg",
        gradient: "bg-gradient-to-b from-violet-500 via-purple-600 to-indigo-700",
        tech: ["React", "Python", "Django", "WebRTC"],
        stats: { views: "9.3K", conversion: "11.2%" },
        url: "#",
        year: "2024",
    },
    /*{
        title: "FarmConnect Agriculture Platform",
        description: "Digital marketplace connecting farmers directly with buyers. Features crop listing, price comparison, logistics coordination, and mobile-first design for rural accessibility.",
        category: "Agriculture",
        imageUrl: "/projects/farmconnect.jpg",
        gradient: "bg-gradient-to-b from-green-500 via-emerald-600 to-teal-700",
        tech: ["React Native", "Firebase", "Node.js"],
        stats: { views: "6.8K", conversion: "9.4%" },
        url: "#",
        year: "2024",
    },
    {
        title: "PropTech Real Estate Portal",
        description: "Modern real estate platform with virtual tours, mortgage calculators, neighborhood analytics, and AI-powered property recommendations for buyers and renters.",
        category: "Real Estate",
        imageUrl: "/projects/proptech.jpg",
        gradient: "bg-gradient-to-b from-slate-500 via-gray-600 to-zinc-700",
        tech: ["Next.js", "TypeScript", "Mapbox", "OpenAI"],
        stats: { views: "11.5K", conversion: "5.6%" },
        url: "#",
        year: "2024",
    },*/
]

export default function Portfolio() {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ["All", "Web Development", "Logistics", "Healthcare", "E-Commerce", "NGOs", "Education", "Agriculture", "Real Estate"]

    const filteredProjects = selectedCategory === "All" 
        ? projects 
        : projects.filter(project => project.category === selectedCategory)

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
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                        Our Projects
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A curated showcase of digital experiences we've crafted for world-class brands and innovative startups across various industries.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "gold" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className="rounded-full"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="bg-white rounded-xl p-6 border border-navy/5 shadow-sm text-center">
                        <div className="text-3xl font-bold text-navy mb-1">8+</div>
                        <div className="text-sm text-muted-foreground">Projects Delivered</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-navy/5 shadow-sm text-center">
                        <div className="text-3xl font-bold text-navy mb-1">6</div>
                        <div className="text-sm text-muted-foreground">Industries Served</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-navy/5 shadow-sm text-center">
                        <div className="text-3xl font-bold text-navy mb-1">95%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-navy/5 shadow-sm text-center">
                        <div className="text-3xl font-bold text-navy mb-1">24/7</div>
                        <div className="text-sm text-muted-foreground">Support Available</div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-navy/5 shadow-2xl shadow-navy/5 bg-white transition-all duration-500 group-hover:shadow-gold/10 group-hover:border-gold/20">
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

                            {/* Project Info */}
                            <div className="mt-4 space-y-3">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-xl font-bold text-navy group-hover:text-deep-blue transition-colors">{project.title}</h3>
                                            {project.featured && <Star className="w-4 h-4 text-amber-500 fill-amber-500" />}
                                        </div>
                                        <Badge variant="outline" className="text-xs mb-2">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <Calendar className="w-3 h-3" />
                                        {project.year}
                                    </div>
                                </div>
                                
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                                
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="secondary" className="text-xs">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-3 h-3" />
                                        {project.stats.views}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Award className="w-3 h-3" />
                                        {project.stats.conversion} conversion
                                    </div>
                                </div>

                                <Button variant="gold" size="sm" asChild className="rounded-full gap-2 shadow-lg shadow-gold/20 w-full">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        View Live <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-r from-navy/5 to-gold/5 rounded-2xl p-8 md:p-12 border border-navy/5">
                        <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                            Let's collaborate to bring your vision to life. Get in touch with our team to discuss your next digital project.
                        </p>
                        <Button variant="gold" size="lg" className="rounded-full gap-2 shadow-lg shadow-gold/20">
                            Get in Touch <ExternalLink className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
