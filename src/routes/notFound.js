export default function NotFound (props) {
	return (
		<main>
			<h1>404</h1>
			<p>
				{props.kind ?? 'Page'} not found.
			</p>
		</main>
	)
}