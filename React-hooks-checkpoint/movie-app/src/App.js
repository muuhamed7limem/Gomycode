// src/App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8,
    },
    {
      title: 'Interstellar',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.6,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= (ratingFilter || 0)
  );

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;