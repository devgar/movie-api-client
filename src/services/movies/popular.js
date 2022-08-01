import API from '../API'

async function getTopTenPopularMovies (amount = 10, page = 1) {
	const response = await API('/movie/top_rated', { page })
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export { getTopTenPopularMovies }