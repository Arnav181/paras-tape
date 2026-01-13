import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-bg pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-custom px-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-medium text-sm mb-4">
                Our Products
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Industrial Packaging <span className="text-secondary">Products</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Explore our comprehensive range of high-quality packaging tapes and materials 
                designed for industrial and commercial applications.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Need Custom Specifications?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We offer custom sizes, printing options, and bulk quantities. 
                Contact us to discuss your specific requirements.
              </p>
              <Link to="/contact" className="btn-primary">
                Get a Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
