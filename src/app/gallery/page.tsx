import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our gallery of esthetics work — lash lifts, brow lamination, waxing results, and our beautiful studio in Nixa, MO.",
};

const galleryImages = [
  { src: "/images/erika/ig-14.jpg", alt: "Before & after brow wax + tint", category: "Brows" },
  { src: "/images/erika/ig-02.jpg", alt: "Lash lift + brow lamination", category: "Lashes" },
  { src: "/images/erika/ig-03.jpg", alt: "Lash lift results", category: "Lashes" },
  { src: "/images/erika/ig-04.jpg", alt: "Brow lamination + lash lift", category: "Brows" },
  { src: "/images/erika/ig-06.jpg", alt: "Underarm wax results", category: "Waxing" },
  { src: "/images/erika/ig-07.jpg", alt: "Brow lamination", category: "Brows" },
  { src: "/images/erika/ig-09.jpg", alt: "Brow before & after", category: "Brows" },
  { src: "/images/erika/ig-10.jpg", alt: "Clean brow shaping", category: "Brows" },
  { src: "/images/erika/ig-11.jpg", alt: "Beautiful brows + lifted lashes", category: "Lashes" },
  { src: "/images/erika/ig-12.jpg", alt: "Brow transformation", category: "Brows" },
  { src: "/images/erika/ig-16.jpg", alt: "Lash and brow results", category: "Lashes" },
  { src: "/images/erika/ig-18.jpg", alt: "Shaped brows + lash lift", category: "Lashes" },
];

const categories = ["All", "Brows", "Lashes", "Waxing"];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Gallery"
        title="Our Work"
        subtitle="A glimpse into our studio and the beautiful results our clients love."
      />

      {/* Category pills */}
      <section className="py-8 bg-cream border-b border-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-brown-dark text-cream"
                    : "bg-white text-brown-dark/60 hover:bg-gold/10 hover:text-gold border border-beige/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className={`relative ${
                    index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block bg-gold text-brown-dark text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-cream text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Instagram size={32} className="text-gold" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl text-brown-dark">
            Follow along on <span className="italic">Instagram</span>
          </h2>
          <p className="mt-4 text-brown-dark/60 text-lg">
            See more results, behind-the-scenes, and daily inspiration.
          </p>
          <a
            href="https://instagram.com/esthetics.byerika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-brown-dark text-cream px-8 py-4 rounded-full font-semibold hover:bg-brown transition-colors"
          >
            <Instagram size={20} />
            @esthetics.byerika
          </a>
        </div>
      </section>
    </>
  );
}
