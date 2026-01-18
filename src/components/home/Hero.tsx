
"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2000&auto=format&fit=crop", // Greenhouse
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2000&auto=format&fit=crop", // Garden
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2000&auto=format&fit=crop", // Plants
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop"  // Forest
];

export const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-text-char",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 1,
                    ease: "power4.out",
                    delay: 0.5,
                }
            );

            gsap.fromTo(
                ".hero-subtitle",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: "power2.out" }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Split text into characters for animation
    const title = "Plants Are Earth's Poetry";
    const chars = title.split("").map((char, index) => (
        <span key={index} className="hero-text-char inline-block whitespace-pre">
            {char}
        </span>
    ));

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
            {/* Background Slider */}
            {images.map((src, index) => (
                <div
                    key={src}
                    className={cn(
                        "absolute inset-0 transition-opacity duration-[2000ms] ease-in-out",
                        index === currentImage ? "opacity-60" : "opacity-0"
                    )}
                >
                    <Image
                        src={src}
                        alt="Hero Background"
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-outfit text-white tracking-tight overflow-hidden">
                    {chars}
                </h1>
                <p className="hero-subtitle mt-6 text-xl md:text-2xl text-stone-200 max-w-2xl font-light">
                    Cultivating nature's finest to transform your space into a living sanctuary.
                </p>

                <div className="hero-subtitle mt-12 flex gap-6">
                    <button className="px-8 py-4 bg-white text-green-900 rounded-full font-bold hover:bg-stone-100 transition-colors uppercase tracking-widest text-sm">
                        Explore Collection
                    </button>
                    <button className="px-8 py-4 border border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors uppercase tracking-widest text-sm">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </div>
        </div>
    );
};
