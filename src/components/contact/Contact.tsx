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
import Input from "../../UI/Input";
import { Modal } from "../../UI/Modal";

const Background = styled.div`
  background: linear-gradient(0deg, #7e6af3 1.04%, #6540cd 100%);
  height: 600px;
`;
const BackgroundImg = styled.div`
  background-image: url(${Back});

  height: 600px;
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
  height: 300px;
  background-color: white;
  border-radius: 10px;

  text-align: center;
`;
export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Background>
      <BackgroundImg>
        <ContentContainer>
          <FlexContainer>
            <Text>
              <h3> Контакты</h3>
              <p>
                Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы
                всегда рады услышать Ваше мнение.
              </p>
            </Text>
            <FormB>
              <Form>
                <InputBlock>
                  <div>
                    <p> Ваше имя</p>
                    <Input placeholder="имя"> </Input>
                  </div>
                  <div>
                    <p> Ваша электронная почта</p>
                    <Input placeholder="почта"> </Input>
                  </div>
                </InputBlock>
                <div>
                  <p> Ваша электронная почта</p>
                  <Textarea placeholder="Сообщение"></Textarea>
                </div>
                <Button onClick={() => setShowPopup(true)}>send</Button>
              </Form>
            </FormB>
            <Social></Social>
          </FlexContainer>
          {showPopup && (
            <Modal toggle={setShowPopup} width="40%" height="80%">
              <ModalContent>
                <h2>Ваше письмо отправлено!</h2>
                <p>
                  Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо
                  отправлено.
                </p>
                <Button background="#FFD54F" onClick={() => setShowPopup(false)}>
                  send
                </Button>
              </ModalContent>
            </Modal>
          )}
        </ContentContainer>
      </BackgroundImg>
    </Background>
  );
}
