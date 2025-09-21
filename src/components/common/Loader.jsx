import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const companyName = "BRB Supply Chain";

  // Framer Motion variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Time between each letter animation
        delayChildren: 0.2,
      },
    },
  };

  // Framer Motion variants for each letter
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBF6]">
      <motion.h1
        className="font-serif text-3xl md:text-5xl font-bold text-[#0A2342] flex overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {companyName.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: 'inline-block', whiteSpace: 'pre' }} // Use pre to respect spaces
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="font-sans text-gray-500 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }} // Fades in after the main animation
      >
        Connecting Eastern India...
      </motion.p>
    </div>
  );
};

export default Loader;