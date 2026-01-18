import React from 'react';
import ScrollReveal from '../components/ScrollReveal.jsx';
import CTA from '../components/common/CTA.jsx';
import { motion } from "framer-motion";

const AboutPage = () => {

  const leaders = [
     {
      name: "Biranchi Narayan Mishra",
      title: "Partner & Co-Founder",
      quote: `"Efficiency and reliability guaranteed."`,
      experience: "15+ years in Courier & Cargo",
      imgSrc: "/assets/BNM.jpeg", 
      linkedinUrl: "#" 
    },
    {
      name: "Ramakanta Panda",
      title: "Managing Partner & Co-Founder",
      quote: `"Streamlining supply chains for success."`,
      experience: "25+ years in SCM with India's top corporates",
      imgSrc: "/assets/Ramakanta_panda.jpg",
      linkedinUrl: "https://www.linkedin.com/in/ramakanta-panda-28141532/" 
    },
   
    {
      name: "Bijaya Kumar Dash",
      title: "Partner & Co-Founder",
      quote: `"Delivering excellence, every time."`,
      experience: "30+ years in Courier & Cargo",
      imgSrc: "/assets/bkd.jpeg", 
      linkedinUrl: "#" 
    }
  ];

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
              Our strength lies in our experience. Our leaders bring over 100+ years of combined regional expertise.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {leaders.map((leader, index) => (
              <ScrollReveal key={leader.name} delay={index * 0.1}>
                <div className="text-center">
                  <a href={leader.linkedinUrl} target="_blank" rel="noopener noreferrer" className="relative inline-block group">
                    <img 
                      src={leader.imgSrc}
                      alt={leader.name} 
                      className="w-48 h-48 rounded-full mx-auto shadow-lg object-cover" 
                    />
                    <div className="absolute inset-0 w-48 h-48 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-auto">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                  </a>
                  <h3 className="font-sans text-xl font-bold text-[#0A2342] mt-4">{leader.name}</h3>
                  <p className="font-sans text-gray-500 mb-2">{leader.title}</p>
                  <p className="font-sans text-sm text-gray-600 italic">{leader.quote}</p>
                  <p className="font-sans text-sm text-gray-500 mt-2">{leader.experience}</p>
                </div>
              </ScrollReveal>
            ))}
            
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
            
            <ScrollReveal delay={0.1}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="/assets/odisha_dis.png" 
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

            <ScrollReveal delay={0.2}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="/assets/warehouse.png" 
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

            <ScrollReveal delay={0.3}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="/assets/BRB_img.png" 
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

            <ScrollReveal delay={0.4}>
              <div className="relative h-64 rounded-lg shadow-md overflow-hidden group">
                <img 
                  src="/assets/man.png" 
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
      
      <CTA />
    </motion.div>
  );
};

export default AboutPage;

