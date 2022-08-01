import { useSearchParams } from 'react-router-dom'

import SearchBox from '../components/SearchBox'

export default function Search () {
	const [searchParams] = useSearchParams()
	return (
		<section className="column">
			<SearchBox />
			<p>
			Your search query is: {searchParams.get('query')}
			</p>
		</section>
	)
}