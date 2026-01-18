"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
    const stats = [
        { label: "Years of Experience", value: "25+" },
        { label: "Plant Varieties", value: "500+" },
        { label: "Satisfied Clients", value: "10k+" },
        { label: "Acres of Greenery", value: "50+" },
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/hero-garden.jpg"
                    alt="Green Nursery"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold font-outfit text-white mb-4"
                    >
                        Growing Green Futures
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-xl text-green-100 max-w-2xl mx-auto"
                    >
                        The story behind MVB Nursery and our passion for plants.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold font-outfit text-green-900">Rooted in Tradition</h2>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            What started as a small family passion has grown into one of the region&apos;s most respected nurseries. At MVB Nursery, we don&apos;t just sell plants; we cultivate life. Our journey began over two decades ago with a simple mission: to make high-quality, exotic, and native plants accessible to everyone.
                        </p>
                        <p className="text-lg text-stone-600 leading-relaxed">
                            Located in the fertile lands of Kadiyam, we combine traditional gardening wisdom with modern horticultural practices to ensure every sapling is robust, healthy, and ready to thrive in your garden.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/images/about-gardener.jpg"
                            alt="Gardener working"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-green-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.4 }}
                        >
                            <div className="text-4xl md:text-6xl font-bold font-outfit text-green-300 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-green-100 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-outfit text-green-900 mb-6">Our Philosophy</h2>
                <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                    We believe that <span className="text-green-600 font-bold">nature nurture</span> is a two-way street. By caring for plants, we care for our planet and our own well-being. Every plant that leaves our nursery is a promise of a greener, healthier tomorrow.
                </p>
            </section>

            <Footer />
        </main>
    );
}
