import React from 'react';
import './App.css';
import Title from './Title'; 
import Subtitle from './Subtitle';

function App() {
  return (
    <div className="App">
      <Title /> 
      <Subtitle text="Subtítulo Top" />
    </div>
  );
}

export default App;
