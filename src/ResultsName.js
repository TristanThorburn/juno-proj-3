import CocktailByName from './CocktailByName';

const ResultsName = (props) => {

    return(
        <>
            <ul className="results">
                {
                    // props.cocktails.slice(0,3).map( (drink) => {
                        props.cocktails.map( (drink) => {
                        return <CocktailByName drinkInfo = {drink} key={drink.idDrink} />
                    })
                }
            </ul>
        </>    
    )
}

export default ResultsName;