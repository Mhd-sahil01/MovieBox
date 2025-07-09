import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'
import './css/App.css';

function App() {

  return (
    <MovieProvider>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourite />} />
        </Routes>
      </div>
    </MovieProvider>
  )
}

export default App
