import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login.js';
import Logout from './components/Logout';
import CreateWatchLater from './components/watch_later/CreateWatchLater';
import Home from './components/Home';
import MovieSearch from './components/api_handle/MovieSearch';

const App = () => {

  const history = useHistory()
  const [errors, setErrors] = useState([])
  const [movies, setMovies] = useState([])
  const [randomMovie, setRandomMovie] = useState(null)
  const [watchLater, setWatchLater] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [user, setUser] = useState(null)

  const stateInit = () => {
    fetchUserAndMovies()
  }

  const setUserAndMovies = (data) => {
    setUser(data)
    setWatchLater(data.watch_laters)
  }

  useEffect(stateInit, [])
  useEffect(() => {
    searchMovies(searchValue)
  }, [searchValue])

  const addWatchLater = (movie) => {
    const newWatchLaterList = [...watchLater, movie]
    setWatchLater(newWatchLaterList)

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ title: movie.Title, poster: movie.Poster, user_id: user.id })
    }
    fetch('/watch_laters', config)
      .then(res => res.json())
      .then(data => setWatchLater([data, ...watchLater]))
  }

  const fetchUserAndMovies = () => {
    fetch('/me')
      .then(res => res.json())
      .then(data => setUserAndMovies(data))
  }

  const searchMovies = async (searchValue) => {
    let url = `/movie-search/${searchValue}`
    const response = await fetch(url)
    const responseJson = await response.json()


    if (responseJson.Search) {
      const filterResp = responseJson.Search.filter(movie => {
        return movie.Poster !== "N/A"
      })
      setMovies(filterResp)
    }
  }

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUserAndMovies(data)
    if (!data.errors) {
      history.push('/')
      setErrors([])
    }
  }

  const handleCreateWatchLater = (data) => {
    data.errors ? setErrors(data.errors) : setWatchLater([...watchLater, data])
    if (!data.errors) {
      history.push('/')
      setErrors([])
    }
  }

  return (
    <div className="App">
      <NavBar user={user} />
      <div className="content">
        <h3 id="logged-in">
          {user ? `${user.username} is currently logged in.` : null}
        </h3>
        <Switch>
          <Route exact path='/'>
            <Home randomMovie={randomMovie} setRandomMovie={setRandomMovie} watchLater={watchLater} setWatchLater={setWatchLater} />
          </Route>
          <Route exact path='/signup'>
            <Signup errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
          </Route>
          <Route exact path='/login'>
            <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
          </Route>
          <Route exact path='/movies'>
            <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} addWatchLater={addWatchLater} />
          </Route>
          <Route exact path='/logout'>
            <Logout user={user} setUser={setUser} setWatchLater={setWatchLater} />
          </Route>
          <Route exact path='/movies/new'>
            <CreateWatchLater handleCreateWatchLater={handleCreateWatchLater} errors={errors} user={user} />
          </Route>
        </Switch>
      </div>
    </div >
  );
}

export default App;