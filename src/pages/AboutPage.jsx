import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import CTA from '../components/common/CTA';
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
     
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* --- PAGE HEADER --- */}
      <ScrollReveal>
        <section className="bg-white text-center py-20">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-5xl font-bold text-[#0A2342]">About BRB Supply Chain</h1>
            <p className="font-sans text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              A trusted, Odisha-based logistics partner recognized for comprehensive service and a customer-focused approach.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* --- OUR STORY, VISION & PHILOSOPHY SECTION --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Professional team discussing logistics strategy"
              className="rounded-lg shadow-xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#0A2342] mb-4">Our Reputation is Our Foundation</h2>
              <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                BRB Supply Chain was founded on the principle of providing a one-stop solution for logistics in Odisha. Our reputation is built on the pillars of reliability, timely delivery, and operational efficiency.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2342] mb-2">Our Vision</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    To become the leading logistics service provider in Odisha and India, offering safe, cost-effective services and acting as a one-stop shop for all logistical needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A2342] mb-2">Our Philosophy</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    We believe it is always 'Day 1' for us. We give the utmost importance to every customer's satisfaction, making it the cornerstone of our operations.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- MEET OUR LEADERSHIP SECTION --- */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-[#0A2342]">Meet Our Leadership</h2>
            <p className="font-sans text-gray-600 mt-2 mb-16">
              Our strength lies in our experience.  Our leaders bring over 100+ years of combined regional expertise.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Team Member 1 */}
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <img src="src/assets/Ramakanta_panda.jpg" alt="Ramakanta Panda" className="w-50 h-50 rounded-full mx-auto mb-4 shadow-lg object-cover" />
                 <h3 className="font-sans text-xl font-bold text-[#0A2342]">Ramakanta Panda </h3>
                 <p className="font-sans text-gray-500 mb-2">Managing Partner & Founder </p>
                 <p className="font-sans text-sm text-gray-600 italic">"Streamlining supply chains for success." </p>
                 <p className="font-sans text-sm text-gray-500 mt-2">24 years in SCM with India's top corporates</p>
              </div>
            </ScrollReveal>

            {/* Team Member 2 */}
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <img src="https://placehold.co/400x400/EBF8FF/0A2342?text=BNM" alt="Biranchi Narayan Mishra" className="w-50 h-50 rounded-full mx-auto mb-4 shadow-lg object-cover" />
                 <h3 className="font-sans text-xl font-bold text-[#0A2342]">Biranchi Narayan Mishra </h3>
                 <p className="font-sans text-gray-500 mb-2">Partner & Operations Head </p>
                 <p className="font-sans text-sm text-gray-600 italic">"Efficiency and reliability guaranteed." </p>
                  <p className="font-sans text-sm text-gray-500 mt-2">15+ years in Courier & Cargo </p>
              </div>
            </ScrollReveal>

            {/* Team Member 3 */}
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <img src="https://placehold.co/400x400/EBF8FF/0A2342?text=BKD" alt="Bijaya Kumar Dash" className="w-50 h-50 rounded-full mx-auto mb-4 shadow-lg object-cover" />
                 <h3 className="font-sans text-xl font-bold text-[#0A2342]">Bijaya Kumar Dash </h3>
                 <p className="font-sans text-gray-500 mb-2">Partner & Founder </p>
                 <p className="font-sans text-sm text-gray-600 italic">"Delivering excellence, every time." </p>
                  <p className="font-sans text-sm text-gray-500 mt-2">30+ years in Courier & Cargo </p>
              </div>
            </ScrollReveal>
            
          </div>
        </div>
      </section>
 {/* --- OUR INFRASTRUCTURE SECTION (VIBRANT WITH IMAGES) --- */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-[#0A2342]">Our Robust Infrastructure</h2>
            <p className="font-sans text-gray-600 mt-2 mb-16 max-w-3xl mx-auto">
              The backbone of our reliable and efficient logistics network across the state.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Branches */}
            <ScrollReveal delay={0.1}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="src/assets/odisha_dis.png" 
                  alt="Branches" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                  <h3 className="font-serif text-5xl font-bold">31</h3>
                  <p className="font-sans font-semibold text-lg mt-2">Branches Across Odisha</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Warehouse Space */}
            <ScrollReveal delay={0.2}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="src/assets/warehouse.png" 
                  alt="Warehouse" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                  <h3 className="font-serif text-5xl font-bold">15,000+</h3>
                  <p className="font-sans font-semibold text-lg mt-2">Sq. Ft. Warehouse Space</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Owned Vehicles */}
            <ScrollReveal delay={0.3}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="src/assets/BRB_img.png" 
                  alt="Delivery Vehicles" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                  <h3 className="font-serif text-5xl font-bold">18+</h3>
                  <p className="font-sans font-semibold text-lg mt-2">Owned Vehicles & Fleet</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Dedicated Personnel */}
            <ScrollReveal delay={0.4}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="src/assets/man.png" 
                  alt="Dedicated Personnel" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                <div className="relative p-6 flex flex-col justify-end h-full text-white">
                  <h3 className="font-serif text-5xl font-bold">100+</h3>
                  <p className="font-sans font-semibold text-lg mt-2">Dedicated Personnel</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
      {/* --- REUSABLE CTA SECTION --- */}
      <CTA />
    </motion.div>
  );
};

export default AboutPage;