import { Monitor } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="border-t bg-muted/20">
            <div className="container py-12 px-4 md:px-8 max-w-screen-2xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center space-x-2">
                        <Image src="/logo.png" alt="Logo" width={40} height={40} />
                        <span className="font-bold text-lg">LinTech Web Solutions</span>
                    </div>
                    <div className="text-sm text-muted-foreground text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} LinTech Web Solutions. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
