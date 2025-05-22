import { useState } from 'react'
import Home from './pages/home'
import ProductPage from './pages/product'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
