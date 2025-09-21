import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // Added Link
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const isDesktopExpanded = isHovered || isScrolled;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } }
  };

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, y: 20 }
  };


  return (
    <>
      <div className="h-24" /> {/* Spacer to prevent content jump */}

      {/* --- DESKTOP DYNAMIC ISLAND NAVBAR --- */}
      <div className="hidden md:flex justify-center">
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="fixed top-4 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } }}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }}
            className={`flex items-center justify-center gap-6 px-4 py-2 bg-black/80 text-white shadow-2xl shadow-black/20 ring-1 ring-white/10 backdrop-blur-lg
                       ${isDesktopExpanded ? 'w-[600px] rounded-2xl' : 'w-auto rounded-full'}`}
          >
            <AnimatePresence>
              {isDesktopExpanded && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <NavLink to="/" className="font-serif text-xl font-bold whitespace-nowrap">
                    BRB Supply Chain
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.nav layout className="flex items-center gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `relative px-3 py-1.5 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </motion.nav>
            <AnimatePresence>
              {isDesktopExpanded && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Link to="/contact">
                    <button className="bg-white/90 text-black text-sm font-bold py-2 px-4 rounded-lg hover:bg-white transition-colors">
                      Get a Quote
                    </button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* --- MOBILE NAVBAR --- */}
      <div className="md:hidden">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-md backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                 <NavLink to="/" className="text-2xl font-serif font-bold text-[#0A2342]">
                    BRB Supply Chain
                 </NavLink>
                 <motion.button 
                    onClick={() => setIsMenuOpen(true)} 
                    className="z-50 relative h-8 w-8 text-[#0A2342]"
                 >
                    <span className="absolute h-0.5 w-6 bg-current top-[35%]" />
                    <span className="absolute h-0.5 w-6 bg-current top-[50%]" />
                    <span className="absolute h-0.5 w-6 bg-current top-[65%]" />
                 </motion.button>
            </div>
        </div>
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed inset-0 bg-black/50 backdrop-blur-lg z-[100]"
                >
                    <div className="container mx-auto flex h-20 items-center justify-between px-4">
                        <span className="text-2xl font-serif font-bold text-white">BRB Supply Chain</span>
                        <motion.button 
                            onClick={() => setIsMenuOpen(false)}
                            className="relative h-8 w-8 text-white"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0, transition: { delay: 0.3 } }}
                        >
                            <span className="absolute h-0.5 w-6 bg-current" style={{ transform: 'rotate(45deg)' }}/>
                            <span className="absolute h-0.5 w-6 bg-current" style={{ transform: 'rotate(-45deg)' }}/>
                        </motion.button>
                    </div>

                    <motion.div 
                      className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8"
                      variants={navContainerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                        {navLinks.map(link => (
                            <motion.div key={link.to} variants={navItemVariants}>
                                <NavLink 
                                    to={link.to} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="font-serif text-4xl font-semibold text-gray-200 hover:text-white"
                                >
                                    {link.label}
                                </NavLink>
                            </motion.div>
                        ))}
                         <motion.div variants={navItemVariants} className="pt-8">
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                <button className="bg-white text-black font-bold py-3 px-8 rounded-md text-lg">
                                    Get a Quote
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;

