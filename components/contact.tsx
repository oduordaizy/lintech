import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
    return (
        <section id="contact" className="container py-20 md:py-28 px-4 md:px-8 max-w-screen-2xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Let's Work Together</h2>
                    <p className="text-muted-foreground text-base md:text-lg">
                        Ready to start your next project? Fill out the form below or send us an email, and we'll get back to you within 24 hours.
                    </p>
                    <div className="space-y-4 pt-4">
                        <div>
                            <h3 className="font-semibold mb-1">Email Us</h3>
                            <p className="text-muted-foreground"> info@lintech.co.ke | oduordaizy@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Call Us</h3>
                            <p className="text-muted-foreground">+254 797 967 839</p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">Visit Us</h3>
                            <p className="text-muted-foreground">Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>

                <div className="bg-card border rounded-2xl p-8 shadow-sm">
                    <form className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="Project inquiry" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea className="min-h-[120px]" id="message" placeholder="Tell us about your project..." />
                        </div>
                        <Button size="lg" className="w-full">Send Message</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
