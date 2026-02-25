import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Esthetics By Erika Hawthorne | Premium Esthetician in Nixa, MO",
    template: "%s | Esthetics By Erika Hawthorne",
  },
  description:
    "Licensed esthetician in Nixa, MO offering Brazilian waxing, lash lifts, brow lamination, facials, and more. Paul Mitchell trained. Book your glow up today!",
  keywords: [
    "esthetician Nixa MO",
    "Brazilian wax Springfield MO",
    "lash lift Nixa",
    "brow lamination near me",
    "waxing Nixa MO",
    "best esthetician Springfield MO",
    "facials Nixa MO",
    "dermaplaning Springfield MO",
  ],
  openGraph: {
    title: "Esthetics By Erika Hawthorne | Premium Esthetician in Nixa, MO",
    description:
      "Licensed esthetician offering Brazilian waxing, lash lifts, brow lamination, facials & more in Nixa, MO.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${plusJakarta.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
