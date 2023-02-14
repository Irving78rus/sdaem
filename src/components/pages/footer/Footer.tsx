import React  from "react";
import logo from "../../../assets/icon/logo.png";
import insta from "../../../assets/icon/insta.svg";
import vk from "../../../assets/icon/vk.svg";
import teleg from "../../../assets/icon/teleg.svg";
import visa from "../../../assets/icon/visa.png";
import verifyVisa from "../../../assets/icon/verifyVisa.png";
import snow from "../../../assets/icon/snow.png";
import webpay from "../../../assets/icon/webpay.png";
import master from "../../../assets/icon/master.png";
import masterSecure from "../../../assets/icon/masterSecure.png";
import { NavLink, useNavigate } from "react-router-dom";
import ContentContainer from "../../UI/ContentContainer"; 
import { BackgroundColor, BlockLeft, BlockRight, FooterLink, Ikon, NavStl } from "./FooterStyle";
import { useAppDispatch } from "../../../redux/hooks";
import { getFilterFlats } from "../../../redux/baseFlat";


export default function Footer() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const showFlatInCity = (item: string) => {
    dispatch(
      getFilterFlats({
        city: item,
        upPrice: 0,
        toPrice: 0,
        rooms: 0,
        metro: "",
        district: "",
        sleepingPlaces: 0,
        GasStove: false,
        Oven: false,
        CoffeeMaker: false,
        MicrowaveOven: false,
        Dishes: false,
        Dishwasher: false,
      })
    );
    navigate("/Result");
  };


  
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
              <li><NavLink to="/1" className={  "link" } >Коттеджи и усадьбы</NavLink> </li>
              <li><NavLink to="/2" className={ "link" } >Бани и Сауны</NavLink> </li>
              <li><NavLink to="/3" className={  "link" } >Авто на прокат</NavLink> </li>
            </NavStl>
            <NavStl>
              <li><NavLink to="/4" className={({ isActive }) => (isActive ? "active link" : "link")} >Квартиры</NavLink> </li>
              <li onClick={() => {showFlatInCity('Минск')}}>Квартиры в Минске</li>
              <li onClick={() => {showFlatInCity('Гомель')}}>  Квартиры в Гомеле  </li>
              <li onClick={() => {showFlatInCity('Брест')}}> Квартиры в Бресте  </li>
            </NavStl>
            <NavStl>
              <li onClick={() => {showFlatInCity('Витебск')}}> Квартиры в Витебске </li>
              <li onClick={() => {showFlatInCity('Гродно')}}> Квартиры в Гродно </li>
              <li onClick={() => {showFlatInCity('Могилев')}}> Квартиры в Могилеве </li>
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
