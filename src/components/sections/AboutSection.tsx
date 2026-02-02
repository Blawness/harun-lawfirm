"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import { Scale, Users, Award, Target } from "lucide-react";

const stats = [
    { icon: Scale, value: "500+", label: "Kasus Ditangani", description: "Berbagai bidang hukum" },
    { icon: Users, value: "50+", label: "Klien Korporat", description: "Perusahaan nasional & multinasional" },
    { icon: Award, value: "15+", label: "Tahun Pengalaman", description: "Sejak 2008" },
    { icon: Target, value: "98%", label: "Tingkat Keberhasilan", description: "Kepuasan klien" },
];

const values = [
    {
        title: "Integritas",
        description: "Kami menjunjung tinggi kejujuran dan etika profesi dalam setiap layanan hukum yang kami berikan.",
    },
    {
        title: "Profesionalisme",
        description: "Tim kami terdiri dari advokat berpengalaman dengan keahlian di berbagai bidang hukum.",
    },
    {
        title: "Dedikasi",
        description: "Kami berkomitmen penuh untuk memperjuangkan hak dan kepentingan klien kami.",
    },
];

export function AboutSection() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section
            id="about"
            ref={ref}
            className="relative py-24 lg:py-32 bg-off-white overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-crimson/5 rounded-full blur-[100px]" />

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
                        Tentang Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-black mb-6">
                        Firma Hukum Terpercaya di Indonesia
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Harun Prayitno & Partners adalah firma hukum terkemuka yang didirikan dengan visi
                        untuk memberikan solusi hukum berkualitas tinggi kepada individu dan perusahaan.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    {/* Left - Story */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-deep-black mb-6">
                            Sejarah & Filosofi Kami
                        </h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                Didirikan pada tahun 2008 oleh Harun Prayitno, S.H., M.H., firma kami
                                berawal dari tekad untuk memberikan akses keadilan yang merata bagi
                                semua kalangan masyarakat.
                            </p>
                            <p>
                                Dengan pengalaman lebih dari 15 tahun, kami telah menangani berbagai
                                kasus hukum mulai dari sengketa perdata, pidana, hingga hukum korporasi
                                dan bisnis internasional.
                            </p>
                            <p>
                                Tim kami terdiri dari para advokat senior yang berpengalaman dan
                                berdedikasi tinggi untuk memperjuangkan kepentingan klien dengan
                                pendekatan yang strategis dan solusi yang efektif.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="mt-8 space-y-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    variants={staggerItem}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-crimson" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-deep-black">{value.title}</h4>
                                        <p className="text-sm text-muted-foreground">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Image/Visual */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gold/30 rounded-2xl" />

                            {/* Main visual */}
                            <div className="relative z-10 rounded-2xl overflow-hidden bg-gradient-to-br from-crimson to-crimson-dark p-8 lg:p-12 shadow-2xl">
                                <div className="text-white">
                                    <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
                                        <Scale className="w-10 h-10 text-gold" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4">
                                        &ldquo;Keadilan untuk Semua&rdquo;
                                    </h4>
                                    <p className="text-white/80 leading-relaxed">
                                        Kami percaya bahwa setiap orang berhak mendapatkan pembelaan
                                        hukum yang berkualitas. Komitmen ini yang mendorong kami untuk
                                        terus berkembang dan memberikan layanan terbaik.
                                    </p>
                                    <div className="mt-8 pt-6 border-t border-white/20">
                                        <p className="font-semibold">Harun Prayitno, S.H., M.H.</p>
                                        <p className="text-sm text-gold">Founder & Managing Partner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            variants={staggerItem}
                            transition={{ delay: 0.1 * index }}
                            className="relative group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-gold/30 hover:-translate-y-1">
                                <stat.icon className="w-8 h-8 text-gold mb-4" />
                                <div className="text-3xl font-bold text-crimson mb-1">{stat.value}</div>
                                <div className="font-semibold text-deep-black">{stat.label}</div>
                                <div className="text-sm text-muted-foreground mt-1">{stat.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
