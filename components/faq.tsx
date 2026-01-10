import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const faqData = [
    {
        question: "How long does it take to build a website?",
        answer: "The timeline depends on the complexity of the project, and features required. A standard informational website can be ready between 4days to 1 week, while more complex e-commerce platforms or custom built web applications can take 6-12 weeks.  If you need a highly complex website with custom integrations, the process may extend up to several months. We provide a detailed timeline during the initial consultation. At Lintech, we prioritize quality, ensuring your site is delivered within agreed timelines."
    },
    {
        question: "What types of websites do you create?",
        answer: "We develop all types of websites, including corporate business sites, real estate portals, fintech platforms, eCommerce stores, educational websites, classified ads sites, blogs, news websites, and more. Whether you're a startup, a growing business, or a large enterprise, our goal is to build a website that reflects your brand and helps you achieve your online goals."
    },
    {
        question: "Do you offer website maintenance and support?",
        answer: "Yes, we offer comprehensive maintenance packages to ensure your website remains secure, up-to-date, and optimized. This includes regular backups, security updates, content updates, and technical support."
    },
    {
        question: "Do you provide post-launch maintanance?",
        answer: "Absolutely! We offer a free one-month maintenance period after your website goes live. This ensures everything runs smoothly, remains secure, and is optimized for performance. After that, you can choose a maintenance plan that fits your needs to keep your site up to date and running efficiently."
    },
    {
        question: "What do you need from me to get started?",
        answer: "To kickstart your project, we'll need some details about your business, the type of website you want, and any specific features you'd like to include. We also require content such as text, images, and branding elements. If you already have a domain and hosting, that's great! If not, we can guide you through purchasing them. Once we have all the necessary information, our expert team will begin crafting your website right away!"
    },
    {
        question: "What is the pricing for your web development services?",
        answer: "Our pricing is project-based and depends on factors such as the site's complexity, number of pages, and required features. We offer affordable packages to ensure we work with your budget. We've also got discounts running all year long. Please check out our pricing page or contact us for a customized quote!"
    }
]

export function Faq() {

    return (
        <section id="faq" className="container py-20 md:py-28 px-4 md:px-8 max-w-screen-2xl bg-muted/20">
            <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-base md:text-lg lg:text-xl">
                        Got questions? We've got answers. Here's everything you need to know about our process.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq, index) => (
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
