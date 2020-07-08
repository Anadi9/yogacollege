import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
    </div>
  );
}

export default App;
