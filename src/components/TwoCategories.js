import React from 'react'
import MealCategory from './MealCategory'

function TwoCategories({ area, category }) {
    return (
        <div className="twoCategories">
            <MealCategory type="c" content={category} source="/category.svg"/>
            <MealCategory type="a" content={area} source="/area.svg"/>
        </div>
    )
}

export default TwoCategories
