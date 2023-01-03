import React, { useState } from "react";
import Arrov from "../../../assest/icon/arrov.svg";
import map from "../../../assest/img/map.svg";
import styled from "styled-components";
import heart from "../../../assest/img/heart.svg";
import { NavLink } from "react-router-dom";
import ContentContainer from "../../../UI/ContentContainer";
import Boy from "../../../assest/img/boy.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FlexContainer from "../../../UI/FlexContainer";
import { authUser, setUser } from "../../../redux/userSetting";
const BackgroundColor = styled.div`
  background-color: #f8f8f8;
`;

const StylesTopLeftNav = styled.nav`
  max-width: 1440px;
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
  li:first-child {
    margin-left: 0px;
  }
  .link {
    padding-left: 0;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #8291a3;

    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      padding-right: 10px;
    }
  }
  .active {
    color: black;
    border-bottom: 3px solid #ffd54f;
    padding: 10px 0;
  }
`;
const StylesTopRightNav = styled(StylesTopLeftNav)`
  li {
    display: flex;
    align-items: center;
    
    img {
      height: 14px;
      padding-right: 0;
      padding-left: 10px;
    }
    .photo {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }
  }
  .modification {
    color: #664ef9;
    font-weight: 500;
    text-decoration: none;
  }
`;
const Arrow = styled.div`
 
 
 border:none;
    
    
 
}
 `;
const Absolute = styled.div`
 gap:10px;
 
 `;
const List = styled.div`
 width: 100%;
 box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
 background: #ffffff;
 cursor:pointer;
 z-index:2;
 position: absolute;
 top: 26px;
 left: 0;
 div:hover {
   background: #f8f8f8;
   border-radius: 10px;
 }
 border-radius: 10px;
`;
const DropTable = styled.div`

position: relative;
 padding: 5px;
`;
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
