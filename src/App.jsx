import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Routes, Route } from 'react-router'
import { Articles } from './pages/Articles'

function App() {

  return (
    <>
    <h1>Welcome</h1>
      <NavBar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Articles/>}/>
      </Routes>
    </>
  )
}

export default App
