"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface GalleryItem {
    src: string;
    category: string;
    colSpan: string;
    rowSpan: string;
    description: string;
}

const galleryItems: GalleryItem[] = [
    {
        src: "/images/feature-avenues.jpg", // Avenues (Matches Home)
        category: "Avenues",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-2",
        description: "Transform roads and pathways into majestic green corridors. Our avenue trees are selected for their robust growth, canopy spread, and ability to provide ample shade and aesthetic appeal to any landscape."
    },
    {
        src: "/images/feature-bamboos.jpg", // Bamboos (Matches Home)
        category: "Bamboos",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        description: "Symbolizing strength and flexibility, our bamboo collection ranges from ornamental varieties to natural screening solutions. Perfect for adding a Zen touch or creating privacy with rapid green coverage."
    },
    {
        src: "/images/feature-palms.jpg", // Exotic Palms (Matches Home)
        category: "Exotic Palms",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2",
        description: "Bring the vacation vibe home with our diverse range of exotic palms. From fan palms to foxtails, these architectural plants add immediate tropical sophistication and drama to gardens and commercial spaces."
    },
    {
        src: "/images/feature-bonsai.jpg", // Bonsai (Matches Home)
        category: "Bonsai",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        description: "Living art forms that embody patience and dedication. Our curated bonsai collection features meticulously trained specimens that bring a sense of ancient wisdom and tranquility to your collection."
    },
    {
        src: "/images/gallery-fruit.jpg", // Fruit Plants
        category: "Fruit Plants",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        description: "Experience the joy of farm-to-table right in your backyard. We offer a wide variety of grafted fruit plants ensuring high yields and delicious, organic produce for your family."
    },
    {
        src: "/images/gallery-indoor.jpg", // Indoor Plants
        category: "Indoor Plants",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        description: "Breathe life into your interiors. Our indoor selection focuses on air-purifying and low-light tolerant plants that enhance mental well-being and add a vibrant touch of nature to your living spaces."
    },
    {
        src: "/images/gallery-succulents.jpg", // Succulents
        category: "Succulents",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        description: "Low on maintenance, high on charm. These hardy, water-wise plants come in fascinating shapes and colors, making them perfect for modern planters, terrariums, and busy lifestyles."
    }
];

export default function GalleryPage() {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar darkText={true} />

            <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold font-outfit text-green-900 mb-6"
                >
                    Our Living Gallery
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-stone-600 max-w-2xl mx-auto"
                >
                    Explore our diverse collection of flora, cultivated with care and ready to transform your space.
                </motion.p>
            </section>

            <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            layoutId={`card-${item.category}`}
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedItem(item)}
                            className={cn(
                                "relative rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow",
                                item.colSpan,
                                item.rowSpan
                            )}
                        >
                            <Image
                                src={item.src}
                                alt={item.category}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-white font-bold font-outfit text-xl">{item.category}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`card-${selectedItem.category}`}
                            className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors"
                            >
                                <X size={18} />
                            </button>

                            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                                <Image
                                    src={selectedItem.src}
                                    alt={selectedItem.category}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-bold font-outfit text-green-900 mb-4"
                                >
                                    {selectedItem.category}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-stone-600 leading-relaxed"
                                >
                                    {selectedItem.description}
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-6 self-start text-sm font-bold text-green-700 border-b border-green-700 pb-0.5 hover:text-green-900 hover:border-green-900 transition-colors"
                                >
                                    View Collection
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
