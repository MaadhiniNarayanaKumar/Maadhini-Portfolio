"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 left-0 z-50 bg-white/70 backdrop-blur-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-800">

                {/* Logo - Now using Image */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Maadhini Studio Logo"
                        width={400}           // Adjust width as needed
                        height={48}           // Adjust height as needed
                        priority              // Optional: loads faster since it's in header
                        className="h-10 w-auto sm:h-12" // Responsive height, maintains aspect ratio
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-10 font-medium">
                    <Link href="#about" className="hover:text-purple-600 transition">
                        About
                    </Link>
                    <Link href="#projects" className="hover:text-purple-600 transition">
                        Projects
                    </Link>
                    <Link href="#skills" className="hover:text-purple-600 transition">
                        Skills
                    </Link>
                    <Link href="#contact" className="hover:text-purple-600 transition">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button (Mobile) */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 py-6">
                    <nav className="flex flex-col gap-6 px-6 font-medium text-lg">
                        <Link
                            href="#about"
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-600 transition"
                        >
                            About
                        </Link>
                        <Link
                            href="#projects"
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-600 transition"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#skills"
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-600 transition"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="hover:text-purple-600 transition"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}