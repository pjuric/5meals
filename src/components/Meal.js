import React from 'react'

function Meal({ name, image }) {
    return (
        <div className="mealBox">
            <img src={image} alt={name}/>
            <div className="mealName">
                {name}
            </div>
        </div>
    )
}

export default Meal
