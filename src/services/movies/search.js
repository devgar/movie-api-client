import API from '../API'

async function searchMovie (query, amount = 10, page = 1) {
	const response = await API('/search/movie', { query, page })
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export { searchMovie }