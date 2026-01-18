"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    text: string;
    className?: string;
    speed?: number;
}

export const Marquee = ({ text, className, speed = 1 }: MarqueeProps) => {
    const firstText = useRef<HTMLDivElement>(null);
    const secondText = useRef<HTMLDivElement>(null);
    const slider = useRef<HTMLDivElement>(null);

    // Use a variable to track position
    let xPercent = 0;
    // Use a variable to track direction (1 for left, -1 for right)
    let direction = -1;

    useEffect(() => {
        requestAnimationFrame(animate);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const animate = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }
        if (xPercent > 0) {
            xPercent = -100;
        }

        if (firstText.current && secondText.current) {
            gsap.set(firstText.current, { xPercent: xPercent });
            gsap.set(secondText.current, { xPercent: xPercent });
        }

        xPercent += 0.05 * direction * speed;
        requestAnimationFrame(animate);
    };

    return (
        <div className={cn("relative flex overflow-hidden w-full bg-green-900 border-y border-white/10", className)}>
            <div ref={slider} className="relative whitespace-nowrap flex">
                <p ref={firstText} className="relative m-0 font-outfit text-white text-[4.8vw] font-bold uppercase mr-8">
                    {text} {text} {text}
                </p>
                <p ref={secondText} className="absolute left-full top-0 m-0 font-outfit text-white text-[4.8vw] font-bold uppercase mr-8">
                    {text} {text} {text}
                </p>
            </div>
        </div>
    );
};
