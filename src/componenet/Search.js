import React from "react"


const Search = ({ searchHandler, setInput }) => {


    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="search">
            <input onChange={onChange} type="text" />
            <button onClick={searchHandler}>Search</button>
        </div >
    )
}

export default Search