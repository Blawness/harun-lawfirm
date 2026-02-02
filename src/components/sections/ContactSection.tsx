"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, fadeInRight } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageCircle
} from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        label: "Telepon",
        value: "+62 21 1234 5678",
        href: "tel:+622112345678",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@harunlaw.co.id",
        href: "mailto:info@harunlaw.co.id",
    },
    {
        icon: MapPin,
        label: "Alamat",
        value: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
        href: "#",
    },
    {
        icon: Clock,
        label: "Jam Operasional",
        value: "Senin - Jumat: 08:00 - 17:00",
        href: "#",
    },
];

export function ContactSection() {
    const { ref, isInView } = useScrollAnimation();

    return (
        <section
            id="contact"
            ref={ref}
            className="relative py-24 lg:py-32 bg-white overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-crimson/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />

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
                        Hubungi Kami
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-black mb-6">
                        Konsultasikan Kebutuhan Hukum Anda
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Kami siap membantu Anda. Hubungi kami untuk konsultasi gratis
                        dan temukan solusi hukum terbaik untuk Anda.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left - Contact Form */}
                    <motion.div
                        variants={fadeInLeft}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-off-white rounded-2xl p-8 shadow-sm border border-border">
                            <h3 className="text-xl font-bold text-deep-black mb-6">
                                Kirim Pesan
                            </h3>

                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-deep-black mb-2">
                                            Nama Lengkap
                                        </label>
                                        <Input placeholder="Masukkan nama Anda" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-deep-black mb-2">
                                            No. Telepon
                                        </label>
                                        <Input placeholder="08xxxxxxxxxx" type="tel" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-deep-black mb-2">
                                        Email
                                    </label>
                                    <Input placeholder="email@contoh.com" type="email" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-deep-black mb-2">
                                        Subjek
                                    </label>
                                    <Input placeholder="Topik konsultasi" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-deep-black mb-2">
                                        Pesan
                                    </label>
                                    <Textarea
                                        placeholder="Jelaskan kebutuhan hukum Anda secara singkat..."
                                        className="min-h-[150px]"
                                    />
                                </div>

                                <Button size="lg" className="w-full">
                                    <Send className="w-4 h-4" />
                                    Kirim Pesan
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right - Contact Info */}
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col"
                    >
                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-off-white border border-border hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center flex-shrink-0 group-hover:bg-crimson/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-crimson" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {item.label}
                                        </p>
                                        <p className="text-deep-black font-semibold">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-gradient-to-br from-crimson to-crimson-dark rounded-2xl p-8 text-white mt-auto">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <MessageCircle className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold">Konsultasi Cepat</h4>
                                    <p className="text-white/70 text-sm">via WhatsApp</p>
                                </div>
                            </div>
                            <p className="text-white/80 text-sm mb-6">
                                Butuh respons cepat? Hubungi kami langsung melalui WhatsApp
                                untuk konsultasi awal gratis.
                            </p>
                            <Button
                                size="lg"
                                className="w-full bg-white text-crimson hover:bg-white/90 hover:text-crimson-dark"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Chat via WhatsApp
                            </Button>
                        </div>

                        {/* Map placeholder */}
                        <div className="mt-8 rounded-2xl overflow-hidden border border-border h-48 bg-muted">
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                                <MapPin className="w-5 h-5 mr-2" />
                                Peta Lokasi Kantor
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
