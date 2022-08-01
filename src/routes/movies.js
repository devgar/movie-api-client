import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

import MovieList from '../components/MovieList'

import { getTopTenPopularMovies } from "../services/movies"

export default function Movies() {
  let [movies, setMovies] = useState([])
  useEffect(() => {
    getTopTenPopularMovies().then(movies => setMovies(movies))
  }, [])
	return (
		<section style={{ display: "flex" }}>
      { movies.length ? <MovieList movies={movies} /> : <h1>Empty</h1> }
			<Outlet />
    </section>
	)
}