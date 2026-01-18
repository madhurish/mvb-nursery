"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Added missing import
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar />

            <section className="relative h-[40vh] bg-green-900 flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
                    alt="Contact Us"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-4">Get in Touch</h1>
                    <p className="text-green-100 text-lg">We&apos;d love to hear from you.</p>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold font-outfit text-green-900 mb-6">Visit Our Nursery</h2>
                            <p className="text-stone-600 mb-8">
                                Come see our collection in person. We are open from 8:00 AM to 6:00 PM, Monday through Saturday.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-green-900">Address</h3>
                                <p className="text-stone-600">Kadiyapulanka, Kadiyam Mandal,<br />East Godavari, Andhra Pradesh.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-green-900">Phone</h3>
                                <p className="text-stone-600">+91 94 94 499 499</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-green-900">Email</h3>
                                <p className="text-stone-600">info@mvbnursery.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                        <h3 className="text-2xl font-bold font-outfit text-green-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 transition-all resize-none" placeholder="How can we help you?" />
                            </div>
                            <button type="button" className="w-full bg-green-700 text-white font-bold py-4 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
