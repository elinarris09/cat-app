import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import AllCatsPage from './components/AllCatsPage'
import CatFormPage from './components/CatFormPage'
import CatInfoDetails from './components/CatInfoDetails'


export default function App() {

  return (
    <div className="app">
      <Navbar />
        <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/cats" element={<AllCatsPage />}/>
            <Route path="/form" element={<CatFormPage />}/>
            <Route path="/cats/:_id" element={<CatInfoDetails />}/>
        </Routes>
    </div>
  )
}
  
