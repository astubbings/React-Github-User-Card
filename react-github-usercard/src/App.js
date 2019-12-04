import React from 'react';
import './App.css';

import MyProfile from './components/MyProfile';
import MyFollowers from './components/MyFollowers';


function App() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <h2>The React Lifecycle</h2>
      <h3>Tuesday Week 9</h3>
      <MyProfile />
      <MyFollowers />

    </div>
  );
}

export default App;
