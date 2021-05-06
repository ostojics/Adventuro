import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import React, { useEffect, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Camps from './containers/Camps/Camps';
import CampDescription from './components/CampDescription/CampDescription';
import ScrollToTop from './scrollToTop';

const Testimonials = React.lazy(() => {
  return import('./containers/Testimonials/Testimonials');
})

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
})

const Logout = React.lazy(() => {
  return import('./components/Logout/Logout');
})

const App = props => {
  useEffect(() => {
    props.onTryAutoSignUp();
  }, [props])

  const routes = (
    <ScrollToTop>
        <Route path = '/' exact component = { Home }/>
        <Route path = '/camps' exact component = { Camps } />
        <Route path = '/camps/camp' component = { CampDescription } />
        <Route path = '/testimonials' component = { Testimonials } />
        <Route path = '/auth' component = { Auth }/>
        <Route path = '/logout' component = { Logout } />
    </ScrollToTop>
  
  )    

  return (
      <div className="App">
        <Suspense fallback = {<p>Loading...</p>}>{ routes }</Suspense>
      </div>
  );
 
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.checkAuthState())
  }
}

export default connect(null, mapDispatchToProps)(App);
