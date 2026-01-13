import { Link } from "react-router-dom";
import { ArrowRight, Factory, Shield, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20">
      <div className="container-custom section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6">
              <Factory className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">
                Industrial Packaging Solutions
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Quality BOPP Tapes for{" "}
              <span className="text-secondary">Industrial Excellence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
              We manufacture and supply industrial-grade BOPP packaging tapes, 
              serving businesses across India with consistent quality and reliable supply.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/products" className="btn-primary">
                View Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-1">
                  13+
                </div>
                <div className="text-sm text-primary-foreground/70">
                  Product Types
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-1">
                  B2B
                </div>
                <div className="text-sm text-primary-foreground/70">
                  Focused
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-1">
                  Pan
                </div>
                <div className="text-sm text-primary-foreground/70">
                  India Supply
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="card-industrial bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
              <Shield className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                Quality Assured
              </h3>
              <p className="text-sm text-primary-foreground/70">
                Strict quality checks at every production stage
              </p>
            </div>
            
            <div className="card-industrial bg-primary-foreground/10 backdrop-blur border-primary-foreground/20 mt-8">
              <Truck className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                Reliable Supply
              </h3>
              <p className="text-sm text-primary-foreground/70">
                Consistent delivery for bulk orders
              </p>
            </div>
            
            <div className="card-industrial bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
              <Factory className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                Custom Solutions
              </h3>
              <p className="text-sm text-primary-foreground/70">
                Tailored sizes and printing options
              </p>
            </div>
            
            <div className="card-industrial bg-secondary/20 backdrop-blur border-secondary/30 mt-8">
              <div className="text-4xl font-heading font-bold text-secondary mb-2">
                100%
              </div>
              <p className="text-sm text-primary-foreground/80 font-medium">
                Manufacturer Direct Pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
