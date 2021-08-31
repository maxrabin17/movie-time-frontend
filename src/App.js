import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Login from './components/Login.js';
import Logout from './components/Logout';
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import AddWatchLater from './components/AddWatchLater';
import RemoveWatchLater from './components/RemoveWatchLater';
import WatchLater from './components/WatchLater';

const App = () => {

  const history = useHistory()
  const [errors, setErrors] = useState([])
  const [movies, setMovies] = useState([])
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
      body: JSON.stringify({title: movie.Title, poster: movie.Poster, user_id: user.id})
  }
  fetch('/watch_laters', config)
      .then(res => res.json())
      .then(data => setWatchLater([data, ...watchLater]))
      // errors ? history.push('/login') : history.push('/wishes')
  }

  const fetchUserAndMovies = () => {
    fetch('/me')
      .then(res => res.json())
      .then(data => setUserAndMovies(data))
  }

  const searchMovies = async (searchValue) => {
    let url = `http://www.omdbapi.com/?s=${searchValue}&apikey=13a266fa`

    const response = await fetch(url)
    const responseJson = await response.json()
    console.log(responseJson)

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUserAndMovies(data)// && setWishes(data.wishes)
    if (!data.errors) {
      history.push('/')
      setErrors([])
    }
  }

  return (
    <div className = "App">
      <NavBar user={user} />
      <div className="content">
        <h3 id="logged-in">
          {user ? `${user.username} is currently logged in.` : null}
        </h3>
        <Switch>
          <Route exact path='/'>
          <div className='container-fluid movie-show'>
              <h1 className="heading" >Watch Later</h1>
              <div className='row'>
                <WatchLater movies={watchLater} handleWatchLater={addWatchLater} watchLaterComp={RemoveWatchLater} setWatchLater={ setWatchLater }/>
              </div>
            </div>
          </Route>
          <Route exact path='/signup'>
            <Signup errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
          </Route>
          <Route exact path='/login'>
            <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
          </Route>
          <Route exact path='/movies'>
            <div className='container-fluid movie-show'>
              <h1 className="heading" >Movie Search</h1>
              <div className='row justify-content-center mt-4 mb-4'>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
              </div>
              <div className='row'>
                <Movies movies={movies} handleWatchLater={ addWatchLater } watchLaterComp={AddWatchLater}/>
              </div>
            </div>
          </Route>
          <Route exact path = '/logout'>
            <Logout user={user} setUser={setUser} setWatchLater={ setWatchLater }/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

