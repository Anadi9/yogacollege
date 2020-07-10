import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import About from './Content/About';
import Gallery from './Content/Gallery';
import ServicesCards from './Content/ServicesCards';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/about" component={About}/>
          <Route path="/servicescards" component={ServicesCards}/>
          <Route path="/gallery" component={Gallery}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
