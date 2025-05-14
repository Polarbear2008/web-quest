import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/task', label: 'Task' },
    { to: '/process', label: 'Process' },
    { to: '/resources', label: 'Resources' },
    { to: '/evaluation', label: 'Evaluation' },
    { to: '/upload', label: 'Upload' },
    { to: '/conclusion', label: 'Conclusion' },
    { to: '/teacher', label: 'Teacher\'s Guide' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cyan-100/90 shadow-md' : 'bg-cyan-50/50'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-cyan-600" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-cyan-800">Climate Explorer</span>
              <span className="text-xs text-gray-600">By Zukhra | GP teacher</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body font-medium transition-colors hover:text-cyan-600 ${
                  location.pathname === link.to ? 'text-cyan-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-cyan-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body px-2 py-1 rounded-md hover:bg-cyan-50 transition-colors ${
                    location.pathname === link.to ? 'text-cyan-600 font-semibold bg-cyan-50' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;