import Link from "next/link";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Erika" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/booking", label: "Book Now" },
];

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-heading text-2xl font-bold text-primary">
                Esthetics
              </h3>
              <p className="font-heading text-sm text-white/60 tracking-[0.2em] uppercase -mt-1">
                by Erika Hawthorne
              </p>
            </Link>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">
              Licensed esthetician in Nixa, MO. Paul Mitchell trained, 
              dedicated to helping you glow from within.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/esthetics.byerika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/estheticsbyerika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:hello@estheticsbyerika.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  1868 N Deffer Dr Suite 7
                  <br />
                  Nixa, MO 65714
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="tel:+14177662102"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  (417) 766-2102
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:hello@estheticsbyerika.com"
                  className="text-white/70 hover:text-primary transition-colors text-sm"
                >
                  hello@estheticsbyerika.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <p>Monday – Friday: 9am – 5pm</p>
                  <p>Saturday: 9am – 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-block bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Esthetics By Erika Hawthorne LLC. All
            rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Nixa, MO · Licensed Esthetician
          </p>
        </div>
      </div>
    </footer>
  );
}
