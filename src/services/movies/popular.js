const POPULAR_DAY_MOVIES = (() => {
	const u = new URL("/3/movie/popular", "https://api.themoviedb.org")
	u.searchParams.append("api_key", process.env.REACT_APP_API_KEY)
	u.searchParams.append("language", "en-US")
	u.searchParams.append("page", "1")
	return u.toString()
})()

async function getTopTenPopularMovies (amount) {
	const response = await fetch(POPULAR_DAY_MOVIES)
	if (response.ok)
		return (await response.json()).results.slice(0, amount)
}

export { getTopTenPopularMovies }