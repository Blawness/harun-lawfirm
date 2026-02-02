"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/hooks/useScrollAnimation";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Sangat terkesan dengan pendekatan personal tim Harun Lawfirm. Mereka benar-benar mendengarkan dan memahami kebutuhan bisnis kami. Responsif dan profesional!",
        name: "Budi Santoso",
        title: "CEO, PT Maju Bersama",
    },
    {
        quote: "Pertama kali menggunakan jasa Harun Lawfirm untuk konsultasi kontrak bisnis. Penjelasannya sangat jelas dan solusinya tepat sasaran. Pasti akan kembali lagi!",
        name: "Siti Rahayu",
        title: "Direktur, CV Cahaya Abadi",
    },
    {
        quote: "Respons cepat dan tidak ribet! Yang saya suka dari Harun Lawfirm adalah mereka selalu available ketika dibutuhkan. Sangat membantu untuk startup seperti kami.",
        name: "Ahmad Hidayat",
        title: "Founder, Tech Startup",
    },
    {
        quote: "Tim Harun Lawfirm memberikan pendampingan yang sangat personal dalam kasus saya. Mereka benar-benar peduli dan tidak hanya mengejar target. Terima kasih!",
        name: "Diana Putri",
        title: "Pengusaha",
    },
    {
        quote: "Pendekatan modern dan efisien. Senang sekali menemukan firma hukum yang mengerti kebutuhan bisnis zaman sekarang. Highly recommended!",
        name: "Irwan Wijaya",
        title: "Business Owner",
    },
    {
        quote: "Harun Lawfirm membantu kami dengan masalah legalitas usaha. Prosesnya transparan dan biayanya reasonable. Tim yang jujur dan dapat dipercaya.",
        name: "Rina Marlina",
        title: "Pengusaha UMKM",
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
                        <p className="text-3xl font-bold text-deep-black">5.0/5.0</p>
                        <p className="text-sm text-muted-foreground">Rating dari klien awal kami</p>
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

                {/* Why Choose Us */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 px-4 sm:px-6 lg:px-8"
                >
                    <div className="mx-auto max-w-4xl">
                        <p className="text-center text-sm text-muted-foreground mb-6">
                            Mengapa klien memilih kami
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
                            {["Responsif 24/7", "Biaya Transparan", "Pendekatan Personal", "Tim Profesional", "Solusi Modern"].map((item) => (
                                <div
                                    key={item}
                                    className="text-sm font-medium text-deep-black/70 px-4 py-2 bg-white rounded-full shadow-sm border border-border"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
