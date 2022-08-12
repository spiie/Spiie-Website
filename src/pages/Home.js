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
        <GameCard name='Coctail (SOON)' image='https://previews.123rf.com/images/vladvm/vladvm1507/vladvm150701414/42717512-l-ic%C3%B4ne-de-cocktail-boisson-et-partie-symbole-de-l-alcool-.jpg' link="/coctail"/>
      </div>
    </div>
  )
}

export default Home;