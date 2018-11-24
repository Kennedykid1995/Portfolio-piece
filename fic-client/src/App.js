import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import{NavLink} from 'react-router-dom'; 
import Home from './HomePage/Home';
import NavBar from './Nav/NavBar';
//color palette
//#0C391B - green color
//#B49071 - brown color
//#00A7B1 - blue color
//#FF8A00 , 255, 138, 0 - yellow/orange color
//#FF0000 - red color


const Site = styled.div`
  border: 1px solid black; 
  width: 100%; 
  height: auto; 
  font-family: 'Roboto Slab', serif;
`

//Make a seperate file for the Nav bar.

//comment out <Home /> and then work on the next page.
//Repeat this until all the pages are styled 
//then connect each of them via router.

//Menu
//Rewards
//Locations
//Careers

const MenuBox = styled.div`
  width: 90%; 
  height: auto; 
  border: 1px solid red; 
`
const MenuItem = styled.div`
  width: 30%; 
  height: auto; 
  border: 1px solid green;
`
const MenuItemImg = styled.img`
  width: 30%;
  height: auto; 
`
class App extends Component {
  render() {
    return (
      <Site>
        <NavBar />
        <Home />
      </Site>
    );
  }
}

export default App;
