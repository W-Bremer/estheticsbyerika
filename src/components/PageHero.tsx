interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative bg-brown pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-cream/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Decorative dotted line */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="w-16 h-px border-t border-dashed border-cream/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="w-16 h-px border-t border-dashed border-cream/20" />
        </div>
      </div>
    </section>
  );
}
