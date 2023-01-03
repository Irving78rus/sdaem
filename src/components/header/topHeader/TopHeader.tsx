import React, { useState } from "react";
import Arrov from "../../../assest/icon/arrov.svg";
import map from "../../../assest/img/map.svg";
import heart from "../../../assest/img/heart.svg";
import { NavLink } from "react-router-dom";
import ContentContainer from "../../../UI/ContentContainer";
import Boy from "../../../assest/img/boy.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FlexContainer from "../../../UI/FlexContainer";
import { authUser, setUser } from "../../../redux/userSetting";
import { Arrow, BackgroundColor, DropTable, List, StylesTopLeftNav, StylesTopRightNav } from "./TopHeaderStyle";

export default function TopHeader() {
  const isAuth = useAppSelector((state: any) => state.userSetting.isAuth);
  const [active, setActive] = useState(false);
  const [showList, setShowList] = useState(false);
  const dispatch = useAppDispatch()
  const addClass = () => {
    setActive(!active);
  };
  let user: any = {};
  if (localStorage.getItem("User")) {
    user = JSON.parse(localStorage.getItem("User") || "");
  }
  const logout = () => {
    localStorage.removeItem("User");
    localStorage.setItem("isAuth", JSON.stringify(false))
    dispatch(authUser(false))
    dispatch(setUser({}))
  }
  console.log(user);
  
  return (
    <BackgroundColor>
      <ContentContainer>
        <StylesTopLeftNav>
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? "link active" : "link")}>
              Главная
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="News" className={({ isActive }) => (isActive ? "link active" : "link")}>
              Новости
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="Catalog" className={({ isActive }) => (isActive ? "link active" : "link")}>
              Размещение и тарифы
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="W" className={({ isActive }) => (isActive ? "link active" : "link")}>
              <img src={map} alt="map" />
              Объявления на карте
            </NavLink>
          </li>
          <li>
            <NavLink to="Contact" className={({ isActive }) => (isActive ? "link active" : "link")}>

              Контакты
            </NavLink>
          </li>
        </StylesTopLeftNav>
        <StylesTopRightNav>
          <li>
            <NavLink
              to="Favorite"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              Закладки <img src={heart} alt="map" />
            </NavLink>
          </li>
          <li>
            {user.login ? (
            
                <FlexContainer gap='10px' onClick={(e: any) => { setShowList(!showList) }} position='relative' >
                  <img src={Boy} alt="boy" className="photo" style={{ cursor: 'pointer' }} /> 
                  <div style={{ cursor: 'pointer' }}>{user.login} </div>
                  <Arrow style={{ cursor: 'pointer' }}> <img src={Arrov} alt="arrov"></img>  </Arrow>
                  {showList && <List><DropTable onClick={(e: any) => { logout() }}>Выход</DropTable>
                  <DropTable>Что-то еще</DropTable>
                  <DropTable>Что-то еще</DropTable>
                  </List>}
                </FlexContainer>
 

            ) : (
              <NavLink
                to="Authorization"
                className={({ isActive }) => (isActive ? "modification active" : "modification")}
              >
                Вход и регистрация
              </NavLink>
            )}{" "}
          </li>
        </StylesTopRightNav>
      </ContentContainer>
    </BackgroundColor>
  );
}
