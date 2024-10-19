import './App.css'
import NavBar from './components/NavBar'
import Background from './components/Background'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
function App() {
  return (
    <>
      <NavBar />
      <Background className='max-w-5xl px-4 mx-auto'>
        <Hero />
        <AboutMe/>
        <Skills />
        <Projects />
        <Contact />
      </Background>
      <Footer/>
    </>
  )
}

export default App
