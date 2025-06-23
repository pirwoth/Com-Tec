import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Globe, Award, Star } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Digital Communication Systems',
    'Security & Surveillance',
    'Data Networks',
    'Mobile Asset Tracking',
    'Maintenance & Support'
  ]

  const certifications = [
    'N-T CON Authorized Partner',
    'HAROTEL Regional Representative',
    'Cmaktech Country Representative',
    'ISO Certified Services'
  ]

  return (
    <footer className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-10 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1 sm:mb-2">
                    COM-TEC
                  </h3>
                  <p className="text-navy-200 text-xs sm:text-sm font-medium tracking-wider">
                    UGANDA LIMITED
                  </p>
                </div>
                
                <p className="text-navy-200 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
                  East Africa's premier provider of electronic communication solutions, 
                  serving clients with excellence since the millennium.
                </p>
                
                <div className="flex items-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
                  <Award className="w-5 h-5 text-gold-400" />
                  <span className="text-navy-200 text-xs sm:text-sm">95+ Years Combined Experience</span>
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Star className="w-5 h-5 text-gold-400 fill-current" />
                  <span className="text-navy-200 text-xs sm:text-sm">Premium Quality Guaranteed</span>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Quick Links</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-navy-200 hover:text-white transition-colors duration-200 flex items-center group text-xs sm:text-sm"
                      >
                        <span className="w-2 h-2 bg-navy-400 rounded-full mr-2 sm:mr-3 group-hover:bg-white transition-colors"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Our Services</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="text-navy-200 text-xs sm:text-sm leading-relaxed">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact & Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Contact Info</h4>
                
                <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-8">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <MapPin className="w-5 h-5 text-navy-300 mt-0.5 flex-shrink-0" />
                    <div className="text-navy-200 text-xs sm:text-sm">
                      <p>Plot 29 Luwum Street</p>
                      <p>Kizito Towers, Kampala</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Phone className="w-5 h-5 text-navy-300 flex-shrink-0" />
                    <span className="text-navy-200 text-xs sm:text-sm">+256 414-251238</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Mail className="w-5 h-5 text-navy-300 flex-shrink-0" />
                    <span className="text-navy-200 text-xs sm:text-sm">info@com-tecuganda.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <Globe className="w-5 h-5 text-navy-300 flex-shrink-0" />
                    <span className="text-navy-200 text-xs sm:text-sm">com-tecuganda.com</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 sm:mb-3">Certifications</h5>
                  <ul className="space-y-1 sm:space-y-2">
                    {certifications.map((cert, index) => (
                      <li key={index} className="text-navy-200 text-[10px] sm:text-xs flex items-center">
                        <Award className="w-3 h-3 text-gold-400 mr-1 sm:mr-2 flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-navy-700 py-6 sm:py-8"
          >
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
              <p className="text-navy-300 text-xs sm:text-sm text-center">
                © 2024 COM-TEC (U) LTD. All rights reserved. | Developed By Pirwoth Samuel & Mukisa Emmanuel
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer