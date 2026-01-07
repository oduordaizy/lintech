'use client'
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Eye, ChevronDown, ChevronUp } from "lucide-react"

const projects = [
    {
        title: "Portfolio Website",
        description: "A portfolio website for data analyst with a modern, responsive design and a focus on user experience.",
        category: "Web Development",
        imageUrl: "/projects/portfolio-website.jpg",
        gradient: "bg-gradient-to-b from-blue-500 via-indigo-600 to-purple-700",
        tech: ["Next.js", "Tailwind CSS", "TypeScript"],
        stats: { views: "12K", conversion: "3.2%" },
    },
    {
        title: "Demeters' Gardens Website",
        description: "Full-featured online store with Stripe payment integration, inventory management, and real-time order tracking.",
        category: "Web Development",
        imageUrl: "/projects/demeters.jpg",
        gradient: "bg-gradient-to-b from-green-500 via-emerald-600 to-teal-700",
        tech: ["React", "D3.js", "Node.js"],
        stats: { views: "8.5K", conversion: "4.1%" },
    },
    {
        title: "Medicare Website",
        description: "Modern, accessible healthcare platform with patient portals, appointment booking, and HIPAA-compliant secure messaging.",
        category: "Healthcare",
        imageUrl: "/projects/medicare.jpg",
        gradient: "bg-gradient-to-b from-orange-500 via-red-600 to-pink-700",
        tech: ["WordPress", "HIPAA", "SEO"],
        stats: { views: "15K", conversion: "5.8%" },
    },
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
        <section id="portfolio" className="container py-20 md:py-28 px-4 md:px-8 max-w-screen-2xl">
            <div className="bg-secondary/30 rounded-3xl p-8 md:p-12 lg:p-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <Award className="w-4 h-4" />
                            <span>Featured Projects</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                Our Latest Work
                            </span>
                        </h2>

                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                            Explore our portfolio of successful web projects. Each showcases our commitment to exceptional design,
                            performance optimization, and measurable results.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden border-border/50 hover:border-primary/50 bg-background group cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Scrollable Full Website Screenshot Container */}
                            <div
                                ref={(el) => {
                                    scrollRefs.current[index] = el
                                }}
                                className="relative h-80 overflow-y-auto overflow-x-hidden scroll-smooth group/scroll hide-scrollbar"
                            >
                                {/* Hide scrollbar with CSS */}
                                <style jsx>{`
                                    .hide-scrollbar::-webkit-scrollbar {
                                        display: none;
                                    }
                                    .hide-scrollbar {
                                        -ms-overflow-style: none;
                                        scrollbar-width: none;
                                    }
                                `}</style>

                                {/* Full Page Screenshot - Replace gradient with actual image */}
                                {project.imageUrl ? (
                                    <img
                                        src={project.imageUrl}
                                        alt={`${project.title} full page screenshot`}
                                        className="w-full h-auto object-top object-contain"
                                    />
                                ) : (
                                    // Placeholder that simulates a long website screenshot
                                    <div className={`w-full min-h-[1200px] ${project.gradient} relative`}>
                                        {/* Simulated header */}
                                        <div className="h-16 bg-black/10 border-b border-white/10" />

                                        {/* Simulated hero section */}
                                        <div className="h-96 flex items-center justify-center border-b border-white/10">
                                            <div className="text-center space-y-4 p-8">
                                                <div className="text-6xl font-bold text-white/30">
                                                    {String(index + 1).padStart(2, '0')}
                                                </div>
                                                <div className="text-xl font-semibold text-white/80">
                                                    {project.title}
                                                </div>
                                                <div className="text-sm text-white/60 uppercase tracking-wider">
                                                    Full Page Preview
                                                </div>
                                            </div>
                                        </div>

                                        {/* Simulated content sections */}
                                        <div className="space-y-4 p-6">
                                            {[1, 2, 3, 4].map((section) => (
                                                <div key={section} className="bg-white/5 rounded-lg p-6 space-y-3">
                                                    <div className="h-4 bg-white/20 rounded w-3/4" />
                                                    <div className="h-3 bg-white/15 rounded w-full" />
                                                    <div className="h-3 bg-white/15 rounded w-5/6" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Simulated footer */}
                                        <div className="h-32 bg-black/20 border-t border-white/10 mt-8" />
                                    </div>
                                )}

                                {/* Scroll control buttons overlay */}
                                <div className="sticky bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/90 to-transparent flex items-end justify-center pb-4">
                                    {/* Scroll control buttons */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleScroll(index, 'up')
                                            }}
                                            className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm shadow-lg flex items-center justify-center transition-all hover:scale-110"
                                            aria-label="Scroll up"
                                        >
                                            <ChevronUp className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleScroll(index, 'down')
                                            }}
                                            className="w-10 h-10 rounded-full bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm shadow-lg flex items-center justify-center transition-all hover:scale-110"
                                            aria-label="Scroll down"
                                        >
                                            <ChevronDown className="w-5 h-5 animate-bounce" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="pb-3 pt-5">
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <CardDescription className="text-sm leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardContent>

                            <CardFooter className="pt-2">
                                <Button
                                    variant="link"
                                    className="p-0 h-auto font-semibold gap-2 group/btn text-base"
                                >
                                    View Website
                                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}