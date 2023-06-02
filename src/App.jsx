import React, { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { Routes, Route } from 'react-router'
import { Articles } from './pages/Articles'
import { ErrorComponent } from './components/ErrorComponent'
import { SingleArticle } from './pages/SingleArticle'

function App() {
  const user = "cooljmessy";

  return (
    <>
    <a id="skip" href="#main-content">Skip to main content</a>
    <div className="flex header-area">
    <Header/>
    <NavBar/>
    </div>
      <Routes>
        <Route path="/" element={<Articles/>}/>
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<ErrorComponent status="Not Found" msg="Like fake news this page does not exist"/>} />
      </Routes>
    </>
  )
}

export default App
