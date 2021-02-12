import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === 'development'
    ? `http://localhost:4000${path}`
    : path;
}

function App() {
  const [ state, setState ] = useState("");

  useEffect(() => {
    fetch(url('/api/'))
      .then((res) => res.json())
      .then((apiData) => setState(apiData.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        App Data: {state}
      </header>
    </div>
  );
}

export default App;
