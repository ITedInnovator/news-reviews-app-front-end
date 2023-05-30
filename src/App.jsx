import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Routes, Route } from 'react-router'
import { Articles } from './pages/Articles'

function App() {

  return (
    <>
    <a id="skip" href="#main-content">Skip to main content</a>
    <div className="flex header-area">
    <Header/>
    <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<Articles/>}/>
      </Routes>
    </>
  )
}

export default App
