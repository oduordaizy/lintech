import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Features from "@/components/features";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our range of web design, development, and SEO services tailored for businesses in Kenya.",
};

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Features />
            </main>
            <Footer />
        </>
    );
}
