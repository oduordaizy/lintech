import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Portfolio from "@/components/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects",
    description: "Check out our portfolio of successful web development and design projects in Kenya.",
};

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="pt-20">
                <Portfolio />
            </main>
            <Footer />
        </>
    );
}
