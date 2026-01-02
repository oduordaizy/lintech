import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Paintbrush, Smartphone, Zap } from "lucide-react"

const services = [
    {
        title: "Website Development",
        description: "Robust, scalable, and high-performance websites built with the latest technologies like Next.js and React.",
        icon: Code2,
    },
    {
        title: "SEO Optimization",
        description: "Built-in SEO best practices to ensure your website ranks well and reaches your target audience.",
        icon: Zap,
    },
    {
        title: "Responsive Design",
        description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
        icon: Smartphone,
    },
    {
        title: "Website Maintenance",
        description: "Regular updates and maintenance to keep your website running smoothly and secure.",
        icon: Zap,
    },
    {
        title: "Custom Solutions",
        description: "We offer custom solutions to meet your specific needs and requirements.",
        icon: Zap,
    },
    {
        title: "Payment Integrations",
        description: "We offer payment integrations with M-Pesa and Stripe for global payments.",
        icon: Zap,
    },
]

export function Features() {
    return (
        <section id="services" className="container py-20 px-4 md:px-8 max-w-screen-2xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Our Expertise</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We provide a comprehensive suite of digital services to help your business thrive in the modern web.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="bg-muted/50 border-none shadow-sm hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
