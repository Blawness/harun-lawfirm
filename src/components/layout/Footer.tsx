"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
    layanan: [
        { name: "Hukum Korporasi", href: "#services" },
        { name: "Litigasi", href: "#services" },
        { name: "Hukum Properti", href: "#services" },
        { name: "Hukum Keluarga", href: "#services" },
        { name: "Hukum Pidana", href: "#services" },
        { name: "Konsultasi Bisnis", href: "#services" },
    ],
    perusahaan: [
        { name: "Tentang Kami", href: "#about" },
        { name: "Tim Kami", href: "#team" },
        { name: "Testimoni", href: "#testimonials" },
        { name: "Karir", href: "#" },
        { name: "Blog", href: "#" },
    ],
    legal: [
        { name: "Kebijakan Privasi", href: "#" },
        { name: "Syarat & Ketentuan", href: "#" },
        { name: "Disclaimer", href: "#" },
    ],
};

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
];

export function Footer() {
    return (
        <footer className="bg-deep-black text-white">
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <svg
                                    width="48"
                                    height="48"
                                    viewBox="0 0 100 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-gold"
                                >
                                    <path d="M50 8 L55 15 L50 12 L45 15 Z" fill="currentColor" />
                                    <rect x="20" y="28" width="60" height="3" fill="currentColor" />
                                    <path d="M15 35 L25 35 L28 55 L12 55 Z" fill="currentColor" />
                                    <line x1="20" y1="28" x2="20" y2="35" stroke="currentColor" strokeWidth="2" />
                                    <path d="M75 35 L85 35 L88 55 L72 55 Z" fill="currentColor" />
                                    <line x1="80" y1="28" x2="80" y2="35" stroke="currentColor" strokeWidth="2" />
                                    <rect x="47" y="18" width="6" height="70" fill="white" />
                                    <rect x="35" y="50" width="30" height="5" fill="white" />
                                    <rect x="35" y="35" width="6" height="50" fill="white" />
                                    <rect x="59" y="35" width="6" height="50" fill="white" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight text-white">
                                    HARUN PRAYITNO
                                </span>
                                <span className="text-xs font-medium tracking-widest text-gold">
                                    & PARTNERS
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                            Firma hukum terpercaya dengan pengalaman lebih dari 15 tahun dalam memberikan solusi hukum terbaik untuk kebutuhan personal dan bisnis Anda.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm text-white/70">
                                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                                <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/70">
                                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                                <span>+62 21 1234 5678</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/70">
                                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                                <span>info@harunlaw.co.id</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/70">
                                <Clock className="h-4 w-4 text-gold flex-shrink-0" />
                                <span>Senin - Jumat: 08:00 - 17:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                            Layanan
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.layanan.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-gold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                            Perusahaan
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-gold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white/70 hover:text-gold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                                Ikuti Kami
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="p-2 rounded-lg bg-white/5 hover:bg-gold/20 transition-colors group"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="h-5 w-5 text-white/70 group-hover:text-gold transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/50">
                            © {new Date().getFullYear()} Harun Prayitno & Partners. Hak Cipta Dilindungi.
                        </p>
                        <p className="text-sm text-white/50">
                            Terdaftar di Perhimpunan Advokat Indonesia (PERADI)
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
