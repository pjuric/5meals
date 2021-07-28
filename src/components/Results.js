import React from 'react'
import Result from './Result'

function Results({ result }) {
    return (
        <div className="resultsContainer">
            {result && result.length > 1 ? result.map(meal => (
                <Result key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb}/>
            ))
            :
            <h1 className="fullwidth">No results</h1>
            }
        </div>
    )
}

export default Results
