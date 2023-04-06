import React, { Component } from 'react';

import {
	Nav, 
	NavLink, 
	Bars, 
	NavMenu, 
	//NavBtn,
	//NavBtnLink
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
					<NavLink className='navlink' to='/about' activestyle="true">
						About
					</NavLink>
					<NavLink className='navlink' to='/contact-us' activestyle="true">
						Contact Us 
					</NavLink>
					<NavLink className='navlink' to='/signup' activestyle="true">
						Sign Up
					</NavLink>
					<NavLink className='navlink' to='/login' activestyle="true">
						Log In		
					</NavLink>
				</NavMenu>
			  </Nav>
			</>
		  )
	}
}