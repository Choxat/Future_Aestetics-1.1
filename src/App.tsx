import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar} from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Checkout } from './pages/Checkout'

function App() {

  return (
  <>
  <ShoppingCartProvider>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/store/checkout' element={<Checkout/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </ShoppingCartProvider>
  </>
  )
}

export default App
