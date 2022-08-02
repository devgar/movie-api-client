import { getTopTenPopularMovies } from '../services/movies/popular'

function logTopTenPopularMovies (e) {
	e.preventDefault()
	getTopTenPopularMovies(10).then(m => console.log(m))
	return false
}

const SearchBox = () => 
<form onSubmit={logTopTenPopularMovies}>
	<input id="query-input" name="search" />
	<input id="search-button" type="submit" name="send" />
</form>

export default SearchBox