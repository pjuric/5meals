import React, { useEffect, useState } from 'react'
import Meal from './components/Meal'
import Nav from './components/Nav'
import TwoCategories from './components/TwoCategories'
import IngredientList from './components/IngredientList'
import Buttons from './components/Buttons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from './components/Loading'

function Details() {

    const { id } = useParams()
    const [meal, setMeal] = useState([])
    const [loading, setLoading] = useState(true)
    const [mealUrl, setMealUrl] = useState("")

    useEffect(() => {
        if (id && id.length === 5) {
            setMealUrl(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        } else if (id) {
            setMealUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        } else {
            setMealUrl(`https://www.themealdb.com/api/json/v1/1/random.php`)
        }
      async function fetchData() {
        const details = await axios.get(mealUrl)
        setMeal(details.data.meals[0])
        setLoading(false)
        return details;
      }
      fetchData();
    }, [id, mealUrl])


    return (
        <div className="detailsContainer">
            <Nav/>
            {loading ?
                <Loading/>
            :
                <div>
                    <div className="main">
                        <Meal name={meal.strMeal} image={meal.strMealThumb}/>
                        <div className="rightSection">
                            <TwoCategories area={meal.strArea} category={meal.strCategory}/>
                            <IngredientList meal={meal}/>
                        </div>
                    </div>
                    <div className="secondSection">
                        <p className="instructions">{meal.strInstructions}</p>
                        <div className="buttonsNtags">
                            <Buttons blackText="Source" whiteText="Video" whiteHref={meal.strYoutube} blackHref={meal.strSource}/>
                            {meal.strTags &&
                                <p>TAGS: {meal.strTags}</p>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Details
