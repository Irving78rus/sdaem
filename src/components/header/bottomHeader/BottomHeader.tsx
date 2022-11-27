import React, { useState } from "react";
 
import logo from "../../../assest/img/logo.png";
import yellowMap from "../../../assest/img/yellowMap.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../../UI/ContentContainer";
import Button from "../../../UI/Button";
const BackgroundColor = styled.div`
background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
`
const BottomNav = styled.ul`
padding-left: 0;
display: flex;
list-style-type: none;
justify-content: space-between;
align-items: center;
height: 40px;
font-family: "Epilogue";
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #8291a3;
margin: 0;
text-decoration: none;
li {
  margin-left: 57px;
  text-decoration: none;
}
li:first-child {
  margin-left: 10px;
}
.link {
  padding-left: 0;

  font-family: "Epilogue";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: black;

  text-decoration: none;
  display: flex;
  align-items: center;
  img {
    padding-left: 10px;
  }
}
.active {
  color: black;
  border-bottom: 3px solid #ffd54f;
  padding: 10px 0;
}
` 


export default function BottomHeader() {
 
  return (
    <BackgroundColor>
    <ContentContainer>
     <img src={logo} alt="logo" />
     <BottomNav>
        <li><NavLink to="/j" className={({ isActive }) => (isActive ? "active link" : "link")} >Квартиры на сутки <img src={yellowMap} alt="map" /></NavLink> </li>
        <li><NavLink to="/k" className={({ isActive }) => (isActive ? "active link" : "link")} >Коттеджи и усадьбы</NavLink> </li>
        <li><NavLink to="/l" className={({ isActive }) => (isActive ? "active link" : "link")} >Бани и Сауны</NavLink> </li>
        <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active link" : "link")} >Авто на прокат</NavLink> </li>
    </BottomNav>
      <Button>+  Разместить объявление</Button>
    </ContentContainer>

    </BackgroundColor>
    
  );
}
