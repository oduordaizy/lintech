import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://lintechwebsolutions.co.ke' // Replace with your actual domain

    // Calculate generic priority based on route importance
    // In a real app, you might fetch dynamic routes here (e.g. blog posts)

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/#about`, // Anchor links technically point to the same page, but good to have the main page indexed
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Add more routes if you create separate pages like /services, /portfolio, etc.
    ]
}
