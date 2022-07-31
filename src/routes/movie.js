import { useParams } from 'react-router-dom'

export default function Movie() {
	const params = useParams()

	return (
		<main>
			<h1>Movie # {params.movieId}</h1>
			<p>
				This is the movie page for # {params.movieId}
			</p>
		</main>
	)
}