import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-serif tracking-[0.2em] text-[#DDD5C7] mb-6">
              HINA INTERIORS
            </div>
            <p className="text-white/70 mb-6 leading-relaxed max-w-md">
              Creating sophisticated spaces that embody modern luxury, confidence, and timeless elegance. 
              Transforming visions into refined realities.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-[#1A2530] hover:bg-[#DDD5C7] hover:text-[#2C3E50] flex items-center justify-center transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A2530] hover:bg-[#DDD5C7] hover:text-[#2C3E50] flex items-center justify-center transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A2530] hover:bg-[#DDD5C7] hover:text-[#2C3E50] flex items-center justify-center transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-[#1A2530] hover:bg-[#DDD5C7] hover:text-[#2C3E50] flex items-center justify-center transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-6 tracking-[0.1em] uppercase text-sm">Navigation</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#home" className="hover:text-[#DDD5C7] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DDD5C7] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#DDD5C7] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DDD5C7] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#DDD5C7] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 tracking-[0.1em] uppercase text-sm">Expertise</h4>
            <ul className="space-y-3 text-white/70">
              <li>Luxury Residential</li>
              <li>Interior Styling</li>
              <li>Space Planning</li>
              <li>3D Visualization</li>
              <li>Material Selection</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Hina Interiors Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#DDD5C7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#DDD5C7] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}