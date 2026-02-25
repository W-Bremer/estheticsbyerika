import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ReviewCard from "@/components/ReviewCard";
import { Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what our clients say about Esthetics By Erika Hawthorne — 5-star reviews on Google and Facebook from happy clients in Nixa, MO.",
};

const googleReviews = [
  {
    name: "Ashley M.",
    review:
      "Erika is absolutely amazing! She made me feel so comfortable during my first Brazilian. The studio is clean and welcoming, and she really knows her stuff. I won't go anywhere else!",
    rating: 5,
    source: "Google" as const,
    date: "2 weeks ago",
  },
  {
    name: "Sarah T.",
    review:
      "Best lash lift I've ever had! Erika takes her time and really knows what she's doing. My lashes looked incredible for weeks. Already booked my next appointment!",
    rating: 5,
    source: "Google" as const,
    date: "1 month ago",
  },
  {
    name: "Morgan K.",
    review:
      "The most relaxing facial experience! Erika's studio is gorgeous and she's so knowledgeable about skincare. My skin has never looked better. 10/10 recommend.",
    rating: 5,
    source: "Google" as const,
    date: "1 week ago",
  },
  {
    name: "Brittany L.",
    review:
      "I was so nervous for my first wax but Erika made the whole experience comfortable and quick. She's the sweetest person and does amazing work. Highly recommend!",
    rating: 5,
    source: "Google" as const,
    date: "3 weeks ago",
  },
  {
    name: "Taylor W.",
    review:
      "Erika did my brow lamination and I'm obsessed! They look so full and natural. She spent time explaining the process and aftercare. Will definitely be back!",
    rating: 5,
    source: "Google" as const,
    date: "2 months ago",
  },
  {
    name: "Kenzie R.",
    review:
      "This is THE place for lash lifts in the 417 area. Erika is incredibly talented and her studio is so peaceful. I look forward to my appointments every time.",
    rating: 5,
    source: "Google" as const,
    date: "1 month ago",
  },
  {
    name: "Hannah D.",
    review:
      "Got the lash and brow combo and WOW. I look completely different (in the best way). Erika is a true artist. The prices are so reasonable for the quality you get.",
    rating: 5,
    source: "Google" as const,
    date: "3 weeks ago",
  },
  {
    name: "Megan P.",
    review:
      "Erika's dermaplaning service is incredible! My skin was SO smooth after. She really takes time with each client and doesn't rush. Best esthetician in Nixa hands down.",
    rating: 5,
    source: "Google" as const,
    date: "2 weeks ago",
  },
];

const facebookReviews = [
  {
    name: "Jessica R.",
    review:
      "I've been going to Erika for brow lamination and I'm obsessed. She always makes them look perfect and so natural. Can't recommend her enough!",
    rating: 5,
    source: "Facebook" as const,
    date: "3 weeks ago",
  },
  {
    name: "Courtney B.",
    review:
      "Found Erika through a friend's recommendation and I'm so glad I did. Best Brazilian wax experience ever — she's gentle, professional, and makes you feel completely at ease.",
    rating: 5,
    source: "Facebook" as const,
    date: "1 month ago",
  },
  {
    name: "Amber S.",
    review:
      "Erika is amazing! I got a facial and my skin is glowing. She really listened to my concerns and customized everything. Her studio is beautiful and spotless.",
    rating: 5,
    source: "Facebook" as const,
    date: "2 weeks ago",
  },
  {
    name: "Lauren G.",
    review:
      "Just had my lash lift and tint done and they look AMAZING! Erika is so sweet and talented. This is the only place I'll go for lash services in the Springfield area.",
    rating: 5,
    source: "Facebook" as const,
    date: "1 month ago",
  },
  {
    name: "Kayla M.",
    review:
      "I drive from Springfield specifically to see Erika. She's that good. Every service I've had has been perfect. Highly recommend to anyone looking for a great esthetician!",
    rating: 5,
    source: "Facebook" as const,
    date: "3 weeks ago",
  },
  {
    name: "Danielle F.",
    review:
      "Erika transformed my brows with lamination! They look so full and polished. She's professional, kind, and incredibly skilled. Best beauty investment I've made.",
    rating: 5,
    source: "Facebook" as const,
    date: "2 months ago",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        badge="Reviews"
        title="Client Love"
        subtitle="Don't just take our word for it — hear what our amazing clients have to say."
      />

      {/* Rating Summary */}
      <section className="py-16 bg-white border-b border-highlight/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Google */}
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <p className="text-accent/50 text-sm font-medium uppercase tracking-wider mb-2">
                Google Reviews
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="font-heading text-4xl font-bold text-accent">5.0</p>
              <p className="text-accent/50 text-sm mt-1">16 Reviews</p>
            </div>

            {/* Facebook */}
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <p className="text-accent/50 text-sm font-medium uppercase tracking-wider mb-2">
                Facebook Reviews
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="font-heading text-4xl font-bold text-accent">5.0</p>
              <p className="text-accent/50 text-sm mt-1">9 Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-accent mb-10">
            Google Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {googleReviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-accent mb-10">
            Facebook Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facebookReviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Join Our Happy Clients
          </h2>
          <p className="mt-4 text-white/70 text-lg">
            Experience the 5-star service everyone is raving about.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-all duration-300"
          >
            Book Your Appointment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
