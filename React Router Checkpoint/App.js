// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
    {
      id: 2,
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.6,
      trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= (ratingFilter || 0)
  );

  return (
    <Router>
      <div className="App">
        <h1>Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  onTitleChange={setTitleFilter}
                  onRatingChange={setRatingFilter}
                />
                <AddMovie onAddMovie={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
