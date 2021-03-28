
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Camps from './containers/Camps/Camps';


class App extends Component {

render() {
    return (
        <div className="App">
          <Route path = '/' exact component = { Home }/>
          <Route path = '/camps' component = { Camps } />
        </div>
    );
}
 
}

export default App;
