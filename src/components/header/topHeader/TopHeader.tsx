import React, { useEffect, useState } from "react";
import arrow from "../../../assets/icon/arrow.svg";
import map from "../../../assets/icon/map.svg";
import { NavLink } from "react-router-dom";
import ContentContainer from "../../../UI/ContentContainer";
import Boy from "../../../assets/icon/boy.png";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import FlexContainer from "../../../UI/FlexContainer";
import { authUser, setUser } from "../../../redux/userSetting";
import {
  Arrow,
  BackgroundColor,
  DropTable,
  List,
  StylesTopLeftNav,
  StylesTopRightNav,
} from "./TopHeaderStyle";
import HeartImg from "../../../assets/icon/HeartImg";
import HeartImg2 from "../../../assets/icon/HeartImg2";
export interface UserModel {
  login?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
export default function TopHeader() {
  const [showList, setShowList] = useState(false);
  const dispatch = useAppDispatch();
  const user: UserModel = useAppSelector((state) => state.userSetting.user);

  useEffect(() => {
    if (localStorage.getItem("User")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("User") || "")));
    }
  }, [dispatch]);

  const logout = () => {
    localStorage.removeItem("User");
    localStorage.setItem("isAuth", JSON.stringify(false));
    dispatch(authUser(false));
    dispatch(setUser({}));
  };

  return (
    <BackgroundColor>
      <ContentContainer>
        <StylesTopLeftNav>
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? "link active" : "link")}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="News" className={({ isActive }) => (isActive ? "link active" : "link")}>
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink to="Catalog" className={({ isActive }) => (isActive ? "link active" : "link")}>
              Размещение и тарифы
            </NavLink>
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
              Закладки <div style={{marginLeft:'10px'}}></div> <HeartImg2 ></HeartImg2>
            </NavLink>
          </li>
          <li>
            {user.login ? (
              <FlexContainer
                gap="10px"
                onClick={() => {
                  setShowList(!showList);
                }}
                position="relative"
              >
                <img src={Boy} alt="boy" className="photo" style={{ cursor: "pointer" }} />
                <div style={{ cursor: "pointer" }}>{user.login} </div>
                <Arrow style={{ cursor: "pointer" }}>
                  <img src={arrow} alt="Arrow"></img>
                </Arrow>
                {showList && (
                  <List>
                    <DropTable
                      onClick={() => {
                        logout();
                      }}
                    >
                      Выход
                    </DropTable>
                    <DropTable>Что-то еще</DropTable>
                    <DropTable>Что-то еще</DropTable>
                  </List>
                )}
              </FlexContainer>
            ) : (
              <NavLink
                to="Authorization"
                className={({ isActive }) => (isActive ? "modification active" : "modification")}
              >
                Вход и регистрация
              </NavLink>
            )}
          </li>
        </StylesTopRightNav>
      </ContentContainer>
    </BackgroundColor>
  );
}
