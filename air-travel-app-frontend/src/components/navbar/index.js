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
			Redstone		
		</NavLink>
		<Bars />
		<NavMenu>
			<NavLink to='/about' activeStyle>
				About
			</NavLink>
			<NavLink to='/services' activeStyle>
				Services
			</NavLink>
			<NavLink to='/contact-us' activeStyle>
				Contact Us 
			</NavLink>
			<NavLink to='/signin' activeStyle>
				Sign Up
			</NavLink>
			<NavLink to='/login' activeStyle>
				Log In		
			</NavLink>
		</NavMenu>
		<NavBtn>
			<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	  </Nav>
	</>
  )
}

export default Navbar;