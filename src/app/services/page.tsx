import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServicePageLayout from "@/components/ServicePageLayout";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Full esthetics service menu and pricing: Brazilian waxing, lash lifts, brow lamination, facials, dermaplaning, and more in Nixa, MO.",
};

const serviceCategories = [
  {
    title: "Waxing — Bikini & Brazilian",
    description:
      "Premium hard wax for a smooth, comfortable experience. Our waxing services are designed to minimize discomfort while delivering long-lasting, silky results.",
    image: "/images/service-wax.jpg",
    services: [
      {
        name: "Brazilian Wax",
        price: "$57",
        description: "Full removal, front to back. Premium hard wax for minimal discomfort.",
      },
      {
        name: "New Client Brazilian",
        price: "$40",
        description: "Special introductory rate for first-time Brazilian clients.",
      },
      {
        name: "Bikini Full",
        price: "$50",
        description: "Clean up along the bikini line and inner thigh for a neat, polished look.",
      },
      {
        name: "Bikini Brazilian Combo",
        price: "$95",
        description: "Full bikini and Brazilian treatment combo for complete smoothness.",
      },
    ],
  },
  {
    title: "Lash Services",
    description:
      "Wake up with beautiful, lifted lashes every morning. Our lash services enhance your natural lashes for weeks of effortless beauty.",
    image: "/images/service-lash.jpg",
    services: [
      {
        name: "Lash Lift",
        price: "$55",
        description: "Semi-permanent curl that lifts your natural lashes. Lasts 6-8 weeks.",
      },
      {
        name: "Lash Lift + Tint",
        price: "$70",
        description: "Lift plus darkening tint for a mascara-like effect without the makeup.",
      },
      {
        name: "Lash Tint",
        price: "$25",
        description: "Darken your natural lashes for a subtle, defined look.",
      },
      {
        name: "Lash + Brow Combo",
        price: "$125",
        description: "Complete eye transformation: lash lift & tint plus brow lamination.",
      },
    ],
  },
  {
    title: "Brow Services",
    description:
      "Achieve those perfectly shaped, fluffy brows. From precision waxing to lamination, we'll frame your face beautifully.",
    image: "/images/service-brow.jpg",
    services: [
      {
        name: "Brow Wax",
        price: "$18",
        description: "Precision shaping to complement your face structure.",
      },
      {
        name: "Brow Lamination",
        price: "$55",
        description: "Fluffy, feathered brows that stay in place. Lasts 4-6 weeks.",
      },
      {
        name: "Brow Lamination + Wax + Tint",
        price: "$70",
        description: "The complete brow transformation: lamination, shaping, and color.",
      },
      {
        name: "Brow Tint",
        price: "$20",
        description: "Semi-permanent color to fill in sparse areas and add definition.",
      },
    ],
  },
  {
    title: "Face & Skin Treatments",
    description:
      "Customized treatments targeting your unique skin concerns. From deep-cleansing facials to advanced dermaplaning and chemical peels.",
    image: "/images/service-facial.jpg",
    services: [
      {
        name: "Facial",
        price: "$85+",
        description: "Customized facial with deep cleansing, exfoliation, and hydration.",
      },
      {
        name: "Dermaplaning",
        price: "$95",
        description: "Remove dead skin and peach fuzz for ultra-smooth, glowing skin.",
      },
      {
        name: "Chemical Peel",
        price: "$125+",
        description: "Professional-grade peels to address hyperpigmentation, acne, and aging.",
      },
      {
        name: "Lip Blush",
        price: "$200",
        description: "Semi-permanent lip color for a natural, flushed look that lasts.",
      },
    ],
  },
];

const additionalServices = [
  { name: "Full Face Wax", price: "$50", description: "Brows, lip, chin, and sideburns" },
  { name: "Upper Lip", price: "$15", description: "Quick and gentle lip wax" },
  { name: "Chin", price: "$15", description: "Precise chin hair removal" },
  { name: "Side of Face", price: "$25", description: "Sideburn and cheek area" },
  { name: "Full Arm", price: "$55", description: "Wrist to shoulder" },
  { name: "Half Arm", price: "$35", description: "Elbow to wrist or elbow to shoulder" },
  { name: "Underarm Wax", price: "$25", description: "Smooth underarms for weeks" },
  { name: "Underarm + Full Arm", price: "$75", description: "Complete arm package" },
  { name: "Full Leg", price: "$80", description: "Toes to hip" },
  { name: "Half Leg", price: "$50", description: "Knee up or knee down" },
  { name: "Feet/Ankles", price: "$30", description: "Toe and ankle area" },
  { name: "Chest", price: "$45", description: "Full chest wax" },
  { name: "Back", price: "$65", description: "Full back wax" },
  { name: "Stomach", price: "$30", description: "Stomach and naval area" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Services & Pricing"
        subtitle="Explore our full menu of premium esthetics services, each delivered with care and attention to detail."
      />

      {/* Zigzag Service Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicePageLayout sections={serviceCategories} />
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              More Options
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent mt-3">
              Additional Services
            </h2>
            <p className="mt-4 text-accent/60 leading-relaxed">
              We offer a wide range of body waxing and treatments. 
              Don&apos;t see what you need? Just ask!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl p-6 border border-highlight/30 hover:border-primary/20 hover:shadow-md transition-all duration-200 flex items-start justify-between gap-4"
              >
                <div>
                  <h4 className="font-semibold text-accent">{service.name}</h4>
                  <p className="text-accent/50 text-sm mt-1">
                    {service.description}
                  </p>
                </div>
                <span className="font-heading text-lg font-bold text-primary whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            ))}
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
            Choose your service and pick a time that works for you.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            Book Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
