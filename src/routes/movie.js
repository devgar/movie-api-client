import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getMovieDetail } from '../services/movies'

import NotFound from './notFound'

export default function Movie() {
	const params = useParams()
	const [movie, setMovie] = useState(null)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(true)
		getMovieDetail(params.movieId).then(movie => {
			setMovie(movie)
			setLoading(false)
		})
	}, [params])

	if (!movie) {
		if (loading) return <div>Loading...</div>
		else return <NotFound kind="Movie" />
	}

	return (
		<main>
			<h1 style={{ height: '3rem' }}>{movie.title}</h1>
			<h2 style={{ color: 'grey', height: '2.4rem' }}>{movie.original_title}</h2>
			<div>
				{movie.genres.map(genre => <i style={{marginLeft: '.2rem'}}>{genre.name}</i>)}
			</div>
			<p style={{ padding: '1rem'}}>{movie.overview}</p>
		</main>
	)
}