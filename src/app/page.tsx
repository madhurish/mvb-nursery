
"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/Marquee";
import Link from "next/link";

const features = [
  {
    title: "Avenues",
    image: "/images/feature-avenues.jpg",
    description: "Line your pathways with majestic trees that create a welcoming canopy."
  },
  {
    title: "Bamboos",
    image: "/images/feature-bamboos.jpg",
    description: "Add a touch of zen and rapid greenery with our bamboo collection."
  },
  {
    title: "Palms",
    image: "/images/feature-palms.jpg",
    description: "Bring the tropical vibe to your landscape with our exotic palms."
  },
  {
    title: "Bonsai",
    image: "/images/feature-bonsai.jpg",
    description: "Masterpieces of patience and art, perfect for your collection."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <Marquee text="Planting Dreams, Growing Future  •  Kadiyam's Finest Nursery  •  Exotic & Native Plants  • " className="py-2" speed={0.35} />

      {/* Introduction Teaser */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit text-green-900 leading-tight">
              Where Nature Meets <span className="text-green-600">Nurture</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              At MVB Nursery, we believe that every plant has a story. With over 25 years of expertise, we have been cultivating not just plants, but relationships with nature enthusiasts across India.
            </p>
            <Link href="/about">
              <button className="text-green-700 font-bold border-b-2 border-green-700 pb-1 hover:text-green-900 hover:border-green-900 transition-colors mt-4">
                Read Our Story
              </button>
            </Link>
          </div>
          <div className="relative h-[500px] bg-green-100 rounded-2xl overflow-hidden group">
            <Image
              src="/images/about-mvb.jpg"
              alt="About MVB Nursery"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </section>

      {/* Featured Collection Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-4xl font-bold font-outfit text-green-900 mb-4">Our Featured Collection</h2>
          <p className="text-stone-500 max-w-2xl mx-auto mb-8">
            Explore our diverse range of plants, handpicked to suit every aesthetic and environment.
          </p>
          <Link href="/gallery" className="inline-block border border-green-700 text-green-700 font-medium px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition-colors">
            View Full Gallery
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Link href="/gallery" key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[300px] mb-4 overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold border border-white px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-outfit text-green-900">{feature.title}</h3>
                <p className="text-sm text-stone-500 mt-2">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA / Quote */}
      <section className="py-32 bg-green-900 relative overflow-hidden flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/pattern-bg.jpg" fill className="object-cover grayscale" alt="Pattern" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-8">
            &quot;To plant a garden is to believe in tomorrow.&quot;
          </h2>
          <p className="text-green-200 text-lg mb-12">
            Let us help you build your tomorrow, today.
          </p>
          <Link href="/contact">
            <button className="bg-white text-green-900 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-colors shadow-xl">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
