import React from 'react';
import './App.css';

import Profile from './components/Profile';
import Followers from '/components/Followers';


function App() {
  return (
    <div className="App">
      <h1>GitHub User Card</h1>
      <h2>The React Lifecycle</h2>
      <h3>Tuesday Week 9</h3>
      <Profile/>
      <Followers/>

    </div>
  );
}

export default App;
