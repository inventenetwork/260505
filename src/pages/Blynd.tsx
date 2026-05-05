import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Gift, 
  Trees, 
  Map as MapIcon, 
  ArrowRight, 
  Star, 
  Quote,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import BlyndLogo from '../components/BlyndLogo';

export default function Blynd() {
  const steps = [
    {
      title: 'Select Category',
      desc: 'Choose your vibe: Nature, Heritage, or Modern Luxury.',
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      title: 'Receive Surprise',
      desc: 'Get your blindbox itinerary 48 hours before departure.',
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: 'Enjoy Experience',
      desc: 'Embark on a curated journey designed for the curious.',
      icon: <Compass className="w-8 h-8" />
    }
  ];

  const destinations = [
    {
      title: 'The Hidden Rainforest',
      location: 'Belum-Temenggor',
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Heritage Haven',
      location: 'George Town, Penang',
      img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Island Sanctuary',
      location: 'Langkawi Archipelago',
      img: 'https://images.unsplash.com/photo-1544945582-3b466d874eac?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-[#2a1d15] text-[#f5f2ed] min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a1d15]/50 to-[#2a1d15]" />
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col items-center"
          >
            <BlyndLogo size="xl" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-12 py-5 bg-stone-100 text-stone-900 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-3 hover:bg-yellow-500 hover:text-white transition-all"
            >
              Book Your Experience <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#eab308] mb-8">How It Works</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-none mb-12">
            The Art of <span className="text-[#eab308]">Surprise</span>.
          </h3>
          <p className="text-[#f5f2ed]/60 max-w-2xl mx-auto leading-relaxed">
            We curate high-end travel experiences across Malaysia, keeping the destination a mystery until the very last moment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white/5 border border-white/10 rounded-3xl text-center group"
            >
              <div className="text-[#eab308] mb-8 flex justify-center group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">{step.title}</h4>
              <p className="text-sm text-[#f5f2ed]/50 leading-relaxed">{step.desc}</p>
              {i < 2 && (
                <div className="absolute top-1/2 -right-6 hidden lg:block text-[#eab308]/20">
                  <ArrowRight className="w-12 h-12" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-32 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#eab308] mb-8">Curated Destinations</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-none">
                Hidden <span className="text-[#eab308]">Sanctuaries</span>.
              </h3>
            </div>
            <button className="text-[10px] uppercase tracking-widest font-bold text-[#f5f2ed]/40 hover:text-[#eab308] transition-colors">
              Explore Categories →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10"
              >
                <img 
                  src={dest.img} 
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#eab308] mb-2 block">
                    {dest.location}
                  </span>
                  <h4 className="text-2xl font-serif font-bold text-white">
                    {dest.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-[#eab308]/20 mx-auto mb-12" />
          <h3 className="text-2xl md:text-4xl font-serif italic leading-relaxed mb-12">
            "Blynd redefined how I see travel. The anticipation was half the fun, and the destination was beyond anything I could have planned myself."
          </h3>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#eab308]/20 mb-4 overflow-hidden">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#eab308]">Sarah Jenkins</span>
            <span className="text-[10px] uppercase tracking-widest text-[#f5f2ed]/40">Luxury Traveler</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-[#eab308]">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-[#2a1d15] leading-none mb-12">
            Embrace the <span className="text-white">Unknown</span>.
          </h3>
          <button className="px-12 py-6 bg-[#2a1d15] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#3d2c20] transition-all">
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
