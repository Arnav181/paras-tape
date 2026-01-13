import { Link } from "react-router-dom";
import { Building2, Truck, Factory, Globe, Warehouse, ArrowRight } from "lucide-react";

const clients = [
  { icon: Building2, name: "Packaging Material Wholesalers" },
  { icon: Truck, name: "Logistics & Supply Chain Firms" },
  { icon: Factory, name: "Manufacturing Units" },
  { icon: Globe, name: "Exporters & Distributors" },
  { icon: Warehouse, name: "E-commerce & Warehouse Management" },
];

const WhoWeServeSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Our Clients
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We serve mainly B2B clients and work with businesses that require reliable, 
              high-volume packaging solutions for their operations.
            </p>

            <div className="space-y-4 mb-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <client.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium text-foreground">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-10">
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Whether you need bulk supplies, customized solutions, or reliable repeat orders, 
              we're here to be your trusted packaging partner.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-primary-foreground/90">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">✓</span>
                </div>
                Bulk order capability
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/90">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">✓</span>
                </div>
                Customized requirements
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/90">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-secondary-foreground">✓</span>
                </div>
                Reliable repeat supplies
              </li>
            </ul>
            <Link to="/contact" className="btn-primary w-full justify-center">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
