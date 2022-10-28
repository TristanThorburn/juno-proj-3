import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';

const SearchName = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ input, setInput ] = useState('');
  const [ results, setResults ] = useState([]);

    useEffect(() => {
        axios({
          url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
          params:{
            s:searchValue,
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
            <p>FIGURE OUT ERROR HANDLING</p>
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
            <SearchResults cocktails={ results } />
          </section>
        </div>
    )
}

export default SearchName;

// APIs:
    // glass:strGlass
    // ingredients: strIngredient#
    // measurements: strMeasure#
      // convert to ounces?
    // instruction: strInstructions
