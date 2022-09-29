import React, { useEffect, useState } from 'react'
import '../Pages/Home/Drinkdetails.css'
import { useParams } from 'react-router'
import axios from 'axios'
import Navbar from '../Components/Navbar/Navbar';
import {Link} from 'react-router-dom'
import Preload from '../Components/Preload/Preload';


const Drinkdetails = () => {

  const { idDrink } = useParams();

  const detailsUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`

  const [drink, setDrink] = useState({})

  useEffect(() => {
    axios.get(detailsUrl)
      .then((res) => setDrink(((res.data.drinks[0])))
      ).catch(err => console.log(err))
  }, [])
  
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 3000);
  }, []);

  return (
    <div className='drinkDetailContainer'>
      {!completed ? (
        <div className="contain">
          {!loading ? (
            <div className="loader">
              <Preload />
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      ) : (
        <>
          <Navbar />
          <div className='centerHeading'>
         <Link to='/' ><button className='backHomeBtn' >Back Home </button></Link>
              <h1>{drink?.strDrink} </h1>
              </div>
          <div className='drinkCards'>
          <div className='drinkImage' > <img src={drink?.strDrinkThumb} alt='img' /></div>
          <div className='drinksText'>
                <h2><span>Name: </span> {drink?.strDrink} </h2>
              <h2><span>Category: </span> {drink?.strCategory} </h2>
              <h2><span>Glass: </span> {drink?.strGlass} </h2>
              <h2><span>Instructions: </span> {drink?.strInstructions} </h2>
                  <h2><span>Ingredients: </span> {drink?.strIngredient1} {drink?.strIngredient2} {drink?.strIngredient3} 
                      {drink?.strIngredient4} 
                  {drink?.strIngredient5} {drink?.strIngredient6} 
                  </h2>
              </div>
              </div>
          </>
  )
}
    </div>
  )
}

export default Drinkdetails