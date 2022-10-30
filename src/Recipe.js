const Recipe = (props) => {
    return(
        <div>
            <p>{props.recipe.strGlass}</p>
            <p>{props.recipe.strMeasure1}{props.recipe.strIngredient1}</p>
            <p>{props.recipe.strMeasure2}{props.recipe.strIngredient2}</p>
            <p>{props.recipe.strMeasure3}{props.recipe.strIngredient3}</p>
            <p>{props.recipe.strMeasure4}{props.recipe.strIngredient4}</p>
            <p>{props.recipe.strMeasure5}{props.recipe.strIngredient5}</p>
            <p>{props.recipe.strMeasure6}{props.recipe.strIngredient6}</p>
            <p>{props.recipe.strInstructions}</p>
        </div>
    )
}

export default Recipe;