import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.js'
import Morpion from './pages/Morpion/Morpion.js'
import Chat from './pages/Chat/Chat.js'
import Login from './pages/Login/Login.js'
import Cocktail from './pages/Cocktail/Cocktail.js'
import Todo from './pages/ToDo/Todo.js'

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
        <Route path='/todo' element={<Todo/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;