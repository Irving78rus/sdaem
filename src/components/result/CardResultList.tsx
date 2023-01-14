import React, { useState } from "react";
import styles from "./style.module.scss";
import home from "../../assest/img/home.png";
import heart2 from "../../assest/img/images/heart.svg";
import CardResultImg from "../../assest/img/CardResult.png";
import heart from "../../assest/icon/heart.svg";
import tel from "../../assest/icon/tel.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";
import FlexContainer from "../../UI/FlexContainer";
import ContentContainer from "../../UI/ContentContainer";
import { Line } from "../../UI/Line";
import ContactComponent from "../share/ContactComponent";
import Metro from "../../assest/icon/Metro";
import Elips from "../../assest/icon/Elips";
import IconMap from "../share/IconMap";
import UserImg from "../../assest/icon/UserImg";
import HeartImg from "../../assest/icon/HeartImg";
import HeartImg2 from "../../assest/icon/HeartImg2";
import Slider from "../../UI/Slider";

interface Props {
  height?: any;
}
const Card = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  margin-top: 24px;
  width: 100%;
  filter: drop-shadow(rgba(135, 124, 202, 0.15) 0px 20px 40px);
  border-radius: 10px;
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;
  }
  p {
    color: #686868;
    margin: 0;
    
  }
  .line {
    width: 300px;
    height: 2px;
    background-color: #f8f8f8;
    margin: 20px auto;
  }
  .cost {
    margin: 15px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #664ef9;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      color: #bdbdbd;
    }
  }
  .rooms {
    background: #f8f8f8;
    border-radius: 18px;
    padding: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #686868;
    margin: 0 5px;
    display:flex;
    align-items:center;
    span{
      color: #664EF9;
    }
    svg{
      margin-right:6px;
    }
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    color: #1e2123;
  }
  .city {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    display:flex;
  }
  .description-city {
    margin-top: 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;

    color: #686868;
  }
`;

const Gold = styled.div`
  background: linear-gradient(106.06deg, #ffd54f 1.12%, #fec100 97.96%);
  border-radius: 0px 10px 10px 10px;
  position: absolute;
  z-index:5;
  top: 0;
  right: 0;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    padding: 9px 12px;
    color: #ffffff;
    text-shadow: 0px 1px 0px rgba(147, 79, 0, 0.3);
  }
`;
const IMGContainer = styled.div`
 position: relative;
 width:100%
 border-radius: 10px;
 img{
  width:500px;
  position: relative;
  border-radius: 10px; 
  height:100%;
}
}
`;
export default function CardResultList({ flat }: any) {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <Card>
        <IMGContainer>
        <Slider  photos={[1,2,3,4,5,6,7]} widthButton='100%' top='50%' position='absolute' width='407px' height='200px' PAGE_WIDTH='1221' CardResultImg={CardResultImg} margin='0'></Slider>
          <Gold>
            <p>Gold</p>
          </Gold>
        </IMGContainer>
        <FlexContainer flexDirection="column" padding="0 20px" alignItems="flex-start">
          <FlexContainer width={"100%"}>
            <p className="title">
              {flat.rooms}-комн. апартаменты на {flat.city}
            </p>
            <FlexContainer flexDirection="column" alignItems="flex-end" className="cost">
              Цена: {flat.cost} BYN <p>за сутки</p>
            </FlexContainer>
          </FlexContainer>
          <p className="city"> <IconMap fill={'#BDBDBD'}></IconMap> {flat.city}, б-р Мулявина, д. 10</p>
          <FlexContainer>
            <div className="rooms">
              <UserImg fill={'#686868'} opacity='1'></UserImg>
              {flat.rooms} {`(${flat.rooms - 1}+1)`}
            </div>
            <p className="rooms">{flat.rooms} комн. </p>
            <p className="rooms"><Metro fill={'#664EF9'}></Metro> {flat.metro} </p>
            <p className="rooms"> <span> район: </span> {flat.district} </p>
          </FlexContainer>

          <p className="description-city">
            Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры,
            описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание
            квартиры, описание ...
          </p>

          <FlexContainer width="100%" margin="15px 0" position="relative">
            <Button
              background="#FFFFFF"
              color="#664EF9"
              fontSize="14px"
              padding="9px 15px"
              borderRadius="18px"
              fontWeight='700'
              boxShadow='0px 5px 20px rgba(0, 96, 206, 0.1)'
              onClick={() => setShowContact(!showContact)}
              backgroundHover='#F5F3FF'
              boxShadowHover='0px 5px 20px rgba(0, 96, 206, 0.1)'
            >
              <img src={tel} alt="tel"></img> Контакты
            </Button>
            <Button
              background="rgba(235, 87, 87, 0.1)"
              color="#EB5757"
              fontSize="14px"
              padding="9px 15px"
              borderRadius="22px"
            >
              В закладки  <HeartImg2></HeartImg2>
            </Button>

            <Button background="rgba(255, 213, 79, 0.1)" color="#FEC100;" fontSize="14px" backgroundHover ='rgba(255, 213, 79, 0.2)'>
              Подробнее
            </Button>
            {showContact && <ContactComponent></ContactComponent>}
          </FlexContainer>
        </FlexContainer>
      </Card>
    </>
  );
}
