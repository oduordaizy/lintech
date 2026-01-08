import { faqData } from "./faq"
import { services } from "./features"
import { testimonials } from "./testimonials"

export function StructuredData() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    // Service Schema - using ItemList to showcase all services
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "LinTech Web Solutions",
                    "url": "https://lintechwebsolutions.co.ke"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "Kenya"
                },
                "serviceType": service.title
            }
        }))
    }

    // Review/Testimonial Schema - using aggregateRating and individual reviews
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "LinTech Web Solutions",
        "url": "https://lintechwebsolutions.co.ke",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": testimonials.length,
            "bestRating": "5",
            "worstRating": "5"
        },
        "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": testimonial.name
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": "5"
            },
            "reviewBody": testimonial.content,
            "datePublished": "2025-12-01" // You may want to add actual dates to testimonials data
        }))
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
        </>
    )
}
