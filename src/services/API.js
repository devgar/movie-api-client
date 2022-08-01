const BASE_URL = new URL(process.env.REACT_APP_BASE_URL || "https://api.themoviedb.org/3")

export default function API(endpoint, params = {}) {
	const url = new URL(`/3${endpoint}`, BASE_URL)
	url.searchParams.append("api_key", process.env.REACT_APP_API_KEY)
	Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value))
	console.log('Going to request to ', url.href)
	return fetch(url.toString())
}

