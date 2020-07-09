import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import Footer from './Components/Footer';
import About from './Content/About';
import Services from './Content/Services';
import Gallery from './Content/Gallery';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/gallery" component={Gallery}/>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
