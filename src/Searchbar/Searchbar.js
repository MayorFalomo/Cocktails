import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cocktailpage from '../Components/Searchbar/Cocktailpage';
import '../Components/Searchbar/Searchbar.css'
import { useNavigate } from 'react-router';
  

const Searchbar = () => {
    const [cocktails, setCocktails] = useState([]);

    const [searchInput, setSearchInput] = useState('')

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

    let content = null


    useEffect(() => {
         axios.get(url)
            .then((res) => setCocktails(res.data.drinks)).catch(err => console.log(err))
       
    }, [url])

    if (cocktails) {
    
        return (
            <div className='mainContainer' >
                <div className='inputCard'>
                <h2>Search Your Favourite Cocktail</h2>
                    <input onChange={(e) => setSearchInput(e.target.value)} placeholder='Search...' typeof='text' />
                </div>
                <div className='heading' ><h1>Cocktails</h1></div>
            <div className='searchContainer'>
                    {cocktails.filter((cocktailed) => {
                        if (searchInput == '') {
                            return cocktailed
                        } else if (cocktailed.strDrink.toLowerCase().includes(searchInput.toLowerCase())) {
                            return cocktailed
                        }
                    }).map(cocktail => {
                    return (
                        <Cocktailpage key={cocktail.idDrink} cocktails={cocktails} cocktail={cocktail} />
                    )
                })

                    }
                </div>
                </div>
        )
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Searchbar