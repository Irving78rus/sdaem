import React, { useState } from "react";
import styles from "./style.module.scss";
import home from "../../../assest/img/home.png";

import vk from "../../../assest/img/vkB.svg";
import Viber from "../../../assest/img/VibB.svg";
import telegram from "../../../assest/img/tgB.svg";
import facebook from "../../../assest/img/FacB.svg";
import WhatSub from "../../../assest/img/WhaB.svg";

import cartImage from "../../../assest/img/cartImage.png";
import dots  from "../../../assest/img/dots.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../UI/Button";
import FlexContainer from "../../../UI/FlexContainer";
import ContentContainer from "../../../UI/ContentContainer";
import ShearSocial from "../../share/ShearSocial";
interface Props {
  height?: any;

}
const HeaderBackground = styled.div<Props>`
 
background: linear-gradient(90deg, #94afff30 0%, #94afff30 94.5% );
 height:${props => props.height || "0px"} ;
 
`
const Container = styled.div`
width:844px;
margin: 0 auto;
margin-top: 42px;
display: flex;
flex-direction:column;
align-items: start;
gap:7px;
`
const ContainerNew = styled.div`
width:844px;
margin: 0 auto;
 position:relative;
 top:-40px;
display: flex;
flex-direction:column;
 img{
  width:100%;
  border-radius: 10px;
 }
 .dots{
  position:absolute;
  width:61px;
  height:61px;
  top:100px;
  left:-100px;
 }
`

const Title = styled.h1`
  
margin: 0  ;
 
`
const Flex = styled.div`
   
 justify-content: flex-start;
 align-items: center;
display: flex;
gap:7px;
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100%;
 

color: #686868;
}
 
`
const Circle = styled.div`
width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #664ef9;
`
const Card = styled.div`
 background-color: #fff;
 box-sizing: border-box;
 width: 407px;
 filter: drop-shadow(0px 20px 40px rgba(135, 124, 202, 0.15));
 border-radius: 10px;
 margin-top: 40px;
 img{
     
     border-radius: 10px; 
 }
 h4, p , button , div{
     padding: 0 20px;
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
 }
 .line{
     width: 300px;
     height: 2px;
     background-color: #F8F8F8;
     margin: 20px auto;
     
 }`
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
export default function New() {
  const arr = [1, 2, 3]
  return (<>
    <HeaderBackground height='280px'>
      <Container>

        <Flex>
          <img src={home} alt="home" />
          <p>Новости</p>
          <Circle></Circle>
          <p >Линия Сталина: суровый отдых в усадьбах на сутки Линия Сталина: </p>

        </Flex>
        <Title>Линия Сталина: суровый отдых в усадьбах на сутки</Title>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Button background='rgba(102,78,249,0.1)' color="#664EF9">14 Января 2008</Button>
          <FlexContainer gap='15px'>
          <ShearSocial  ></ShearSocial>
          </FlexContainer>
        </div>
      </Container>

    </HeaderBackground>
    <ContainerNew>
      <FlexContainer flexDirection="column" alignItems="start">
        <img src={cartImage} alt='flat' ></img>
        <img src={dots} alt='dots' className={'dots'}></img>
        
        <p>Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.</p>

        <p>«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.</p>

        <p> Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.</p>

        <p>  Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!</p>

        <p> Отличная усадьба в 10 км от "Линии Сталина".</p>

      </FlexContainer>

    </ContainerNew>
    <HeaderBackground height='777px' >
      <ContentContainer  justifyContent='center'>
        <FlexContainer flexDirection="column" alignItems="start" >
          <h2 style={{ marginTop: 60 }}>Читайте так же</h2>
          <FlexContainer gap="30px" > 
            {arr.map(item => <Card key={item}>
              <img src={cartImage} alt="cartImage" />
              <h4>Линия Сталина: суровый отдых в усадьбах на сутки</h4>
              <p>Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...</p>
              <div className='line'></div>
              <FlexUpdt2>
                <div   >14 Января 2008</div>
                <button  > <NavLink to="New"   >Читать</NavLink>
                </button>
              </FlexUpdt2>

            </Card>)}
          </FlexContainer >
        </FlexContainer>
      </ContentContainer>

    </HeaderBackground  >
  </>
  );
}
