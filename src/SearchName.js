import axios from 'axios';
import { useState } from 'react';
import ResultsName from './ResultsName';

const SearchName = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ results, setResults ] = useState([]);
  const [ error, setError ] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      
        axios({
          url:'https://www.thecocktaildb.com/api/json/v1/1/search.php?',
          params:{
            s:searchValue,
          }
        }).then( (cocktails) => {
          if (cocktails.data.drinks === null){
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
            <h3>Search by Cocktail Name</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor='searchName' className='sr-only'>Enter Name</label>
              <input 
              type='text'
              name='searchName'
              placeholder='Enter Name'
              onChange={handleOnChange}
              />
              <button type='submit'>Search</button>
            </form>
          </section>
          <section>
            { error && <div>{ error } </div> }
            <ResultsName cocktails={ results } />
          </section>
        </div>
    )
}

export default SearchName;
