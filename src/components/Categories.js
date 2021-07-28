import React, { useState } from 'react'
import Category from './Category'
import SpecialButton from './SpecialButton'

function Categories({ categories }) {

    const [click, setClick] = useState(false)
    function expand() {
        setClick(true);
    }

    return (
        <div className="ourCategories">
            <h1>Our <span>Categories</span></h1>
            <div className="categoriesContainer">
                {click ? categories.map(category => (
                    <Category id={category.idCategory} key={category.idCategory} name={category.strCategory} image={category.strCategoryThumb}/>
                ))
                :
                    categories.slice(0,6).map(category => (
                        <Category id={category.idCategory} key={category.idCategory} name={category.strCategory} image={category.strCategoryThumb}/>
                    ))
                }
            </div>
            {!click &&
                <SpecialButton onClick={ expand } text="See All" down="true"/>
            }
        </div>
    )
}

export default Categories
