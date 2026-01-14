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

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Factory Image 1 */}
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/products/Factory.jpeg"
                alt="Our Factory - Manufacturing Facility"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Factory Image 2 */}
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/products/Factory2.jpeg"
                alt="Our Factory - Production Area"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Factory Image 3 */}
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/products/Factory3.jpeg"
                alt="Our Factory - Quality Control"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFactorySection;