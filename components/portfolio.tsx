import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store with payment integration and inventory management.",
        category: "Web Development",
        // In a real app, these would be proper image paths
        color: "bg-blue-500/10",
    },
    {
        title: "Finance Dashboard",
        description: "Real-time analytics dashboard for a fintech startup providing data visualization.",
        category: "UI/UX Design",
        color: "bg-green-500/10",
    },
    {
        title: "Travel App Landing",
        description: "Modern landing page for a travel booking application with immersive visuals.",
        category: "Frontend",
        color: "bg-orange-500/10",
    },
]

export function Portfolio() {
    return (
        <section id="portfolio" className="container py-20 px-4 md:px-8 max-w-screen-2xl bg-secondary/20 rounded-3xl my-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Selected Work</h2>
                    <p className="text-muted-foreground text-lg max-w-lg">
                        Explore some of our recent projects that showcase our commitment to quality and innovation.
                    </p>
                </div>
                <Button variant="outline">View All Projects</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} className="overflow-hidden border-none shadow-none bg-background group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
                        <div className={`aspect-video w-full ${project.color} flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                            <span className="text-4xl font-bold opacity-10">PROJECT {index + 1}</span>
                        </div>
                        <CardHeader className="pb-2">
                            <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{project.category}</div>
                            <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>{project.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" className="p-0 h-auto font-semibold gap-1 group/btn">
                                View Setup <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
