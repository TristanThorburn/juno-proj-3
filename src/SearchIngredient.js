import axios from 'axios';
import { useState } from 'react';
import ResultsIngredient from './ResultsIngredient';

const SearchIngredient = () => {

    const [ searchValue, setSearchValue ] = useState('tequila');
    const [ results, setResults ] = useState([]);
    const [ error, setError ] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();

        axios({
          url:'https://www.thecocktaildb.com/api/json/v1/1/filter.php?',
          params:{
            i:searchValue,
          }
        }).then( (cocktails) => {
          if (cocktails.data.drinks === undefined){
            throw Error ('No cocktails match your search term, please try again');
          }
          setResults(cocktails.data.drinks);
        }).catch(error => {
            setError(error.message);
        });
      };

      const handleOnChange = (e) => {
        setSearchValue(e.target.value);
      }
  
      return(
          <div>
            <section className='searchBar'>
              <h3>Search by Cocktail Ingredient</h3>
              <form onSubmit={handleSubmit}>
                <label htmlFor='searchName' className='sr-only'>Enter Ingredient</label>
                <input 
                type='text'
                name='searchName'
                placeholder='Enter Ingredient'
                onChange={handleOnChange}
                />
                <button type='submit'>Search</button>
              </form>
            </section>
            <section>
            { error && <div>{ error } </div> }
              <ResultsIngredient cocktails={ results } />
            </section>
          </div>
      )
  }

export default SearchIngredient;