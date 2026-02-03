import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harun Prayitno & Partners | Firma Hukum Terpercaya",
  description: "Harun Prayitno & Partners adalah firma hukum terkemuka di Indonesia yang menyediakan layanan hukum profesional untuk kebutuhan personal dan bisnis Anda. Konsultasi gratis tersedia.",
  keywords: ["firma hukum", "pengacara", "advokat", "konsultasi hukum", "hukum korporasi", "litigasi", "Jakarta"],
  authors: [{ name: "Harun Prayitno & Partners" }],
  openGraph: {
    title: "Harun Prayitno & Partners | Firma Hukum Terpercaya",
    description: "Firma hukum terkemuka di Indonesia dengan pengalaman lebih dari 15 tahun.",
    url: "https://harunlaw.co.id",
    siteName: "Harun Prayitno & Partners",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harun Prayitno & Partners | Firma Hukum Terpercaya",
    description: "Firma hukum terkemuka di Indonesia dengan pengalaman lebih dari 15 tahun.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
