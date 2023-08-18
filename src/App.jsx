import { useEffect, useRef, useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  const mainRef = useRef(null);
  const resumeRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  const hashes = {
    "#main": mainRef,
    '#resume': resumeRef,
    "#work": workRef,
    "#projects": projectsRef,
    "#contact": contactRef
  }
  useEffect(() => {
    const hash = window.location.hash

    if (!hash) return;
    
    const scrollTimer = setTimeout(() => {
      hashes[hash].current?.scrollIntoView({ behavior: 'smooth' });
    }, 2000)

    return () => {
      clearTimeout(scrollTimer)
    }
  }, [])

  return (
      <div>
        <Sidenav />
        <Main ref={mainRef}/>
        <Resume ref={resumeRef}/>
        <Work ref={workRef}/>
        <Projects ref={projectsRef}/>
        <Contact ref={contactRef}/>
      </div>
  )
}

export default App;
