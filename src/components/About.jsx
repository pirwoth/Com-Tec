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
      description: '15 senior technicians with 27+ years combined experience from leading institutions'
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
      stats: '27+ Years Experience'
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
    <section id="about" className="pt-24 section-padding bg-gradient-to-br">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-4 sm:mb-6">
              About COM-TEC
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl sm:max-w-4xl mx-auto leading-loose px-4 sm:px-6">
              Since the beginning of the millennium, we've been East Africa's premier provider of 
              electronic security systems, voice and data communication solutions
            </p>
          </motion.div>

          {/* Company Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-6 sm:mt-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                Our Journey of Excellence
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-loose mb-4 sm:mb-6 px-4 sm:px-6">
                Loaded with a highly experienced team of technical staff, COM-TEC (U) LTD has effectively 
                covered a journey of experience in the field of Electronic security systems, Voice and Data 
                communication, starting at the beginning of the millennium.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-loose px-4 sm:px-6">
                We boast of a technical team of 15 senior technicians, capable of working without supervision, 
                supported by trainee technicians who gain valuable professional experience with us.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-effect card text-center p-4 sm:p-6 rounded-2xl shadow-xl bg-white/60 border border-slate-100"
                  style={{ boxShadow: '0 2px 8px 0 rgba(31,38,135,0.10), 0 8px 24px 0 rgba(31,38,135,0.13)' }}
                >
                  <div className="text-navy-600 mb-2 sm:mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-1 sm:mb-2">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-loose px-2 sm:px-3">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-20 mt-8 sm:mt-14">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="glass-effect card p-6 sm:p-8 rounded-3xl hover-lift text-center group transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.045] hover:-translate-y-2 backdrop-blur-md bg-white/60 border border-slate-100"
                style={{ boxShadow: '4px 8px 18px 0 rgba(31,38,135,0.10)' }}
              >
                <div className="text-navy-600 mb-4 sm:mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-800 mb-2 sm:mb-4">{achievement.title}</h3>
                <p className="text-xs sm:text-base text-slate-600 leading-loose mb-4 sm:mb-6 px-3 sm:px-4">{achievement.description}</p>
                <div className="inline-flex items-center px-3 sm:px-4 py-1 bg-navy-100 text-navy-800 rounded-full text-xs sm:text-sm font-bold">
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
            className="glass-effect card p-6 sm:p-12 rounded-3xl text-center mb-10 sm:mb-20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.045] hover:-translate-y-2 backdrop-blur-md bg-white/60 border border-slate-100"
            style={{ boxShadow: '4px 8px 18px 0 rgba(31,38,135,0.10)' }}
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold gradient-text mb-4 sm:mb-8">
              Our Company Goals
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-loose max-w-2xl sm:max-w-4xl mx-auto px-4 sm:px-6">
              The company's goal is to produce a team of happy, loyal and productive workers who are 
              eager to help the company provide quality services and equipment for its customers at 
              a reasonable cost, so that the company will raise sufficient profits to permit continued 
              growth and create continued opportunities for employment and provision of services to customer satisfaction.
            </p>
          </motion.div>

          {/* Regional Representation (moved from Contact) */}
          <div className="w-full">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-8 justify-center">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-navy-600" />
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-slate-800">
                Regional Representation
              </h3>
            </div>
            <p className="text-xs sm:text-base text-slate-600 leading-loose mb-4 sm:mb-8 px-3 sm:px-4 text-center">
              We are proud to serve as official local representatives for leading brands 
              in the East African region, bringing world-class solutions to our clients.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center text-center w-full">
              {[
                { name: 'N-T CON', description: 'Digital Hybrid IP PBX\nSystems', region: 'East African Region' },
                { name: 'HAROTEL', description: 'Wireless GSM Terminals\n& Communication Systems', region: 'East African Region' },
                { name: 'Cmaktech', description: 'Mobile Asset Tracking\n& Telematics Services', region: 'Country Representative' }
              ].map((rep, index) => (
                <div key={index} className="glass-effect card flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.045] hover:-translate-y-2 backdrop-blur-md bg-white/60 border border-slate-100 w-full max-w-xs sm:max-w-sm lg:max-w-md flex-1 min-h-[170px]"
                  style={{ boxShadow: '4px 8px 18px 0 rgba(31,38,135,0.10)' }}
                >
                  <h4 className="text-base sm:text-xl font-bold text-navy-600 mb-1 sm:mb-2 px-1">{rep.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2 px-2 sm:px-3 whitespace-pre-line">{rep.description}</p>
                  <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-xs sm:text-sm font-medium">
                    {rep.region}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
.glass-effect.card {
  background: rgba(255,255,255,0.65);
  box-shadow: 0 2px 8px 0 rgba(31,38,135,0.10), 0 8px 24px 0 rgba(31,38,135,0.13); /* elevation/depth shadow */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.18);
}
.glass-effect.card:hover {
  box-shadow: 0 8px 32px 0 rgba(31,38,135,0.16), 0 16px 48px 0 rgba(31,38,135,0.18); /* deeper elevation on hover */
}
`}</style>
        </div>
      </motion.div>
    </section>
  )
}

export default About