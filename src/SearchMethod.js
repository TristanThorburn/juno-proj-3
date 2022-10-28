import { useState } from 'react';
import SearchName from './SearchName';
import SearchIngredient from './SearchIngredient';

const SearchMethod = () => {

    const [ searchMethod, setSearchMethod ] = useState('null');

    const handleClick = (e) => {
        setSearchMethod(e.target.value);
    }

    return(
        <>
            <h2>How would you like to search for a recipe?</h2>
            <button 
                onClick={handleClick}
                value='ingredient'
                >Cocktail Ingredient</button>
            <button 
                onClick={handleClick}
                value='name'
                >Cocktail Name</button>
            {
                searchMethod === 'name'
                ? <SearchName />
                : searchMethod === 'ingredient'
                    ? <SearchIngredient />
                    : null 
            }    
        </>
    )
}
export default SearchMethod