import React, { useState } from "react"
import '../assets/css/base.css'
import '../assets/css/cocktail.css'


const CocktailBox = ({ drink, setAllDrinks, setOneDrink, SearchById }) => {
  let numberOfIngredients;
  if (!drink.strIngredient1) {
    numberOfIngredients = 0
  } else if (!drink.strIngredient2) {
    numberOfIngredients = 1
  } else if (!drink.strIngredient3) {
    numberOfIngredients = 2
  } else if (!drink.strIngredient4) {
    numberOfIngredients = 3
  } else if (!drink.strIngredient5) {
    numberOfIngredients = 4
  } else if (!drink.strIngredient6) {
    numberOfIngredients = 5
  } else if (!drink.strIngredient7) {
    numberOfIngredients = 6
  } else if (!drink.strIngredient8) {
    numberOfIngredients = 7
  } else if (!drink.strIngredient9) {
    numberOfIngredients = 8
  } else if (!drink.strIngredient10) {
    numberOfIngredients = 9
  } else if (!drink.strIngredient11) {
    numberOfIngredients = 10
  } else if (!drink.strIngredient12) {
    numberOfIngredients = 11
  } else if (!drink.strIngredient13) {
    numberOfIngredients = 12
  } else if (!drink.strIngredient14) {
    numberOfIngredients = 13
  } else {
    numberOfIngredients = 14
  }

  return (
    <div className="boxDrink" id={drink.idDrink} onClick={(e) => {
      SearchById(e.target.id)
      setAllDrinks(false)
      setOneDrink(true)
    }}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="cocktailImage" id={drink.idDrink} />
      <p className="cocktailName" id={drink.idDrink}>{drink.strDrink}</p>
      <div className="specifications">
        <p className="cocktailIsAlcoholic" id={drink.idDrink}>{drink.strAlcoholic}</p>
        <p className="nbIngredient" id={drink.idDrink}>Nombres d'ingrédients : {numberOfIngredients}</p>
      </div>
    </div>
  )
}

const CocktailPage = ({drinkData}) => {

  return (
    <p>{drinkData.strDrink}</p>
  )
}

const Cocktail = () => {

  const [drinks, setDrinks] = useState([])
  const [drinkData, setDrinkData] = useState([])
  const [allDrinks, setAllDrinks] = useState(true)
  const [oneDrink, setOneDrink] = useState(true)

  const SearchById = async (id) => {
    const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json()
    setDrinkData(data["drinks"][0])
    console.log(drinkData)
    setAllDrinks(false)
    setOneDrink(true)
  }

  const SearchByLetter = async (letter) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
    const data = await response.json()
    setDrinks(data["drinks"])
    setAllDrinks(true)
    setOneDrink(false)
  }

  const loadDrinks = () => {
    return drinks.map(drink => {
      return (
        <CocktailBox drink={drink} setAllDrinks={setAllDrinks} setOneDrink={setOneDrink} SearchById={SearchById} key={drink.idDrink} />
      )
    })
  }

  const loadDrink = () => {
    <CocktailPage drinkData={drinkData} />
  }

  return (
    <div className="cokctail">
      <div className="search">
        <input type="text" name="search" id="search" className="searchText" placeholder="Search Cocktail" />
        <div className="searchByLetter">
          <button onClick={() => SearchByLetter("a")}>A</button>
          <button onClick={() => SearchByLetter("b")}>B</button>
          <button onClick={() => SearchByLetter("c")}>C</button>
          <button onClick={() => SearchByLetter("d")}>D</button>
          <button onClick={() => SearchByLetter("e")}>E</button>
          <button onClick={() => SearchByLetter("f")}>F</button>
          <button onClick={() => SearchByLetter("g")}>G</button>
          <button onClick={() => SearchByLetter("h")}>H</button>
          <button onClick={() => SearchByLetter("i")}>I</button>
          <button onClick={() => SearchByLetter("j")}>J</button>
          <button onClick={() => SearchByLetter("k")}>K</button>
          <button onClick={() => SearchByLetter("l")}>L</button>
          <button onClick={() => SearchByLetter("m")}>M</button>
          <button onClick={() => SearchByLetter("n")}>N</button>
          <button onClick={() => SearchByLetter("o")}>O</button>
          <button onClick={() => SearchByLetter("p")}>P</button>
          <button onClick={() => SearchByLetter("q")}>Q</button>
          <button onClick={() => SearchByLetter("r")}>R</button>
          <button onClick={() => SearchByLetter("s")}>S</button>
          <button onClick={() => SearchByLetter("t")}>T</button>
          <button onClick={() => SearchByLetter("u")}>U</button>
          <button onClick={() => SearchByLetter("v")}>V</button>
          <button onClick={() => SearchByLetter("w")}>W</button>
          <button onClick={() => SearchByLetter("x")}>X</button>
          <button onClick={() => SearchByLetter("y")}>Y</button>
          <button onClick={() => SearchByLetter("z")}>Z</button>
        </div>
      </div>
      <div className="resultPage">
        {drinks.length > 0 && allDrinks === true ? loadDrinks() : null}
        {oneDrink === true ? loadDrink() : null}
      </div>
    </div>
  )
}

export default Cocktail;
