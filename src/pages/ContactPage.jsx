import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import CTA from '../components/common/CTA';
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: false, message: 'Thank you! Your message has been sent.' });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true, message: 'Oops! There was a problem submitting your form. Please try again.' });
    }
  };


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
            <h1 className="font-serif text-5xl font-bold text-[#0A2342]">Get In Touch</h1>
            <p className="font-sans text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
              We're here to help build your success. Reach out to us for any inquiries or to get a personalized quote.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* --- CONTACT FORM & DETAILS SECTION --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left Column: Contact Details & Map */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-[#0A2342]">Contact Information</h2>
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-[#0A2342] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <p className="font-sans text-gray-700">Plot No. 966, Saptasati Vihar, Lane-2, Near ISA Diagnostics, Bhubaneswar - 751010, ODISHA</p>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="text-[#0A2342] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                <p className="font-sans text-gray-700">+91 98530 34609</p>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="text-[#0A2342] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                <p className="font-sans text-gray-700">brbsupplychain@gmail.com</p>
              </div>
               {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="text-[#0A2342] mt-1 shrink-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                <div>
                  <p className="font-sans font-semibold text-gray-800">Business Hours</p>
                  <p className="font-sans text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              {/* Map */}
              <div className="pt-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.344437298681!2d85.79797431536316!3d20.24467021949317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7e4b827b587%3A0x4a75417935c1def!2sSaptasati%20Vihar!5e0!3m2!1sen!2sin!4v1672922111850!5m2!1sen!2sin"
                  width="100%" 
                  className="h-80 rounded-lg shadow-md border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {formStatus.submitted ? (
                <div className="text-center">
                  <h3 className="font-sans text-2xl font-bold text-green-600">{formStatus.message}</h3>
                  <p className="text-gray-600 mt-2">We will get back to you shortly.</p>
                </div>
              ) : (
                <form 
                  onSubmit={handleFormSubmit} 
                  action="https://formspree.io/f/your_unique_id" // Remember to put your Formspree ID here
                  method="POST" 
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="font-sans font-bold text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-sans font-bold text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="font-sans font-bold text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="5" className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]" required></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className="w-full bg-[#0A2342] text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-400"
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus.error && <p className="text-red-600 mt-2">{formStatus.message}</p>}
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- REUSABLE CTA SECTION --- */}
      <CTA />
    </motion.div>
  );
};

export default ContactPage;