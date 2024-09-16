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
function App() {
  return (
      <BrowserRouter>
      <div className='min-h-screen'>
        <NavBar/>
          <div className='max-w-5xl mx-auto'>
            <Background >
              <Routes>
                <Route path='/'  element={<Hero/>}/>
                <Route path='/skills'  element={<Skills/>}/>
                <Route path='/projects'  element={<Projects/>}/>
                <Route path='/contact'  element={<Contact/>}/>
              </Routes>
            </Background>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
