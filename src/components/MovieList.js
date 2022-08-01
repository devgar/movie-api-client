
import { Link } from 'react-router-dom'

export default function MovieList ({ movies, baseUrl = 'movies' }) {
	return <nav 
		style={{
			borderRight: "solid 1px",
			padding: "1rem",
			flexGrow: 1,
		}}
	>
		{movies.map((movie) => (
			<Link
				style={{ display: "block", margin: "1rem 0" }}
				to={`/${baseUrl}/${movie.id}`}
				key={movie.id}
			>
				{movie.title}
			</Link>
		))}
	</nav>
}