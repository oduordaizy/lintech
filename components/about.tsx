import Image from "next/image"

export function About() {
    const stats = [
        { value: "8+", label: "Years in business" },
        { value: "120+", label: "Projects delivered" },
        { value: "94%", label: "Client retention" },
    ]

    const pillars = [
        {
            number: "01",
            title: "Digital Architecture",
            body: "We don't build websites. We engineer digital systems — scalable, performant, and built to grow with your business.",
        },
        {
            number: "02",
            title: "Design with Intent",
            body: "Every pixel serves a purpose. We obsess over the details that turn good products into exceptional ones.",
        },
        {
            number: "03",
            title: "Long-term Partnership",
            body: "We measure success in years, not sprints. Transparency and reliability are the foundation of everything we do.",
        },
    ]

    return (
        <section
            id="about"
            className="relative py-24 md:py-36 overflow-hidden bg-[#F6F3EE]"
        >
            {/* Subtle grain texture overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "160px",
                }}
            />

            <div className="container max-w-screen-xl px-6 md:px-12 mx-auto">

                {/* Top label */}
                <div className="flex items-center gap-3 mb-16 md:mb-20">
                    <div className="w-8 h-px bg-[#1E1410]" />
                    <span
                        className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#9A8E82]"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                        About LinTech
                    </span>
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">

                    {/* Left: Image + stats */}
                    <div className="space-y-8">
                        {/* Image */}
                        <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden">
                            <Image
                                src="/about.jpg"
                                alt="LinTech team at work"
                                fill
                                className="object-cover"
                            />
                            {/* Warm tone overlay */}
                            <div className="absolute inset-0 bg-[#1E1410]/10 mix-blend-multiply" />

                            {/* Corner label */}
                            <div className="absolute bottom-5 left-5 bg-[#F6F3EE]/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                                <p
                                    className="text-[10px] tracking-[0.15em] uppercase text-[#9A8E82]"
                                    style={{ fontFamily: "'DM Mono', monospace" }}
                                >
                                    Est. 2016 · Nairobi
                                </p>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-px bg-[#E0D9D0] rounded-xl overflow-hidden">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="bg-[#F6F3EE] px-4 py-5 text-center"
                                >
                                    <p
                                        className="text-2xl md:text-3xl font-semibold text-[#1E1410] tracking-tight mb-1"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {s.value}
                                    </p>
                                    <p
                                        className="text-[10px] tracking-[0.12em] uppercase text-[#9A8E82]"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {s.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:pt-2 space-y-12">

                        {/* Headline */}
                        <div className="space-y-6">
                            <h2
                                className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-[#1E1410] leading-[1.1] tracking-tight"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            >
                                We are digital{" "}
                                <span className="italic font-normal">architects,</span>
                                <br />not just developers.
                            </h2>

                            <p
                                className="text-[#9A8E82] text-base md:text-lg leading-relaxed max-w-md"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Founded on a belief that great software is as much about
                                craft as it is about code — LinTech helps ambitious businesses
                                turn complex ideas into elegant digital products.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-[#E0D9D0]" />

                        {/* Pillars */}
                        <div className="space-y-0 divide-y divide-[#E0D9D0]">
                            {pillars.map((p) => (
                                <div
                                    key={p.number}
                                    className="group grid grid-cols-[2.5rem_1fr] gap-5 py-6 cursor-default"
                                >
                                    <span
                                        className="text-[11px] text-[#C4B8A8] mt-0.5 tabular-nums"
                                        style={{ fontFamily: "'DM Mono', monospace" }}
                                    >
                                        {p.number}
                                    </span>
                                    <div className="space-y-1.5">
                                        <h3
                                            className="text-[#1E1410] font-medium text-base tracking-tight group-hover:text-[#5C3A20] transition-colors duration-200"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {p.title}
                                        </h3>
                                        <p
                                            className="text-[#9A8E82] text-sm leading-relaxed"
                                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                                        >
                                            {p.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-6 pt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-[#1E1410] text-[#F6F3EE] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#3A2820] transition-colors duration-200"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                Start a project
                                <span className="text-[#9A8E82]">→</span>
                            </a>
                            <a
                                href="#work"
                                className="text-sm text-[#9A8E82] border-b border-[#C4B8A8] pb-px hover:text-[#1E1410] hover:border-[#1E1410] transition-colors duration-200"
                                style={{ fontFamily: "'DM Sans', sans-serif" }}
                            >
                                View our work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}