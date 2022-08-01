import { Link, Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Top Movies</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default App
