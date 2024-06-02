import React, { useContext, useEffect } from 'react'
import { ThemeContext, ThemeProvider } from './store/ThemeContext'
import Header from './Components/Header'
import About from './Components/About'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import './App.css'
import Section from './Components/Section'
import ScrollTop from './Components/ScrollToTop'
import Social from './Components/Social'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const {isDarkTheme} = useContext(ThemeContext);

  useEffect(()=>{
    window.scrollTo({
      top: 0
    })
    Aos.init({
      duration : 1000
    });
  },[])

  return (
    <div className={`custom-scrollbar-container ${
      isDarkTheme ? "bg-slate-900 text-white" : "bg-[#edf2f8] text-black"
    }`} >
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skill />
      <Contact />
      <Social />
      <ScrollTop />
    </div>
  )
}

export default App