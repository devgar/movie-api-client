import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import NotFound from './routes/notFound'
import Movies from './routes/movies'
import Movie from './routes/movie'
import Search from './routes/search'

import logo from './logo.svg'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <main style={{ padding: "4rem 0", backgroundColor: "#282c34" }}>
                <img src={logo} className="App-logo" alt="logo de The Movie DB" />
              </main>
            }
          />
          <Route path="movies" element={<Movies />} >
            <Route path=":movieId" element={<Movie />} />
          </Route>
          <Route path="search" element={<Search />} >
            <Route path="movies/:movieId" element={<Movie />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound kind="Section" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
