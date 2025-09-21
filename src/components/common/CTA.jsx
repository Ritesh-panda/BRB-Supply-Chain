import React from 'react';
import ScrollReveal from '../ScrollReveal';
import { Link } from 'react-router-dom'; // 1. Import Link

const CTA = () => {
  return (
    <section className="bg-[#0A2342]">
      <div className="container mx-auto px-6 py-20 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl font-bold text-white">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="font-sans text-gray-300 mt-4 mb-8 max-w-2xl mx-auto">
            Let's discuss how BRB Supply Chain can become a trusted partner in your success. Contact us today for a personalized consultation and quote.
          </p>
          {/* 2. Wrap the button with a Link */}
          <Link to="/contact">
            <button className="bg-[#D4AF37] text-[#0A2342] font-bold py-3 px-8 rounded-md hover:opacity-90 transition-all duration-300">
              Get a Quote
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;