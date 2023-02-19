import {
  FormMessageStl,
  FormMessageUserInfo,
  FormMessageUserName,
  FormMessageUserEmail,
  FormMessageUserMessage,
  FormMessageButton,
  FormMessageLabel,
} from "./FormMessageStyle";
import { ShowPopupProps } from "../../СontactsComponent";
import { IMGCont } from "../../../Registration/RegistrationStyle";
import UserImg from "../../../../../assets/icon/UserImg";
import { useState } from "react";
import MailImg from "../../../../../assets/icon/MailImg";

export const FormMessage = ({ setIsShowPopup }: ShowPopupProps) => {
  const [onMouseEnterInput, setOnMouseEnterInput] = useState({ login: false, mail: false });
  return (
    <>
      <FormMessageStl>
        <FormMessageUserInfo>
          <FormMessageLabel >
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
          </FormMessageLabel>
          <FormMessageLabel >
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
          </FormMessageLabel>
        </FormMessageUserInfo>
        <label>
          Ваше сообщение
          <FormMessageUserMessage placeholder="Сообщение" />
        </label>
        <FormMessageButton
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            setIsShowPopup(true);
          }}
        >
          Отправить
        </FormMessageButton>
      </FormMessageStl>
    </>
  );
};
