import Image from "next/image";

export function HowItWorksSection() {
  const services = [
    {
      id: "legal-consultation",
      title: "Legal Consultation",
      description: "Expert advice and strategic insights for all your critical legal matters.",
      iconPath: "/images/services/legal_consultation.png",
    },
    {
      id: "will-drafting",
      title: "Will Drafting",
      description: "Safeguard your family's future with our comprehensive, legally sound will drafting.",
      iconPath: "/images/services/will_drafting.png",
    },
    {
      id: "divorce-guide",
      title: "Divorce Guide",
      description: "Compassionate, step-by-step guidance navigating complex family law procedures.",
      iconPath: "/images/services/divorce_guide.png",
    },
    {
      id: "consumer-dispute",
      title: "Consumer Dispute",
      description: "Aggressively defend your consumer rights and hold responsible parties accountable.",
      iconPath: "/images/services/consumer_dispute.png",
    },
    {
      id: "money-recovery",
      title: "Money Recovery",
      description: "Dedicated professional intervention to swiftly recover your blocked or pending funds.",
      iconPath: "/images/services/money_recovery.png",
    },
    {
      id: "agreement-drafting",
      title: "Agreement Drafting",
      description: "Meticulous, tailored agreements designed to protect your interests in every transaction.",
      iconPath: "/images/services/agreement_drafting.png",
    },
  ];

  return (
    <section className="bg-background py-8 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Legal Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience reliable, proficient legal assistance perfectly tailored to your personal and professional needs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl p-4 md:p-8 border border-muted shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 md:w-32 md:h-32 mb-4 md:mb-6 relative">
                <Image
                  src={service.iconPath}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 64px, 128px"
                  className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <h3 className="text-sm md:text-xl font-semibold text-foreground mb-2 md:mb-3 tracking-tight group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
