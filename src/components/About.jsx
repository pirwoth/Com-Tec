import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Award, Globe, Zap, Shield } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Team',
      description: '15 senior technicians with 95+ years combined experience from leading institutions'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Our Mission',
      description: 'Delivering quality services and equipment at reasonable costs for customer satisfaction'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Proven track record with government offices, hotels, hospitals, and schools'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Partnerships across Dubai, Singapore, Hong Kong, Australia, China, and USA'
    }
  ]

  const achievements = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Technical Excellence',
      description: 'Handling complicated technical cases in Voice, Data networks, CCTV, Alarm systems, and Two-Way radio systems',
      stats: '95+ Years Experience'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Trusted Partnerships',
      description: 'Official representatives for N-T CON and HAROTEL in the East African region',
      stats: 'Regional Leaders'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Market Leadership',
      description: 'Country representatives of Cmaktech for mobile asset tracking and telematics services',
      stats: 'Market Leaders'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl font-serif font-bold gradient-text mb-6">
            About COM-TEC
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Since the beginning of the millennium, we've been East Africa's premier provider of 
            electronic security systems, voice and data communication solutions
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-12 rounded-3xl mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6">
                Our Journey of Excellence
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Loaded with a highly experienced team of technical staff, COM-TEC (U) LTD has effectively 
                covered a journey of experience in the field of Electronic security systems, Voice and Data 
                communication, starting at the beginning of the millennium.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We boast of a technical team of 15 senior technicians, capable of working without supervision, 
                supported by trainee technicians who gain valuable professional experience with us.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm hover-lift"
                >
                  <div className="text-navy-600 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="glass-effect p-8 rounded-3xl hover-lift text-center group"
            >
              <div className="text-navy-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{achievement.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{achievement.description}</p>
              <div className="inline-flex items-center px-4 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-bold">
                {achievement.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-effect p-12 rounded-3xl text-center"
        >
          <h3 className="text-3xl font-serif font-bold gradient-text mb-8">
            Our Company Goals
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            The company's goal is to produce a team of happy, loyal and productive workers who are 
            eager to help the company provide quality services and equipment for its customers at 
            a reasonable cost, so that the company will raise sufficient profits to permit continued 
            growth and create continued opportunities for employment and provision of services to customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About