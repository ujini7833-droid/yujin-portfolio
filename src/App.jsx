import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import QuickMenu from './components/QuickMenu'

import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Connect from './components/Connect'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('.section-reveal, .scroll-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8%' })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header
        onMenuClick={() => setIsMenuOpen(true)}
      />

      <QuickMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <Intro />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Connect />
    </>
  )
}

export default App
