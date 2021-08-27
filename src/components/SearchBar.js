import React from 'react'

const SearchBar = ({searchValue, setSearchValue}) => {
    return (
        <div className = 'col col-sm-4'>
            <input
                className="form-control"
                placeholder="Search for Movie!"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            ></input>
        </div>
    )
}

export default SearchBar
