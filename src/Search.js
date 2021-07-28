import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './components/Loading'
import Nav from './components/Nav'
import Results from './components/Results'
import SearchSection from './components/SearchSection'

function Search() {

    const { id } = useParams()
    const { type } = useParams()

    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [resultUrl, setResultUrl] = useState("")


    useEffect(() => {
      async function fetchData() {
        if (type ==="c" || type === "a") {
            setResultUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?${type}=${id}`)
        } else if(type === "si" && id) {
            setResultUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
        } else if(type === "sm" && id){
            setResultUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
        } else setResultUrl("")

        if(resultUrl.length > 1){
            const details = await axios.get(resultUrl)
            setResult(details.data.meals)
            setLoading(false)
        } else return setLoading(false)
      }
      fetchData();
    }, [id, resultUrl, type])

    return (
        <div className="searchContainer">
            <Nav/>
            {loading ?
                <Loading/>
            :
                <div>
                    { type === "si" &&
                        <SearchSection placeholder="Ingredient (E.G. Onions)" specialLink="/search/sm" specialText="Search Meals by Name" blackText="Search" id={id} header="Search Meals by Ingredient Name"/>
                    }
                    { type === "sm" &&
                        <SearchSection placeholder="Meal (E.G. Wasabi)" specialLink="/search/si" specialText="Search Meals by Ingredient Name" mealName="true" blackText="Search" id={id} header="Search Meals by Name"/>
                    }
                    {id &&
                        <div className="fullwidth">
                            <h1>{id}</h1>
                            <Results result={result}/>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Search
