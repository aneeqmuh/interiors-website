import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#DDD5C7]/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-5">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div
      className="flex items-center cursor-pointer"
      onClick={() => scrollToSection("home")}
    >
      <img
        src={logo}
        alt="Hina Interiors Logo"
        className="h-10 w-auto scale-350 origin-left"
      />
    </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#2C3E50] text-[#DDD5C7] px-8 py-3 hover:bg-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2C3E50]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-6 space-y-4 pb-4">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-[#2C3E50] hover:text-[#1A2530] transition-colors tracking-wide text-sm uppercase"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#2C3E50] text-[#DDD5C7] px-8 py-3 hover:bg-[#1A2530] transition-colors w-full tracking-wide text-sm uppercase"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
