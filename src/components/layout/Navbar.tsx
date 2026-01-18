
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-green-700 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-outfit font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
                <span className="font-outfit font-bold text-xl leading-none tracking-tight text-green-900 group-hover:text-green-700 transition-colors">
                    MVB
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] font-medium text-stone-500 uppercase group-hover:text-green-600 transition-colors">
                    Nursery
                </span>
            </div>
        </Link>
    );
};

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-6 px-4 md:px-12",
                scrolled && "bg-white/80 backdrop-blur-md shadow-sm py-4"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-medium text-stone-600 hover:text-green-700 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <button className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition-colors shadow-lg shadow-green-700/20 active:scale-95 duration-200">
                        Get a Quote
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
