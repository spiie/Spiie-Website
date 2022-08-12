import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/css/base.css'
import '../assets/css/home.css'

const GameCard = ({ name, image, link }) => {
  return(
    <NavLink className='game-card' to={link}>
      <img src={image} alt={name + '-image'} />
      <h1>{name}</h1>
    </NavLink>
  )
}


const Home = () => {  

  return (
    <div className="middle home">
      <div className="games">
        <GameCard name='Morpion' image='https://i.imgur.com/Wh5MEb6.png' link='/morpion'/>
        <GameCard name='Login (SOON)' image='https://i.imgur.com/3YmEZsQ.png' link="/login"/>
        <GameCard name='Chat (SOON)' image='https://i.imgur.com/XG6Sb1S.png' link="#"/>
      </div>
    </div>
  )
}

export default Home;