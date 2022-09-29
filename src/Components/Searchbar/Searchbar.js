import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Searchbar.css'
import Cocktailpage from './Cocktailpage'
  

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
                    {cocktails.filter((cock) => {
                        if (searchInput == '') {
                            return cock
                        } else if (cock.strDrink.toLowerCase().includes(searchInput.toLowerCase())) {
                            return  cock
                        }
                    }).map(cocktail => {
                    return (
                        <Cocktailpage key={cocktail.idDrink} cocktail={cocktail} />
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