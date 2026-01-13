import { Package, Palette, Ruler, Settings } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Transparent & Colored Tapes",
    description: "BOPP packaging tapes available in transparent and all colors for diverse packaging needs.",
  },
  {
    icon: Palette,
    title: "Printed BOPP Tapes",
    description: "Custom printed tapes for branding, identification, and security purposes.",
  },
  {
    icon: Ruler,
    title: "Custom Dimensions",
    description: "Industrial tapes in custom widths and lengths to match your exact requirements.",
  },
  {
    icon: Settings,
    title: "Manual & Machine Use",
    description: "High-adhesion tapes designed for both manual application and automated machine use.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in manufacturing high-quality BOPP adhesive tapes for demanding 
            industrial and commercial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-industrial text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-card border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Our Manufacturing Process
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our tapes are made using strictly controlled processes to provide uniform thickness, 
                good adhesion properties, and reliable operation under differing conditions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted">
                <div className="font-heading font-bold text-secondary text-lg mb-1">Quality</div>
                <div className="text-sm text-muted-foreground">Raw Materials</div>
              </div>
              <div className="p-4 rounded-xl bg-muted">
                <div className="font-heading font-bold text-secondary text-lg mb-1">Precision</div>
                <div className="text-sm text-muted-foreground">Coating & Slitting</div>
              </div>
              <div className="p-4 rounded-xl bg-muted">
                <div className="font-heading font-bold text-secondary text-lg mb-1">Testing</div>
                <div className="text-sm text-muted-foreground">Quality Checks</div>
              </div>
              <div className="p-4 rounded-xl bg-muted">
                <div className="font-heading font-bold text-secondary text-lg mb-1">Scalable</div>
                <div className="text-sm text-muted-foreground">Bulk Production</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
