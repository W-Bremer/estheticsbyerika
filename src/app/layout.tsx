import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
