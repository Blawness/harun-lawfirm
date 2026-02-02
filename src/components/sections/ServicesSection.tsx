"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    Building2,
    Gavel,
    Home,
    ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Building2,
        title: "Hukum Korporasi",
        description: "Konsultasi dan pendampingan hukum untuk perusahaan, termasuk pendirian PT, merger & akuisisi, dan kepatuhan regulasi.",
        features: ["Pendirian Perusahaan", "M&A", "Corporate Governance"],
    },
    {
        icon: Gavel,
        title: "Litigasi",
        description: "Representasi hukum di pengadilan untuk sengketa perdata dan komersial dengan strategi litigasi yang efektif.",
        features: ["Sengketa Perdata", "Arbitrase", "Mediasi"],
    },
    {
        icon: Home,
        title: "Hukum Properti",
        description: "Layanan hukum properti mencakup jual beli, sewa, dan sengketa tanah dengan pendekatan komprehensif.",
        features: ["Jual Beli Properti", "Sertifikasi Tanah", "Sengketa Lahan"],
    },

];

export function ServicesSection() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section
            id="services"
            ref={ref}
            className="relative py-24 lg:py-32 bg-white overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                        Layanan Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-black mb-6">
                        Solusi Hukum Komprehensif
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Kami menyediakan berbagai layanan hukum profesional untuk memenuhi
                        kebutuhan personal dan bisnis Anda dengan standar tertinggi.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={staggerItem}
                            transition={{ delay: 0.1 * index }}
                        >
                            <AnimatedCard className="h-full">
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-crimson to-crimson-dark flex items-center justify-center mb-6 shadow-lg shadow-crimson/20">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-deep-black mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {service.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <Link
                                        href="#contact"
                                        className="inline-flex items-center text-sm font-semibold text-crimson hover:text-crimson-dark transition-colors group"
                                    >
                                        Pelajari Lebih Lanjut
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </AnimatedCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-crimson/5 to-gold/5 border border-border">
                        <p className="text-muted-foreground">
                            Tidak menemukan layanan yang Anda butuhkan?
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 text-crimson font-semibold hover:text-crimson-dark transition-colors"
                        >
                            Hubungi Kami
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
