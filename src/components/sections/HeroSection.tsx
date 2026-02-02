"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { fadeInUp, fadeInRight, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

export function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-crimson via-crimson-dark to-[#5a0a0f]" />

            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson/30 rounded-full blur-[150px]" />

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            variants={staggerItem}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            Pendekatan Hukum Modern & Profesional
                        </motion.div>

                        <motion.h1
                            variants={staggerItem}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Solusi Hukum{" "}
                            <span className="text-gold">Inovatif</span> untuk Masa Depan Anda
                        </motion.h1>

                        <motion.p
                            variants={staggerItem}
                            className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Kami hadir dengan semangat baru dan dedikasi tinggi untuk memberikan
                            layanan hukum berkualitas. Kepercayaan Anda adalah prioritas utama kami.
                        </motion.p>

                        <motion.div
                            variants={staggerItem}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button size="lg" className="group">
                                Hubungi Kami
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-crimson"
                            >
                                <Phone className="h-4 w-4" />
                                Konsultasi Gratis
                            </Button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={staggerItem}
                            className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
                        >
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold text-gold">100%</div>
                                <div className="text-sm text-white/60 mt-1">Komitmen Klien</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold text-gold">24/7</div>
                                <div className="text-sm text-white/60 mt-1">Siap Melayani</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-bold text-gold">Pro</div>
                                <div className="text-sm text-white/60 mt-1">Tim Berpengalaman</div>
                            </div>
                        </motion.div>
                    </motion.div>
                    {/* Right Content - Partner Image */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-8 -right-8 w-64 h-64 border-2 border-gold/30 rounded-2xl" />
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gold/10 rounded-2xl" />

                            {/* Image container */}
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center">
                                    {/* Placeholder for partner image */}
                                    <div className="text-center p-8">
                                        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-crimson/30 flex items-center justify-center mb-6">
                                            <svg
                                                width="80"
                                                height="80"
                                                viewBox="0 0 100 100"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-white"
                                            >
                                                <circle cx="50" cy="35" r="20" fill="currentColor" opacity="0.5" />
                                                <path d="M20 90 Q20 60 50 60 Q80 60 80 90" fill="currentColor" opacity="0.5" />
                                            </svg>
                                        </div>
                                        <p className="text-white/70 text-sm">
                                            Harun Prayitno, S.H., M.H.
                                        </p>
                                        <p className="text-gold text-xs mt-1">
                                            Managing Partner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 rounded-full bg-white/50" />
                </motion.div>
            </motion.div>
        </section>
    );
}
