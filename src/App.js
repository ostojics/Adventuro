
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Camps from './containers/Camps/Camps';
import Testimonials from './containers/Testimonials/Testimonials';
import CampDescription from './components/CampDescription/CampDescription';
import Auth from './containers/Auth/Auth';

class App extends Component {

render() {
    return (
        <div className="App">
          <Route path = '/' exact component = { Home }/>
          <Route path = '/camps' exact component = { Camps } />
          <Route path = '/camps/camp' component = { CampDescription } />
          <Route path = '/testimonials' component = { Testimonials } />
          <Route path = '/auth' component = { Auth }/>
        </div>
    );
}
 
}

export default App;
