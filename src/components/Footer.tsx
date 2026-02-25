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
    <footer className="bg-brown-dark text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-heading text-3xl text-cream">
                Esthetics
              </h3>
              <p className="text-cream/50 text-sm tracking-[0.15em] -mt-0.5">
                by Erika Hawthorne
              </p>
            </Link>
            <p className="mt-5 text-cream/60 text-sm leading-relaxed">
              Licensed esthetician in Nixa, MO. Paul Mitchell trained,
              dedicated to helping you glow from within.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/esthetics.byerika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/estheticsbyerika"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="mailto:hello@estheticsbyerika.com"
                className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-brown-dark transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-cream mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-cream mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-cream/60 text-sm">
                  1868 N Deffer Dr Suite 7
                  <br />
                  Nixa, MO 65714
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a
                  href="tel:+14177662102"
                  className="text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  (417) 766-2102
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href="mailto:hello@estheticsbyerika.com"
                  className="text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  hello@estheticsbyerika.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl text-cream mb-5">
              Hours
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gold shrink-0 mt-0.5" />
                <div className="text-cream/60 text-sm">
                  <p>Monday – Friday: 9am – 5pm</p>
                  <p>Saturday: 9am – 2pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/booking"
                className="inline-block bg-gold text-brown-dark px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Esthetics By Erika Hawthorne LLC. All
            rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Nixa, MO · Licensed Esthetician
          </p>
        </div>
      </div>
    </footer>
  );
}
