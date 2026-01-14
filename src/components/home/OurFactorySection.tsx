const OurFactorySection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary font-medium text-sm mb-4">
            Our Factory
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            State-of-the-Art Manufacturing Facility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our modern manufacturing facility where we produce high-quality
            packaging tapes and materials using advanced equipment and quality control processes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Factory Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/products/Factory.jpeg"
                alt="Our Factory - Modern Manufacturing Facility"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* GST Certificate Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/products/GST in.jpeg"
                alt="GST Certificate - Our Commitment to Compliance"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFactorySection;