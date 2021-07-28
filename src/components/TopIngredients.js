import React from 'react'
import SpecialButton from './SpecialButton'
import TopIngredient from './TopIngredient'

function TopIngredients({ topIngredients }) {
    return (
        <div className="topIngredientsContainer">
            <h1>Today's Top <span>Ingredients</span></h1>
            <div className="ingredientsContainer">
                {topIngredients.map(ingredient => (
                    <TopIngredient id={ingredient.idIngredient} key={ingredient.idIngredient} name={ingredient.strIngredient} type={ingredient.strType} description={ingredient.strDescription}/>
                ))}
            </div>
            <SpecialButton specialLink="/search/si/" text="Search food by ingredient name"/>
        </div>
    )
}

export default TopIngredients
