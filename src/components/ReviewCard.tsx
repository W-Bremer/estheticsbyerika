import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  source: "Google" | "Facebook";
  date?: string;
}

export default function ReviewCard({
  name,
  review,
  rating,
  source,
  date,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-beige/40 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < rating
                ? "text-gold fill-gold"
                : "text-beige fill-beige"
            }
          />
        ))}
      </div>

      {/* Review text — serif italic for elegance */}
      <p className="font-heading text-lg text-brown-dark leading-relaxed flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Reviewer info */}
      <div className="mt-6 pt-5 border-t border-dashed border-beige/60 flex items-center justify-between">
        <div>
          <p className="font-semibold text-brown-dark text-sm">{name}</p>
          {date && (
            <p className="text-brown-dark/40 text-xs mt-0.5">{date}</p>
          )}
        </div>
        <span className="text-xs font-medium text-brown-dark/40 bg-cream px-3 py-1 rounded-full">
          {source}
        </span>
      </div>
    </div>
  );
}
