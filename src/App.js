import React from "react"
import Homepage from './pages/Homepage'
import About from './pages/About'
import Header from './componenet/Header'
import Footer from './componenet/Footer'
import './css/default.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App