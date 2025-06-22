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
      icon: <Network className="w-12 h-12" />,
      title: 'Data Networks',
      description: 'Professional network infrastructure and data communication',
      features: ['Wide Area Networks', 'Multi-station Institution Networks', 'Wireless Voice & Data Links', 'Network Infrastructure Setup'],
      color: 'from-purple-500 to-indigo-600'
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
    <section id="services" className="section-padding bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold gradient-text mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Delivering world-class electronic communication solutions with over 95 years of combined expertise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-effect p-8 rounded-3xl hover-lift h-full">
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-navy-400 rounded-full mr-3"></div>
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
          <h3 className="text-3xl font-serif font-bold text-slate-800 mb-12">
            Trusted Global Partners
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glass-effect p-6 rounded-2xl hover-lift text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-xl font-bold text-navy-600 mb-2 group-hover:text-navy-700 transition-colors">
                  {brand.name}
                </h4>
                <p className="text-sm text-slate-600">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services