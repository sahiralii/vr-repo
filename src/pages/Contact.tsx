import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, ArrowRight, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-40 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-24 space-y-6 text-center md:text-left">
          <span className="text-primary-gold text-sm font-semibold tracking-[0.4em] uppercase">Connections</span>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight">Drop by & <br className="hidden md:block" /> Stay <span className="italic text-primary-gold">Gold.</span></h1>
          <p className="text-lg text-primary-beige/60 font-light max-w-xl leading-relaxed">
            Located in the vibrant heart of Naigaon East. Reach out via your preferred channel for bookings or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details Grid */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {[
                 { icon: <MapPin />, title: 'Find Us', body: 'Shop 5, Premium Plaza, Near Station Rd, Naigaon East, Palghar, Maharashtra' },
                 { icon: <Phone />, title: 'Call Us', body: '+91 98765 43210\n+91 90000 00000' },
                 { icon: <Clock />, title: 'Our Hours', body: 'Monday - Sunday\n09:00 AM - 10:00 PM' },
                 { icon: <MessageSquare />, title: 'Social Connect', body: '@vrsalon_naigaon on Instagram and Facebook' }
               ].map((item, i) => (
                 <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                  className="bg-primary-black border border-white/5 p-8 rounded-3xl space-y-6 transition-all"
                 >
                    <div className="text-primary-gold w-10 h-10 flex items-center justify-center border border-primary-gold/20 rounded-full">
                       {item.icon}
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-serif tracking-wide">{item.title}</h4>
                       <p className="text-sm text-primary-beige/60 font-light leading-relaxed whitespace-pre-line">
                         {item.body}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
               <a 
                href="tel:+919876543210"
                className="flex-1 bg-white text-primary-black px-10 py-5 rounded-full text-xs uppercase tracking-widest font-black flex items-center justify-center gap-3 transition-transform hover:scale-105"
               >
                 <Phone className="w-4 h-4" /> Call Now
               </a>
               <a 
                href="https://wa.me/919876543210"
                className="flex-1 bg-primary-gold text-primary-black px-10 py-5 rounded-full text-xs uppercase tracking-widest font-black flex items-center justify-center gap-3 transition-transform hover:scale-105"
               >
                 <MessageSquare className="w-4 h-4" /> WhatsApp
               </a>
            </div>
            
            <div className="p-8 border border-primary-gold/10 rounded-3xl space-y-4">
               <h3 className="text-xl font-serif tracking-wide text-primary-gold">Experience Hygiene First</h3>
               <p className="text-xs text-primary-beige/50 italic leading-relaxed">
                 We pride ourselves on our strict safety protocols. All tools are sterilized after every single use, 
                 and our stylists adhere to the highest cleanliness standards.
               </p>
            </div>
          </div>

          {/* Map Placeholder/Frame */}
          <div className="h-[600px] rounded-3xl overflow-hidden grayscale contrast-125 border border-white/10 relative">
             <div className="absolute inset-0 bg-primary-gold/5 pointer-events-none" />
             {/* Replace with real embed code for Naigaon East if required */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15053.493010471249!2d72.84!3d19.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a6279f1ed781%3A0xc3b708d7455ed2!2sNaigaon%20East%2C%20Naigaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714300000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
