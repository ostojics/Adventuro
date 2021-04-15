import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Camps from './containers/Camps/Camps';
import Testimonials from './containers/Testimonials/Testimonials';
import CampDescription from './components/CampDescription/CampDescription';
import Auth from './containers/Auth/Auth';
import Logout from './components/Logout/Logout';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }

  render() { 
      return (
          <div className="App">
            <Route path = '/' exact component = { Home }/>
            <Route path = '/camps' exact component = { Camps } />
            <Route path = '/camps/camp' component = { CampDescription } />
            <Route path = '/testimonials' component = { Testimonials } />
            <Route path = '/auth' component = { Auth }/>
            <Route path = '/logout' component = { Logout } />
          </div>
      );
  }
 
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.checkAuthState())
  }
}

export default connect(null, mapDispatchToProps)(App);
