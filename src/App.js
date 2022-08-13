import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Morpion from './pages/Morpion'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Cocktail from './pages/Cocktail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
        <Route path='/morpion' element={<Morpion />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/cocktail' element={<Cocktail/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;