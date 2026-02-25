import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Instagram,
  Facebook,
  ArrowRight,
  Navigation,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Esthetics By Erika Hawthorne in Nixa, MO. Call (417) 766-2102, visit us at 1868 N Deffer Dr Suite 7, or book online.",
};

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: "Visit Us",
    details: ["1868 N Deffer Dr Suite 7", "Nixa, MO 65714"],
    action: {
      label: "Get Directions",
      href: "https://maps.google.com/?q=1868+N+Deffer+Dr+Suite+7+Nixa+MO+65714",
    },
  },
  {
    icon: <Phone size={24} />,
    title: "Call or Text",
    details: ["(417) 766-2102"],
    action: {
      label: "Call Now",
      href: "tel:+14177662102",
    },
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: ["hello@estheticsbyerika.com"],
    action: {
      label: "Send Email",
      href: "mailto:hello@estheticsbyerika.com",
    },
  },
  {
    icon: <Clock size={24} />,
    title: "Hours",
    details: [
      "Mon – Fri: 9:00 AM – 5:00 PM",
      "Saturday: 9:00 AM – 2:00 PM",
      "Sunday: Closed",
    ],
    action: {
      label: "Book Appointment",
      href: "/booking",
    },
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Get In Touch"
        subtitle="We'd love to hear from you. Reach out to book an appointment or ask any questions."
      />

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-secondary rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-5">
                  {info.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-accent mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-5">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-accent/60 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action.href.startsWith("/") ? (
                  <Link
                    href={info.action.href}
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all duration-200"
                  >
                    {info.action.label}
                    <ArrowRight size={14} />
                  </Link>
                ) : (
                  <a
                    href={info.action.href}
                    target={info.action.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all duration-200"
                  >
                    {info.action.label}
                    <ArrowRight size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Details */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Map Placeholder */}
            <div className="w-full lg:w-2/3">
              <div className="bg-highlight/50 rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-full min-h-[400px] flex items-center justify-center relative">
                {/* Embedded Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.7!2d-93.29!3d36.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuOTkwMCwtOTMuMjkwMA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                  title="Esthetics By Erika location"
                />
              </div>
            </div>

            {/* Info sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-accent mb-4">
                  Finding Us
                </h3>
                <p className="text-accent/60 leading-relaxed">
                  We&apos;re located in the professional suites at 1868 N Deffer Dr 
                  in Nixa. Look for Suite 7 — there&apos;s plenty of free parking 
                  right outside.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation size={18} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-accent text-sm">From Springfield</p>
                    <p className="text-accent/50 text-sm">
                      Take US-65 South to the Nixa exit. Head west on N Deffer Dr. 
                      We&apos;re on the right, about 1 mile from the highway.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car size={18} className="text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-accent text-sm">Parking</p>
                    <p className="text-accent/50 text-sm">
                      Free parking available directly in front of the building. 
                      Easy access, no parking garages or meters.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h4 className="font-semibold text-accent mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/esthetics.byerika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm font-medium text-accent/70 hover:text-primary hover:shadow-md transition-all duration-200"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/estheticsbyerika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm font-medium text-accent/70 hover:text-primary hover:shadow-md transition-all duration-200"
                  >
                    <Facebook size={18} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Ready to Book?
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Skip the phone tag — book your appointment online in just a few clicks.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            Book Online Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
