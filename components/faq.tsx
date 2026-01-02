import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
    const faqs = [
        {
            question: "How long does it take to build a website?",
            answer: "The timeline depends on the complexity of the project. A standard informational website typically takes 2-4 weeks, while more complex e-commerce platforms or web applications can take 6-12 weeks. We provide a detailed timeline during the initial consultation."
        },
        {
            question: "Do you offer website maintenance and support?",
            answer: "Yes, we offer comprehensive maintenance packages to ensure your website remains secure, up-to-date, and optimized. This includes regular backups, security updates, content updates, and technical support."
        },
        {
            question: "Will my website be mobile-friendly?",
            answer: "Absolutely. All our websites are designed with a 'mobile-first' approach, ensuring they look and perform perfectly on smartphones, tablets, laptops, and desktop computers."
        },
        {
            question: "Do I need to provide the content for the website?",
            answer: "While it helps if you have content ready, it's not a requirement. We can assist with copywriting and content strategy. If you have images and text, we will optimize them for the web; otherwise, we can source high-quality stock imagery or organize a photoshoot."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer project-based pricing tailored to your specific needs. After assessing your requirements, we provide a transparent quote with no hidden fees. We can also work with you to define a scope that fits your budget."
        }
    ]

    return (
        <section id="faq" className="container py-20 px-4 md:px-8 max-w-screen-2xl bg-muted/20">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">
                        Got questions? We've got answers. Here's everything you need to know about our process.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
