import React from 'react';
import { Shield, Lock, Eye, Database, Cookie, Mail, AlertTriangle, UserCheck } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground py-20 md:py-24 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <Shield className="w-12 h-12" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
                            Privacy Policy
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
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                At our company, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Please read this privacy policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <Database className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                        1. Information We Collect
                                    </h2>

                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        1.1 Personal Information
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        We may collect personal information that you provide directly to us, including:
                                    </p>
                                    <ul className="space-y-2 ml-6 mb-6">
                                        <li className="text-muted-foreground leading-relaxed">• Name and contact information (email address, phone number, physical address)</li>
                                        <li className="text-slate-700 leading-relaxed">• Company name and business information</li>
                                        <li className="text-slate-700 leading-relaxed">• Payment and billing information</li>
                                        <li className="text-slate-700 leading-relaxed">• Project requirements and specifications</li>
                                        <li className="text-slate-700 leading-relaxed">• Communications and correspondence with us</li>
                                        <li className="text-slate-700 leading-relaxed">• Login credentials for client portals</li>
                                    </ul>

                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                        1.2 Automatically Collected Information
                                    </h3>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        When you visit our website, we automatically collect certain information, including:
                                    </p>
                                    <ul className="space-y-2 ml-6">
                                        <li className="text-slate-700 leading-relaxed">• IP address and browser type</li>
                                        <li className="text-slate-700 leading-relaxed">• Device information and operating system</li>
                                        <li className="text-slate-700 leading-relaxed">• Pages visited and time spent on pages</li>
                                        <li className="text-slate-700 leading-relaxed">• Referring website addresses</li>
                                        <li className="text-slate-700 leading-relaxed">• Clickstream data and navigation patterns</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Your Information */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <Eye className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        2. How We Use Your Information
                                    </h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We use the information we collect for various purposes, including:
                                    </p>
                                    <ul className="space-y-2 ml-6">
                                        <li className="text-slate-700 leading-relaxed">• Providing, maintaining, and improving our web development services</li>
                                        <li className="text-slate-700 leading-relaxed">• Processing payments and managing billing</li>
                                        <li className="text-slate-700 leading-relaxed">• Communicating with you about projects, updates, and support</li>
                                        <li className="text-slate-700 leading-relaxed">• Sending promotional materials and marketing communications (with your consent)</li>
                                        <li className="text-slate-700 leading-relaxed">• Analyzing website usage and improving user experience</li>
                                        <li className="text-slate-700 leading-relaxed">• Detecting and preventing fraud or security issues</li>
                                        <li className="text-slate-700 leading-relaxed">• Complying with legal obligations and enforcing our terms</li>
                                        <li className="text-slate-700 leading-relaxed">• Providing customer support and responding to inquiries</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Cookies and Tracking */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <Cookie className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        3. Cookies and Tracking Technologies
                                    </h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device.
                                    </p>

                                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                        Types of Cookies We Use:
                                    </h3>
                                    <ul className="space-y-3 ml-6 mb-4">
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly, including authentication and security features.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Analytics Cookies:</strong> Help us understand how visitors use our website, including page views, traffic sources, and user behavior.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Preference Cookies:</strong> Remember your settings and preferences for a better user experience.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Marketing Cookies:</strong> Track your browsing habits to deliver targeted advertising (only with your consent).
                                        </li>
                                    </ul>

                                    <p className="text-slate-700 leading-relaxed">
                                        You can control cookie preferences through your browser settings. Note that disabling cookies may affect website functionality.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Data Sharing */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                4. How We Share Your Information
                            </h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>
                            <ul className="space-y-3 ml-6">
                                <li className="text-slate-700 leading-relaxed">
                                    <strong className="text-slate-900">Service Providers:</strong> We work with third-party companies that provide services such as hosting, payment processing, analytics, and email delivery. These providers only have access to information needed to perform their functions.
                                </li>
                                <li className="text-slate-700 leading-relaxed">
                                    <strong className="text-slate-900">Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
                                </li>
                                <li className="text-slate-700 leading-relaxed">
                                    <strong className="text-slate-900">Legal Requirements:</strong> We may disclose your information if required by law, court order, or government request, or to protect our rights and safety.
                                </li>
                                <li className="text-slate-700 leading-relaxed">
                                    <strong className="text-slate-900">With Your Consent:</strong> We may share information with third parties when you explicitly consent to such sharing.
                                </li>
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <Lock className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        5. Data Security
                                    </h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                                    </p>
                                    <ul className="space-y-2 ml-6 mb-4">
                                        <li className="text-slate-700 leading-relaxed">• SSL/TLS encryption for data transmission</li>
                                        <li className="text-slate-700 leading-relaxed">• Secure servers and databases with access controls</li>
                                        <li className="text-slate-700 leading-relaxed">• Regular security audits and updates</li>
                                        <li className="text-slate-700 leading-relaxed">• Employee training on data protection practices</li>
                                        <li className="text-slate-700 leading-relaxed">• Firewall protection and intrusion detection systems</li>
                                    </ul>
                                    <p className="text-muted-foreground leading-relaxed bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                                        <AlertTriangle className="w-5 h-5 inline mr-2 text-primary" />
                                        While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Data Retention */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                6. Data Retention
                            </h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Retention periods include:
                            </p>
                            <ul className="space-y-2 ml-6">
                                <li className="text-slate-700 leading-relaxed">• Active client data: Duration of business relationship plus 7 years for tax and legal compliance</li>
                                <li className="text-slate-700 leading-relaxed">• Project files and communications: 3 years after project completion</li>
                                <li className="text-slate-700 leading-relaxed">• Marketing data: Until you opt out or request deletion</li>
                                <li className="text-slate-700 leading-relaxed">• Website analytics: 26 months</li>
                            </ul>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <UserCheck className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        7. Your Privacy Rights
                                    </h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        You have certain rights regarding your personal information:
                                    </p>
                                    <ul className="space-y-3 ml-6">
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Access:</strong> Request access to the personal information we hold about you.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Correction:</strong> Request correction of inaccurate or incomplete information.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Deletion:</strong> Request deletion of your personal information, subject to legal obligations.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Objection:</strong> Object to processing of your information for marketing purposes.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.
                                        </li>
                                        <li className="text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900">Withdraw Consent:</strong> Withdraw consent for processing where we rely on consent.
                                        </li>
                                    </ul>
                                    <p className="text-slate-700 leading-relaxed mt-4">
                                        To exercise these rights, please contact us using the information provided at the end of this policy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Third-Party Links */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                8. Third-Party Websites
                            </h2>
                            <p className="text-slate-700 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </div>

                        {/* Children's Privacy */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                9. Children's Privacy
                            </h2>
                            <p className="text-slate-700 leading-relaxed">
                                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
                            </p>
                        </div>

                        {/* International Data Transfers */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                10. International Data Transfers
                            </h2>
                            <p className="text-slate-700 leading-relaxed">
                                Your information may be transferred to and processed in countries other than Kenya. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                            </p>
                        </div>

                        {/* Marketing Communications */}
                        <div className="mb-10">
                            <div className="flex items-start mb-4">
                                <Mail className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                        11. Marketing Communications
                                    </h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        With your consent, we may send you promotional emails about our services, special offers, and updates. You can opt out at any time by:
                                    </p>
                                    <ul className="space-y-2 ml-6">
                                        <li className="text-slate-700 leading-relaxed">• Clicking the "unsubscribe" link in any marketing email</li>
                                        <li className="text-slate-700 leading-relaxed">• Contacting us directly to request removal from our marketing list</li>
                                        <li className="text-slate-700 leading-relaxed">• Updating your preferences in your account settings</li>
                                    </ul>
                                    <p className="text-slate-700 leading-relaxed mt-4">
                                        Note that opting out of marketing communications does not affect transactional emails related to your projects or account.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Updates to Policy */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                12. Changes to This Privacy Policy
                            </h2>
                            <p className="text-slate-700 leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-muted/30 rounded-xl p-6 border-2 border-border">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                13. Contact Us
                            </h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-muted-foreground">
                                <p><strong>Email:</strong> info@lintech.co.ke</p>
                                <p><strong>Phone:</strong> +254 797 967 839</p>
                                <p><strong>Address:</strong> Nairobi, Kenya</p>
                                <p><strong>Data Protection Officer:</strong> privacy@lintech.co.ke</p>
                            </div>
                        </div>

                        {/* Consent Statement */}
                        <div className="mt-10 p-6 bg-primary/10 rounded-xl border-2 border-primary/30">
                            <p className="text-foreground leading-relaxed text-center">
                                By using our website and services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}