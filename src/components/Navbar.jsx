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
          // Custom smooth scroll with slower duration
          const y = el.getBoundingClientRect().top + window.pageYOffset;
          const startY = window.scrollY;
          const distance = y - startY;
          const duration = 900; // ms, slower than default
          let start;
          function step(timestamp) {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            window.scrollTo(0, startY + distance * easeInOutQuad(progress));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          }
          function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          }
          window.requestAnimationFrame(step);
        } else {
          // fallback: go to the hash if not found (for page reload)
          window.location.hash = id;
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
        className={`sticky top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex justify-center pointer-events-none`}
        initial={false}
        animate={{ y: scrolled ? 0 : 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        <div
          className={`pointer-events-auto max-w-7xl w-full sm:w-[97vw] md:w-[92vw] lg:w-[85vw] xl:w-[75vw] shadow-xl bg-white/90 glass-effect border border-slate-200 ${
            scrolled ? 'py-2' : 'py-3'
          } px-2 sm:px-4 lg:px-8 flex items-center`}
          style={{ borderRadius: '0 0 1rem 1rem' }}
        >
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.location.href = '/'}
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
              <div className="ml-4 sm:ml-10 flex items-baseline space-x-4 sm:space-x-8">
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
                className="text-slate-700 hover:text-navy-600 p-2 focus:outline-none focus:ring-2 focus:ring-navy-400 rounded"
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
              className="pointer-events-auto md:hidden fixed right-4 top-20 z-[9999] flex flex-col items-end border border-slate-200 bg-white/90"
              style={{ borderRadius: '0 0 1rem 1rem', boxShadow: '0 8px 32px 0 rgba(30,64,175,0.10), 0 2px 8px 0 rgba(30,64,175,0.08)' }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.18 }}
            >
              <nav className="flex flex-col space-y-2 items-end py-2 px-2 w-full"
                style={{ borderRadius: '0 0 1rem 1rem' }}>
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-navy-600 px-5 py-3 text-lg font-semibold transition-all duration-300 rounded-xl bg-white/60 hover:bg-navy-100/60 shadow-md hover:shadow-xl backdrop-blur-lg mb-1 text-right"
                    style={{ minWidth: '10rem', maxWidth: '14rem', background: 'rgba(255,255,255,0.7)' }}
                    onClick={e => handleNavClick(e, item.href)}
                    whileHover={{ scale: 1.07, x: 0, backgroundColor: 'rgba(30, 64, 175, 0.10)', boxShadow: '0 8px 32px rgba(30,64,175,0.10)' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navbar