import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t bg-muted/20 backdrop-blur-sm">
            <div className="container py-16 md:py-20 px-4 md:px-8 max-w-screen-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
                    {/* Logo and Vision */}
                    <div className="space-y-4 md:space-y-5">
                        <div className="flex items-center space-x-2">
                            <Image src="/logo.png" alt="Lintech Logo" width={40} height={40} />
                            <span className="font-bold text-xl">Lintech Web Solutions</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Empowering businesses with innovative web solutions that drive growth, enhance digital presence, and transform ideas into impactful online experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4 md:space-y-5">
                        <h3 className="font-semibold text-lg">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4 md:space-y-5">
                        <h3 className="font-semibold text-lg">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/#faq" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/policy" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>&copy; {new Date().getFullYear()} LinTech Web Solutions. All rights reserved.</p>
                        {/* Social Media */}
                        <div className="flex gap-3 pt-2">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="h-9 w-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
