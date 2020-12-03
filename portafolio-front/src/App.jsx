// From React
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//  Shared modules
import Header from './modules/shared/Header/Header';
import Aside from './modules/shared/Aside/Aside';

// Pages
import Resume from './modules/pages/Resume/Resume';
import About from './modules/pages/About/About';
import Contact from './modules/pages/Contact/Contact';
import CV from './modules/pages/CV/CV';
import ProfessionalLife from './modules/pages/ProfessionalLife/ProfessionalLife';
import History from './modules/pages/History/History';
import Courses from './modules/pages/Courses/Courses';

// Styles
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Aside />

          <div className="rendering-zone">
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              {/* PAGES NAVIGATION */}
              <Route path="/home" component={ Resume } />
              <Route path="/cv" component={ CV } />
              <Route path="/projects" component={ Courses } />
              <Route path="/about-me" component={ About } />
              <Route path="/professional-life" component={ ProfessionalLife } />
              <Route path="/my-history" component={ History } />
              <Route path="/contact" component={ Contact } />
            </Switch>

          </div>
        </Router>
      </>
    );
  };
};

export default App;
