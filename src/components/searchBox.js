import { useSearchParams } from "react-router-dom"

export default function SearchBox () {
	const [, setSearchParams] = useSearchParams()
	
	function onSubmit(e) {
		e.preventDefault()
		const params = {}
		if (e.target.query.value) params.query = e.target.query.value
		setSearchParams(params)
	}

	return (
		<form onSubmit={onSubmit} className="search-box">
			<input name='query' type="text" placeholder="Movie title" />
			<input type="submit" value="Search" />
		</form>
	)
}