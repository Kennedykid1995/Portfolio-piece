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
  border: 1px solid red;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;
`;
const MenuItem = styled.div`
  width: 20%;
  height: auto;
  border: 1px solid green;
  margin: 10px;
`;
const MenuItemImg = styled.img`
  width: 100%;
  height: auto;
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
