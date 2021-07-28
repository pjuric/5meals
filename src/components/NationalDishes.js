import React from 'react'
import Nation from './Nation'

function NationalDishes({ nations }) {
    return (
        <div className="nationalDishesWhole">
            <div className="nationalDishes">
                <h1>Interested in <span>National Dishes</span>?</h1>
                <div className="nationalDishesContainer">
                    {nations.map(nation => (
                        <Nation key={nation.strArea} name={nation.strArea}/>
                    ))}
                </div>
            </div>
            <img src="./chef2.svg" alt="chef2"/>
        </div>
    )
}

export default NationalDishes
