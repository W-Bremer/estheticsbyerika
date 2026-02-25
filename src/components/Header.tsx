"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-full border ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-beige/50"
            : "bg-cream/90 backdrop-blur-sm border-beige/30"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image 
              src="/images/logo.jpg" 
              alt="Esthetics By Erika" 
              width={44} 
              height={44}
              className="rounded-full object-cover border-2 border-white shadow-lg"
            />
            <span className="font-heading text-xl text-brown-dark group-hover:text-gold transition-colors">
              Esthetics
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-brown-dark/70 hover:text-brown-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/booking"
              className="hidden sm:inline-flex items-center justify-center bg-brown-dark text-cream px-6 py-2 rounded-full text-[13px] font-semibold tracking-wide hover:bg-brown transition-colors duration-200"
            >
              Book Now
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brown-dark hover:text-gold transition-colors rounded-full"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-6xl bg-white rounded-2xl border border-beige/50 shadow-xl animate-slide-down overflow-hidden">
          <nav className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 text-base font-medium rounded-xl transition-colors ${
                  pathname === link.href
                    ? "text-gold bg-cream"
                    : "text-brown-dark/80 hover:text-gold hover:bg-cream/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-2 bg-brown-dark text-cream text-center py-3 rounded-full font-semibold tracking-wide hover:bg-brown transition-colors"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
