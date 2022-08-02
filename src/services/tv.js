import API from '../API'

export async function searchTVShow (query, amount = 10, page = 1) {
	const response = await API('/search/tv', { query, page })
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export async function getTopTenPopularTVShows (amount = 10, page = 1) {
	const response = await API('/tv/top_rated', { page })
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export async function getTVShowDetail (id) {
	const response = await API(`/tv/${id}`)
	if (response.ok)
		return response.json()
}