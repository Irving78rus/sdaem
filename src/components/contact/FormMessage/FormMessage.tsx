import {
  FormMessageStl,
  FormMessageUserInfo,
  FormMessageUserName,
  FormMessageUserEmail,
  FormMessageUserMessage,
  FormMessageButton,
} from "./FormMessageStyle";
import { ShowPopupProps } from "../СontactsComponent";
import { IMGCont } from "../../authorization/Registration/RegistrationStyle";
import UserImg from "../../../assets/icon/UserImg";
import { useState } from "react";
import MailImg from "../../../assets/icon/MailImg";

export const FormMessage = ({ setIsShowPopup }: ShowPopupProps) => {
  const [onMouseEnterInput, setOnMouseEnterInput] = useState({ login: false, mail: false });
  return (
    <>
      <FormMessageStl>
        <FormMessageUserInfo>
          <label style={{ position: "relative" }}>
            <IMGCont top="45px" right="230px">
             <UserImg
                opacity={onMouseEnterInput.login ? "1" : "0.3"}
                fill={onMouseEnterInput.login ? "#664EF9" : "#686868"}
              ></UserImg>
            </IMGCont>
            Ваше имя
            <FormMessageUserName
              placeholder="Введите имя"
              onFocus={() => {
                setOnMouseEnterInput({ login: true, mail: false });
              }}
              onBlur={() => {
                setOnMouseEnterInput({ login: false, mail: false });
              }}
            />
          </label>
          <label style={{ position: "relative" }}>
            <IMGCont top="45px" right="230px">
              <MailImg
                opacity={onMouseEnterInput.mail ? "1" : "0.3"}
                fill={onMouseEnterInput.mail ? "#664EF9" : "#686868"}
              ></MailImg>
            </IMGCont>
            Ваша электронная почта
            <FormMessageUserEmail
              placeholder="Введите email"
              onFocus={() => {
                setOnMouseEnterInput({ login: false, mail: true });
              }}
              onBlur={() => {
                setOnMouseEnterInput({ login: false, mail: false });
              }}
            />
          </label>
        </FormMessageUserInfo>
        <label>
          Ваше сообщение
          <FormMessageUserMessage placeholder="Сообщение" />
        </label>
        <FormMessageButton
          onClick={() => {
            setIsShowPopup(true);
          }}
        >
          Отправить
        </FormMessageButton>
      </FormMessageStl>
    </>
  );
};
