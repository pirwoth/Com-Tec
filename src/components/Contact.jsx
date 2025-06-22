import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, Globe, Clock, Award } from 'lucide-react'

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

  const representatives = [
    {
      name: 'N-T CON',
      description: 'Digital Hybrid IP PBX Systems',
      region: 'East African Region'
    },
    {
      name: 'HAROTEL',
      description: 'Wireless GSM Terminals & Communication Systems',
      region: 'East African Region'
    },
    {
      name: 'Cmaktech',
      description: 'Mobile Asset Tracking & Telematics Services',
      region: 'Country Representative'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your communication infrastructure? Contact East Africa's leading experts today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                Contact Information
              </h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-2xl hover-lift"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center text-navy-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regional Representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-3xl">
              <div className="flex items-center space-x-3 mb-8">
                <Award className="w-8 h-8 text-navy-600" />
                <h3 className="text-3xl font-serif font-bold text-slate-800">
                  Regional Representation
                </h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                We are proud to serve as official local representatives for leading brands 
                in the East African region, bringing world-class solutions to our clients.
              </p>
              
              <div className="space-y-6">
                {representatives.map((rep, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-6 bg-white rounded-2xl hover-lift border-l-4 border-navy-600"
                  >
                    <h4 className="text-xl font-bold text-navy-600 mb-2">{rep.name}</h4>
                    <p className="text-slate-600 mb-2">{rep.description}</p>
                    <div className="inline-flex items-center px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-xs font-medium">
                      {rep.region}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect p-12 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-serif font-bold gradient-text mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can transform 
            your communication infrastructure with our premium solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+256414251238"
              className="inline-flex items-center px-8 py-4 bg-navy-600 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </motion.a>
            
            <motion.a
              href="mailto:info@com-tecuganda.com"
              className="inline-flex items-center px-8 py-4 border-2 border-navy-600 text-navy-600 rounded-lg font-semibold hover:bg-navy-600 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact