import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if the target or its parent is a link or button
      if (e.target.closest('a, button')) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button')) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 8,
      y: position.y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#0A2342',
      mixBlendMode: 'difference', // This creates a cool color inversion effect
    },
    hover: {
      x: position.x - 24,
      y: position.y - 24,
      height: 48,
      width: 48,
      backgroundColor: '#ffffff',
      mixBlendMode: 'difference',
    },
  };

  return (
    // We hide the custom cursor on mobile devices (md:block)
    <motion.div
      variants={cursorVariants}
      animate={isHoveringLink ? 'hover' : 'default'}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:block"
    />
  );
};

export default CustomCursor;