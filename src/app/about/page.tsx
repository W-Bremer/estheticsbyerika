import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowRight, Heart, Sparkles, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Erika",
  description:
    "Meet Erika Hawthorne — Paul Mitchell trained, licensed esthetician in Nixa, MO. Learn about her journey, philosophy, and passion for helping you glow.",
};

const values = [
  {
    icon: <Heart size={24} />,
    title: "Client-First Care",
    description:
      "Every treatment is tailored to your unique needs. Your comfort and confidence come first, always.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Natural Enhancement",
    description:
      "My philosophy centers on enhancing your natural beauty — not changing who you are, but revealing your best self.",
  },
  {
    icon: <Shield size={24} />,
    title: "Clean & Safe",
    description:
      "Strict sanitation protocols, premium products, and a licensed professional you can trust with your skin.",
  },
  {
    icon: <Award size={24} />,
    title: "Ongoing Education",
    description:
      "I'm always learning the latest techniques and trends to bring you the best possible results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About"
        title="Meet Erika"
        subtitle="Your 417 area esthetician, dedicated to helping you feel confident and beautiful."
      />

      {/* Story Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/erika/ig-17.jpg"
                    alt="Erika Hawthorne"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-xl px-6 py-4">
                  <p className="font-heading text-3xl text-gold">5.0 ★</p>
                  <p className="text-brown-dark/40 text-xs">Google Reviews</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12">
              <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
                My Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-brown-dark mt-3 leading-tight">
                Passion for helping you
                <br />
                feel your <span className="italic">best</span>
              </h2>

              <div className="mt-8 space-y-5 text-brown-dark/65 leading-relaxed">
                <p>
                  My journey into esthetics began with a simple belief: everyone
                  deserves to feel confident and beautiful in their own skin. After
                  training at the prestigious <strong className="text-brown-dark">Paul Mitchell</strong> school
                  and earning my license in 2021, I knew I&apos;d found my calling.
                </p>
                <p>
                  What started as a passion quickly became my purpose. I opened my
                  own studio right here in Nixa because I wanted to create a space
                  where clients could truly relax — a personal, intimate experience
                  that&apos;s different from the big-box salons. When you visit my suite,
                  you&apos;re not just another appointment. You&apos;re my guest.
                </p>
                <p>
                  I specialize in Brazilian waxing, lash lifts, brow lamination,
                  and customized facial treatments. Every service I offer is
                  performed with premium products and techniques I&apos;ve refined
                  through years of continued education and hundreds of happy clients.
                </p>
                <p>
                  When I&apos;m not in the studio, you&apos;ll find me exploring the
                  Springfield/Nixa area, keeping up with the latest esthetics trends,
                  or dreaming up new ways to help my clients glow. I love this 417
                  community and I&apos;m so grateful to serve it.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-white text-brown-dark/70 px-4 py-2 rounded-full text-sm font-medium border border-beige/40">
                  🎓 Paul Mitchell Trained
                </span>
                <span className="bg-white text-brown-dark/70 px-4 py-2 rounded-full text-sm font-medium border border-beige/40">
                  📜 Licensed Since 2021
                </span>
                <span className="bg-white text-brown-dark/70 px-4 py-2 rounded-full text-sm font-medium border border-beige/40">
                  ⭐ 5.0 Star Rating
                </span>
                <span className="bg-white text-brown-dark/70 px-4 py-2 rounded-full text-sm font-medium border border-beige/40">
                  💛 400+ Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase">
              My Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-brown-dark mt-3">
              Enhance your natural <span className="italic">beauty</span>
            </h2>
            <p className="mt-4 text-brown-dark/60 leading-relaxed">
              My approach is simple — I want you to walk out of my studio
              feeling like the best version of yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-cream rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl text-brown-dark mb-2">
                  {value.title}
                </h3>
                <p className="text-brown-dark/55 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brown text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-cream">
            Let&apos;s work <span className="italic text-gold">together</span>
          </h2>
          <p className="mt-5 text-cream/60 text-lg">
            Ready to experience personalized esthetics care? I can&apos;t wait to meet you.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 mt-10 bg-gold text-brown-dark px-10 py-4 rounded-full text-lg font-semibold hover:bg-gold-light transition-all duration-300"
          >
            Book Your Appointment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
