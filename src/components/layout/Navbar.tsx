"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white backdrop-blur-xl shadow-lg shadow-black/10"
                        : "bg-gradient-to-b from-black/40 to-transparent"
                )}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-12 w-12">
                                <Image
                                    src={isScrolled ? "/images/logo-main.png" : "/images/logo-white.png"}
                                    alt="Harun Logo"
                                    fill
                                    className={cn(
                                        "object-contain",
                                        isScrolled && "mix-blend-multiply"
                                    )}
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "text-lg font-bold tracking-tight transition-colors",
                                    isScrolled ? "text-crimson" : "text-white drop-shadow-md"
                                )}>
                                    HARUN PRAYITNO
                                </span>
                                <span className={cn(
                                    "text-xs font-semibold tracking-widest transition-colors",
                                    isScrolled ? "text-gold" : "text-gold drop-shadow-md"
                                )}>
                                    & PARTNERS
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-semibold transition-all duration-200",
                                        isScrolled
                                            ? "text-deep-black hover:text-crimson"
                                            : "text-white drop-shadow-md hover:text-gold"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Button
                                variant={isScrolled ? "default" : "outline"}
                                className={cn(
                                    "font-semibold",
                                    !isScrolled && "border-2 border-white text-white hover:bg-white hover:text-crimson shadow-lg"
                                )}
                            >
                                <Phone className="h-4 w-4" />
                                Konsultasi Gratis
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-lg transition-colors",
                                isScrolled
                                    ? "text-foreground hover:bg-muted"
                                    : "text-white hover:bg-white/10"
                            )}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-0 top-20 z-40 lg:hidden"
                    >
                        <div className="bg-white/95 backdrop-blur-xl shadow-xl dark:bg-deep-black/95 border-b">
                            <nav className="mx-auto max-w-7xl px-4 py-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-3 text-lg font-medium text-foreground hover:text-crimson transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="pt-4 border-t">
                                    <Button className="w-full" size="lg">
                                        <Phone className="h-4 w-4" />
                                        Konsultasi Gratis
                                    </Button>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
