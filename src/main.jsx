import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

export const UserContext = createContext();


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContext.Provider value="cooljmessy">
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContext.Provider>
)
