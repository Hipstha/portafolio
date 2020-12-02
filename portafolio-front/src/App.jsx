// From React
import React, { Component } from 'react';

//  Shared modules
import Header from './modules/shared/Header/Header';
import Aside from './modules/shared/Aside/Aside';
import Footer from './modules/shared/Footer/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Aside />
        <h1>Hola mundo</h1>
        <Footer />
      </>
    );
  };
};

export default App;
