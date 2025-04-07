
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
            <Link
              to="#"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="#skills"
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </Link>
            <Link
              to="#experience"
              className="text-foreground hover:text-primary transition-colors"
            >
              Experience
            </Link>
            <Link
              to="#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              to="#testimonials"
              className="text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Button asChild>
              <Link to="#contact">Contact</Link>
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
              <Link
                to="#"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="#skills"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </Link>
              <Link
                to="#experience"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </Link>
              <Link
                to="#services"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="#testimonials"
                className="py-2 text-foreground hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              <Button
                asChild
                className="w-full"
                onClick={toggleMenu}
              >
                <Link to="#contact">Contact</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
