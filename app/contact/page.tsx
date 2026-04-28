import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Lintech Web Solutions for premium web design and development services in Kenya.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Contact />
            </main>
            <Footer />
        </>
    );
}
