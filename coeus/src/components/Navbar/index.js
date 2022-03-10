import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
                <h1>COEUS</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/todo' activeStyle>
                    Todo
                </NavLink>
                <NavLink to='/calendar' activeStyle>
                    Calendar
                </NavLink>
                <NavLink to='/notes' activeStyle>
                    Notes
                </NavLink>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
                <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar
