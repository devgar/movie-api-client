import API from '../API'

async function getMovieDetail (id) {
	const response = await API(`/movie/${id}`)
	if (response.ok)
		return response.json()
}

export { getMovieDetail }