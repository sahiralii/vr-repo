import { Instagram, Facebook, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-primary-gold/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-serif tracking-widest text-primary-gold">
                VR UNISEX SALON
              </span>
              <span className="text-[10px] tracking-[0.3em] text-primary-beige/60 uppercase">
                Naigaon East
              </span>
            </Link>
            <p className="text-sm text-primary-beige/60 leading-relaxed font-light">
              Redefining luxury grooming in Naigaon. Experience expert care, 
              hygienic environment, and a premium salon experience tailored for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-gold/20 flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-gold/20 flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" className="w-10 h-10 rounded-full border border-primary-gold/20 flex items-center justify-center text-primary-gold hover:bg-primary-gold hover:text-primary-black transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary-gold font-serif text-lg tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm text-primary-beige/60">
              <li><Link to="/services" className="hover:text-primary-gold transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-gold transition-colors">Visual Gallery</Link></li>
              <li><Link to="/about" className="hover:text-primary-gold transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-primary-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/book" className="hover:text-primary-gold transition-colors">Book Online</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary-gold font-serif text-lg tracking-wider">Visit Us</h4>
            <ul className="space-y-4 text-sm text-primary-beige/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-gold shrink-0" />
                <span>Shop No. 5, Premium Plaza, Naigaon East, Palghar, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-gold shrink-0" />
                <span>Open Daily: 9 AM - 10 PM</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary-gold font-serif text-lg tracking-wider">Newsletter</h4>
            <p className="text-xs text-primary-beige/60 font-light italic">
              Subscribe to get grooming tips and salon updates.
            </p>
            <div className="flex border-b border-primary-gold/20">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent py-3 flex-grow focus:outline-none text-sm font-light text-primary-beige"
              />
              <button className="text-primary-gold text-xs uppercase tracking-widest font-bold px-2 whitespace-nowrap">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-primary-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-primary-beige/40">
          <p>© {currentYear} VR UNISEX SALON. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-gold">Privacy Policy</a>
            <a href="#" className="hover:text-primary-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
