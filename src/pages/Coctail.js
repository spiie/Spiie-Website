import React, { useState } from "react"
import '../assets/css/base.css'
import '../assets/css/coctail.css'


const CoctailBox = ({ drink, setDrink, setAllDrinks, setOneDrink }) => {
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
      setDrink(e.target.id)
      setAllDrinks(false)
      setOneDrink(true)
      }}>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="coctailImage" id={drink.idDrink} />
      <p className="coctailName" id={drink.idDrink}>{drink.strDrink}</p>
      <p className="coctailIsAlcoholic" id={drink.idDrink}>{drink.strAlcoholic}</p>
      <p className="nbIngredient" id={drink.idDrink}>Nombres d'ingrédients : {numberOfIngredients}</p>
    </div>
  )
}


const Coctail = () => {

  const [drinks, setDrinks] = useState([])
  const [drink, setDrink] = useState([])
  const [drinkData, setDrinkData] = useState([])
  const [allDrinks, setAllDrinks] = useState(true)
  const [oneDrink, setOneDrink] = useState(true)

  const SearchById = async (id) => {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        console.log(response.body)
        console.log(response.json())
        response.json()
      })
      .then(data => {
        setDrinkData(data["drinks"])
      })
    console.log(drinkData)
    setOneDrink(true)
    setAllDrinks(false)
  }

  const SearchByLetter = async (letter) => {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(response => response.json())
      .then(data => {
        setDrinks(data["drinks"])
      })
    console.log(drinks)
    setAllDrinks(true)
    setOneDrink(false)
  }

  const loadDrinks = () => {
    return drinks.map(drink => {
      return (
        <CoctailBox drink={drink} setDrink={setDrink} setAllDrinks={setAllDrinks} setOneDrink={setOneDrink} key={drink.idDrink} />
      )
    })
  }

  const loadDrink = () => {
    SearchById(drink)
    return <p>{drink}</p>
  }

  return (
    <div className="coctail">
      <div className="search">
        <input type="text" name="search" id="search" className="searchText" placeholder="Search Coctail" />
        <div className="searchByLetter">
          <a href="#" onClick={() => SearchByLetter("a")}>A</a>
          <a href="#" onClick={() => SearchByLetter("b")}>B</a>
          <a href="#" onClick={() => SearchByLetter("c")}>C</a>
          <a href="#" onClick={() => SearchByLetter("d")}>D</a>
          <a href="#" onClick={() => SearchByLetter("e")}>E</a>
          <a href="#" onClick={() => SearchByLetter("f")}>F</a>
          <a href="#" onClick={() => SearchByLetter("g")}>G</a>
          <a href="#" onClick={() => SearchByLetter("h")}>H</a>
          <a href="#" onClick={() => SearchByLetter("i")}>I</a>
          <a href="#" onClick={() => SearchByLetter("j")}>J</a>
          <a href="#" onClick={() => SearchByLetter("k")}>K</a>
          <a href="#" onClick={() => SearchByLetter("l")}>L</a>
          <a href="#" onClick={() => SearchByLetter("m")}>M</a>
          <a href="#" onClick={() => SearchByLetter("n")}>N</a>
          <a href="#" onClick={() => SearchByLetter("o")}>O</a>
          <a href="#" onClick={() => SearchByLetter("p")}>P</a>
          <a href="#" onClick={() => SearchByLetter("q")}>Q</a>
          <a href="#" onClick={() => SearchByLetter("r")}>R</a>
          <a href="#" onClick={() => SearchByLetter("s")}>S</a>
          <a href="#" onClick={() => SearchByLetter("t")}>T</a>
          <a href="#" onClick={() => SearchByLetter("u")}>U</a>
          <a href="#" onClick={() => SearchByLetter("v")}>V</a>
          <a href="#" onClick={() => SearchByLetter("w")}>W</a>
          <a href="#" onClick={() => SearchByLetter("x")}>X</a>
          <a href="#" onClick={() => SearchByLetter("y")}>Y</a>
          <a href="#" onClick={() => SearchByLetter("z")}>Z</a>
        </div>
      </div>
      {drinks.length > 0 && allDrinks === true ? loadDrinks() : null}
      {oneDrink === true ? loadDrink() : null}
    </div>
  )
}

export default Coctail;