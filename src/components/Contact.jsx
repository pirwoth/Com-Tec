import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Globe, Clock, Award } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faFacebookF, faTiktok } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Our Location',
      details: ['Plot 29 Luwum Street', 'Kizito Towers', 'Kampala, Uganda']
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: ['Tel: +256 414-251238', 'Mobile: +256 776-251238', 'Mobile: +256 706-251238', 'Mobile: +256 756-251238']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email & Web',
      details: ['pirwoth.dev@gmail.com', 'pirwoth.dev@gmail.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', '24/7 Emergency Support']
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-loose px-4 sm:px-6">
              Ready to transform your communication infrastructure? Contact East Africa's leading experts today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10 sm:mb-20">
            {/* Contact Information (left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="glass-effect p-4 sm:p-8 rounded-3xl h-full flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 mb-4 sm:mb-8">
                  Contact Information
                </h3>
                
                <div className="grid gap-4 sm:gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-4 bg-white card rounded-2xl hover-lift"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-navy-100 rounded-xl flex items-center justify-center text-navy-600">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base px-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-xs sm:text-sm text-slate-600 leading-loose px-3 sm:px-4">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action + Map (right) */}
            <div className="flex flex-col gap-8">
              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="glass-effect card p-6 sm:p-12 rounded-3xl text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-serif font-bold gradient-text mb-4 sm:mb-6">
                  Ready to Get Started?
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-loose mb-4 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6">
                  Contact us today for a free consultation and discover how we can transform 
                  your communication infrastructure with our premium solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-10 mb-6">
                  <motion.a
                    href="tel:+256414251238"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-navy-600 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 group text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </motion.a>
                  
                  <motion.a
                    href="mailto:pirwoth.dev@gmail.com"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-navy-600 text-navy-600 rounded-lg font-semibold hover:bg-navy-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Email
                  </motion.a>
                </div>

                {/* Social Media Icons */}
                <motion.div
                  className="flex justify-center space-x-6 mb-6 text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-black"
                    whileHover={{ scale: 1.2, color: 'black' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#E4405F]"
                    whileHover={{ scale: 1.2, color: '#E4405F' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-[#1877F2]"
                    whileHover={{ scale: 1.2, color: '#1877F2' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </motion.a>
                  <motion.a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="text-black"
                    whileHover={{ scale: 1.2, color: 'black' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Map Placeholder for Kizito Towers, Luwum Street */}
              <div className="w-full px-0 sm:p-8 rounded-3xl flex flex-col items-center justify-center mb-0 lg:mb-0 mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl lg:ml-[-32px]">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                  Our Location
                </h3>
                <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-slate-200 mx-auto mb-10 transition-all duration-300 hover:brightness-90">
                  <iframe
                    title="Kizito Towers Map"
                    src="https://www.google.com/maps?q=Kizito+Towers,+Luwum+Street,+Kampala&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block', margin: '0 auto' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact