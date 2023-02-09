import React from 'react';

import {
	Nav, 
	NavLink, 
	Bars, 
	NavMenu, 
	NavBtn,
	NavBtnLink
} from './NavbarElements'

const Navbar = () => {
  return (
	<>
	  <Nav>
		<NavLink to='/'>
		<img src={require('../images/redstonelogo.jpg')} height="70px" width="90px" alt="Redstone logo"/>
		</NavLink>
		<Bars />
		<NavMenu>
			<NavLink to='/about' activeStyle>
				About
			</NavLink>
			<NavLink to='/contact-us' activeStyle>
				Contact Us 
			</NavLink>
			<NavLink to='/signup' activeStyle>
				Sign Up
			</NavLink>
			<NavLink to='/login' activeStyle>
				Log In		
			</NavLink>
		</NavMenu>
		<NavBtn>
			<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
	  </Nav>
	</>
  )
}

export default Navbar;