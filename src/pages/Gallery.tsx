import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IMAGES = [
  { id: 1, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop', category: 'Interior', title: 'Luxury Waiting Lounge' },
  { id: 2, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', category: 'Hair', title: 'Precision Color Transformation' },
  { id: 3, url: 'https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=1000&auto=format&fit=crop', category: 'Nails', title: 'Artisan Manicure' },
  { id: 4, url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop', category: 'Grooming', title: 'Executive Beard Line-up' },
  { id: 5, url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000&auto=format&fit=crop', category: 'Interior', title: 'Our Styling Stations' },
  { id: 6, url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop', category: 'Skin', title: 'Serene Facial Treatment' },
]

export default function Gallery() {
  return (
    <div className="pt-32 pb-40 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-6">
            <span className="text-primary-gold text-sm font-semibold tracking-[0.4em] uppercase">Visual Artifacts</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight">Our <span className="italic text-primary-gold text-sh">Work.</span></h1>
            <p className="text-lg text-primary-beige/60 font-light max-w-xl leading-relaxed">
              A curated selection of our finest transformations and our luxury space in Naigaon East.
            </p>
          </div>
          <a href="#" className="flex items-center gap-3 bg-gradient-to-tr from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-xl">
             <Instagram className="w-5 h-5" /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 cursor-zoom-in group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex flex-col justify-end p-8 gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                 <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary-gold">
                   {img.category}
                 </span>
                 <h3 className="text-xl font-serif text-primary-beige">{img.title}</h3>
                 <div className="pt-2">
                    <ArrowUpRight className="w-6 h-6 text-primary-gold" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-24 bg-primary-black border border-primary-gold/10 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-gold/5 blur-[100px] -mr-32 -mt-32" />
           <div className="container max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-5xl font-serif">Ready for your <span className="italic text-primary-gold">Transformation?</span></h2>
              <p className="text-primary-beige/60 font-light leading-relaxed">
                Book your appointment now and experience the signature craftsmanship of Vr Unisex Salon stylists.
              </p>
              <div className="pt-6">
                 <Link to="/book" className="bg-primary-gold text-primary-black px-12 py-5 rounded-full text-xs uppercase tracking-widest font-black inline-block">
                    Secure Your Session
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
