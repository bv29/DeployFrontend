import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the website</h1>
      <SpeedInsights />

    </div>
  );
}

export default App;