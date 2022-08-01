import API from '../API'

export async function searchMovie (query, amount = 10, page = 1) {
	const response = await API('/search/movie', { query, page })
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export async function getTopTenPopularMovies (amount = 10, page = 1) {
	const response = await API('/movie/top_rated', { page })
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export async function getMovieDetail (id) {
	const response = await API(`/movie/${id}`)
	if (response.ok)
		return response.json()
}