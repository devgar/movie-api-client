import { Link, Outlet } from 'react-router-dom'

import { getPopularMovies } from "../data"

export default function Movies() {
	let movies = getPopularMovies()
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