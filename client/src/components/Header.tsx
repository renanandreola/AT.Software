import { useState, useEffect } from "react";
import { Link } from "wouter";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2" onClick={() => scrollToSection("home")}>
            <div className="text-primary font-bold text-3xl logo">AT.</div>
            {/* <span className="hidden md:inline-block font-semibold text-light">Software</span> */}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-light hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
            <a
              href="#sobre"
              className="text-light hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sobre");
              }}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-light hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("servicos");
              }}
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="text-light hover:text-primary transition-colors duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contato");
              }}
            >
              Contato
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col md:hidden bg-darklight py-4 px-4 border-t border-gray-800`}>
        <a
          href="#home"
          className="text-light hover:text-primary py-2 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          Home
        </a>
        <a
          href="#sobre"
          className="text-light hover:text-primary py-2 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("sobre");
          }}
        >
          Sobre
        </a>
        <a
          href="#servicos"
          className="text-light hover:text-primary py-2 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("servicos");
          }}
        >
          Serviços
        </a>
        <a
          href="#contato"
          className="text-light hover:text-primary py-2 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contato");
          }}
        >
          Contato
        </a>
      </nav>
    </header>
  );
};

export default Header;
