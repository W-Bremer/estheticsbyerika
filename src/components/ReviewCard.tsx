import { Star, Quote } from "lucide-react";

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
    <div className="bg-white rounded-2xl p-8 border border-highlight/30 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Quote icon */}
      <Quote size={28} className="text-primary/20 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? "text-primary fill-primary"
                : "text-highlight fill-highlight"
            }
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-accent/70 text-sm leading-relaxed flex-1 italic">
        &ldquo;{review}&rdquo;
      </p>

      {/* Reviewer info */}
      <div className="mt-6 pt-4 border-t border-highlight/30 flex items-center justify-between">
        <div>
          <p className="font-semibold text-accent text-sm">{name}</p>
          {date && (
            <p className="text-accent/40 text-xs mt-0.5">{date}</p>
          )}
        </div>
        <span className="text-xs font-medium text-accent/40 bg-secondary px-3 py-1 rounded-full">
          {source}
        </span>
      </div>
    </div>
  );
}
