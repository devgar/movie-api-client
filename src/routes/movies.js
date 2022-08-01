import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getTopTenPopularMovies } from "../services/movies"

export default function Movies() {
  let [movies, setMovies] = useState([])
  useEffect(() => {
    getTopTenPopularMovies().then(movies => setMovies(movies))
  }, [])
	return (
		<section style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
					flexGrow: 1,
        }}
      >
        {movies.map((movie) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/movies/${movie.id}`}
            key={movie.id}
          >
            {movie.title}
          </Link>
        ))}
      </nav>
			<Outlet />
    </section>
	)
}