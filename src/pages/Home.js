import React from 'react'
import { NavLink } from 'react-router-dom'


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
    <div className="home">
      <div className="games">
        <GameCard name='Morpion' image='https://cdn.icon-icons.com/icons2/390/PNG/512/tic-tac-toe_39453.png' link='/morpion'/>
        <GameCard name='Login (SOON)' image='https://i.imgur.com/3YmEZsQ.png' link='/'/>
      </div>
    </div>
  )
}

export default Home;