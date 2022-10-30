import CocktailByIngredient from "./CocktailByIngredient";

const ResultsIngredient = (props) => {
    return(
        <>
            <ul className="results">
                {
                    // props.cocktails?.slice(0,3).map( (drink) => {
                        props.cocktails?.map( (drink) => {
                        return <CocktailByIngredient drinkInfo = {drink} key={drink.idDrink} />
                    })
                }
            </ul>
        </>    
    )
}

export default ResultsIngredient;