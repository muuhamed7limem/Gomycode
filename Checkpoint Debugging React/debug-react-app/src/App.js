// src/App.js
import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import './App.css';

const App = () => {
  const user = {
    name: 'Mohamed Limem',
    age: 21,
    email: 'mohamedlimem@example.com',
  };

  return (
    <div className="App">
      <Header />
      <Counter />
      <UserProfile {...user} />
    </div>
  );
};

export default App;