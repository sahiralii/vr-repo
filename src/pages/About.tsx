import { motion } from 'motion/react';
import { Shield, Sparkles, UserCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary-gold text-sm font-semibold tracking-[0.4em] uppercase">The Story</span>
              <h1 className="text-5xl md:text-8xl font-serif leading-tight">Mastery in <br /> Every <span className="italic text-primary-gold">Boutique.</span></h1>
            </div>
            <div className="space-y-6 text-lg text-primary-beige/70 font-light leading-relaxed">
              <p>
                Vr Unisex Salon was born out of a simple vision: to bring world-class premium grooming services to 
                Naigaon East. We believe that grooming is not just a routine, but a restorative ritual that 
                empowers you to present your best self to the world.
              </p>
              <p>
                Our philosophy centers on two unwavering pillars—Mastery and Hygiene. Every stylist in our space 
                is not just a professional but an artist who understands the nuances of hair, skin, and individual style.
              </p>
            </div>
            <div className="pt-8">
              <Link to="/services" className="bg-primary-gold text-primary-black px-12 py-5 rounded-full text-xs uppercase tracking-widest font-black inline-block">
                See Our Rituals
              </Link>
            </div>
          </div>

          <div className="relative">
             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                   <div className="rounded-3xl overflow-hidden aspect-[3/4] border border-white/5 grayscale group hover:grayscale-0 transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1527799822341-47100b3d7385?q=80&w=800&auto=format&fit=crop" alt="Stylist" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                   </div>
                   <div className="rounded-3xl overflow-hidden aspect-square border border-white/5 grayscale group hover:grayscale-0 transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1512690196252-7106b0d35961?q=80&w=800&auto=format&fit=crop" alt="Tools" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="rounded-3xl overflow-hidden aspect-square border border-white/5 grayscale group hover:grayscale-0 transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop" alt="Men's Hair" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                   </div>
                   <div className="rounded-3xl overflow-hidden aspect-[3/4] border border-white/5 grayscale group hover:grayscale-0 transition-all duration-700">
                      <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop" alt="Service" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                   </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary-gold/10 border border-primary-gold/20 rounded-full flex items-center justify-center backdrop-blur-xl z-20 hidden lg:flex">
                <Sparkles className="text-primary-gold w-12 h-12 animate-pulse" />
             </div>
          </div>
        </div>

        {/* Values section */}
        <div className="py-32 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: <Shield className="w-10 h-10 mx-auto text-primary-gold" />, t: 'Medical Grade', d: 'Strictest sterilization protocols in the city.' },
              { icon: <Sparkles className="w-10 h-10 mx-auto text-primary-gold" />, t: 'Luxury Space', d: 'An oasis of peace designed for your relaxation.' },
              { icon: <UserCheck className="w-10 h-10 mx-auto text-primary-gold" />, t: 'Expert Talent', d: 'Our specialists are artists with years of proven skill.' },
              { icon: <Heart className="w-10 h-10 mx-auto text-primary-gold" />, t: 'Client First', d: 'Tailored consulting for your unique style.' }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6 group"
              >
                <div className="p-8 bg-primary-black rounded-[2rem] border border-transparent group-hover:border-primary-gold/20 group-hover:bg-primary-gold/5 transition-all">
                  {v.icon}
                  <h4 className="mt-6 text-xl font-serif tracking-wide">{v.t}</h4>
                  <p className="mt-4 text-sm text-primary-beige/40 font-light leading-relaxed">{v.d}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
