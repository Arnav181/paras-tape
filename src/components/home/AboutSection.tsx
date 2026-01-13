import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Industrial Tape Manufacturer & Supplier
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-center mb-12">
            <p className="text-muted-foreground leading-relaxed">
              We are a manufacturer and supplier of BOPP packaging tapes of industrial quality 
              to various business houses in India. With our emphasis on quality, consistency, 
              and scalability, we manufacture BOPP Adhesive Tapes that are useful in demanding 
              industrial and commercial sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our products can be applied in carton sealing, logistics, and other sectors 
              where durability and adhesiveness are essential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-industrial">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide high-quality, reliable packaging solutions that help businesses 
                protect their products and streamline their operations, while maintaining 
                competitive pricing and consistent supply.
              </p>
            </div>

            <div className="card-industrial">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in industrial packaging solutions across India, 
                known for our quality products, customer-centric approach, and long-term 
                business partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
