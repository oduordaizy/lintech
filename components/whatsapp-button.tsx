"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/254797967839?text=Hello%20Lintech%20Web%20Solutions%20"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/30"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="size-7" />
        </Link>
    );
}