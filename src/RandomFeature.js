import axios from 'axios';
import { useState, useEffect } from 'react';

const RandomFeature = () => {

    const [ feature, setFeature ] = useState([])

    useEffect(() => {
        axios({
          url:'https://www.thecocktaildb.com/api/json/v1/1/random.php',
        }).then( (result) => {
          setFeature(result.data.drinks[0]);
        }).catch(error => {
            return error;
        });
      }, []);

    return(
        <div>
            <h2>Why not try this?</h2>
            <p>{feature.strDrink}</p>
            <div className='featureImg'>
                <img src={feature.strDrinkThumb} alt="An image of a cocktail" />
            </div>
        </div>
    )
}

export default RandomFeature;
