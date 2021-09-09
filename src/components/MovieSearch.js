import React from 'react'
import SearchBar from './SearchBar'
import Movies from './Movies'

const MovieSearch = ({searchValue, setSearchValue, movies, addWatchLater}) => {
    return (
        <div className='container-fluid movie-show'>
            <h1 className="heading" >Movie Search</h1>
            <div className='row d-flex mt-4 mb-4'>
                <SearchBar id="search" searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'>
                <Movies movies={movies} handleWatchLater={addWatchLater} />
            </div>
        </div>
    )
}

export default MovieSearch
