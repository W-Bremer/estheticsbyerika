interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="relative bg-secondary pt-32 pb-16 sm:pt-36 sm:pb-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-highlight/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-accent leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-accent/60 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Decorative line */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-12 h-px bg-primary/30" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-12 h-px bg-primary/30" />
        </div>
      </div>
    </section>
  );
}
