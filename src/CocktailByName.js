import { useState } from 'react';
import Recipe from './Recipe';

const CocktailByName = (props) => {

    const [ recipeVisible, setRecipeVisible ] = useState(false);
    const handleClick = () => {
        setRecipeVisible(true);
    }

    return(
        <li className="cocktail name">
                <div className='card'>
                    <img src={props.drinkInfo.strDrinkThumb} alt={'A picture of a' + props.drinkInfo.strDrink + 'cocktail'} />
                </div>
                <h4>{props.drinkInfo.strDrink}</h4>
                <button onClick={handleClick}>Show Recipe</button>
                {
                    recipeVisible
                    ? <Recipe recipe={props.drinkInfo} setTrigger={setRecipeVisible}/>
                    : null
                }
        </li>
    )
}

export default CocktailByName;