import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export function Navbar() {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#contact", label: "Contact" },
    ]

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <span className="font-bold sm:inline-block hidden">LinTech Web Solutions</span>
                    <span className="font-bold inline-block sm:hidden">LinTech Web Solutions</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Button size="sm">Get Started</Button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="-mr-2">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col space-y-4 mt-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-lg font-medium transition-colors hover:text-primary"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4">
                                    <Button size="lg" className="w-full">Get Started</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
