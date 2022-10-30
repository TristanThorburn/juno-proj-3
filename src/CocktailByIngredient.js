const CocktailByIngredient = (props) => {
        return(
            <li className="cocktail ingredient">
                <div className="card">
                    <img src={props.drinkInfo.strDrinkThumb} alt={'A picture of a' + props.drinkInfo.strDrink + 'cocktail'} />
                </div>
                <h4>{props.drinkInfo.strDrink}</h4>
            </li>
        )
    }


export default CocktailByIngredient;
