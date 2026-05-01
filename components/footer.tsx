import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-navy text-mist-white pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-deep-blue to-gold"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container max-w-screen-2xl px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {/* Brand Column */}
                    <div className="space-y-4 md:space-y-6 lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors">
                                <Image src="/logo.png" alt="Logo" width={36} height={36} className="object-contain" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight">Lintech</span>
                        </Link>
                        <p className="text-mist-white/50 leading-relaxed text-sm">
                            Architecting high-performance digital experiences for visionary brands across the globe.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-bold text-gold uppercase tracking-widest text-xs mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Projects', 'Pricing', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link href={`/${link === 'Home' ? '' : link.toLowerCase()}`} className="text-mist-white/60 hover:text-gold transition-colors text-sm font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gold uppercase tracking-widest text-xs mb-8">Legal</h3>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map(link => (
                                <li key={link}>
                                    <Link href="#" className="text-mist-white/60 hover:text-gold transition-colors text-sm font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter/Contact */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-gold uppercase tracking-widest text-xs mb-8">Connect</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gold" />
                                <span className="text-sm text-mist-white/60">info@lintechwebsolutions.co.ke</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gold" />
                                <span className="text-sm text-mist-white/60">+254 797 967 839</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-gold" />
                                <span className="text-sm text-mist-white/60">Nairobi, Kenya</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-mist-white/30 text-xs font-medium">
                        &copy; {new Date().getFullYear()} Lintech Web Solutions. Crafted with precision in Kenya.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-mist-white/30 hover:text-gold transition-colors text-[10px] font-bold uppercase tracking-widest">Sitemap</Link>
                        <Link href="#" className="text-mist-white/30 hover:text-gold transition-colors text-[10px] font-bold uppercase tracking-widest">Status</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

