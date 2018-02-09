import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import Navigation from './components/Navigation.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
