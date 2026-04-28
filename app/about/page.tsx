import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Lintech Web Solutions, our mission, and our team of expert web developers in Kenya.",
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <About />
            </main>
            <Footer />
        </>
    );
}
