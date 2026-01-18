
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

import { QuoteModal } from "@/components/ui/QuoteModal";
import { Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

export const Navbar = ({ darkText = false }: { darkText?: boolean }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    const textColorClass = scrolled
        ? "text-stone-600 hover:text-green-700"
        : darkText
            ? "text-stone-800 hover:text-green-900"
            : "text-white hover:text-green-200";

    const underlineClass = scrolled
        ? "bg-green-600"
        : darkText
            ? "bg-green-900"
            : "bg-white";

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-12 backdrop-blur-md",
                    scrolled ? "bg-white/90 shadow-sm" : "bg-white/10 border-b border-white/10"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Logo />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "font-medium transition-colors relative group",
                                    textColorClass
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                                    underlineClass
                                )} />
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsQuoteOpen(true)}
                            className="bg-green-700 text-white px-6 py-2 rounded-full font-medium hover:bg-green-800 transition-colors shadow-lg shadow-green-700/20 active:scale-95 duration-200"
                        >
                            Get a Quote
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-stone-800"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className={scrolled || darkText ? "text-stone-800" : "text-white"} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60] bg-white flex flex-col p-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Logo />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-stone-800 bg-stone-100 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold font-outfit text-stone-800 hover:text-green-700 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsQuoteOpen(true);
                                }}
                                className="bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-colors shadow-lg mt-4"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
};
