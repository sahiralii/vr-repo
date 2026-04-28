import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Calendar, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hair' | 'Skin' | 'Nails' | 'Grooming'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: ('All' | 'Hair' | 'Skin' | 'Nails' | 'Grooming')[] = ['All', 'Hair', 'Skin', 'Nails', 'Grooming'];

  return (
    <div className="pt-32 pb-40 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20 space-y-6">
          <span className="text-primary-gold text-sm font-semibold tracking-[0.4em] uppercase">The Menu</span>
          <h1 className="text-5xl md:text-7xl font-serif">Curated <span className="italic text-primary-gold">Rituals.</span></h1>
          <p className="text-lg text-primary-beige/60 font-light max-w-2xl leading-relaxed">
            Explore our specialized range of grooming and beauty treatments. 
            All services use premium international brands and follow strict medical-grade hygiene.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 pb-8 border-b border-white/5">
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full text-xs uppercase tracking-widest transition-all",
                  activeCategory === cat 
                    ? "bg-primary-gold text-primary-black font-bold" 
                    : "border border-white/10 text-primary-beige/60 hover:border-primary-gold hover:text-primary-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-gold transition-transform group-focus-within:scale-110" />
            <input
              type="text"
              placeholder="Search Rituals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-primary-black border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-primary-gold transition-all font-light"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 bg-primary-black/30 rounded-3xl p-6 border border-transparent hover:border-primary-gold/10 transition-all hover:bg-white/[0.02]"
            >
              <div className="w-full md:w-1/3 aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shrink-0">
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-between py-2 flex-grow space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-gold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-primary-beige">{service.name}</h3>
                  <p className="text-sm text-primary-beige/60 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                   <span className="text-lg font-serif">Price: Contact</span>
                   <Link
                      to="/book"
                      className="bg-white/5 text-primary-gold border border-primary-gold/20 px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-primary-gold hover:text-primary-black transition-all flex items-center gap-2"
                   >
                     <Calendar className="w-3.5 h-3.5" /> Book
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {filteredServices.length === 0 && (
            <div className="col-span-2 py-40 text-center space-y-4">
               <p className="text-primary-beige/40 text-xl font-light italic">No rituals found matching your search.</p>
               <button 
                  onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                  className="text-primary-gold text-xs uppercase tracking-widest border-b border-primary-gold/30 pb-1"
               >
                 Clear all filters
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
