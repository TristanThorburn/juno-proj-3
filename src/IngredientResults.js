import Beverage from "./Beverage";

const IngredientResults = (props) => {
    return(
        <>
            <ul>
                {
                    props.cocktails?.map( (drink) => {
                        return <Beverage drinkInfo = {drink} key={drink.idDrink} />
                    })
                }
            </ul>
        </>    
    )
}

export default IngredientResults;