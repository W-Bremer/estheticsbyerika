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
    <div className="space-y-28">
      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <div
            key={section.title}
            className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-20 ${
              isReversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12">
              <h2 className="font-heading text-3xl sm:text-4xl text-brown-dark mb-3">
                {section.title}
              </h2>
              <p className="text-brown-dark/60 leading-relaxed mb-10">
                {section.description}
              </p>
              <div className="space-y-0">
                {section.services.map((service) => (
                  <div
                    key={service.name}
                    className="flex items-start justify-between gap-4 py-5 border-b border-dashed border-beige/60 last:border-0"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-brown-dark">
                        {service.name}
                      </h4>
                      <p className="text-brown-dark/50 text-sm mt-1">
                        {service.description}
                      </p>
                    </div>
                    <span className="font-heading text-xl text-gold whitespace-nowrap">
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
