

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'

import Home from './components/Home'
import Barrios from './components/Barrios'
import Fondo from './components/Fondo'
import Contact from './components/Contact'
import Info from './components/Info'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Nav />
      <Fondo />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Barrios" element={<Barrios />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
      

      <Footer />
      </div>
    </>
  )
}

export default App
