import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login.js';
import Movies from './components/Movies';

const App = () => {

  const history = useHistory()
  const [errors, setErrors] = useState([])
  const [movies, setMovies] = useState([
    {
    "Title": "Star Wars",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }])
  
  
  const [user, setUser] = useState(null)

  const stateInit = () => {
    fetchUserAndMovies()
  }

  const setUserAndMovies = (data) => {
    setUser(data)
  }

  useEffect(stateInit, [])

  const fetchUserAndMovies = () => {
    fetch('/me')
      .then(res => res.json())
      .then(data => setUserAndMovies(data))
  }

  const handleUserLoginAndSignup = (data) => {
    data.errors ? setErrors(data.errors) : setUserAndMovies(data)// && setWishes(data.wishes)
    if (!data.errors) {
      history.push('/')
      setErrors([])
    }
  }




  return (
    <div className="App">
      <NavBar user={user} />
      <h3 id="logged-in">
        {user ? `${user.username} is currently logged in.` : null}
      </h3>
      <Switch>
        <Route exact path='/'>
          <Home user={user} />
        </Route>
        <Route exact path='/signup'>
          <Signup errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
        </Route>
        <Route exact path='/login'>
          <Login errors={errors} handleUserLoginAndSignup={handleUserLoginAndSignup} />
        </Route>
        <Route exact path='/movies'>
          <Movies movies={ movies }/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

