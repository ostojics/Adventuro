import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.scss';

const navbar = props => {
    return (
        <nav className = 'navbar-secondary'>
            <div className = 'logo'>
                <h1>Adventuro</h1>
            </div>
            <ul className = 'links'>
                <li>
                    <NavLink className='link'  to='/' activeClassName='link-active' exact>Home</NavLink> 
                </li>
                <li>
                    <NavLink className='link' to='/camps' activeClassName ='link-active'>Camps</NavLink>   
                </li> 
                <li>
                    <NavLink className='link' to = '/testimonials' activeClassName = 'link-active'>Testimonials</NavLink>  
                </li> 
                <li>
                    { props.isAuthenticated ? (
                        <NavLink className='link' to = '/logout' activeClassName = 'link-active' exact>Sign Out</NavLink> 
                    ) : (
                        <NavLink className='link' to = '/auth' activeClassName = 'link-active' exact>Sign In</NavLink> 
                    ) }
                </li>       
            </ul>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(navbar);