import { DollarSign, Award, Wrench, Clock, Handshake, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "Manufacturer Direct Pricing",
    description: "Get competitive prices directly from the source, eliminating middleman costs.",
  },
  {
    icon: Award,
    title: "Industrial Quality Standards",
    description: "Rigorous quality control ensures consistent product performance.",
  },
  {
    icon: Wrench,
    title: "Custom Sizes & Printing",
    description: "Tailored solutions with custom dimensions and branding options.",
  },
  {
    icon: Clock,
    title: "Reliable Lead Times",
    description: "Consistent supply and timely delivery for your production needs.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    description: "Building lasting business relationships based on trust and reliability.",
  },
  {
    icon: CheckCircle,
    title: "Complete Solutions",
    description: "Beyond tapes, we provide comprehensive packaging solutions.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Our Advantage
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">Paras Tape Industries</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just sell packaging tapes – we help companies with reliable packaging 
              solutions that safeguard products, enhance efficiency, and ensure consistency.
            </p>
            
            <div className="p-6 rounded-xl bg-primary text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Your Trusted Partner
                  </h3>
                  <p className="text-sm opacity-90">
                    Our strengths in dealing with bulk demands, customized requirements, 
                    and repeat supplies make us a trusted partner in the packaging chain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="card-industrial"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <reason.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
