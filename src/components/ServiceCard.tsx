import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  href?: string;
}

export default function ServiceCard({
  title,
  price,
  description,
  image,
  href = "/services",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Default state — title at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/80 via-brown-dark/20 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-2xl text-cream">
            {title}
          </h3>
          <p className="text-gold text-sm font-semibold mt-1">{price}</p>
        </div>
      </div>

      {/* Hover state — full overlay with description */}
      <div className="absolute inset-0 bg-brown-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
        <h3 className="font-heading text-2xl text-cream mb-2">
          {title}
        </h3>
        <p className="text-gold text-sm font-semibold mb-3">{price}</p>
        <p className="text-cream/80 text-sm leading-relaxed">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-gold text-sm font-semibold">
          View Details →
        </span>
      </div>
    </Link>
  );
}
