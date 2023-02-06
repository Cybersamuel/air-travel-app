import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './navbarelements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Log In</NavBtnLink>
		</NavBtn>
		<NavBtn>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
