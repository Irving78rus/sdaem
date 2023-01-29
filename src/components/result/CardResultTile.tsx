import React, { useState } from "react";
import CardResultImg from "../../assets/icon/CardResult.png";
import tel from "../../assets/icon/tel.svg";
import styled from "styled-components";
import Button from "../UI/Button";
import FlexContainer from "../UI/FlexContainer";
import { Line } from "../UI/Line";
import ContactComponent from "../share/ContactComponent";
import Metro from "../../assets/icon/Metro";
import Elips from "../../assets/icon/Elips";
import Slider from "../UI/Slider";
import { flatModel } from "../../redux/types";
import IconMap from "../../assets/icon/IconMap";
import HeartImg from "../../assets/icon/HeartImg";

interface Props {
  height?: string;
  top?: string;
}
const Card = styled.div`
  position: relative;
  background-color: #fff;
  width: 407px;
  box-shadow: 0px 20px 20px rgba(135, 124, 202, 0.15);
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
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
  }
  .city {
    margin: 5px 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 19px;
    color: #000000;
    display:flex;
     justify-content:flex-start;
     align-items:center;
     svg{
      margin-right:10px;
       
     }
     span{
      margin-right:10px;
     }
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
const Gold = styled.div<Props>`
  background: linear-gradient(106.06deg, #ffd54f 1.12%, #fec100 97.96%);
  border-radius: 0px 10px 10px 10px;
  z-index:2;
  position: absolute;
  top: ${(props) => props.top || "0"};
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
interface CardResultTileProps{
  flat: flatModel
  top?: string
}
export default function CardResultTile({ flat }: CardResultTileProps) {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <Card>
        <Gold>
          <p>Gold</p>
        </Gold>
          <Slider  photos={[1,2,3,4,5,6,7]} widthButton='100%' top='50%' position='absolute' width='407px' height='200px' PAGE_WIDTH='1221' CardResultImg={CardResultImg} margin='0'></Slider>
          {/* <img src={CardResultImg} alt="cartImage" /> */}
        <FlexContainer flexDirection="column" padding="0 20px" alignItems="flex-start">
          <FlexContainer width="100%">
            <div>
              <div className="cost">
                Цена: {flat.cost} BYN <p>за сутки</p>
              </div>
            </div>
            <div className="rooms">
              {flat.rooms} {`(${flat.rooms - 1}+1)`}
            </div>
            <p className="rooms">{flat.rooms} комн. </p>
          </FlexContainer>
  
     
          <div className="city"> <IconMap fill={'#BDBDBD'} margin='0 5px 0 0'></IconMap>
           {flat.city}, б-р Мулявина, д. 10
           </div>
          <p className="city">
          <Metro fill={'#BDBDBD'}></Metro> <span>{flat.metro} </span> 
          <Elips fill={'#BDBDBD'}></Elips> <span>{flat.district} </span> 
          </p>
          <p className="description-city">
            Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры,
            описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание
            квартиры, описание ...
          </p>
          <Line> </Line>
                <FlexContainer width="100%" margin="15px 0">
         <FlexContainer width={'33px'} height={'33px'} justifyContent="center" backgroundColor='rgba(235, 87, 87, 0.1)' borderRadius={'50%'}><HeartImg fill={'#EB5757'}></HeartImg ></FlexContainer>  
            <Button
              background="#FFFFFF"
              color="#664EF9"
              fontSize="14px"
              onClick={() => setShowContact(!showContact)}
              backgroundHover ='#F5F3FF'
              boxShadowHover ='0px 5px 20px rgba(0, 96, 206, 0.1)'
              boxShadow = '0px 5px 20px rgba(0, 96, 206, 0.1)' 
              fontWeight='700'
            >
              <img src={tel} alt="tel"></img> Контакты
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
