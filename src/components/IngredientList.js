import React from 'react'
import Ingredient from './Ingredient'

function IngredientList({ meal }) {

    return (
        <div className="ingredientListContainer">
            {
                meal.strIngredient1 && <Ingredient name={meal.strIngredient1} measure={meal.strMeasure1} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient1}-Small.png`}/>
            }
            {
                meal.strIngredient2 && <Ingredient name={meal.strIngredient2} measure={meal.strMeasure2} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient2}-Small.png`}/>
            }
            {
                meal.strIngredient3 && <Ingredient name={meal.strIngredient3} measure={meal.strMeasure3} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient3}-Small.png`}/>
            }
            {
                meal.strIngredient4 && <Ingredient name={meal.strIngredient4} measure={meal.strMeasure4} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient4}-Small.png`}/>
            }
            {
                meal.strIngredient5 && <Ingredient name={meal.strIngredient5} measure={meal.strMeasure5} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient5}-Small.png`}/>
            }
            {
                meal.strIngredient6 && <Ingredient name={meal.strIngredient6} measure={meal.strMeasure6} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient6}-Small.png`}/>
            }
            {
                meal.strIngredient7 && <Ingredient name={meal.strIngredient7} measure={meal.strMeasure7} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient7}-Small.png`}/>
            }
            {
                meal.strIngredient8 && <Ingredient name={meal.strIngredient8} measure={meal.strMeasure8} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient8}-Small.png`}/>
            }
            {
                meal.strIngredient9 && <Ingredient name={meal.strIngredient9} measure={meal.strMeasure9} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient9}-Small.png`}/>
            }
            {
                meal.strIngredient10 && <Ingredient name={meal.strIngredient10} measure={meal.strMeasure10} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient10}-Small.png`}/>
            }
            {
                meal.strIngredient11 && <Ingredient name={meal.strIngredient11} measure={meal.strMeasure11} image={`https://www.themealdb.com/images/ingredients/${meal.strIngredient11}-Small.png`}/>
            }
        </div>
    )
}

export default IngredientList
