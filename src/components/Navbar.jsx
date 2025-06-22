import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  // Helper for navigation (works for both hash and normal links)
  const handleNavClick = (e, href) => {
    // For hash links (in-page navigation)
    if (href.startsWith('/#') || href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      setTimeout(() => {
        const id = href.replace('/#', '').replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          // fallback: go to the hash if not found (for page reload)
          window.location.href = href;
        }
      }, 350);
    } else {
      // For normal links, let browser handle
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-4 left-0 right-0 w-full z-50 transition-all duration-300 flex justify-center pointer-events-none`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={`pointer-events-auto max-w-7xl w-[99vw] sm:w-[97vw] md:w-[92vw] lg:w-[85vw] xl:w-[75vw] rounded-2xl shadow-xl bg-white/90 glass-effect border border-slate-200 ${
            scrolled ? 'py-4' : 'py-6'
          } px-4 sm:px-6 lg:px-8 flex items-center`}
        >
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-2xl lg:text-3xl font-serif font-bold gradient-text">
                COM-TEC
              </h1>
              <p className="text-xs text-slate-600 font-medium tracking-wider">
                UGANDA LIMITED
              </p>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-navy-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                    whileHover={{ y: -2 }}
                    onClick={e => handleNavClick(e, item.href)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-600 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-navy-600 p-2"
                aria-label="Toggle menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              className="pointer-events-auto md:hidden glass-effect mt-2 mx-16 rounded-lg absolute left-1/2 -translate-x-1/2 top-full w-[99vw] sm:w-[97vw] md:w-[92vw] lg:w-[85vw] xl:w-[75vw]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-navy-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={e => handleNavClick(e, item.href)}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar