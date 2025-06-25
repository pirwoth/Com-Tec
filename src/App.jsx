import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* Static SVG Background (fixed, behind everything) */}
      <svg
        className="fixed inset-0 w-full h-full -z-50"
        style={{ pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
      >
        {/* Alarm Icon */}
        <g opacity="0.10">
          <circle cx="300" cy="200" r="60" fill="#ffd700" />
          <rect x="270" y="230" width="60" height="30" rx="10" fill="#1e293b" />
          <rect x="285" y="250" width="30" height="10" rx="5" fill="#2563eb" />
        </g>
        {/* CCTV Camera Icon */}
        <g opacity="0.13">
          <rect x="1100" y="120" width="120" height="40" rx="15" fill="#1e293b" />
          <rect x="1210" y="135" width="30" height="10" rx="5" fill="#ffd700" />
          <circle cx="1120" cy="140" r="12" fill="#2563eb" />
          <rect x="1150" y="160" width="40" height="10" rx="5" fill="#2563eb" />
        </g>
        {/* Telecommunication Antenna Icon */}
        <g opacity="0.12">
          <rect x="700" y="600" width="20" height="80" rx="8" fill="#2563eb" />
          <circle cx="710" cy="600" r="18" fill="#ffd700" />
          <path d="M710 600 Q 730 570 760 600" stroke="#1e293b" strokeWidth="6" fill="none" />
          <path d="M710 600 Q 690 570 660 600" stroke="#1e293b" strokeWidth="6" fill="none" />
        </g>
      </svg>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
        {/* Sticky WhatsApp Button */}
        <a
          href="https://wa.me/256702069442"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed z-50 bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8 sm:w-10 sm:h-10"
          >
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.13L4 29l7.13-2.36A11.93 11.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.91-.58-5.54-1.67l-.39-.25-4.23 1.4 1.4-4.23-.25-.39A9.94 9.94 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.71c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.16-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.19 2.09 3.2 5.08 4.36.71.25 1.26.4 1.69.51.71.18 1.36.16 1.87.1.57-.07 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/>
          </svg>
        </a>
      </div>
    </>
  )
}

export default App