import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import {
  Sparkles,
  Eye,
  Heart,
  Smile,
  Flower2,
  Star,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

const featuredServices = [
  {
    icon: <Heart size={24} />,
    title: "Brazilian Wax",
    price: "from $40",
    description:
      "Smooth, long-lasting results with premium hard wax. New clients enjoy a special introductory rate.",
  },
  {
    icon: <Eye size={24} />,
    title: "Lash Lift & Tint",
    price: "$70",
    description:
      "Wake up with beautifully curled, defined lashes that last 6-8 weeks. No extensions needed.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Brow Lamination",
    price: "from $55",
    description:
      "Get those fluffy, feathered brows you've been dreaming of. Includes shaping and styling.",
  },
  {
    icon: <Smile size={24} />,
    title: "Full Face Wax",
    price: "$50",
    description:
      "Complete face waxing including brows, lip, chin, and sideburns for a flawless finish.",
  },
  {
    icon: <Flower2 size={24} />,
    title: "Facial Treatment",
    price: "from $85",
    description:
      "Customized facials targeting your unique skin concerns. Deep cleansing, hydration, and glow.",
  },
  {
    icon: <Star size={24} />,
    title: "Dermaplaning",
    price: "$95",
    description:
      "Remove dead skin cells and peach fuzz for the smoothest, most radiant complexion of your life.",
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
  {
    name: "Morgan K.",
    review:
      "The most relaxing facial experience! Erika's studio is beautiful and she's so knowledgeable about skincare. My skin has never looked better.",
    rating: 5,
    source: "Google" as const,
    date: "1 week ago",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.jpg"
            alt="Esthetics spa treatment"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/80 via-accent/50 to-accent/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-light text-sm font-semibold tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Premium Esthetics · Nixa, MO
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] animate-fade-in-up">
              Glow From
              <br />
              <span className="text-primary-light">Within</span>
            </h1>
            <p className="mt-6 text-white/80 text-lg sm:text-xl leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Licensed esthetician specializing in Brazilian waxing, lash lifts, 
              brow lamination, and custom facial treatments.
            </p>
            <div
              className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
              >
                Book Your Glow Up
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-base font-semibold tracking-wide hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Services
              </Link>
            </div>

            {/* Quick info */}
            <div
              className="mt-12 flex flex-col sm:flex-row gap-6 text-white/60 text-sm animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-light" />
                <span>1868 N Deffer Dr Suite 7, Nixa</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary-light" />
                <a href="tel:+14177662102" className="hover:text-white transition-colors">
                  (417) 766-2102
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Our Services
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mt-3">
              What We Offer
            </h2>
            <p className="mt-4 text-accent/60 leading-relaxed">
              From silky smooth waxing to stunning lash lifts, we offer a full 
              range of esthetics services to help you look and feel your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              View Full Service Menu
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/about-erika.jpg"
                    alt="Erika Hawthorne - Licensed Esthetician"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                Meet Your Esthetician
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mt-3">
                Hi, I&apos;m Erika
              </h2>
              <p className="mt-6 text-accent/70 leading-relaxed text-lg">
                Paul Mitchell trained and licensed since 2021, I&apos;m passionate 
                about helping every client feel confident and beautiful in their 
                own skin.
              </p>
              <p className="mt-4 text-accent/60 leading-relaxed">
                My cozy studio in Nixa is your escape from the everyday — a 
                place where you can relax, be pampered, and walk out feeling 
                absolutely radiant. Whether it&apos;s your first Brazilian or your 
                hundredth lash lift, I&apos;m here to make every visit special.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">5.0</p>
                  <p className="text-accent/50 text-sm">Google Rating</p>
                </div>
                <div className="w-px bg-highlight" />
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">400+</p>
                  <p className="text-accent/50 text-sm">Happy Clients</p>
                </div>
                <div className="w-px bg-highlight" />
                <div>
                  <p className="font-heading text-3xl font-bold text-primary">3+</p>
                  <p className="text-accent/50 text-sm">Years Experience</p>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all duration-200"
              >
                Read My Story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
              Client Love
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mt-3">
              What Clients Say
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="text-primary fill-primary" />
              ))}
              <span className="ml-2 text-accent/60">5.0 on Google & Facebook</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Read All Reviews
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cta-bg.jpg"
            alt="Spa atmosphere"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-accent/85" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to <span className="text-primary-light">Glow?</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your appointment today and experience the difference of 
            personalized esthetics care. Your glow-up is just a click away.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              Book Your Appointment
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+14177662102"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
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
