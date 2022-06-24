import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Morpion from './pages/Morpion'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
        <Route path='/morpion' element={<Morpion />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;