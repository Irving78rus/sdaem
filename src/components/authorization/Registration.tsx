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
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import ContentContainer from "../../UI/ContentContainer";
import FlexContainer from "../../UI/FlexContainer";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { Modal } from "../../UI/Modal";

const Background = styled.div`
 
 
background: linear-gradient(0deg, #7E6AF3 1.04%, #6540CD 100%) no-repeat;
height:100vh;
`
const BackgroundImg = styled.div`
background-image: url(${Back});
background-repeat: no-repeat;
background-size: 100% 100%;
height:100vh;
 `
const Text = styled.div`
 width:45%;
 background-color:red;
 height:600px;
 `
const FormB = styled.div`
 width:45%;
 background-color:green;
 height:600px;
 display:flex;
 align-items:center;
 justify-content:center;
 `
const Form = styled.div`
 width:100%;
 background-color:white;
 height:80%;
  display:flex;
  flex-direction:column;
 align-items:center;
 justify-content:center;
  
 `
const InputBlock = styled.div`
 display:flex;
 justify-content:space-around; 
 width:100%;
 `
const Textarea = styled.textarea`
 background: #F8F8F8;
   width:450px;
   height:200px;
  border-radius: 30px;
  padding: 15px 20px;
  margin: 15px 20px;
  gap: 10px;
  border:none; 
  &:focus {
    outline: none;
    border: 2px solid rgba(102, 78, 249, 0.8);
    background: white;
  }
 `
const Social = styled.div`
 width:10%;
 background-color:blue;
 height:600px;
 `
const ModalContent = styled.div`
 width:844px;
  
 background-color: white;
 border-radius: 10px;
  margin:auto;
 text-align:center;
 `
export default function Registration() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Background  >
      <BackgroundImg>
        <ContentContainer margin='auto'>
          <ModalContent  >
            <FlexContainer>
              <FlexContainer flexDirection='column' justifyContent='center'>
                <h2> Регистрация</h2>
                <Input placeholder="логин"></Input>
                <Input placeholder="Электронная почта"></Input>
                <Input placeholder="Пароль"></Input>
                <Input placeholder="Повторите пароль"></Input>
                <FlexContainer>
                  <Input type='checkbox'></Input>
                  <p>я не робот</p>
                </FlexContainer>
                <Button background='#FFD54F'> Зарегистрироваться</Button>
              </FlexContainer>
              <FlexContainer>
                <p>
                  Пользователь обязуется:
                  предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;
                  добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.
                </p>
              </FlexContainer>
            </FlexContainer>
          </ModalContent>

        </ContentContainer>
      </BackgroundImg>


    </Background>

  );
}
