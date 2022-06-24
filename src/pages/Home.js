import "../styles.css";
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavLink to='/morpion'>Morpion</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Home;