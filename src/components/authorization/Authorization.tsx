import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "../../assest/img/logo.png";
import insta from "../../assest/img/insta.svg";
import vk from "../../assest/img/vk.svg";
import Back from "../../assest/img/404Back.png";
import user from "../../assest/icon/user.svg";
import UserImg from "../../assest/icon/UserImg";
import MailImg from "../../assest/icon/MailImg";
import mail from "../../assest/icon/mail.svg";
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
  background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
  height: 100vh;
`;
const BackgroundImg = styled.div`
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
`;
const Text = styled.div`
  width: 45%;
  background-color: red;
  height: 600px;
`;
const FormB = styled.div`
  width: 45%;
  background-color: green;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.div`
  width: 100%;
  background-color: white;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputBlock = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const Textarea = styled.textarea`
  background: #f8f8f8;
  width: 450px;
  height: 200px;
  border-radius: 30px;
  padding: 15px 20px;
  margin: 15px 20px;
  gap: 10px;
  border: none;
  &:focus {
    outline: none;
    border: 2px solid rgba(102, 78, 249, 0.8);
    background: white;
  }
`;
const Social = styled.div`
  width: 10%;
  background-color: blue;
  height: 600px;
`;
const ModalContent = styled.div`
  width: 400px;

  background-color: white;
  border-radius: 10px;
  margin: auto;
  text-align: center;
`;
export default function Authorization() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Background>
      <BackgroundImg>
        <ContentContainer margin="auto">
          <ModalContent>
            <FlexContainer flexDirection="column" justifyContent="center">
              <h2> Авторизация</h2>
              <p>Авторизируйтесь, чтобы начать публиковать свои объявления</p>

              <Input placeholder="Логин" type="text">
                <UserImg />
              </Input>
              <Input placeholder="Пароль" type="text"><MailImg></MailImg> </Input>
              <FlexContainer>
                <Input type="checkbox"> </Input>
                <p>запомнить меня</p>
                <Link to="#">забыли пароль</Link>
              </FlexContainer>
              <Button background="#FFD54F"> Войти</Button>
              <FlexContainer>
                <p>Еще нет аккаунта?</p>
                <Link to="/Registration">Создать аккаунт</Link>
              </FlexContainer>
            </FlexContainer>
          </ModalContent>
        </ContentContainer>
      </BackgroundImg>
    </Background>
  );
}
