import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Building, MapPin, CheckCircle, Star } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    { id: 1, name: 'STATE HOUSE NAKASERO', solution: 'TELEPHONE & CCTV', category: 'Government', featured: true },
    { id: 2, name: 'STATE HOUSE ENTEBBE', solution: 'TELEPHONE', category: 'Government', featured: true },
    { id: 3, name: 'MARASA', solution: 'TELEPHONE', category: 'Hospitality', featured: false },
    { id: 4, name: 'ZARD HOTEL (JUBA)', solution: 'TELEPHONE', category: 'Hospitality', featured: false },
    { id: 5, name: 'SSDDR HEAD QUARTERS (Juba)', solution: 'VOICE, DATA & CCTV', category: 'Government', featured: true },
    { id: 6, name: 'ST JOSEPH NAGGALAMA', solution: 'TELEPHONE', category: 'Education', featured: false },
    { id: 7, name: 'ST. SAVIO JUNIOR SCHOOL KISUBI', solution: 'CCTV', category: 'Education', featured: false },
    { id: 8, name: 'MED OPTICS', solution: 'CCTV INTEGRATION', category: 'Healthcare', featured: true },
    { id: 9, name: 'OFFICE OF THE PRIME MINISTER, ADJUMAN', solution: 'VOICE, DATA & CCTV', category: 'Government', featured: true },
    { id: 10, name: 'WEST CLIFF HOTEL LIRA', solution: 'VOICE, DATA & CCTV', category: 'Hospitality', featured: false },
    { id: 11, name: 'RAINA HOTEL FORT PORTAL', solution: 'VOICE, DATA & CCTV', category: 'Hospitality', featured: false },
    { id: 12, name: 'KABALORE DISTRICT LG', solution: 'TELEPHONE & DATA', category: 'Government', featured: false },
    { id: 13, name: 'MWEYA SAFARI LODGE', solution: 'TELEPHONE', category: 'Hospitality', featured: false },
    { id: 14, name: 'ACTION AID INTERNATIONAL (country wide)', solution: 'TELEPHONE', category: 'NGO', featured: true },
    { id: 15, name: 'COLLINE HOTEL MUKONO', solution: 'TELEPHONE', category: 'Hospitality', featured: false },
    { id: 16, name: 'NEMA HOUSE', solution: 'TELEPHONE', category: 'Government', featured: false },
    { id: 17, name: 'NSAMBYA HOSPITAL', solution: 'TELEPHONE', category: 'Healthcare', featured: true },
    { id: 18, name: 'ERNST & YOUNG', solution: 'TELEPHONE', category: 'Corporate', featured: true },
    { id: 19, name: 'HOSPICE UGANDA', solution: 'TELEPHONE', category: 'Healthcare', featured: false },
    { id: 20, name: 'FLIGHT HOTEL ENTEBBE', solution: 'VOICE, DATA & CCTV', category: 'Hospitality', featured: false },
    { id: 21, name: 'MENGO HOSPITAL', solution: 'TELEPHONE', category: 'Healthcare', featured: false },
    { id: 22, name: 'UWLEC ENTEBBE', solution: 'TELEPHONE', category: 'Education', featured: false },
    { id: 23, name: 'SPEKE RESORT MUNYONYO', solution: 'TELEPHONE', category: 'Hospitality', featured: true },
    { id: 24, name: 'ROYAL SUITES', solution: 'TELEPHONE & DATA', category: 'Hospitality', featured: false },
    { id: 25, name: 'MUBENDE DISTRICT', solution: 'TELEPHONE', category: 'Government', featured: false },
    { id: 26, name: 'BUGIRI DISTRICT HEADQUARTERS', solution: 'TELEPHONE', category: 'Government', featured: false },
    { id: 27, name: 'KAMPALA CASINO', solution: 'TELEPHONE', category: 'Entertainment', featured: false },
    { id: 28, name: 'KAMPALA PYRAMIDS', solution: 'TELEPHONE', category: 'Corporate', featured: false },
    { id: 29, name: 'OSCAR INDUSTRIES', solution: 'TELEPHONE', category: 'Industrial', featured: false },
    { id: 30, name: 'NAMANVE INDUSTRIES', solution: 'TELEPHONE', category: 'Industrial', featured: false },
    { id: 31, name: 'TAIBAH INTERNATIONAL JUNIOR SCHOOL', solution: 'TELEPHONE & CCTV', category: 'Education', featured: false },
    { id: 32, name: 'TAIBAH INTERNATIONAL COLLEGE SCHOOL', solution: 'TELEPHONE & CCTV', category: 'Education', featured: false },
    { id: 33, name: 'MEDI OPTICS (all branches country wide)', solution: 'CCTV', category: 'Healthcare', featured: false },
    { id: 34, name: 'PINE PHARMACY', solution: 'CCTV', category: 'Healthcare', featured: false },
    { id: 35, name: 'KD APARTMENTS', solution: 'CCTV', category: 'Residential', featured: false },
    { id: 36, name: 'SPEKE APARTMENTS', solution: 'TELEPHONE', category: 'Residential', featured: false },
    { id: 37, name: 'MEERA INVESTMENTS OFFICES', solution: 'TELEPHONE', category: 'Corporate', featured: false },
    { id: 38, name: 'LUBAGA HOSPITAL', solution: 'TELEPHONE & CCTV', category: 'Healthcare', featured: false },
  ]

  const categories = ['All', 'Government', 'Healthcare', 'Hospitality', 'Education', 'Corporate', 'NGO', 'Industrial', 'Entertainment', 'Residential']
  
  const featuredProjects = projects.filter(project => project.featured)
  const displayedProjects = isExpanded ? projects : featuredProjects
  
  const filteredProjects = selectedCategory === 'All' 
    ? displayedProjects 
    : displayedProjects.filter(project => project.category === selectedCategory)

  const getSolutionColor = (solution) => {
    if (solution.includes('CCTV')) return 'bg-emerald-100 text-emerald-800'
    if (solution.includes('DATA')) return 'bg-blue-100 text-blue-800'
    if (solution.includes('VOICE')) return 'bg-purple-100 text-purple-800'
    return 'bg-navy-100 text-navy-800'
  }

  return (
    <section id="projects" className="pt-24 section-padding bg-gradient-to-br">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.18 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-4 sm:mb-6">
              Accomplished Projects
            </h2>
            <p className="text-base sm:text-xl text-slate-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Trusted by leading institutions across East Africa - from government offices to luxury hotels
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs sm:text-base ${
                  selectedCategory === category
                    ? 'bg-navy-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-navy-50 hover:text-navy-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Replace Projects Grid with horizontal infinite scroll marquee using CSS animation */}
          <style>{`
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@media (max-width: 640px) {
  .marquee-card {
    width: 220px !important;
    min-width: 220px !important;
    max-width: 220px !important;
    margin-right: 12px !important;
  }
  .marquee-container {
    height: 220px !important;
  }
}
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
<div
  className="relative w-full overflow-x-auto mb-8 sm:mb-12 marquee-container scrollbar-hide cursor-grab"
  style={{height: '320px'}}
  onMouseEnter={e => e.currentTarget.querySelector('.marquee-track').style.animationPlayState = 'paused'}
  onMouseLeave={e => e.currentTarget.querySelector('.marquee-track').style.animationPlayState = 'running'}
  onTouchStart={e => e.currentTarget.querySelector('.marquee-track').style.animationPlayState = 'paused'}
  onTouchEnd={e => e.currentTarget.querySelector('.marquee-track').style.animationPlayState = 'running'}
>
  <div
    className="flex items-stretch gap-4 sm:gap-6 w-max marquee-track"
    style={{
      whiteSpace: 'nowrap',
      willChange: 'transform',
      animation: 'marquee 40s linear infinite',
    }}
  >
    {[...filteredProjects, ...filteredProjects].map((project, index) => (
      <div
        key={project.id + '-' + index}
        className="glass-effect card p-4 sm:p-6 rounded-2xl group relative overflow-hidden flex-shrink-0 marquee-card flex flex-col items-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.045] hover:-translate-y-2 backdrop-blur-md bg-white/60 border border-slate-100"
        style={{ width: '300px', minWidth: '300px', maxWidth: '300px', marginRight: '24px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
      >
        <div className="flex flex-col items-center w-full mb-2 sm:mb-4">
          <div className="flex-shrink-0 mb-2">
            <Building className="w-6 h-6 text-navy-600" />
          </div>
          <h3 className="font-bold text-slate-800 group-hover:text-navy-600 transition-colors leading-tight text-center text-sm sm:text-base break-words whitespace-pre-line max-w-full min-h-[2.5em]">
            {project.name}
          </h3>
        </div>
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2 sm:mb-4">
          <MapPin className="w-4 h-4 text-slate-400" />
          <span className="text-xs sm:text-sm text-slate-500 break-words max-w-full">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="flex items-center justify-center w-full mb-2">
            <Star className="w-5 h-5 text-gold-500 fill-current" />
          </div>
        )}
        <div className={`inline-flex items-center justify-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getSolutionColor(project.solution)} break-words max-w-full`} style={{textAlign: 'center'}}>
          <CheckCircle className="w-3 h-3 mr-1" />
          {project.solution}
        </div>
      </div>
    ))}
  </div>
</div>

          {/* Show More/Less Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-navy-600 text-white rounded-lg font-semibold hover:bg-navy-700 transition-all duration-300 group text-sm sm:text-base"
            >
              {isExpanded ? 'Show Featured Projects' : 'View All Projects'}
              <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-10 sm:mt-20 pt-10 sm:pt-16 border-t border-slate-200"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-navy-600 mb-1 sm:mb-2">38+</div>
              <div className="text-xs sm:text-base text-slate-600 font-medium">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-navy-600 mb-1 sm:mb-2">9</div>
              <div className="text-xs sm:text-base text-slate-600 font-medium">Industry Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-navy-600 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-base text-slate-600 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold text-navy-600 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-base text-slate-600 font-medium">Support</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects