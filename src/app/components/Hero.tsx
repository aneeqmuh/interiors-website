import Silk from "./Silk";
import { HeroImageFrame } from "./HeroImageFrame";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#DDD5C7]">
      <div className="absolute inset-0">
        <Silk color={[122, 107, 102]} speed={3.8} scale={1.15} noiseIntensity={1.2} rotation={0.18} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A35]/65 via-[#1E2A35]/40 to-[#1E2A35]/20" />
      <div className="relative z-10 container mx-auto px-6 pt-36 pb-16 md:pt-40 md:pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="text-left text-white max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-[0.13em] animate-fade-in">
              HINA INTERIORS
            </h1>
            <p
              className="text-xl md:text-3xl mb-4 text-[#DDD5C7] font-light tracking-[0.18em] animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              LUXURY CONTEMPORARY DESIGN
            </p>
            <p
              className="text-base md:text-lg mb-12 text-white/90 max-w-xl leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Creating sophisticated spaces that embody modern luxury,
              confidence, and timeless elegance.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-[#2C3E50] text-[#DDD5C7] px-10 py-4 text-sm hover:bg-[#1A2530] transition-all hover:scale-105 tracking-[0.15em] uppercase animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              Begin Your Project
            </button>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroImageFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
