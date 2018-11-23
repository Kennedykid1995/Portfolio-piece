import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import{NavLink} from 'react-router-dom'; 

const Site = styled.div`
  border: 1px solid black; 
  width: 100%; 
  height: auto; 
`
const NavBox = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: auto; 
  display: flex; 
  justify-content: flex-end; 
  align-items: center; 
`
const Nav = styled.div`
  border: 1px solid red; 
  width: 50%; 
  height: auto; 
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;  
`
const NavItem = styled(NavLink)`
font-size: 15px;
text-decoration: none; 
color: black;
margin: 10px 20px;
&:hover{
    position: relative;
}
:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
:hover:before{
    visibility: visible;
    transform: scaleX(1);
  }
`
const HomeBox = styled.div`
  border: 1px solid green; 
  width: 100%; 
  height: auto;
`
class App extends Component {
  render() {
    return (
      <Site>
        <NavBox>
          <Nav>
            <NavItem to='/'>
            HOME
            </NavItem>
            <NavItem to='/'>
            MENU
            </NavItem>
            <NavItem to='/'>
            CONTACT
            </NavItem>
            <NavItem to='/'>
            LOCATION
            </NavItem>
          </Nav>
        </NavBox>
        <HomeBox>
        </HomeBox>
      </Site>
    );
  }
}

export default App;
