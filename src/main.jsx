import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../src/pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Projects from './pages/Project'
import Footer from './components/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   
  <Navbar/>
   <Home />
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
 
   
  </StrictMode>,
)
