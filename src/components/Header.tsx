"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="font-heading text-2xl font-bold text-primary tracking-wide group-hover:text-primary-dark transition-colors">
              Esthetics
            </span>
            <span className="font-heading text-sm text-accent/70 -mt-1 tracking-[0.2em] uppercase">
              by Erika Hawthorne
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 hover:text-primary ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-accent/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="tel:+14177662102"
              className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-accent hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-highlight/50 animate-slide-down">
          <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 text-base font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-secondary"
                    : "text-accent/80 hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-3 bg-primary text-white text-center py-3 rounded-full font-semibold tracking-wide uppercase hover:bg-primary-dark transition-colors"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
