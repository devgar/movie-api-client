import { useSearchParams } from "react-router-dom"

export default function SearchBox () {
	const [, setSearchParams] = useSearchParams()
	
	function onSubmit(e) {
		e.preventDefault()
		const params = {}
		if (e.target.q.value) params.q = e.target.q.value
		setSearchParams(params)
	}

	return (
		<form onSubmit={onSubmit} className="search-box">
			<input name='q' type="text" placeholder="Movie title" />
			<input type="submit" value="Search" />
		</form>
	)
}