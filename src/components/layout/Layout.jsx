import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import BackToTopButton from '../common/BackToTopButton.jsx';
import CustomCursor from '../common/CustomCursor.jsx';

const Layout = () => {
  const location = useLocation();

  return (
    <motion.div> {/* Wraps entire layout */}
      <div className="min-h-screen flex flex-col bg-[#FDFBF6] text-[#2C3539] font-sans">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-24">
          <AnimatePresence mode="wait">
            {/* The key is essential for AnimatePresence to detect route changes */}
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </motion.div>
  );
};

export default Layout;

