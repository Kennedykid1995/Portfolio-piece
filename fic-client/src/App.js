import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import{NavLink, Route} from 'react-router-dom'; 
import Home from './HomePage/Home';
import Menu from './MenuData';
import MenuPage from './MenuPage/Menu' 
import NavBar from './Nav/NavBar';
//color palette
//#0C391B - green color
//#B49071 - brown color
//#00A7B1 - blue color
//#FF8A00 , 255, 138, 0 - yellow/orange color
//#FF0000 - red color


const Site = styled.div`
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

class App extends Component {
  constructor(){
    super();
    this.state ={
      menu: Menu, 
    }
  }
  render() {
    return (
      <Site>
        <NavBar />
        {/* <Home /> */}
        <Route
        exact
        path='/'
        render={props => (
          <MenuPage
          {...props}
          menu = {this.state.menu}
          />
        )}
        />
      </Site>
    );
  }
}

export default App;
