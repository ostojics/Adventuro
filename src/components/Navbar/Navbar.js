import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import './Navbar.scss';

const Navbar = props => {
    const { pathname } = useLocation();

    const dispatch = useDispatch();
    const onAuthRedirect = () => dispatch({ type:'AUTH_REDIRECT', link: pathname })

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null
    })

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
                    { isAuthenticated ? (
                        <NavLink className='link link-auth' to = '/logout' exact>Sign Out</NavLink> 
                    ) : (
                        <NavLink className='link link-auth' to = '/auth' exact onClick = { onAuthRedirect }>Sign In</NavLink> 
                    ) }
                </li>       
            </ul>
        </nav>
    )
}

export default React.memo(Navbar);