
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Payal Lakkawar</h2>
            <p className="text-muted-foreground">QA Test Analyst</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
            <Link to="#" className="hover:text-primary transition-colors">Home</Link>
            <Link to="#skills" className="hover:text-primary transition-colors">Skills</Link>
            <Link to="#experience" className="hover:text-primary transition-colors">Experience</Link>
            <Link to="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground">
            © {currentYear} Payal Lakkawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
