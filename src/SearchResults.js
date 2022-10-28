import Cocktail from './Cocktail';

const SearchResults = (props) => {

    return(
        <>
            <ul>
                {
                    props.cocktails.map( (drink) => {
                        return <Cocktail drinkInfo = {drink} key={drink.idDrink} />
                    })
                }
            </ul>
        </>    
    )
}

export default SearchResults;