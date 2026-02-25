import Image from "next/image";

interface ServiceSection {
  title: string;
  description: string;
  image: string;
  services: { name: string; price: string; description: string }[];
}

interface ServicePageLayoutProps {
  sections: ServiceSection[];
}

export default function ServicePageLayout({
  sections,
}: ServicePageLayoutProps) {
  return (
    <div className="space-y-24">
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <div
            key={section.title}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
              isReversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent mb-3">
                {section.title}
              </h2>
              <p className="text-accent/60 leading-relaxed mb-8">
                {section.description}
              </p>
              <div className="space-y-4">
                {section.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start justify-between gap-4 py-3 border-b border-highlight/40 last:border-0"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-accent">
                        {service.name}
                      </h4>
                      <p className="text-accent/50 text-sm mt-0.5">
                        {service.description}
                      </p>
                    </div>
                    <span className="font-heading text-lg font-bold text-primary whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
