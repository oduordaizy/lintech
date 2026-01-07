import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
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
        <section id="testimonials" className="container py-20 md:py-28 px-4 md:px-8 max-w-screen-2xl bg-muted/30">
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                    Don't just take our word for it. Here's what businesses and individuals have to say about working with us.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-background border-none shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Quote className="w-24 h-24 rotate-12" />
                        </div>

                        <CardHeader className="pb-4 relative z-10">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </CardHeader>

                        <CardContent className="pt-0 relative z-10">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                    <p className="text-sm text-primary/80 font-medium">{testimonial.role}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
