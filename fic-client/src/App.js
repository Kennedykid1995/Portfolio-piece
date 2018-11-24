import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import{NavLink} from 'react-router-dom'; 
import Home from './HomePage/Home';

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
class App extends Component {
  render() {
    return (
      <Site>
        <Home />
      </Site>
    );
  }
}

export default App;
