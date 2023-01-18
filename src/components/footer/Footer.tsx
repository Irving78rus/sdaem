import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assets/img/logo.png";
import insta from "../../assets/img/insta.svg";
import vk from "../../assets/img/vk.svg";
import teleg from "../../assets/img/teleg.svg";
import visa from "../../assets/img/visa.png";
import verifyVisa from "../../assets/img/verifyVisa.png";
import snow from "../../assets/img/snow.png";
import webpay from "../../assets/img/webpay.png";
import master from "../../assets/img/master.png";
import masterSecure from "../../assets/img/masterSecure.png";
import { NavLink } from "react-router-dom";

import ContentContainer from "../../UI/ContentContainer";
import { BackgroundColor, BlockLeft, BlockRight, FooterLink, Ikon, NavStl } from "./FooterStyle";


export default function Footer() {
 
  return (
    <BackgroundColor>
      <ContentContainer height='250px'>
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
              <li><NavLink to="/1" className={({ isActive }) => (isActive ? "active link" : "link")} >Коттеджи и усадьбы</NavLink> </li>
              <li><NavLink to="/2" className={({ isActive }) => (isActive ? "active link" : "link")} >Бани и Сауны</NavLink> </li>
              <li><NavLink to="/3" className={({ isActive }) => (isActive ?"active link" : "link")} >Авто на прокат</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/4" className={({ isActive }) => (isActive ? "active link" : "link")} >Квартиры</NavLink> </li>
              <li><NavLink to="/5" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Минске</NavLink> </li>
              <li><NavLink to="/6" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Гомеле</NavLink> </li>
              <li><NavLink to="/7" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Бресте</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/8" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Витебске</NavLink> </li>
              <li><NavLink to="/9" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Гродно</NavLink> </li>
              <li><NavLink to="/10" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Квартиры в Могилеве</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/11" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Новости</NavLink> </li>
              <li><NavLink to="/12" className={({ isActive }) => (isActive ? "active flat" : "flat")} >размещения и тарифы</NavLink> </li>
              <li><NavLink to="/13" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Объявления на карте</NavLink> </li>
              <li><NavLink to="/14" className={({ isActive }) => (isActive ? "active flat" : "flat")} >Контакты</NavLink> </li>
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
 
      </ContentContainer>

    </BackgroundColor>

  );
}
