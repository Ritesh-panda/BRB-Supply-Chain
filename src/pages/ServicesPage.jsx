import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import CTA from '../components/common/CTA';
import { motion } from "framer-motion";

const ServicesPage = () => {

  const coreServices = [
    {
      title: "Door-to-Door Delivery",
      description: "We offer comprehensive door-to-door delivery services for both B2B and B2C customers.",
      icon: "📦",
      citation: [5, 7]
    },
    {
      title: "FTL & PTL",
      description: "Specialized services for Full Truck Load (FTL) and Part Truck Load (PTL) consignments.",
      icon: "🚚",
      citation: 14
    },
    {
      title: "Warehousing & Inventory",
      description: "Secure, state-of-the-art warehousing and complete inventory management solutions.",
      icon: "🏢",
      citation: 8
    },
    {
      title: "Express Parcel",
      description: "Time-sensitive and critical parcel delivery services to ensure your items arrive quickly.",
      icon: "🚀",
      citation: 14
    },
    {
      title: "3PL Services",
      description: "Complete third-party logistics (3PL) to manage your supply chain efficiently.",
      icon: "🔗",
      citation: 14
    },
    {
      title: "Reverse Logistics",
      description: "Managed by skilled executives, we handle return management and reverse logistics seamlessly.",
      icon: "🔄",
      citation: 14
    }
  ];

  const industries = [
    { name: "Telecom", icon: "📡", citation: 21 },
    { name: "FMCG", icon: "🛒", citation: 22 },
    { name: "Automotive", icon: "🚗", citation: 23 },
    { name: "Pharmacy", icon: "💊", citation: 24 },
    { name: "Electronics", icon: "📺", citation: 25 },
    { name: "Paints", icon: "🎨", citation: 26 },
    { name: "Batteries", icon: "🔋", citation: 27 },
    { name: "Fashion", icon: "👕", citation: 28 },
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
            <h1 className="font-serif text-5xl font-bold text-[#0A2342]">Our Services</h1>
            <p className="font-sans text-lg text-gray-600 mt-2 max-w-3xl mx-auto">Comprehensive solutions, tailored for your business needs in Odisha and beyond.</p>
          </div>
        </section>
      </ScrollReveal>

      {/* --- SERVICE 1: WAREHOUSING & INVENTORY --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img 
src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"               alt="Clean and organized warehouse"
              className="rounded-lg shadow-xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#0A2342] mb-4">Warehousing & Inventory Management</h2>
              <p className="font-sans text-gray-600 mb-4">
                We provide efficient, secure, and scalable warehousing solutions.  Our state-of-the-art facilities and expert inventory management ensure your assets are safe and accounted for. 
              </p>
              <ul className="list-disc list-inside font-sans text-gray-600 space-y-2">
                <li>Secure storage for various product types</li>
                <li>Real-time inventory tracking and reporting</li>
                <li>Order fulfillment and distribution services</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SERVICE 2: TRANSPORTATION --- */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.2} className="md:order-last">
              <div>
                <img 
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="A fleet of logistics trucks, ships, and planes"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:order-first">
              <div>
                <h2 className="font-serif text-3xl font-bold text-[#0A2342] mb-4">Transportation & Distribution</h2>
                <p className="font-sans text-gray-600 mb-4">
                  Our flexible transportation services are the backbone of your supply chain. We handle logistics throughout Odisha and offer pan-India connections. 
                </p>
                <ul className="list-disc list-inside font-sans text-gray-600 space-y-2">
                  <li>Full Truck Load (FTL) for large consignments</li>
                  <li>Part Truck Load (PTL) for cost-effective, smaller shipments </li>
                  <li>Reliable door-to-door delivery services for B2B and B2C customers </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* --- SERVICE 3: END-TO-END SUPPLY CHAIN --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <img 
              src="src/assets/3pl.jpg" 
              alt="Logistics professional working on a laptop in a warehouse"
              className="rounded-lg shadow-xl"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#0A2342] mb-4">End-to-End Supply Chain Management</h2>
              <p className="font-sans text-gray-600 mb-4">
                We position ourselves as your one-stop solution. From warehousing to final distribution, we manage your entire supply chain. 
              </p>
              <ul className="list-disc list-inside font-sans text-gray-600 space-y-2">
                <li>Comprehensive 3PL (Third-Party Logistics) services </li>
                <li>Efficient Reverse Logistics and returns management </li>
                <li>Express Parcel delivery for time-sensitive shipments </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- CORE CAPABILITIES GRID --- */}
      <section className="bg-white">
        <div className="container mx-auto px-6 pb-24">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#0A2342]">Our Core Capabilities</h2>
              <p className="font-sans text-gray-600 mt-2 max-w-2xl mx-auto">We provide a full spectrum of logistics services designed to handle every aspect of the supply chain.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-sans text-2xl font-bold text-[#0A2342] mb-2">{service.title}</h3>
                  <p className="font-sans text-gray-700">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE --- */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-6 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-4xl font-bold text-[#0A2342]">Industries We Serve</h2>
            <p className="font-sans text-gray-600 mt-2 mb-16 max-w-3xl mx-auto">
              Our team boasts over 100+ years of combined experience providing tailored logistics solutions for a wide range of sectors.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.name} delay={index * 0.05}>
                <div className="p-4 bg-white rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl">{industry.icon}</div>
                  <p className="font-sans font-semibold text-gray-700 mt-3 text-sm">{industry.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- REUSABLE CTA SECTION --- */}
      <CTA />
    </motion.div>
  );
};

export default ServicesPage;