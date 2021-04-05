
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Camps from './containers/Camps/Camps';
import Testimonials from './containers/Testimonials/Testimonials';
import CampDescription from './components/CampDescription/CampDescription';

class App extends Component {

render() {
    return (
        <div className="App">
          <Route path = '/' exact component = { Home }/>
          <Route path = '/camps' exact component = { Camps } />
          <Route path= '/camps/camp' component = { CampDescription } />
          <Route path = '/testimonials' component = { Testimonials } />
        </div>
    );
}
 
}

export default App;
