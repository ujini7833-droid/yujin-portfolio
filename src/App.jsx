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
  return (
    <>
      <Header />
      <QuickMenu />

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