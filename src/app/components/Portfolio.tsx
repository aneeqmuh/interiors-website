import moodboard1 from "../../assets/bedroom.png";
import moodboard2 from "../../assets/bachelor.png";
import visual3d from "../../assets/ea4dc1140644623e74ef6cecf373f96a7dbf5ef9.png";
import clientBrief from "../../assets/fa735e5079732cb5174402d59460b2d63f6e4403.png";
import moodboard3 from "../../assets/office.png";
import moodboard4 from "../../assets/beach.png";

const portfolioItems = [
  {
    image: moodboard4,
    title: "Coastal Retreat",
    category: "Moodboard",
    description: "Relaxed coastal concept blending natural textures, warm woods, and airy seaside element",
  },
  {
    image: moodboard1,
    title: "Bedroom Suite",
    category: "Design Concept",
    description: "Elegant bedroom & ensuite inspiration with marble and navy accents",
  },
  {
    image: moodboard2,
    title: "Bachelor Residence",
    category: "Moodboard",
    description: "Contemporary masculine aesthetic with rich materials",
  },
  {
    image: moodboard3,
    title: "The Executive Haven",
    category: "Moodboard",
    description: "Refined executive interior concept featuring warm wood, soft neutrals, and modern elegance",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C3E50] mb-6 tracking-[0.1em]">
            Featured Projects
          </h2>
          <p className="text-lg text-[#2C3E50]/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of luxury residential designs showcasing sophisticated aesthetics and timeless elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-[#DDD5C7]/20 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="text-white p-8 w-full">
                  <p className="text-[#DDD5C7] text-sm tracking-[0.2em] uppercase mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif mb-2 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
