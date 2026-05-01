import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navbar() {
    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/projects", label: "Projects" },
        { href: "/pricing", label: "Pricing" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="bg-white/80 backdrop-blur-xl max-w-5xl w-full rounded-2xl px-6 py-3 flex items-center justify-between border border-white/20 shadow-2xl shadow-navy/10">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-navy flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors">
                        <Image src="/logo.png" alt="Logo" width={32} height={32} className="object-contain" />
                    </div>
                    <span className="font-bold text-navy tracking-tight text-lg hidden sm:block">Lintech</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-sm font-semibold text-navy/70 hover:text-navy transition-colors group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button size="sm" variant="gold" className="rounded-full shadow-gold/20">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-navy/5">
                                <Menu className="h-6 w-6 text-navy" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>


                        <SheetContent side="right" className="bg-navy text-mist-white border-white/10">
                            <div className="flex flex-col space-y-6 mt-12">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-2xl font-bold tracking-tight hover:text-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-8">
                                    <Button size="lg" variant="gold" className="w-full rounded-xl">
                                        Contact Us
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>
    )
}

