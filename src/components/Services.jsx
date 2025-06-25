import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Shield, Network, Radio, Camera, Smartphone } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: <Phone className="w-12 h-12" />,
      title: 'Digital Communication Systems',
      description: 'Advanced PBX, IP telephony, and hybrid communication solutions',
      features: ['N-T CON Digital Hybrid IP PBX', 'Panasonic KX-TDA100 Systems', 'HAROTEL Wireless GSM Terminals', 'Call Logging & Management'],
      color: 'from-blue-500 to-navy-600'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Security & Surveillance',
      description: 'Comprehensive CCTV, alarm systems, and security solutions',
      features: ['IP & Dome Cameras', 'Standalone DVR Systems', 'IR Detectors & Motion Sensors', 'Micro & Mini SD Cameras'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Radio className="w-12 h-12" />,
      title: 'Alarm Systems',
      description: 'Advanced fire alarm and security alert systems',
      features: ['GSM & PSTN Line Alarms', 'Analog 2-wire Addressable Fire Alarm', 'Advanced Control Systems', 'Two-Way Radio Systems'],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Asset Tracking',
      description: 'Cutting-edge vehicle tracking and telematics services',
      features: ['Cmaktech Tracking Devices', 'Fleet Management Systems', 'Stolen Vehicle Recovery', 'Insurance Telematics'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Maintenance & Support',
      description: '24/7 technical support and system maintenance',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'System Upgrades', 'Technical Training'],
      color: 'from-pink-500 to-rose-600'
    }
  ]

  const brands = [
    { name: 'Panasonic', description: 'Advanced Communication Systems' },
    { name: 'N-T CON', description: 'Digital Hybrid IP PBX Solutions' },
    { name: 'HAROTEL', description: 'Wireless GSM Terminals' },
    { name: 'Cmaktech', description: 'Mobile Asset Tracking' }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br ">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-20 flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-4 sm:mb-6">
              Our Premium Services
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Delivering world-class electronic communication solutions with over 95 years of combined expertise
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-20 items-center justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="glass-effect card p-5 sm:p-8 rounded-3xl hover-lift h-full flex flex-col items-center text-center">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r ${service.color} p-3 sm:p-4 mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300 flex items-center justify-center mx-auto`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-4">{service.title}</h3>
                  <p className="text-xs sm:text-base text-slate-600 mb-4 sm:mb-6 leading-loose px-3 sm:px-4">{service.description}</p>
                  
                  <ul className="space-y-2 sm:space-y-3 flex flex-col items-center w-fit mx-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-start w-full text-xs sm:text-sm text-slate-600 leading-loose px-2 sm:px-3">
                        <div className="w-2 h-2 bg-navy-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trusted Brands */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 mb-8 sm:mb-12">
              Trusted Global Partners
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-effect card p-4 sm:p-6 rounded-2xl hover-lift text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-base sm:text-xl font-bold text-navy-600 mb-1 sm:mb-2 group-hover:text-navy-700 transition-colors">
                    {brand.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-loose px-2 sm:px-3">{brand.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services