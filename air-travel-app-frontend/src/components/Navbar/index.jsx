import React, { Component } from 'react';

import {
	Nav, 
	NavLink, 
	Bars, 
	NavMenu, 
	NavBtn,
	NavBtnLink
} from './NavbarElements'

export default class Navbar extends Component {
	render(){
		return (
			<>
			  <Nav>
				<NavLink to='/'>
				<img src={require('../images/redstonelogo.jpg')} height="70px" width="90px" alt="Redstone logo"/>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='/about' activestyle="true">
						About
					</NavLink>
					<NavLink to='/contact-us' activestyle="true">
						Contact Us 
					</NavLink>
					<NavLink to='/signup' activestyle="true">
						Sign Up
					</NavLink>
					<NavLink to='/login' activestyle="true">
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
}