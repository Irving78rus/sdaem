import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assest/img/logo.png";
import insta from "../../assest/img/insta.svg";
import vk from "../../assest/img/vk.svg";
import teleg from "../../assest/img/teleg.svg";
import visa from "../../assest/img/visa.png";
import verifyVisa from "../../assest/img/verifyVisa.png";
import snow from "../../assest/img/snow.png";
import webpay from "../../assest/img/webpay.png";
import master from "../../assest/img/master.png";
import masterSecure from "../../assest/img/masterSecure.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../UI/ContentContainer";


const BackgroundColor = styled.div`
background-color: white;
box-shadow: 0px -11px 40px rgba(39, 95, 158, 0.05);
margin-top: auto;
`
const ContentContainerFooter = styled(ContentContainer)`
height: 250px;
`
const BlockLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
width: 300px;
p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #8291a3;
}
gap:10px;
`
const BlockRight = styled.div`
display: flex;
  flex-direction: column;
  width:  70%;
`
const FooterLink = styled.div`
display: flex;
  justify-content: space-between;
  
  &:first-child {
    margin-left: 0;
  }
`
const NavStl = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: space-between;
  align-items: flex-start;
  gap:10px;
  font-family: "Epilogue";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #8291a3;
  margin: 0;
  text-decoration: none;
  li {
    
    text-decoration: none;
  }
  li:first-child {
    margin-left: 0;
  }
  .link {
    padding-left: 0;
  
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: black;
    line-height: 17px;
    text-decoration: none;
    display: flex;
    align-items: center;
     
  }
  .active {
    color: black;
    border-bottom: 3px solid #ffd54f;
    padding: 10px 0;
  }
  .flat {
    padding-left: 0;
    line-height: 17px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8291A3;
  
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      padding-right: 10px;
    }
  }
 `
 const Ikon = styled.div`
   display: flex;
  justify-content: space-between;
  img{
    margin-left: 15px;
  
}
 `
export default function Footer() {

  return (
    <BackgroundColor>
      <ContentContainerFooter>
        <BlockLeft>
          <img src={logo} alt="logo" />
          <p>СДАЁМ БАЙ</p>
          <p>ИП Шушкевич Андрей Викторович
            УНП 192602485 Минским горисполкомом 10.02.2016
            220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
            +375 29 621 48 33, sdaem@sdaem.by
            Режим работы: 08:00-22:00
          </p>

        </BlockLeft>
        <BlockRight>
          <FooterLink>
            <NavStl>
              <li><NavLink to="/k" className={({ isActive }) => (isActive ? "active link" : "link")} >Коттеджи и усадьбы</NavLink> </li>
              <li><NavLink to="/l" className={({ isActive }) => (isActive ? "active link" : "link")} >Бани и Сауны</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ?"active link" : "link")} >Авто на прокат</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/k" className={({ isActive }) => (isActive ? "active link" : "link")} >Квартиры</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Минске</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Гомеле</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Бресте</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/k" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Витебске</NavLink> </li>
              <li><NavLink to="/l" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Гродно</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Могилеве</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/k" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Новости</NavLink> </li>
              <li><NavLink to="/l" className={({ isActive }) => (isActive ? "active flat" : "flat")} >размещения и тарифы</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Объявления на карте</NavLink> </li>
              <li><NavLink to="/m" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Контакты</NavLink> </li>
            </NavStl>
          </FooterLink>
          <Ikon>
            <Ikon><p>Мы в соцсетях</p>
              <img src={insta} alt="map" />
              <img src={vk} alt="map" />
              <img src={teleg} alt="map" />
            </Ikon>
            <div>
              <img src={visa} alt="map" />
              <img src={verifyVisa} alt="map" />
              <img src={webpay} alt="map" />
              <img src={master} alt="map" />
              <img src={masterSecure} alt="map" />
              <img src={snow} alt="map" />
            </div>
          </Ikon>

 
        </BlockRight>
 
      </ContentContainerFooter>

    </BackgroundColor>

  );
}
