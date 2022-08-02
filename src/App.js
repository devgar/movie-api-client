import { Link, Outlet } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
