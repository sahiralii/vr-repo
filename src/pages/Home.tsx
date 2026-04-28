import { motion } from 'motion/react';
import { Calendar, ArrowRight, ShieldCheck, Award, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, REVIEWS } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522337363553-5605d9d021f1?q=80&w=2000&auto=format&fit=crop"
            alt="Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-3xl space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-primary-gold text-xs md:text-sm font-semibold tracking-[0.4em] uppercase inline-block border-l-2 border-primary-gold pl-4"
              >
                The Art of Professional Grooming
              </motion.span>
              <h1 className="text-5xl md:text-8xl font-serif leading-[1.1] text-primary-beige">
                Luxury Grooming <br />
                <span className="italic text-primary-gold">Experience.</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-beige/70 font-light max-w-xl leading-relaxed">
                Experience world-class hair, skin, and grooming services in the heart of Naigaon East. 
                Expert care, hygienic environment, and premium results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/book"
                className="bg-primary-gold text-primary-black px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary-gold/20"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border border-primary-gold/30 text-primary-gold px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-primary-gold/10 transition-all text-center"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-10 bg-primary-gold" />
        </motion.div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-24 bg-primary-black border-y border-primary-gold/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Award className="w-10 h-10" />, title: 'Certified Experts', desc: 'Our stylists and therapists are trained by international masters.' },
              { icon: <ShieldCheck className="w-10 h-10" />, title: 'Advanced Hygiene', desc: '100% sanitized tools and single-use kits for for every client.' },
              { icon: <Zap className="w-10 h-10" />, title: 'Premium Products', desc: 'We only use authentic, world-renowned professional brands.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col items-center text-center space-y-4 p-8 border border-transparent hover:border-primary-gold/10 rounded-2xl transition-all"
              >
                <div className="text-primary-gold mb-2 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif tracking-wide">{feature.title}</h3>
                <p className="text-sm text-primary-beige/60 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 bg-black relative">
         <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="space-y-4">
                <span className="text-primary-gold text-xs font-semibold tracking-[0.4em] uppercase">Specialized Care</span>
                <h2 className="text-4xl md:text-6xl font-serif">Curated <span className="italic text-primary-gold">Services.</span></h2>
              </div>
              <Link to="/services" className="text-primary-gold text-sm uppercase tracking-[0.3em] font-medium border-b border-primary-gold/30 pb-2 hover:border-primary-gold transition-all flex items-center gap-2">
                All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-[500px] overflow-hidden rounded-2xl"
                >
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-primary-gold font-bold">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-serif text-primary-beige leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-xs text-primary-beige/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">
                      {service.description}
                    </p>
                    <Link to="/book" className="text-primary-gold text-xs uppercase tracking-widest font-bold pt-4 flex items-center gap-2">
                       Book <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Why Choose Us / Quality Focus */}
      <section className="py-32 bg-primary-black">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop" 
                    alt="Process"
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                   />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-primary-gold p-12 rounded-3xl hidden md:block">
                   <span className="text-primary-black text-6xl font-serif block">10+</span>
                   <span className="text-primary-black/60 text-xs uppercase tracking-[0.2em] font-bold">Years of Excellence</span>
                </div>
             </div>

             <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-primary-gold text-xs font-semibold tracking-[0.4em] uppercase">Professional Standard</span>
                  <h2 className="text-4xl md:text-6xl font-serif leading-tight">Why Vr Salon <br /> Stands <span className="italic text-primary-gold">Apart.</span></h2>
                </div>

                <div className="space-y-8">
                  {[
                    { t: 'Client Centricity', d: 'We believe every individual is unique. We tailor our techniques to match your personality and lifestyle.' },
                    { t: 'Uncompromising Hygiene', d: 'Our medical-grade sanitation protocols ensure you can relax with complete peace of mind.' },
                    { t: 'Artisanal Approach', d: 'Grooming is an art form. Our stylists bring precision, creativity, and passion to every visit.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-full border border-primary-gold/20 flex items-center justify-center shrink-0 group-hover:bg-primary-gold group-hover:text-primary-black transition-all">
                        <span className="text-xs font-bold serif">{i + 1}</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-serif tracking-wide text-primary-gold">{item.t}</h4>
                        <p className="text-sm text-primary-beige/60 font-light leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-white/[0.02] select-none pointer-events-none">
           Voices
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
             <span className="text-primary-gold text-xs font-semibold tracking-[0.4em] uppercase">Testimonials</span>
             <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Whispers of <span className="italic text-primary-gold text-sh">Satisfaction.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {REVIEWS.map((review, i) => (
               <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary-black/50 backdrop-blur-sm border border-primary-gold/10 p-10 rounded-2xl space-y-6 flex flex-col justify-between"
               >
                 <div className="space-y-4">
                   <div className="flex gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className={cn("w-3 h-3", idx < review.rating ? "text-primary-gold fill-primary-gold" : "text-primary-gold/20")} />
                      ))}
                   </div>
                   <p className="text-primary-beige/80 italic font-light leading-relaxed tracking-wide">
                     "{review.text}"
                   </p>
                 </div>
                 <div className="pt-6 border-t border-primary-gold/5 flex items-center justify-between">
                    <span className="text-sm font-serif tracking-widest text-primary-gold uppercase">{review.author}</span>
                    <span className="text-[10px] text-primary-beige/30 uppercase tracking-[0.2em]">Verified Visit</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-black relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <h2 className="text-5xl md:text-8xl font-serif leading-tight">
                Your Luxury <br /> Journey <span className="italic text-primary-gold">Awaits.</span>
              </h2>
              <p className="text-xl text-primary-beige/60 font-light max-w-2xl mx-auto">
                Step into a world of refined elegance and precision care. 
                Experience grooming at its finest in Naigaon East.
              </p>
              <div className="pt-8">
                <Link
                  to="/book"
                  className="bg-primary-gold text-primary-black px-16 py-6 rounded-full text-sm uppercase tracking-widest font-extrabold hover:bg-white hover:scale-105 transition-all inline-flex items-center gap-4 shadow-3xl shadow-primary-gold/40"
                >
                  <Calendar className="w-6 h-6" />
                  Secure Your Appointment
                </Link>
                <div className="mt-8 flex justify-center gap-10 text-[10px] uppercase tracking-[0.3em] text-primary-beige/40">
                   <span>Hygienic</span>
                   <span>Professional</span>
                   <span>Luxury</span>
                </div>
              </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
}
