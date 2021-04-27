import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import './Navbar.scss';

const Navbar = props => {
    const { pathname } = useLocation();
    const [navLinks, setNavLink] = useState([
        { to: '/', text: 'Home'},
        { to: '/camps', text: 'Camps'},
        { to: '/testimonials', text: 'Testimonials'}
    ])
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [navMenu, toggleNavMenu] = useState(false);

    const dispatch = useDispatch();
    const onAuthRedirect = () => dispatch({ type:'AUTH_REDIRECT', link: pathname })

    const isAuthenticated = useSelector(state => {
        return state.auth.token !== null
    })

    const navIconClickedHandler = () => {
        setHamburgerClicked(prevState => !prevState);
        toggleNavMenu(prevState => !prevState);
    }

    return (
        <Fragment>
             <ul className = 'mobile-menu' style = { navMenu ? {display: 'flex'} : {display: 'none'} }>
                { navLinks.map(link => {
                    return (
                    <li>
                        <NavLink className='link'  to={ link.to } activeClassName='link-active' exact>{ link.text }</NavLink> 
                    </li>
                    )
                }) }
                <li>
                    { isAuthenticated ? (
                        <NavLink className='link link-auth' to = '/logout' exact>Sign Out</NavLink> 
                    ) : (
                        <NavLink className='link link-auth' to = '/auth' exact onClick = { onAuthRedirect }>Sign In</NavLink> 
                    ) }
                </li>       
            </ul>
            <nav className = 'navbar'>
                <div className = 'logo'>
                    <h1>Adventuro</h1>
                </div>
                { !hamburgerClicked ? <i class="fas fa-bars" onClick = { navIconClickedHandler }></i> : <i class="fas fa-times" onClick = { navIconClickedHandler }></i> }
                <ul className = 'links'>
                    { navLinks.map(link => {
                        return (
                        <li>
                            <NavLink className='link'  to={ link.to } activeClassName='link-active' exact>{ link.text }</NavLink> 
                        </li>
                        )
                    }) }
                    <li>
                        { isAuthenticated ? (
                            <NavLink className='link link-auth' to = '/logout' exact>Sign Out</NavLink> 
                        ) : (
                            <NavLink className='link link-auth' to = '/auth' exact onClick = { onAuthRedirect }>Sign In</NavLink> 
                        ) }
                    </li>       
                </ul>
            </nav>
        </Fragment>
    )
}

export default React.memo(Navbar);