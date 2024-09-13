import React, { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Greeting';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://deploy-fx99.onrender.com/')
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <Greeting/>

    </div>
  );
}

export default App;