// From React
import React, { Component } from 'react';

//  Shared modules
import Header from './modules/shared/Header/Header';
import Aside from './modules/shared/Aside/Aside';

import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Aside />
        <div className="rendering-zone">
          <h1>Hola mundo</h1>

        </div>
      </>
    );
  };
};

export default App;
