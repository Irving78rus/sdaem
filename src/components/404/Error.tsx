import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assest/img/logo.png";
import insta from "../../assest/img/insta.svg";
import vk from "../../assest/img/vk.svg";
import Back from "../../assest/img/404Back.png";
import dots from "../../assest/img/dots.svg";
import verifyVisa from "../../assest/img/verifyVisa.png";
import snow from "../../assest/img/snow.png";
import webpay from "../../assest/img/webpay.png";
import master from "../../assest/img/master.png";
import masterSecure from "../../assest/img/masterSecure.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";

const Background = styled.div`
 

 
background: linear-gradient(0deg, #7E6AF3 1.04%, #6540CD 100%);
height:600px;
`
const BackgroundImg = styled.div`
background-image: url(${Back});
 
 
 
height:600px;
`

const Dots = styled.div`
position: absolute;
width: 61px;
height: 61px;
top: 100px;
left: -100px;
 `
 const Dots2 = styled(Dots)`
 
top: 500px;
left: 1000px;
 `
 const LeftBlock = styled.div`
 width:50%;
   h3{
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 73px;
color: #FFFFFF;
text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
   }
   p{
    font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
   }
 `
 const RightBlock = styled.div`
 width:50%;
 p{
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 260px;
line-height: 73px;
color: #FFFFFF;
opacity:0.4;
 }
 `
 const Container = styled.div`
   margin: auto;
    
 `
 const FlexContainer404 = styled(FlexContainer)`
   margin: auto;
    height:600px;
    position:relative;
 `
export default function Error() {

  return (
    <Background  >
      <BackgroundImg>
        <ContentContainer>
       <FlexContainer404  >
        <Dots> <img src={dots} alt='dots'  ></img></Dots>
        <Dots2> <img src={dots} alt='dots'  ></img></Dots2>
 <LeftBlock>
  
  <h3>Ошибка 404</h3>
  
 
<p>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
<Button background="#FFD54F" color="black" fontWeight="800" > Вернуться на главную</Button>
</LeftBlock>
<RightBlock>
<p>404</p>
</RightBlock>
       </FlexContainer404>
      </ContentContainer>
      </BackgroundImg>
   

    </Background>

  );
}
