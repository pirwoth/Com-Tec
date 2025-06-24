import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Globe, Award } from 'lucide-react'

const Hero = () => {
  const stats = [
    { number: '27+', label: 'Years Combined Experience' },
    { number: '38+', label: 'Major Projects Completed' },
    { number: '15', label: 'Senior Technicians' },
    { number: '100%', label: 'Client Satisfaction' },
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Systems',
      description: 'Advanced CCTV, and surveillance solutions'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Telecommunication Systems',
      description: 'Digital PBX, IP telephony, and data networks'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Alarm Systems',
      description: 'Reliable, designed to detect and alert you to unauthorized access, fire, or emergencies'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Support',
      description: '24/7 maintenance and technical support'
    },
  ]

  return (
    <>
      <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden z-0">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-navy-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gold-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-navy-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

        <div className="relative max-w-7xl mx-auto sm:px-4 lg:px-8 py-10 sm:py-20 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, type: 'spring', bounce: 0.12 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center justify-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, type: 'spring', bounce: 0.12 }}
                className="space-y-6 sm:space-y-8 flex flex-col items-center text-center"
              >
                <div className="space-y-2 sm:space-y-4 flex flex-col items-center text-center">
                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-3 sm:px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-xs sm:text-sm font-medium"
                  >
                    🏆 East Africa's Leading Communication Experts
                  </motion.div> */}
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight"
                  >
                    <span className="gradient-text">Premium</span>
                    <br />
                    <span className="text-slate-800">Electronic</span>
                    <br />
                    <span className="text-slate-600">Solutions</span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-xs sm:max-w-lg mx-auto"
                  >
                    Transforming businesses across East Africa with cutting-edge communication, 
                    security, and data solutions. Trusted by government offices, hotels, hospitals, and leading institutions.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
                >
                  <motion.a
                    href="#services"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-navy-600 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 group text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  
                  <motion.a
                    href="#projects"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-navy-600 text-navy-600 rounded-lg font-semibold hover:bg-navy-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Projects
                  </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 items-center justify-center"
                >
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-3xl font-bold text-navy-600">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.2, type: 'spring', bounce: 0.12 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-center justify-start sm:justify-center w-full px-2"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-effect p-4 sm:p-6 rounded-2xl hover-lift group mb-4 sm:mb-0 flex flex-col items-center text-center w-full"
                    whileHover={{ scale: 1.02 }}
                 >
                    <div className="text-navy-600 mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero