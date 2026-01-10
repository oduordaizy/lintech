import React from 'react';
import { Check } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PricingComponent() {
    const plans = [
        {
            name: "Starter Website",
            description: "Ideal for small businesses or personal websites.",
            price: "25,000",
            features: [
                "5 Page Custom Website (Home, About, Services, Blog, Contact)",
                "Mobile Responsive Design",
                "Contact Form & Basic SEO Setup",
                "Basic Security Setup",
                "1 Month Maintenance & Support",
            ],
            popular: false
        },
        {
            name: "Business",
            description: "Optimized for growing SMEs and service businesses.",
            price: "60,000",
            features: [
                "Everything in Starter",
                "Up to 10 Pages with Blog",
                "CMS Integration",
                "Advanced SEO & Analytics Setup",
                "Enhanced Security Features",
                "3 Months Maintenance & Support",
            ],
            popular: true
        },
        {
            name: "Scale",
            description: "Comprehensive solution for businesses needing e-commerce & payments.",
            price: "80,000",
            features: [
                "Everything in Business",
                "Full E-commerce Store (Unlimited Products)",
                "M-Pesa & Card Payments Integration",
                "Advanced Marketing & Automation Tools",
                "CRM Integration & Customer Management",
                "Premium Security & Backup System",
                "1 Year Priority Support"
            ],
            popular: false
        }
    ];

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background py-20 md:py-28 px-4">

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose a plan that works for you.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50 ${plan.popular ? 'ring-2 ring-primary' : ''
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-2 text-sm font-semibold rounded-bl-2xl">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-6 md:p-8">
                                    {/* Plan Name */}
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        {plan.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline">
                                            <span className="text-lg font-semibold text-muted-foreground">KES</span>
                                            <span className="text-4xl md:text-5xl font-bold text-foreground ml-2">
                                                {plan.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <button
                                        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                                            : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                                            }`}
                                    >
                                        Get Quote
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}