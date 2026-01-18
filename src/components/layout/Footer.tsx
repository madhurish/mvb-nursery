
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-stone-950 text-stone-400 py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white font-outfit">MVB Nursery</h3>
                    <p className="text-sm leading-relaxed">
                        Established with a mission to bring nature closer to you. We provide premium quality plants and landscaping solutions.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/about" },
                            { name: "Our Collection", href: "/gallery" },
                            { name: "Contact", href: "/contact" }
                        ].map(item => (
                            <li key={item.name}>
                                <Link href={item.href} className="hover:text-green-500 transition-colors">{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Categories</h4>
                    <ul className="space-y-3">
                        {["Avenues", "Bamboos", "Bonsai", "Palms", "Fruit Plants"].map(item => (
                            <li key={item}>
                                <Link href="/gallery" className="hover:text-green-500 transition-colors">{item}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Contact Us</h4>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-green-600 shrink-0" />
                            <span>Kadiyapulanka, Kadiyam Mandal,<br />East Godavari, Andhra Pradesh.</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-green-600 shrink-0" />
                            <span>+91 94 94 499 499</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-green-600 shrink-0" />
                            <span>info@mvbnursery.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} MVB Nursery. All rights reserved.</p>
            </div>
        </footer>
    );
};
