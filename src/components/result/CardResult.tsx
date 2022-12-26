import React, { useState } from "react";
import styles from "./style.module.scss";
import home from "../../assest/img/home.png";

import CardResultImg from "../../assest/img/CardResult.png"
import heart from "../../assest/icon/heart.svg";
import tel from "../../assest/icon/tel.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../UI/Button";
import FlexContainer from "../../UI/FlexContainer";
import ContentContainer from "../../UI/ContentContainer";
import { Line } from "../../UI/Line";

interface Props {
  height?: any;

}
const Card = styled.div`
 position:relative;
 background-color: #fff;
  margin-top:24px;
 width: 407px;
 filter: drop-shadow(rgba(135, 124, 202, 0.15) 0px 20px 40px);
 border-radius: 10px;
 
 img{
     
     border-radius: 10px; 
 }
 h4, p , button , div{
      
 }
 h4{
     font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 19px;
 }
 p{
     color: #686868;
     margin:0;
 }
 .line{
     width: 300px;
     height: 2px;
     background-color: #F8F8F8;
     margin: 20px auto;
     
 }
 .cost{
  margin:15px 0;
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
  
color: #664EF9;
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
 
color: #BDBDBD;
}
 }
 .rooms{
  background: #F8F8F8;
border-radius: 18px;
padding:8px;
font-weight: 500;
font-size: 14px;
line-height: 17px;
 
color: #686868;
 }
 .city{
  margin:5px 0;
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 19px;
 
color: #000000;
 }
 .description-city{
  margin-top:20px;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 150%;
/ 
color: #686868;
 }
 `
const FlexUpdt2 = styled.div`
  
 display: flex;
 justify-content: space-between;
 margin-bottom: 20px;
  

  button{
     background: rgba(102, 78, 249, 0.1);
     border-radius: 18px;
     padding: 10px 15px;
     border: none;
     color: #664EF9;
     font-weight: 700;
font-size: 14px;
line-height: 17px;
cursor:pointer;
 }
 div{
   background-color: #F8F8F8;
   color: #8291A3;
   border-radius: 18px;
   padding: 12px 8px;
 }

`
const Gold = styled.div`
background: linear-gradient(106.06deg, #FFD54F 1.12%, #FEC100 97.96%);
border-radius: 0px 10px 10px 10px;
position:absolute;
top:0;
right:0;
 
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
 margin:0;
 padding: 9px 12px;
color: #FFFFFF;

text-shadow: 0px 1px 0px rgba(147, 79, 0, 0.3);
}
`
export default function CardResult({ flat }: any) {

  return (<>
    <Card  >
      <Gold><p>Gold</p></Gold>
      <img src={CardResultImg} alt="cartImage" />
      <FlexContainer flexDirection='column' padding='0 20px' alignItems='flex-start' >
      <FlexContainer  width='100%'> <div> <div className='cost'> Цена: {flat.cost}  BYN <p>за сутки</p></div>  </div>
        <div className='rooms'> {flat.rooms}   {`(${flat.rooms - 1}+1)`}  </div>
        <p className='rooms'>{flat.rooms} комн.  </p></FlexContainer>

      <p className='city'> {flat.city}, б-р Мулявина, д. 10</p>
       <p className='city'>Метро  Метро</p>   
      <p className='description-city'>Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание ...</p>
      <Line> </Line>
      <FlexContainer width='100%' margin='15px 0'>
        <img src={heart} alt='heart'></img>
        <Button background='#F8F8F8' color='#664EF9' fontSize='14px'>
          <img src={tel} alt='heart'></img> Контакты 
          </Button>
          <Button background='rgba(255, 213, 79, 0.1)' color='#FEC100;' fontSize='17px'>
          Подробнее 
          </Button>
        
        
        </FlexContainer>

      </FlexContainer>
      
    </Card>
  </>
  );
}