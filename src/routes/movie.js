import { useParams } from 'react-router-dom'

import { getMovie } from '../data'
import NotFound from './notFound'

export default function Movie() {
	const params = useParams()
	const movie = getMovie(params.movieId)

	if (!movie) return <NotFound kind="Movie" />
	
	return (
		<main>
			<h1 style={{ height: '4rem' }}>{movie.title}</h1>
			<p>
				This is the movie page for # {params.movieId}
			</p>
		</main>
	)
}