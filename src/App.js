import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Morpion from './pages/Morpion'
import Chat from './pages/Chat'
import Login from './pages/Login'
import Coctail from './pages/Coctail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Home/>}/>
        <Route path='/morpion' element={<Morpion />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat/>} />
        <Route path='/coctail' element={<Coctail/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;