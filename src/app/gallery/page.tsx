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
  {
    src: "/images/gallery-1.jpg",
    alt: "Relaxing spa treatment",
    category: "Studio",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Lash lift results",
    category: "Lashes",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Facial treatment in progress",
    category: "Facials",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Beautiful brow lamination",
    category: "Brows",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Client relaxing during treatment",
    category: "Studio",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Premium skincare products",
    category: "Products",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Spa ambiance",
    category: "Studio",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-8.jpg",
    alt: "Esthetics treatment results",
    category: "Results",
    span: "col-span-1 row-span-1",
  },
];

const categories = ["All", "Lashes", "Brows", "Facials", "Studio", "Results"];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Gallery"
        title="Our Work"
        subtitle="A glimpse into our studio and the beautiful results our clients love."
      />

      {/* Category pills (visual only for static site) */}
      <section className="py-6 bg-white border-b border-highlight/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  i === 0
                    ? "bg-primary text-white"
                    : "bg-secondary text-accent/60 hover:bg-highlight/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div
                  className={`relative ${
                    index % 3 === 1 ? "aspect-[3/4]" : "aspect-square"
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
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/40 transition-colors duration-300 flex items-end">
                    <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-white text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-secondary text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Instagram size={32} className="text-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent">
            Follow Along on Instagram
          </h2>
          <p className="mt-4 text-accent/60 text-lg">
            See more results, behind-the-scenes, and daily inspiration.
          </p>
          <a
            href="https://instagram.com/esthetics.byerika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors"
          >
            <Instagram size={20} />
            @esthetics.byerika
          </a>
        </div>
      </section>
    </>
  );
}
