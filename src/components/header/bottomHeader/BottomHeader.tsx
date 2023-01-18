import React from "react";
import logo from "../../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import ContentContainer from "../../../UI/ContentContainer";
import Button from "../../../UI/Button";
import IconMap from "../../share/IconMap";
import { BackgroundColor, BottomNav } from "./BottomHeaderStyle";

export default function BottomHeader() {

  return (
    <BackgroundColor>
      <ContentContainer>
        <img src={logo} alt="logo" />
        <BottomNav>
          <li><NavLink to="/j" className={({ isActive }) => (isActive ? "active link" : "link")} >Квартиры на сутки {<IconMap fill='#FFD54F'></IconMap>}</NavLink> </li>
          <li><NavLink to="/k" className={({ isActive }) => (isActive ? "active link" : "link")} >Коттеджи и усадьбы</NavLink> </li>
          <li><NavLink to="/l" className={({ isActive }) => (isActive ? "active link" : "link")} >Бани и Сауны</NavLink> </li>
          <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active link" : "link")} >Авто на прокат</NavLink> </li>
        </BottomNav>
        <Button>+  Разместить объявление</Button>
      </ContentContainer>
    </BackgroundColor>
  );
}
