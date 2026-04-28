import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle, ChevronRight, AlertCircle, Star } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';
import { createBooking } from '../lib/firebase';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: '',
    date: '',
    time: ''
  });

  const selectedService = SERVICES.find(s => s.id === formData.serviceId);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await createBooking({
        name: formData.name,
        phone: formData.phone,
        serviceId: formData.serviceId,
        serviceName: selectedService?.name || 'Unknown Ritual',
        date: formData.date,
        time: formData.time
      });
      setSuccess(true);
    } catch (error) {
       console.error("Booking failed:", error);
       alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  if (success) {
    return (
      <div className="pt-40 pb-40 min-h-screen flex items-center justify-center container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-primary-black border border-primary-gold/20 p-12 rounded-3xl max-w-xl w-full text-center space-y-8"
        >
          <div className="flex justify-center">
             <div className="w-20 h-20 rounded-full bg-primary-gold/10 border border-primary-gold/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary-gold" />
             </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-serif">Appointment <br /> <span className="italic text-primary-gold">Secured.</span></h2>
            <p className="text-primary-beige/60 font-light leading-relaxed">
              Thank you, {formData.name}. We have received your request for {selectedService?.name} on {formData.date} at {formData.time}. 
              Our team will contact you shortly on {formData.phone} for confirmation.
            </p>
          </div>
          <div className="pt-6">
             <button 
                onClick={() => window.location.href = '/'}
                className="text-primary-gold text-xs uppercase tracking-widest font-bold border border-primary-gold/20 px-10 py-4 rounded-full hover:bg-primary-gold hover:text-primary-black transition-all"
             >
               Return to Home
             </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-40 min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-20 text-center space-y-4">
          <span className="text-primary-gold text-sm font-semibold tracking-[0.4em] uppercase">Appointments</span>
          <h1 className="text-5xl md:text-7xl font-serif">Secure Your <span className="italic text-primary-gold">Time.</span></h1>
        </div>

        <div className="bg-primary-black border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl relative">
          {/* Progress Bar */}
          <div className="h-1 bg-white/5 w-full relative">
             <motion.div 
                className="absolute top-0 left-0 h-full bg-primary-gold" 
                animate={{ width: `${(step / 3) * 100}%` }}
             />
          </div>

          <div className="p-8 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-12">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-serif flex items-center gap-3">
                         <Star className="text-primary-gold w-5 h-5 flex-shrink-0" />
                         Select a Ritual
                      </h3>
                      <p className="text-sm text-primary-beige/40 font-light italic">Choose the service you would like to experience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SERVICES.map(service => (
                        <div
                          key={service.id}
                          onClick={() => setFormData({ ...formData, serviceId: service.id })}
                          className={cn(
                            "p-6 rounded-2xl border transition-all cursor-pointer flex justify-between items-center group",
                            formData.serviceId === service.id 
                              ? "bg-primary-gold border-primary-gold text-primary-black" 
                              : "bg-white/[0.02] border-white/5 text-primary-beige hover:border-primary-gold/30 hover:bg-white/[0.04]"
                          )}
                        >
                          <div className="space-y-1">
                             <span className={cn("text-[8px] uppercase tracking-widest font-bold", formData.serviceId === service.id ? "text-primary-black/60" : "text-primary-gold")}>
                               {service.category}
                             </span>
                             <p className="font-serif text-lg tracking-wide">{service.name}</p>
                          </div>
                          {formData.serviceId === service.id && <CheckCircle className="w-5 h-5" />}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        disabled={!formData.serviceId}
                        onClick={nextStep}
                        className={cn(
                          "px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-3 transition-all",
                          formData.serviceId 
                            ? "bg-primary-gold text-primary-black" 
                            : "bg-white/5 text-white/20 cursor-not-allowed"
                        )}
                      >
                        Select Appointment Time <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-serif flex items-center gap-3">
                         <CalendarIcon className="text-primary-gold w-5 h-5" />
                         When shall we expect you?
                      </h3>
                      <p className="text-sm text-primary-beige/40 font-light italic">Appointments available between 9 AM and 10 PM daily.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <label className="text-xs uppercase tracking-widest text-primary-gold font-bold block">Preferred Date</label>
                          <input 
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-primary-beige focus:outline-none focus:border-primary-gold transition-all"
                          />
                       </div>
                       <div className="space-y-4">
                          <label className="text-xs uppercase tracking-widest text-primary-gold font-bold block">Preferred Time</label>
                          <input 
                            type="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-primary-beige focus:outline-none focus:border-primary-gold transition-all"
                          />
                       </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-primary-beige/40 text-xs uppercase tracking-widest font-bold hover:text-primary-gold transition-all"
                      >
                        Back to Rituals
                      </button>
                      <button
                        type="button"
                        disabled={!formData.date || !formData.time}
                        onClick={nextStep}
                        className={cn(
                          "px-10 py-5 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-3 transition-all",
                          (formData.date && formData.time)
                            ? "bg-primary-gold text-primary-black" 
                            : "bg-white/5 text-white/20 cursor-not-allowed"
                        )}
                      >
                        Your Details <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-10"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-serif flex items-center gap-3">
                         <User className="text-primary-gold w-5 h-5" />
                         Who is visiting us?
                      </h3>
                      <p className="text-sm text-primary-beige/40 font-light italic">Your contact information is safe with us.</p>
                    </div>

                    <div className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <label className="text-xs uppercase tracking-widest text-primary-gold font-bold block">Full Name</label>
                            <input 
                              type="text"
                              placeholder="e.g. Shahir Ali"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-primary-beige focus:outline-none focus:border-primary-gold transition-all"
                            />
                          </div>
                          <div className="space-y-4">
                            <label className="text-xs uppercase tracking-widest text-primary-gold font-bold block">Phone Number</label>
                            <input 
                              type="tel"
                              placeholder="e.g. +91 98XXX XXXXX"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-primary-beige focus:outline-none focus:border-primary-gold transition-all"
                            />
                          </div>
                       </div>

                       {/* Summary Card */}
                       <div className="bg-primary-gold/5 border border-primary-gold/10 p-8 rounded-3xl space-y-4">
                          <p className="text-[10px] uppercase tracking-widest text-primary-gold/60">Appointment Summary</p>
                          <div className="flex flex-wrap gap-8">
                             <div className="space-y-1">
                                <span className="text-[10px] uppercase tracking-widest text-primary-beige/30 block">Ritual</span>
                                <span className="font-serif text-primary-gold">{selectedService?.name}</span>
                             </div>
                             <div className="space-y-1">
                                <span className="text-[10px] uppercase tracking-widest text-primary-beige/30 block">Scheduled For</span>
                                <span className="font-serif text-primary-gold">{formData.date} at {formData.time}</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="pt-6 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-primary-beige/40 text-xs uppercase tracking-widest font-bold hover:text-primary-gold transition-all"
                      >
                        Back to Schedule
                      </button>
                      <button
                        type="submit"
                        disabled={loading || !formData.name || !formData.phone}
                        className={cn(
                          "px-16 py-6 rounded-full text-sm uppercase tracking-widest font-black flex items-center gap-4 transition-all shadow-xl",
                          (!formData.name || !formData.phone)
                            ? "bg-white/5 text-white/20 cursor-not-allowed" 
                            : "bg-primary-gold text-primary-black shadow-primary-gold/20 hover:scale-105"
                        )}
                      >
                        {loading ? 'Processing...' : 'Confirm Appointment'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 text-center">
           <div className="flex items-center gap-2 text-primary-gold/60">
              <AlertCircle className="w-4 h-4" />
              <span className="text-[10px] uppercase tracking-widest">Confidential Booking & No Pre-payment</span>
           </div>
           <p className="text-xs text-primary-beige/30 max-w-lg leading-relaxed">
             *Appointments requested via this form are subject to availability. 
             A representative will contact you via Phone or WhatsApp within 60 minutes to confirm your slot.
           </p>
        </div>
      </div>
    </div>
  );
}

