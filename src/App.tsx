/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Menu, 
  X, 
  Facebook, 
  MessageCircle, 
  Droplets, 
  Wrench, 
  Trash2, 
  Construction, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Review {
  name: string;
  comment: string;
  rating: number;
  image: string;
}

interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

// --- Constants ---
const CONTACT_NUMBERS = [
  { label: 'Globe', number: '09177812585', link: 'tel:09177812585' },
  { label: 'Smart', number: '09953570018', link: 'tel:09953570018' },
  { label: 'PLDT', number: '0287102351', link: 'tel:0287102351' },
];

const SERVICES: Service[] = [
  { 
    title: 'Septic Tank Siphoning', 
    description: 'Professional poso negro cleaning, truck siphoning, and sludge removal services.',
    icon: <Droplets className="w-8 h-8 text-blue-600" />
  },
  { 
    title: 'Pipe Declogging', 
    description: 'Expert declogging for toilets, sinks, floor drains, and main sewer lines.',
    icon: <Trash2 className="w-8 h-8 text-blue-600" />
  },
  { 
    title: 'Grease Trap Cleaning', 
    description: 'Regular maintenance and thorough cleaning of commercial and residential grease traps.',
    icon: <Wrench className="w-8 h-8 text-blue-600" />
  },
  { 
    title: 'Septic Vault Installation', 
    description: 'Construction and installation of new septic vaults following standard engineering specs.',
    icon: <Construction className="w-8 h-8 text-blue-600" />
  },
  { 
    title: 'Plumbing Repairs', 
    description: 'General plumbing repairs, re-piping, and installation of fixtures.',
    icon: <Wrench className="w-8 h-8 text-blue-600" />
  },
  { 
    title: 'Excavation Work', 
    description: 'Professional excavation for plumbing systems and septic tank construction.',
    icon: <Construction className="w-8 h-8 text-blue-600" />
  },
];

const REVIEWS: Review[] = [
  { 
    name: 'Jose Garcia', 
    comment: 'Outstanding job on our septic tank. The team was very courteous and knowledgeable. Highly recommended!', 
    rating: 5,
    image: 'https://picsum.photos/seed/jose/100/100'
  },
  { 
    name: 'Maria Santos', 
    comment: 'Prompt and efficient service for our clogged sink. They arrived on time and fixed it quickly.', 
    rating: 5,
    image: 'https://picsum.photos/seed/maria/100/100'
  },
  { 
    name: 'Anna Reyes', 
    comment: 'Very professional and clean work! They made sure everything was tidy after the repair.', 
    rating: 5,
    image: 'https://picsum.photos/seed/anna/100/100'
  },
  { 
    name: 'Mark Lim', 
    comment: 'Saved us during a septic emergency in the middle of the night! 24/7 service is real.', 
    rating: 5,
    image: 'https://picsum.photos/seed/mark/100/100'
  },
];

const GALLERY: GalleryImage[] = [
  { id: 1, url: 'https://picsum.photos/seed/plumbing-truck/800/600', caption: 'Septic tank siphoning / poso negro cleaning' },
  { id: 2, url: 'https://picsum.photos/seed/drain-pipe/800/600', caption: 'Pipe declogging (toilet, sink, floor drain)' },
  { id: 3, url: 'https://picsum.photos/seed/industrial-pipes/800/600', caption: 'Grease trap cleaning' },
  { id: 4, url: 'https://picsum.photos/seed/construction-site/800/600', caption: 'New septic vault installation' },
  { id: 5, url: 'https://picsum.photos/seed/plumber-tools/800/600', caption: 'General plumbing repairs & re-piping' },
  { id: 6, url: 'https://picsum.photos/seed/excavator/800/600', caption: 'Excavation work' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="bg-blue-600 p-2 rounded-lg">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight text-blue-900">J.A. Torres</h1>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-blue-600">Plumbing Services</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="tel:09177812585" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call 24/7
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['About', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-2xl font-bold text-left border-b border-slate-100 pb-4"
                >
                  {item}
                </button>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                {CONTACT_NUMBERS.map((num) => (
                  <a 
                    key={num.label}
                    href={num.link}
                    className="flex items-center justify-between bg-slate-50 p-4 rounded-xl border border-slate-200"
                  >
                    <span className="font-semibold">{num.label}</span>
                    <span className="text-blue-600 font-bold">{num.number}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <CheckCircle className="w-4 h-4" />
                20% OFF First Siphoning Service
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                Expert Plumbing & <br />
                <span className="text-blue-600">Septic Services</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Over 20 years of experience providing 24/7 emergency Malabanan siphoning, declogging, and plumbing solutions in Metro Manila and Visayas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:09177812585" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Call Now – 24/7 Emergency
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl text-lg font-bold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      alt="Customer"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex text-amber-400 mb-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-500 font-medium">Trusted by 5,000+ Happy Clients</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/plumber-working/800/1000" 
                  alt="Professional Plumbing Service" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900">24/7</p>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Emergency Support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- About Us --- */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">About J.A. Torres</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Your Trusted Partner in Plumbing Excellence</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 20 years of experience, J.A. Torres Plumbing Services (also known as J.A. Torres Malabanan) has been the go-to provider for septic tank siphoning, declogging, and general plumbing repairs. We pride ourselves on our 24/7 availability, professional team, and commitment to clean, efficient work. Whether it's a residential emergency or commercial maintenance, we deliver results you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* --- Our Services --- */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">What We Do</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">Comprehensive Solutions</h3>
            </div>
            <p className="text-slate-500 max-w-md">
              From routine maintenance to complex installations, our team handles every plumbing challenge with precision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors" })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Photo Gallery --- */}
      <section id="gallery" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Our Work</h2>
            <h3 className="text-3xl md:text-4xl font-black mb-6">Service Gallery</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real photos from our service sites across Metro Manila and Visayas. We take pride in our clean and professional execution.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {GALLERY.map((img) => (
              <motion.div 
                key={img.id}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-sm font-bold">{img.caption}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-400 md:hidden">{img.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.caption} 
                className="w-full h-auto rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-white text-center mt-6 text-xl font-bold">{selectedImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Customer Reviews --- */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">What Our Clients Say</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div 
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Verified Client</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Service Areas --- */}
      <section className="py-20 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-blue-200 uppercase tracking-[0.2em] mb-4">Coverage</h2>
              <h3 className="text-3xl md:text-4xl font-black mb-6">Service Areas</h3>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                We have mobile teams ready to travel to your location. Our primary service hubs include:
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    Metro Manila
                  </h4>
                  <ul className="space-y-2 text-blue-100 opacity-80">
                    <li>• Quezon City</li>
                    <li>• Manila & Caloocan</li>
                    <li>• Makati & Taguig</li>
                    <li>• Pasig & Mandaluyong</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    Visayas Region
                  </h4>
                  <ul className="space-y-2 text-blue-100 opacity-80">
                    <li>• Cebu City</li>
                    <li>• Iloilo City</li>
                    <li>• Tacloban</li>
                    <li>• Leyte</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h4 className="text-2xl font-bold mb-4">24/7 Availability</h4>
              <p className="text-blue-100 mb-6">Our emergency response team is available around the clock, including holidays and weekends.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold opacity-60">Response Time</p>
                    <p className="font-bold">Within 1-2 Hours (Metro Manila)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-blue-300" />
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold opacity-60">Status</p>
                    <p className="font-bold">Currently Accepting Bookings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Promotions --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-50 border-2 border-emerald-100 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <div className="bg-emerald-600 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">Special Offer</div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Get 20% OFF Your First Siphoning Service</h3>
              <p className="text-lg text-slate-600">Exclusive discount for new residential and commercial clients. Mention this website when you call!</p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="tel:09177812585" 
                className="bg-emerald-600 text-white px-10 py-5 rounded-2xl text-xl font-black hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-3"
              >
                Claim Discount
                <ChevronRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Contact Us</h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Get in Touch Today</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Need emergency plumbing or septic tank siphoning? Our team is ready to help 24/7. Call us or send a message for a free estimate.
              </p>
              
              <div className="space-y-6 text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Call Us Anytime</p>
                    <div className="space-y-2">
                      {CONTACT_NUMBERS.map((num) => (
                        <a key={num.label} href={num.link} className="block text-xl font-bold hover:text-blue-600 transition-colors">
                          {num.label}: {num.number}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                    <a href="mailto:marketing.malabanan@gmail.com" className="text-xl font-bold hover:text-blue-600 transition-colors">
                      marketing.malabanan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <MessageCircle className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">WhatsApp</p>
                    <a href="https://wa.me/639177812585" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-emerald-600 transition-colors">
                      +63 917 781 2585
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                    <Facebook className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Facebook</p>
                    <a href="https://www.facebook.com/jatorresplumbingservices" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-blue-800 transition-colors">
                      J.A. Torres Plumbing Services
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <h4 className="text-2xl font-bold mb-8 text-slate-900 text-center">Send a Message</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="Juan Dela Cruz" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="0917 XXX XXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                  <input type="text" className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 focus:border-blue-600 focus:bg-white transition-all outline-none" placeholder="City / Barangay" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message / Service Needed</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-5 py-3 focus:border-blue-600 focus:bg-white transition-all outline-none resize-none" placeholder="Describe your plumbing issue..."></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold leading-tight">J.A. Torres</h1>
                  <p className="text-[10px] uppercase tracking-widest font-semibold text-blue-400">Plumbing Services</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Expert Malabanan siphoning, declogging, and plumbing services with over 20 years of excellence. Available 24/7.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/jatorresplumbingservices" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:marketing.malabanan@gmail.com" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {['About Us', 'Our Services', 'Photo Gallery', 'Customer Reviews', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))} className="hover:text-blue-400 transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-slate-400">
                <li>• Septic Siphoning</li>
                <li>• Pipe Declogging</li>
                <li>• Grease Trap Cleaning</li>
                <li>• Vault Installation</li>
                <li>• General Plumbing</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Blk 5, Bankers Village, 10 M. Victoria St., Caloocan City, Metro Manila</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:09177812585" className="hover:text-blue-400">0917 781 2585</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:marketing.malabanan@gmail.com" className="hover:text-blue-400">marketing.malabanan@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} J.A. Torres Plumbing Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* --- Floating Call Button --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp Bubble */}
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          href="https://wa.me/639177812585"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all hover:-translate-y-1"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
        
        {/* Call Bubble */}
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          href="tel:09177812585"
          className="bg-blue-600 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:-translate-y-1 flex items-center gap-3 group"
        >
          <div className="bg-white/20 p-1 rounded-full animate-pulse group-hover:animate-none">
            <Phone className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-none mb-1">Call Now 24/7</p>
            <p className="text-sm font-black leading-none">0917 781 2585</p>
          </div>
        </motion.a>
      </div>

    </div>
  );
}
