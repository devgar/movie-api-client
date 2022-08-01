import { useState, useEffect } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

import MovieList from '../components/MovieList'
import SearchBox from '../components/SearchBox'

import { searchMovie } from '../services/movies'

export default function Search () {
	const [movies, setMovies] = useState([])
	const [searchParams] = useSearchParams()
	useEffect(() => {
		let query = searchParams.get('query')
		if (query && query.length > 3)
			searchMovie(query).then(movies => setMovies(movies))
	}, [searchParams])
	return (
		<section className="column">
			<SearchBox />
			<div style={{display: 'flex'}}>
				<MovieList movies={movies} baseUrl='search/movies'/>
				<Outlet />
			</div>
		</section>
	)
}