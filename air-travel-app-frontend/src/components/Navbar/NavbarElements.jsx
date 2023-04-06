import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
    background:#234;
    height: 100px;
    display: flex;
    opacity: 90%;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;`

export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 12px;
    margin: 5px;
    height: auto;
    max-width:100%;
    cursor: pointer;
    
    &.active {
        color: #15cdfc; 
    }
`
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -80px;
    
    @media screen and (max-width:  760px) {
        display: none;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: -70px;
    
    @media screen and (max-width:  760px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius:7px;
    background: #808080;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    color: black;
    transition: all 0.2s ease-in-out;
    text-decoration: none;  
    
    &.hover {
        transition: all 0.2 ease in-out;
        background: #fff;
        color: #f44ea;
    }
`