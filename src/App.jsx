import React from 'react'
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
// import Cart from './components/Cart'
import Cards from "./components/Cards"
import CardDetails from "./components/CardDetails.jsx"
import "./App.css"

const App = () => {
 
  return (

    <>

      <Header />

      <Routes>
        <Route path="/" element={<Cards />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/cardDetails/:id" element={<CardDetails />} />


      </Routes>

    </>
  )
}

export default App
