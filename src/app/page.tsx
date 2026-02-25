import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import {
  ArrowRight,
  Phone,
  MapPin,
  Star,
} from "lucide-react";

const featuredServices = [
  {
    title: "Brazilian Wax",
    price: "from $40",
    description:
      "Smooth, long-lasting results with premium hard wax. Minimal discomfort, maximum confidence.",
    image: "/images/erika/ig-13.jpg",
  },
  {
    title: "Lash Lift & Tint",
    price: "$70",
    description:
      "Wake up with beautifully curled, defined lashes that last 6-8 weeks. No extensions needed.",
    image: "/images/erika/ig-02.jpg",
  },
  {
    title: "Brow Lamination",
    price: "from $55",
    description:
      "Get those fluffy, feathered brows you've been dreaming of. Includes shaping and styling.",
    image: "/images/erika/ig-07.jpg",
  },
  {
    title: "Facial Treatment",
    price: "from $85",
    description:
      "Customized facials targeting your unique skin concerns. Deep cleansing, hydration, and glow.",
    image: "/images/hero-2.jpg",
  },
];

const reviews = [
  {
    name: "Ashley M.",
    review:
      "Erika is absolutely amazing! She made me feel so comfortable during my first Brazilian. The studio is clean and welcoming. I won't go anywhere else!",
    rating: 5,
    source: "Google" as const,
    date: "2 weeks ago",
  },
  {
    name: "Sarah T.",
    review:
      "Best lash lift I've ever had! Erika takes her time and really knows what she's doing. My lashes looked incredible for weeks.",
    rating: 5,
    source: "Google" as const,
    date: "1 month ago",
  },
  {
    name: "Jessica R.",
    review:
      "I've been going to Erika for brow lamination and I'm obsessed. She always makes them look perfect and natural. Highly recommend!",
    rating: 5,
    source: "Facebook" as const,
    date: "3 weeks ago",
  },
];

const galleryImages = [
  { src: "/images/erika/ig-14.jpg", alt: "Before & after brow wax + tint" },
  { src: "/images/erika/ig-04.jpg", alt: "Lash lift & brow lamination" },
  { src: "/images/erika/ig-11.jpg", alt: "Beautiful brows & lifted lashes" },
  { src: "/images/erika/ig-03.jpg", alt: "Lash lift before & after" },
  { src: "/images/erika/ig-12.jpg", alt: "Brow transformation" },
  { src: "/images/erika/ig-09.jpg", alt: "Brow work results" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[650px] max-h-[950px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/erika/ig-01.jpg"
            alt="Esthetics By Erika — premium waxing and skin care"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-dark/85 via-brown-dark/60 to-brown-dark/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Premium Esthetics · Nixa, MO
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.08] animate-fade-in-up">
              Elevate your beauty
              <br />
              with <span className="italic text-gold">expert care.</span>
            </h1>
            <p className="mt-6 text-cream/70 text-lg sm:text-xl leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Licensed esthetician specializing in Brazilian waxing, lash lifts,
              brow lamination, and custom facial treatments.
            </p>
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-gold text-brown-dark px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-gold-light transition-all duration-300"
              >
                Book Your Glow Up
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-cream/10 backdrop-blur-sm text-cream px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-cream/20 transition-all duration-300 border border-cream/20"
              >
                View Services
              </Link>
            </div>

            {/* Quick info */}
            <div
              className="mt-12 flex flex-col sm:flex-row gap-6 text-cream/50 text-sm animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>1868 N Deffer Dr Suite 7, Nixa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:+14177662102" className="hover:text-cream transition-colors">
                  (417) 766-2102
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </section>

      {/* ─── SERVICE CARDS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-brown-dark mt-3">
              What we <span className="italic">offer</span>
            </h2>
            <p className="mt-4 text-brown-dark/60 leading-relaxed">
              From silky smooth waxing to stunning lash lifts, explore our full
              range of premium esthetics services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brown-dark font-semibold hover:text-gold hover:gap-3 transition-all duration-200"
            >
              View Full Service Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DOTTED DIVIDER ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-dashed border-beige" />
      </div>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/erika/ig-17.jpg"
                  alt="Erika Hawthorne — Licensed Esthetician"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12">
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
                About Erika
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-brown-dark mt-3">
                Passionate about helping you <span className="italic">glow</span>
              </h2>
              <p className="mt-6 text-brown-dark/70 leading-relaxed text-lg">
                Paul Mitchell trained and licensed since 2021, I&apos;m dedicated
                to helping every client feel confident and beautiful in their
                own skin.
              </p>
              <p className="mt-4 text-brown-dark/55 leading-relaxed">
                My cozy studio in Nixa is your escape from the everyday — a
                place where you can relax, be pampered, and walk out feeling
                absolutely radiant.
              </p>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <p className="font-heading text-4xl text-brown-dark">400+</p>
                  <p className="text-brown-dark/40 text-sm mt-1">Happy Clients</p>
                </div>
                <div className="w-px bg-beige" />
                <div>
                  <p className="font-heading text-4xl text-brown-dark">3+</p>
                  <p className="text-brown-dark/40 text-sm mt-1">Years Experience</p>
                </div>
                <div className="w-px bg-beige" />
                <div>
                  <p className="font-heading text-4xl text-brown-dark">5.0</p>
                  <p className="text-brown-dark/40 text-sm mt-1">Google Rating</p>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 mt-10 group"
              >
                <span className="text-brown-dark font-semibold group-hover:text-gold transition-colors">
                  About us more
                </span>
                <span className="w-10 h-10 rounded-full border border-brown-dark/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-brown-dark transition-all duration-300">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION (Dark) ─── */}
      <section className="py-24 bg-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
              How It Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-cream mt-3">
              Your journey to <span className="italic">radiant skin</span>
            </h2>
            <p className="mt-4 text-cream/60 leading-relaxed">
              Three simple steps to your glow-up. We make it easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/hero-3.jpg"
                  alt="Book your appointment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="inline-block font-heading text-5xl text-gold/30 mb-2">1</span>
              <h3 className="font-heading text-2xl text-cream mb-2">Book</h3>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                Choose your services and pick a date and time that works for you — right from our website.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/erika/ig-08.jpg"
                  alt="Consultation and treatment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="inline-block font-heading text-5xl text-gold/30 mb-2">2</span>
              <h3 className="font-heading text-2xl text-cream mb-2">Arrive & Consult</h3>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                Relax in our cozy studio. We&apos;ll discuss your goals and customize your treatment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/erika/ig-11.jpg"
                  alt="Beautiful results"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="inline-block font-heading text-5xl text-gold/30 mb-2">3</span>
              <h3 className="font-heading text-2xl text-cream mb-2">Glow</h3>
              <p className="text-cream/60 text-sm leading-relaxed max-w-xs mx-auto">
                Walk out feeling confident and radiant. Enjoy your results and book your next visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-brown-dark mt-3">
              What our clients <span className="italic">say</span>
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
              <span className="ml-2 text-brown-dark/50 text-sm">5.0 on Google & Facebook</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-brown-dark font-semibold hover:text-gold hover:gap-3 transition-all duration-200"
            >
              Read All Reviews
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DOTTED DIVIDER ─── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-dashed border-beige" />
      </div>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
              Our Work
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-brown-dark mt-3">
              Real <span className="italic">results</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <Link
                key={i}
                href="/gallery"
                className="group relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition-colors duration-300 flex items-end">
                  <p className="p-4 text-cream text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {img.alt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-brown-dark font-semibold hover:text-gold hover:gap-3 transition-all duration-200"
            >
              View Full Gallery
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-28 bg-brown text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream">
            Ready to <span className="italic text-gold">glow?</span>
          </h2>
          <p className="mt-6 text-cream/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your appointment today and experience the difference of
            personalized esthetics care. Your glow-up is just a click away.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-gold text-brown-dark px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold-light transition-all duration-300"
            >
              Book Your Appointment
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+14177662102"
              className="inline-flex items-center justify-center gap-2 bg-cream/10 backdrop-blur-sm text-cream px-10 py-4 rounded-full text-lg font-semibold hover:bg-cream/20 transition-all duration-300 border border-cream/20"
            >
              <Phone size={20} />
              (417) 766-2102
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
