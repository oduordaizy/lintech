import { faqData } from "./faq"
import { services } from "./features"
import { testimonials } from "./testimonials"

export function StructuredData() {
    const businessName = "Lintech Web Solutions"
    const websiteUrl = "https://lintechwebsolutions.co.ke"

    // Organization Schema - Primary for Google Knowledge Graph
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": businessName,
        "alternateName": "Lintech",
        "url": websiteUrl,
        "logo": `${websiteUrl}/logo.png`,
        "description": "Lintech Web Solutions offers premium web design and development services in Kenya. We build stunning, high-performance websites for businesses.",
        "foundingDate": "2016",
        "areaServed": {
            "@type": "Country",
            "name": "Kenya"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nairobi",
            "addressLocality": "Nairobi",
            "addressCountry": "KE"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+254797967839",
            "contactType": "customer service",
            "email": "contact@lintechwebsolutions.co.ke",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.facebook.com/lintechwebsolutions",
            "https://www.twitter.com/lintech",
            "https://www.linkedin.com/company/lintechwebsolutions",
            "https://www.instagram.com/lintechwebsolutions"
        ]
    }

    // WebSite Schema - Helps Google understand the site name
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": businessName,
        "alternateName": "Lintech",
        "url": websiteUrl,
        "description": "Premium web design and development services in Kenya",
        "publisher": {
            "@type": "Organization",
            "name": businessName,
            "url": websiteUrl
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${websiteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    }

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
                    "@type": "Organization",
                    "name": businessName,
                    "url": websiteUrl
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
        "name": businessName,
        "url": websiteUrl,
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
            "datePublished": "2025-12-01"
        }))
    }

    // Breadcrumb Schema - Helps with sitelinks and search appearance
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": websiteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": `${websiteUrl}/about`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Services",
                "item": `${websiteUrl}/services`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Projects",
                "item": `${websiteUrl}/projects`
            },
            {
                "@type": "ListItem",
                "position": 5,
                "name": "Pricing",
                "item": `${websiteUrl}/pricing`
            },
            {
                "@type": "ListItem",
                "position": 6,
                "name": "Contact Us",
                "item": `${websiteUrl}/contact`
            }
        ]
    }

    // Site Navigation Schema - Explicitly tells Google about the menu
    const siteNavigationSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Main Navigation",
        "itemListElement": [
            {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Home",
                "url": websiteUrl
            },
            {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "About Us",
                "url": `${websiteUrl}/about`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Services",
                "url": `${websiteUrl}/services`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Projects",
                "url": `${websiteUrl}/projects`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 5,
                "name": "Pricing",
                "url": `${websiteUrl}/pricing`
            },
            {
                "@type": "SiteNavigationElement",
                "position": 6,
                "name": "Contact Us",
                "url": `${websiteUrl}/contact`
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
            />
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
