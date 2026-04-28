import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'bg-primary-black/95 backdrop-blur-md py-4 border-primary-gold/20' 
          : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-center group">
          <span className="text-2xl md:text-3xl font-serif tracking-widest text-primary-gold group-hover:scale-105 transition-transform">
            VR UNISEX SALON
          </span>
          <span className="text-[10px] tracking-[0.4em] text-primary-beige/60 uppercase -mt-1">
            Luxury Grooming
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm uppercase tracking-widest transition-colors hover:text-primary-gold',
                location.pathname === link.path ? 'text-primary-gold' : 'text-primary-beige'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            className="bg-primary-gold text-primary-black px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary-black border-t border-primary-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg uppercase tracking-widest',
                    location.pathname === link.path ? 'text-primary-gold' : 'text-primary-beige'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                onClick={() => setIsOpen(false)}
                className="bg-primary-gold text-primary-black px-8 py-4 rounded-full text-center uppercase tracking-widest font-bold"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
