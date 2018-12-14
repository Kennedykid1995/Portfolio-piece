import React from "react";
import styled from "styled-components";

const MenuHolder = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid blue;
  display: flex; 
  justify-content: center; 
`;
const MenuBox = styled.div`
  width: 90%;
  height: 1000px;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;
`;
const MenuItem = styled.div`
  width: 20%;
  height: auto;
  border: 5px solid #0C391B;
  border-radius: 10px; 
  margin: 10px;
  cursor: pointer;
  transition: border .5s ease
  transiton: all .5s ease-in-out;
  &:hover{
    position: relative; 
    border: 5px solid #FF8A00; 
    transform: scale(1.1); 
    }
`;
const MenuItemImg = styled.img`
  width: 100%;
  height: auto;
  border-top-right-radius: 4px; 
  border-top-left-radius: 4px; 
  }
`;
const MenuItemName = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px 0;
`;
const MenuPage = props => {
  return (
    <MenuHolder>
          <MenuBox>
        {props.menu.map(item => {
          return (
            <MenuItem key={item.id}>
              <MenuItemImg src={item.img} />
              <MenuItemName>{item.title}</MenuItemName>
            </MenuItem>
          );
        })}
      </MenuBox>
    </MenuHolder>
  );
};
export default MenuPage;
