export function About() {
  return (
    <section id="about" className="py-24 bg-[#DDD5C7]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C3E50] mb-8 tracking-[0.1em]">
              Philosophy
            </h2>
            <div className="space-y-6 text-[#2C3E50]/80 leading-relaxed">
              <p className="text-lg">
                At Hina Interiors, we believe that exceptional design transcends trends.
                Our approach centers on creating{" "}
                <span className="text-[#2C3E50] font-medium">
                  sophisticated, confident, and modern luxury
                </span>{" "}
                spaces that reflect the refined tastes of our discerning clientele.
              </p>
              <p className="text-lg">
                We specialize in{" "}
                <span className="text-[#2C3E50] font-medium">
                  sleek masculine aesthetics
                </span>{" "}
                featuring premium materials such as natural marble, rich wood
                finishes, and statement lighting. Each project embodies our
                commitment to crafting spaces that feel exclusive, elegant, and
                timeless.
              </p>
              <p className="text-lg">
                From sculptural marble islands to curated feature walls, we
                design environments for both{" "}
                <span className="text-[#2C3E50] font-medium">
                  private relaxation and stylish social gatherings
                </span>{" "}
                - spaces where functionality meets uncompromising beauty.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-12 mt-12 border-t-2 border-[#2C3E50]/20">
              <div>
                <div className="text-5xl font-serif text-[#2C3E50] mb-2">15+</div>
                <div className="text-[#2C3E50]/70 text-sm tracking-wide uppercase">
                  Years
                </div>
              </div>
              <div>
                <div className="text-5xl font-serif text-[#2C3E50] mb-2">
                  50+
                </div>
                <div className="text-[#2C3E50]/70 text-sm tracking-wide uppercase">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-5xl font-serif text-[#2C3E50] mb-2">
                  100%
                </div>
                <div className="text-[#2C3E50]/70 text-sm tracking-wide uppercase">
                  Luxury
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] bg-[#E5DED1] shadow-2xl px-8 py-10 md:px-12 md:py-14 overflow-auto">
              <h3 className="text-5xl md:text-6xl text-[#1F2D3A] text-center mb-8 [font-family:'Lucida_Handwriting','Brush_Script_MT','Segoe_Script',cursive]">
                Example Client Brief
              </h3>
              <div className="text-[#1F2D3A] space-y-5 leading-[1.25] [font-family:'Segoe_Print','Lucida_Handwriting','Brush_Script_MT',cursive]">
                <p className="text-xl">Luxury Contemporary Bachelor Residence</p>
                <p className="text-2xl">
                  The client is a successful young bachelor professional seeking
                  a refined, high-end open-plan kitchen and living space that
                  reflects sophistication, confidence, and modern luxury.
                </p>
                <p className="text-2xl">
                  The design must embody a sleek masculine aesthetic, featuring
                  premium materials such as natural marble, rich wood finishes,
                  and statement lighting. The open layout should seamlessly
                  integrate kitchen and lounge areas while maintaining clear
                  functional zoning.
                </p>
                <p className="text-2xl">
                  The kitchen requires a sculptural marble island with
                  integrated appliances, concealed storage, and seating for
                  intimate entertaining. The living area should offer a plush
                  modular sofa, a curated feature wall, and minimalist decor
                  that enhances the space without clutter.
                </p>
                <p className="text-2xl">
                  The overall atmosphere must feel exclusive, elegant, and
                  timeless - a space designed for both private relaxation and
                  stylish social gatherings.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-[#2C3E50]/10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
