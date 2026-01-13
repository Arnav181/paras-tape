import { Cog, Car, Tractor, Home, Shirt, ShoppingBag, Boxes, Globe } from "lucide-react";

const manufacturingSegments = [
  { icon: Cog, name: "Sheet Metal Components" },
  { icon: Tractor, name: "Earth Moving Equipment Parts" },
  { icon: Car, name: "Automobile Components" },
];

const industries = [
  { icon: Globe, name: "Domestic Utility & Export Goods" },
  { icon: Shirt, name: "Garments & Textiles" },
  { icon: Home, name: "Furniture & Home Solutions" },
  { icon: ShoppingBag, name: "FMCG Products" },
];

const SegmentsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
            Our Reach
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Segments & Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our packaging solutions support diverse manufacturing sectors and industries across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Manufacturing Segments */}
          <div className="card-industrial bg-primary p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Boxes className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground">
                Manufacturing Segments
              </h3>
            </div>
            <div className="space-y-4">
              {manufacturingSegments.map((segment, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <segment.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="font-medium text-primary-foreground">
                    {segment.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="card-industrial p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Globe className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground">
                Industries & Categories
              </h3>
            </div>
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">
                    {industry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
