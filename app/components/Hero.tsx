"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    const phrases = [
        "AI Engineer",
        "Full-Stack Developer",
        "Automation Builder",
        "Design-Minded Engineer",
    ];

    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const { scrollY } = useScroll();
    const photoY = useTransform(scrollY, [0, 200], [0, -40]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

            {/* CONTENT GRID */}
            <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT BLOCK */}
                <div className="space-y-6">
                    <p className="text-gray-500 tracking-widest text-lg uppercase">
                        Hey There! 👋
                    </p>

                    <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
                        I AM{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-teal-300 to-indigo-400">
                            MAADHINI
                        </span>
                    </h1>

                    {/* ANIMATED ROLE TEXT */}
                    <div className="h-10 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentPhrase}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-2xl font-semibold text-purple-700/80 tracking-wide"
                            >
                                {phrases[currentPhrase]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <p className="text-lg text-gray-600/90 max-w-md leading-relaxed">
                        I build intelligent systems, beautiful interfaces, and automations that create real impact.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-4 pt-2">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            className="bg-gradient-to-r from-teal-400 to-purple-400 text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:opacity-90"
                        >
                            View Projects
                        </motion.a>

                        <a
                            href="#contact"
                            className="px-7 py-3 border border-purple-300 text-purple-700 rounded-lg font-semibold hover:bg-purple-50 transition"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-4 pt-6 text-center md:text-left">
                        <div>
                            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                                15+
                            </p>
                            <p className="text-gray-500 text-sm tracking-wide">Projects</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                                1.5 yrs
                            </p>
                            <p className="text-gray-500 text-sm tracking-wide">Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
                                200k+
                            </p>
                            <p className="text-gray-500 text-sm tracking-wide">Lines of Code</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE BLOCK */}
                <motion.div style={{ y: photoY }} className="relative flex justify-center md:justify-end">
                    <div className="absolute w-[450px] h-[520px] bg-black/5 blur-[80px] -z-10 rounded-3xl" />

                    <div className="w-[630px] md:w-[780px] lg:w-[920px]">
                        <Image
                            src="/m2.png"
                            alt="Maadhini"
                            width={620}
                            height={620}
                            className="rounded-xl object-contain"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
