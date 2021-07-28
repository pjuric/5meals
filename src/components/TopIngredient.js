import React from 'react'
import { Link } from 'react-router-dom'

function TopIngredient({ id, name, type, description }) {
    return (
        
            <Link className="topIngredient" to={`/search/si/${name}`}>
                    <div className="imageContainer">
                        <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt={name}/>
                        {/* {type && description &&
                            <div className="description">
                                <h4>Type: <span>{type}</span></h4>
                                <p>{description}</p>
                            </div>
                        } */}
                    </div>
                    <div className="nameContainer">
                        <p>{name}</p>
                    </div>
            </Link>
        
    )
}

export default TopIngredient
