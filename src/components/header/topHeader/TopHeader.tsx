import React, { useState } from "react";
 
import map from "../../../assest/img/map.svg";
import styled from "styled-components";
import heart from "../../../assest/img/heart.svg";
import { NavLink } from "react-router-dom";
import ContentContainer from '../../../UI/ContentContainer'

const BackgroundColor = styled.div`
background-color: #f8f8f8;
`
 
const StylesTopLeftNav = styled.nav`
max-width:1440px;
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

li {
    margin-left: 57px;
}
li:first-child{
    margin-left: 0px;
}
.link{
  padding-left: 0;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #8291a3;
 
  text-decoration: none ;
    display: flex;
    align-items: center;
    img{
      
      padding-right: 10px;
      }
}
.active {
  color: black;
  border-bottom: 3px solid #FFD54F;
  padding: 10px 0;
}
`
const StylesTopRightNav = styled(StylesTopLeftNav)`
 li{
   display: flex;
   align-items: center;
      img{
          height: 14px;
          padding-right: 0;
          padding-left: 10px;
          }
  }
  .modification{
      color: #664EF9;
      font-weight: 500;
      text-decoration: none ;
  }

 
`

export default function TopHeader() {

  const [active, setActive] = useState(false)
  const addClass = () => {
    setActive(!active)
  }

  return (
    <BackgroundColor>
      <ContentContainer>
        <StylesTopLeftNav>
          <li><NavLink to="" className={({ isActive }) => (isActive ? "link active" : "link")} >Главная</NavLink> </li>
          <li><NavLink to="News" className={({ isActive }) => (isActive ? "link active" : "link")} >Новости</NavLink> </li>
          <li><NavLink to="Catalog" className={({ isActive }) => (isActive ? "link active" : "link")} >Размещение и тарифы</NavLink> </li>
          <li><NavLink to="W" className={({ isActive }) => (isActive ? "link active" : "link")} ><img src={map} alt="map" />Объявления на карте</NavLink> </li>
          <li><NavLink to="Contact" className={({ isActive }) => (isActive ? "link active" : "link")} > Контакты</NavLink> </li>
        </StylesTopLeftNav>
        <StylesTopRightNav>
          <li><NavLink to="Favorite" className={({ isActive }) => (isActive ? "link active" : "link")} >Закладки <img src={heart} alt="map" /></NavLink> </li>
          <li><NavLink to="Authorization" className={({ isActive }) => (isActive ? "modification active" : "modification")} >  Вход и регистрация  </NavLink> </li>
        </StylesTopRightNav>
      </ContentContainer>
    </BackgroundColor>
  );
}
