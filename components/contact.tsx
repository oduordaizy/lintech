import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-mist-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy hidden lg:block -skew-x-6 translate-x-12"></div>
            
            <div className="container max-w-screen-2xl px-4 md:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-deep-blue/5 border border-deep-blue/10 text-deep-blue text-xs font-bold uppercase tracking-widest">
                                <span>Get in Touch</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-navy leading-tight">
                                Let's Build Something <br />
                                <span className="text-gradient-gold">Extraordinary</span>
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                                Ready to elevate your digital presence? We're here to turn your vision into a high-performance reality.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="flex items-center gap-4 md:gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-xl flex items-center justify-center border border-navy/5 group-hover:border-gold transition-colors">
                                    <div className="text-gold font-bold">@</div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-navy/40">Email Us</h3>
                                    <p className="text-navy font-bold">info@lintechwebsolutions.co.ke</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-white shadow-xl flex items-center justify-center border border-navy/5 group-hover:border-gold transition-colors">
                                    <div className="text-gold font-bold">P</div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-navy/40">Call Us</h3>
                                    <p className="text-navy font-bold">+254 797 967 839</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-navy p-6 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2rem] border-white/10 shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="first-name" className="text-mist-white/60 font-semibold text-xs uppercase tracking-wider">First name</Label>
                                    <Input id="first-name" placeholder="John" className="bg-white/5 border-white/10 text-mist-white placeholder:text-white/20 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="last-name" className="text-mist-white/60 font-semibold text-xs uppercase tracking-wider">Last name</Label>
                                    <Input id="last-name" placeholder="Doe" className="bg-white/5 border-white/10 text-mist-white placeholder:text-white/20 h-12" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-mist-white/60 font-semibold text-xs uppercase tracking-wider">Email</Label>
                                <Input id="email" type="email" placeholder="johndoe@gmail.com" className="bg-white/5 border-white/10 text-mist-white placeholder:text-white/20 h-12" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-mist-white/60 font-semibold text-xs uppercase tracking-wider">Project Brief</Label>
                                <Textarea className="min-h-[150px] bg-white/5 border-white/10 text-mist-white placeholder:text-white/20 pt-4" id="message" placeholder="Tell us about your goals..." />
                            </div>
                            <Button size="lg" variant="gold" className="w-full rounded-xl h-14 text-base">
                                Send Inquiry
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

