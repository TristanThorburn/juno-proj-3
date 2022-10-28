import axios from 'axios';
import { useEffect, useState } from 'react';
import IngredientResults from './IngredientResults';

const SearchIngredient = () => {

    const [ searchValue, setSearchValue ] = useState('');
    const [ input, setInput ] = useState('');
    const [ results, setResults ] = useState([]);

    useEffect(() => {
        axios({
          url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
          params:{
            i:searchValue,
          }
        }).then( (cocktails) => {
          setResults(cocktails.data.drinks);
        }).catch(error => {
            return error;
        });
      }, [input]);

    const handleClick = (e) => {
        e.preventDefault();
        setInput(searchValue);
      }
      const handleOnChange = (e) => {
        setSearchValue(e.target.value);
      }
  
      return(
          <div>
            <section>
              <h3>Search by Cocktail Name</h3>
              <p>FIGURE OUT ERROR HANDLING / NO RECIPES VIA THIS SEARCH</p>
              <form>
                <label htmlFor='searchName' className='sr-only'>Enter Name</label>
                <input 
                type='text'
                name='searchName'
                placeholder='Enter Name'
                onChange={handleOnChange}
                />
                <button type='submit' onClick={handleClick}>Search</button>
              </form>
            </section>
            <section>
              <IngredientResults cocktails={ results } />
            </section>
          </div>
      )
  }

export default SearchIngredient;