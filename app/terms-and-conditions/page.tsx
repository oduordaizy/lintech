import React from 'react';
import { Shield, FileText, AlertCircle, Scale } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function TermsAndConditions() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground py-20 md:py-24 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <Scale className="w-12 h-12" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-primary-foreground/80 text-center text-base md:text-lg">
                            Last Updated: January 6, 2026
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-16 md:py-20">
                    <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12">
                        {/* Introduction */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <FileText className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                        1. Agreement to Terms
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        By accessing and using our web development services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and clients who access or use our services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                2. Services Provided
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                We offer web development, design, and maintenance services including but not limited to:
                            </p>
                            <ul className="space-y-2 ml-6">
                                <li className="text-muted-foreground leading-relaxed">• Custom website design and development</li>
                                <li className="text-slate-700 leading-relaxed">• E-commerce solutions and payment integration</li>
                                <li className="text-slate-700 leading-relaxed">• Content Management System (CMS) implementation</li>
                                <li className="text-slate-700 leading-relaxed">• SEO optimization and analytics setup</li>
                                <li className="text-slate-700 leading-relaxed">• Website maintenance and support</li>
                                <li className="text-slate-700 leading-relaxed">• Social media and marketing tool integration</li>
                            </ul>
                        </div>

                        {/* Payment Terms */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                3. Payment Terms
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    <strong className="text-foreground">3.1 Pricing:</strong> All prices are quoted in Kenyan Shillings (KES) and are subject to change without notice. The agreed price will be specified in your project proposal or contract.
                                </p>
                                <p>
                                    <strong className="text-slate-900">3.2 Payment Schedule:</strong> A 30% deposit is required before project commencement. The remaining 70% is due upon project completion. An invoice will be issued for each payment stage. The 30% deposit is non-refundable once work has commenced.
                                </p>
                                <p>
                                    <strong className="text-slate-900">3.3 Payment Methods:</strong> We accept payments via M-Pesa, and bank transfer. All payment details will be provided in your invoice.
                                </p>
                            </div>
                        </div>

                        {/* Project Timeline */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                4. Project Timeline and Delivery
                            </h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <strong className="text-slate-900">4.1 Timelines:</strong> Project timelines are estimates and may vary based on project complexity, client feedback response time, and content availability. We will communicate any delays promptly.
                                </p>
                                <p>
                                    <strong className="text-slate-900">4.2 Client Responsibilities:</strong> Timely delivery of content, images, logos, and feedback is essential. Delays in providing these materials may extend the project timeline.
                                </p>
                            </div>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                5. Intellectual Property Rights
                            </h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    Upon full payment, all custom designs, code, and content created specifically for your project will be transferred to you.
                                </p>

                            </div>
                        </div>

                        {/* Maintenance and Support */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                6. Maintenance and Support
                            </h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <strong className="text-slate-900">6.1 Support Period:</strong> Each package includes a specified maintenance and support period. Support includes bug fixes, security updates, and minor content updates.
                                </p>
                                <p>
                                    <strong className="text-slate-900">6.2 Extended Support:</strong> After the initial support period, extended maintenance packages are available.
                                </p>
                                <p>
                                    <strong className="text-slate-900">6.3 Exclusions:</strong> Support does not include major feature additions, design overhauls, or issues caused by client modifications to the website code.
                                </p>
                            </div>
                        </div>

                        {/* Warranties and Disclaimers */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                7. Warranties and Disclaimers
                            </h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <strong className="text-slate-900">7.1 Quality Assurance:</strong> We warrant that all work will be performed professionally and will function as specified in the project agreement.
                                </p>
                                <p>
                                    <strong className="text-slate-900">7.2 Browser Compatibility:</strong> Websites will be tested on major modern browsers (Chrome, Firefox, Safari, Edge). We do not guarantee compatibility with outdated browser versions.
                                </p>
                                <p>
                                    <strong className="text-slate-900">7.3 Third-Party Services:</strong> We are not responsible for outages, changes, or discontinuation of third-party services including hosting providers, payment gateways, or API services.
                                </p>
                            </div>
                        </div>

                        {/* Limitation of Liability */}
                        <div className="mb-10">
                            <div className="flex items-start">
                                <AlertCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        8. Limitation of Liability
                                    </h2>
                                    <div className="space-y-4 text-slate-700 leading-relaxed">
                                        <p>
                                            Our total liability for any claims arising from our services shall not exceed the total amount paid for the specific project. We are not liable for any indirect, incidental, or consequential damages including lost profits, data loss, or business interruption.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Confidentiality */}
                        <div className="mb-10">
                            <div className="flex items-start">
                                <Shield className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        9. Confidentiality
                                    </h2>
                                    <div className="space-y-4 text-slate-700 leading-relaxed">
                                        <p>
                                            We respect your privacy and will keep all client information confidential. We will not share your business information, project details, or proprietary data with third parties without your explicit consent, except as required by law.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Termination */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                10. Termination
                            </h2>
                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <strong className="text-slate-900">10.1 Client Termination:</strong> You may terminate the project at any time by providing written notice. All payments made are non-refundable, and you will be charged for work completed up to the termination date.
                                </p>
                                <p>
                                    <strong className="text-slate-900">10.2 Our Termination Rights:</strong> We reserve the right to terminate services if payment terms are violated, if you provide false information, or if you engage in abusive behavior toward our team.
                                </p>
                            </div>
                        </div>

                        {/* Governing Law */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                11. Governing Law
                            </h2>
                            <p className="text-slate-700 leading-relaxed">
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kenya.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                12. Changes to Terms
                            </h2>
                            <p className="text-slate-700 leading-relaxed">
                                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-muted/30 rounded-xl p-6 border-2 border-border">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                13. Contact Information
                            </h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="space-y-2 text-muted-foreground">
                                <p><strong>Email:</strong> info@lintechwebsolutions.com</p>
                                <p><strong>Phone:</strong> +254 97967839</p>
                                <p><strong>Address:</strong> Nairobi, Kenya</p>
                            </div>
                        </div>

                        {/* Acceptance */}
                        <div className="mt-10 p-6 bg-primary/10 rounded-xl border-2 border-primary/30">
                            <p className="text-foreground leading-relaxed text-center">
                                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}