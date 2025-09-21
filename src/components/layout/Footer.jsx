import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/brb-supply-chain/', icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
    { name: 'Instagram', href: 'https://www.instagram.com/brbsupplychain?igsh=MTN5NjFkeWpvOGg2Zw==', icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg> },
    { name: 'WhatsApp', href: 'https://wa.me/919853034609', icon: <svg fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.996 0-3.935-.53-5.571-1.548l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.447-4.433-9.886-9.888-9.886-5.448 0-9.886 4.434-9.889 9.885.002 2.024.603 3.935 1.737 5.63l-.438 1.593z"/></svg> },
  ];

  return (
    <footer className="bg-[#1E1E1E] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & About */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl font-bold">BRB Supply Chain</h2>
            <p className="font-sans text-gray-300 mt-2 text-sm">
              Your trusted partner for complete SCM solutions in Odisha and across Eastern India.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-wide">Quick Links</h3>
            <ul className="mt-4 space-y-2 font-sans text-sm">
              <li><Link to="/" className="text-gray-300 hover:Sky-Blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:Sky-Blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:Sky-Blue transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:Sky-Blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
<div>
  <h3 className="font-sans font-bold uppercase tracking-wide">Contact Us</h3>
  <ul className="mt-4 space-y-3 font-sans text-sm text-gray-300">
    <li className="flex items-start">
      <span className="mt-1 mr-2 shrink-0">📍</span>
      <span>Plot No. 966, Saptasati Vihar, Bhubaneswar - 751010, ODISHA</span>
    </li>
    <li className="flex items-start">
      <span className="mt-1 mr-2 shrink-0">📞</span>
      <a href="tel:+919853034609" className="hover:text-white transition-colors">+91 98530 34609</a>
    </li>
    <li className="flex items-start">
      <span className="mt-1 mr-2 shrink-0">✉️</span>
      <a href="mailto:brbsupplychain@gmail.com" className="hover:text-white transition-colors">brbsupplychain@gmail.com</a>
    </li>
  </ul>
</div>
          {/* Column 4: Follow Us */}
          <div>
            <h3 className="font-sans font-bold uppercase tracking-wide">Follow Us</h3>
            <div className="mt-4 flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <div className="h-6 w-6">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} BRB Supply Chain. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;