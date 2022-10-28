const Beverage = (props) => {
        return(
            <li>
                <h4>{props.drinkInfo.strDrink}</h4>
                <img src={props.drinkInfo.strDrinkThumb} alt="" />
            </li>
        )
    }


export default Beverage;
