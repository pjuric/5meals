import React from 'react'
import { Link } from 'react-router-dom'

function MealCategory({ source, content, type}) {
    return (
        <div>
            <Link to={`/search/${type}/${content}`}>
                <div className="mealCategory">
                    <div className="categoryIcon">
                        <img src={source} alt={content}/>
                    </div>
                    <p>{ content }</p>
                </div>
            </Link>
        </div>
    )
}

export default MealCategory
