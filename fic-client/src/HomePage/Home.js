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
const HomeBox = styled.div`
  width: 100%; 
  height: auto;
  padding-bottom: 80px; 
`
const HomeHeader = styled.img`
  max-width: 100%; 
  height: auto; 
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`
const HomeHeaderTextBox = styled.div`
  width: 350px; 
  height: auto;
  font-size: 20px;  
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  border-top-right-radius: 45px;
  background: rgba(255, 138, 0, 0.8);
  color: white; 
  padding: 10px;
  position: absolute; 
  left: 10%; 
  top: 25%; 
`

const MiddleContentBox = styled.div`
  width: 100%; 
  height: auto; 
  margin: 60px 0;
  display: flex; 
  justify-content: space-evenly; 
  align-items: center; 
`

const MiddleContentImg = styled.img`
  width: 30%; 
  height: auto; 
`
const MiddleTextBox = styled.div`
  width: 30%; 
  height: auto; 
  display: flex; 
  flex-direction: column;
  align-items: center;
`
const BottomContentBox = styled.div`
  width: 100%; 
  height: auto; 
  display: flex; 
  justify-content: space-evenly; 
  margin: 20px 0; 
`
const BottomImg = styled.img`
  max-width: 100%; 
  height: auto; 
  clip-path: polygon(0 0, 100% 15%, 100% 84%, 0% 100%);
`
const BottomTextBox = styled.div`
  width: 30%; 
  height: auto; 
  display: flex; 
  flex-direction: column;
  align-items: center;
`
const BottomTextImg = styled.img`
  width: 30%; 
  height: 30%; 
`
const BottomSection = styled.div`
  width: 100%; 
  background: #494949; 
  height: auto; 
  display: flex;
  flex-wrap: wrap;  
  justify-content: space-evenly; 
`
const InfoBox = styled.section`
  width: 20%; 
  height: 300px; 
  color: #FF8A00; 
`
const TradeMark = styled.div`
  width: 90%; 
  height: auto; 
  background:#FF8A00; 
  color:#494949;
  display: flex; 
  justify-content: center; 
`


class Home extends Component {
    render(){
        return(
        <div>
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
        <HomeBox>
          <HomeHeader src="https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <HomeHeaderTextBox>
           <h1> Fresh Pickens<br />is farm to table yumminess</h1>
           <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor<br />
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in<br />
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
          </HomeHeaderTextBox>
        </HomeBox>
        <MiddleContentBox>
          <MiddleContentImg src="https://images.pexels.com/photos/1358389/pexels-photo-1358389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
          <MiddleTextBox>
            <h1>New to the Table</h1>
            <h2>Spinich Toast Bean Spread</h2>
            <h3> This is the perfect breakfest for a cold day, you can use your rewards card to get double points while its in season.</h3>
          </MiddleTextBox>
        </MiddleContentBox>
        <BottomImg src="https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        <BottomContentBox>
          <BottomTextBox>
            <h1>Right Ingredients</h1>
            <h2> All of our ingredients come from local farmers,
              and are fresh everyday. We want to display healthy
              and local tastes. Each of our locations will have a 
              signiture item that represents the local scene and 
              what ingredients are available. 
            </h2>
          </BottomTextBox>
          <BottomTextImg src="https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <BottomTextBox>
            <h1>Our Mission</h1>
            <h2>We want to give our customers the most fresh and most healthy
            meals that we can prepare. Also with ingredients that come straight from
            local farms. We support local farmers and great food.
            </h2>
          </BottomTextBox>
        </BottomContentBox>
        <BottomSection>
          <InfoBox>
            <h1>Contact</h1>
            <p>123-456-7890</p>
            <p>FreshPickens@gmail.com</p>
          </InfoBox>
          <InfoBox>
            <h1>Find a Location</h1>
            <p>Location Finder</p>
          </InfoBox>
          <InfoBox>
            <h1>Careers</h1>
            <p>Jobs</p>
            <p>Future at Fresh Pickens</p>
          </InfoBox>
          <TradeMark>
          <h3>2018 FRESH PICKENS.ALL RIGHTS RESERVED. PRIVACY POLICY</h3>
        </TradeMark>
        </BottomSection>
        </div>
        )
    }
}
export default Home;