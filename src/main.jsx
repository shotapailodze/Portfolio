import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './components/navigation/nav.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Home />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>,
)
