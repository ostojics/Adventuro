
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Camps from './containers/Camps/Camps';
import Testimonials from './containers/Testimonials/Testimonials';


class App extends Component {

render() {
    return (
        <div className="App">
          <Route path = '/' exact component = { Home }/>
          <Route path = '/camps' component = { Camps } />
          <Route path = '/testimonials' component = { Testimonials } />
        </div>
    );
}
 
}

export default App;
