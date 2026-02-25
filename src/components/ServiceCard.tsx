import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  price: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  icon,
  title,
  price,
  description,
  href = "/services",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-2xl p-8 border border-highlight/30 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-bold text-accent mb-1">
        {title}
      </h3>
      <p className="text-primary font-semibold text-lg mb-3">{price}</p>
      <p className="text-accent/60 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
        Learn more <ArrowRight size={14} />
      </span>
    </Link>
  );
}
