import React from 'react'
import { useNavigate } from 'react-router'
import Drinkdetails from '../../Pages/Drinkdetails'

const Cocktailpage = ({cocktail}) => {

      const navigate = useNavigate()

  return (
      <div className='cockTailPage' >
           <div className='drinkCard'>
              <div className='drinkImg'> <img src={cocktail.strDrinkThumb} alt='img' /></div>
              <div className='drinkText'>
                    <h1>{cocktail.strDrink} </h1>
                    <h4>{cocktail.strGlass} </h4>
                    <p>{cocktail.strAlcoholic} </p>
                    <button onClick={() => navigate(`/drinks/${cocktail.idDrink}`) } className='details' >DETAILS </button>
              </div>    
              </div>
    </div>
  )
}

export default Cocktailpage