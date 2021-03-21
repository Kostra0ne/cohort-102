import React from 'react';
import './App.css';
import Foods from './Components/Foods';

function App() {
  return (
    <div className="container p-5">
      <h2 className="title">IronNutrition</h2>
      <Foods />
    </div>
  );
}

export default App;
