import { Home, Palette, Lightbulb, Ruler } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Luxury Residential",
    description: "Sophisticated living spaces featuring premium materials, sculptural elements, and refined aesthetics for the discerning homeowner.",
  },
  {
    icon: Palette,
    title: "Interior Styling",
    description: "Curated design concepts with expertly crafted moodboards, material selection, and cohesive color palettes.",
  },
  {
    icon: Lightbulb,
    title: "Space Planning",
    description: "Seamless open-plan layouts that integrate kitchen, living, and entertaining areas with functional zoning and flow.",
  },
  {
    icon: Ruler,
    title: "3D Visualization",
    description: "Photorealistic renders that bring your vision to life, showcasing every detail before construction begins.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#DDD5C7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C3E50] mb-6 tracking-[0.1em]">
            Our Expertise
          </h2>
          <p className="text-lg text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed">
            We specialize in creating exclusive, elegant spaces designed for both private relaxation and stylish social gatherings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white/60 backdrop-blur-sm hover:bg-white transition-all hover:shadow-xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-[#2C3E50] rounded-sm">
                  <Icon className="w-9 h-9 text-[#DDD5C7]" />
                </div>
                <h3 className="text-xl font-serif text-[#2C3E50] mb-4 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-[#2C3E50]/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}