import React, { Component } from 'react';
import styled from 'styled-components'; 
import{NavLink} from 'react-router-dom'; 

const NavBox = styled.div`
  width: 100%;
  height: auto; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 10px 0;
  background: #0C391B;
`
const Nav = styled.div`
  width: 60%; 
  height: auto; 
  padding: 10px 0;
  display: flex;
  margin-right: 10px;
  justify-content: space-between;  
`
const NavItem = styled(NavLink)`
font-size: 15px;
text-decoration: none; 
color: black;
color: white;
&:hover{
  position: relative;
  animation: pulse 2s infinite;
}
@keyframes pulse{
  0%{color: white}
  50%{color: #FF8A00}
  100%{color: white}
}
:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #FF8A00;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}
:hover:before{
  visibility: visible;
  transform: scaleX(1);
}
`
const Logo = styled.div`
  width: auto; 
  height: auto; 
  font-size: 25px;  
  margin-left: 10px;
  color: white;
`

class NavBar extends Component{
    render(){
        return(
            <NavBox>
            <Logo>
              Fresh Pickens
            </Logo>
            <Nav>
              <NavItem to='/'>
              HOME
              </NavItem>
              <NavItem to='/'>
              MENU
              </NavItem>
              <NavItem to='/'>
              REWARDS
              </NavItem>
              <NavItem to='/'>
              LOCATIONS
              </NavItem>
              <NavItem to='/'>
              CAREERS
              </NavItem>
            </Nav>
          </NavBox>
        )
    }
}
export default NavBar;  