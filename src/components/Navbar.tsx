
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl md:text-2xl font-bold">
            Payal<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
              onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-foreground hover:text-primary transition-colors"
              onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Experience
            </a>
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
              onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-primary transition-colors"
              onClick={e => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Testimonials
            </a>
            <Button asChild>
              <a href="mailto:payal.lakkawar5@gmail.com">Contact</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#skills"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={e => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={e => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}
              >
                Experience
              </a>
              <a
                href="#services"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={e => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); toggleMenu(); }}
              >
                Testimonials
              </a>
              <Button
                asChild
                className="w-full"
                onClick={toggleMenu}
              >
                <a href="mailto:payal.lakkawar5@gmail.com">Contact</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
