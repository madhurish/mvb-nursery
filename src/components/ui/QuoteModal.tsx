"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "landscaping",
        requirements: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        onClose();
        alert("Thank you! We will get back to you shortly.");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
                    >
                        {/* Header */}
                        <div className="bg-green-900 p-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold font-outfit text-white">Get a Quote</h3>
                                <p className="text-green-200 text-sm mt-1">Tell us about your green dreams.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <div className="p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-stone-700">Phone</label>
                                        <input
                                            type="tel"
                                            required
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                            placeholder="Mobile number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Project Type</label>
                                    <select
                                        value={formState.projectType}
                                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all"
                                    >
                                        <option value="landscaping">Landscaping Project</option>
                                        <option value="bulk-order">Bulk Plant Order</option>
                                        <option value="maintenance">Garden Maintenance</option>
                                        <option value="corporate">Corporate Gifting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-stone-700">Requirements</label>
                                    <textarea
                                        rows={4}
                                        value={formState.requirements}
                                        onChange={(e) => setFormState({ ...formState, requirements: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all resize-none"
                                        placeholder="Tell us more about what you need..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2 mt-2"
                                >
                                    Submit Request
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
