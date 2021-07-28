import React, { useState } from 'react'
import BlackButton from './BlackButton'
import SpecialButton from './SpecialButton'

function SearchSection({ id, header, specialText, specialLink, placeholder, blackText, mealName, blackLink }) {

    // const[blackLink, setBlackLink] = useState(`/`)
    const[name, setName] = useState("")

    const updateSearch = e => {
        // e.preventDefault();
        setName(e.target.value);
    };

    const clear = e => {
        setName('')
    };

    // if(mealName){
    //     setBlackLink(`/search/sm/${name}`)
    // } else {
    //     setBlackLink(`/search/si/${name}`) 
    // }

    return (
        <div className="search">
            <h1>{header}</h1>
            <form>
                <div className="inputDiv">
                    <img src="/search.svg" alt="search"/>
                    <input type="text" value={name} placeholder={id?id : placeholder} required="required" onChange={updateSearch}/>
                </div>
                <div className="searchButtons">
                    {mealName ? 
                        <BlackButton blackText={blackText} blackLink={`/details/${name}`} onClick={clear}/>
                    :
                        <BlackButton blackText={blackText} blackLink={`/search/si/${name}`} onClick={clear}/>
                    }
                    <SpecialButton text={specialText} specialLink={specialLink}/>
                </div>
            </form>
        </div>
    )
}

export default SearchSection
