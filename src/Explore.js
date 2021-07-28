import React, { useEffect, useState } from 'react'
import TopIngredients from "./components/TopIngredients";
import Categories from "./components/Categories";
import Nav from './components/Nav';
import Loading from './components/Loading';
import axios from 'axios';
import NationalDishes from './components/NationalDishes';
import OutOfIdeas from './components/OutOfIdeas';

function Explore() {

    const [categories, setCategories] = useState([])
    const [topIngredients, setTopIngredients] = useState([])
    const [nations, setNations] = useState([])
    const [loading, setLoading] = useState(true)

    const urlCategories = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const urlIngredients = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    const urlNations = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"

    useEffect(() => {
        const getCategories = () => axios.get(urlCategories)
        const getIngredients = () => axios.get(urlIngredients)
        const getNations = () => axios.get(urlNations)
        async function fetchData() {
          const [gotCategories, gotIngredients, gotNations] = await axios.all([getCategories(), getIngredients(), getNations()])
          setCategories(gotCategories.data.categories)
          setTopIngredients(gotIngredients.data.meals)
          setNations(gotNations.data.meals)
          setLoading(false)
          return gotCategories;
        }
        fetchData();
      }, [urlCategories, urlIngredients, urlNations])

    const shuffledTopIngredients = topIngredients.sort(() => 0.5 - Math.random()).slice(0, 3)

    return (
        <div className="exploreContainer">
            <Nav/>
            {loading ? <Loading/> :
                <div>
                    <Categories categories={categories}/>
                    <TopIngredients topIngredients={shuffledTopIngredients}/>
                    <NationalDishes nations={nations}/>
                    <OutOfIdeas/>
                </div>
            }
        </div>
    )
}

export default Explore


