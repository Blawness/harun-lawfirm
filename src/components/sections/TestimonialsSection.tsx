"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Harun Prayitno & Partners membantu kami menyelesaikan sengketa bisnis yang rumit dengan hasil yang memuaskan. Profesionalisme dan dedikasi tim mereka luar biasa.",
        name: "Budi Santoso",
        title: "CEO, PT Maju Bersama",
    },
    {
        quote: "Saya sangat puas dengan layanan konsultasi hukum yang diberikan. Mereka menjelaskan setiap aspek hukum dengan jelas dan memberikan solusi yang tepat.",
        name: "Siti Rahayu",
        title: "Direktur, CV Cahaya Abadi",
    },
    {
        quote: "Tim HPP sangat membantu dalam proses akuisisi perusahaan kami. Ketelitian dan pengalaman mereka dalam hukum korporasi tidak diragukan lagi.",
        name: "Ahmad Hidayat",
        title: "Managing Director, PT Global Investama",
    },
    {
        quote: "Dalam kasus perceraian saya yang sensitif, HPP memberikan pendampingan hukum dengan empati dan profesionalisme tinggi. Terima kasih atas dukungannya.",
        name: "Diana Putri",
        title: "Pengusaha",
    },
    {
        quote: "Kami telah bekerja sama dengan HPP selama 5 tahun untuk semua kebutuhan hukum perusahaan. Respons cepat dan solusi yang selalu tepat sasaran.",
        name: "Irwan Wijaya",
        title: "Legal Manager, PT Teknologi Nusantara",
    },
    {
        quote: "HPP membantu kami dalam pengurusan sertifikat tanah yang bermasalah. Proses yang tadinya rumit menjadi lancar berkat bantuan mereka.",
        name: "Rina Marlina",
        title: "Pemilik Properti",
    },
];

export function TestimonialsSection() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section
            id="testimonials"
            ref={ref}
            className="relative py-24 lg:py-32 bg-off-white overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-[100px]" />

            <div className="relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 px-4 sm:px-6 lg:px-8"
                >
                    <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                        Testimoni
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-black mb-6">
                        Apa Kata Klien Kami
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Kepuasan klien adalah prioritas utama kami. Berikut adalah testimoni
                        dari beberapa klien yang telah mempercayakan kebutuhan hukum mereka kepada kami.
                    </p>
                </motion.div>

                {/* Rating Summary */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center items-center gap-8 mb-12 px-4"
                >
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                            ))}
                        </div>
                        <p className="text-3xl font-bold text-deep-black">4.9/5.0</p>
                        <p className="text-sm text-muted-foreground">Berdasarkan 200+ review</p>
                    </div>
                </motion.div>

                {/* Testimonials Carousel */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="slow"
                        pauseOnHover={true}
                        className="mx-auto"
                    />
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="mx-auto max-w-4xl">
                        <p className="text-center text-sm text-muted-foreground mb-6">
                            Dipercaya oleh perusahaan dan institusi terkemuka
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
                            {/* Placeholder for client logos */}
                            {["Bank Indonesia", "Pertamina", "Telkom", "PLN", "Garuda Indonesia"].map((name) => (
                                <div
                                    key={name}
                                    className="text-lg font-bold text-deep-black/40"
                                >
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
