import {
  RegistrationStl, RegistrationContent, RegistrationFormSection,
  RegistrationFormTitle, RegistrationForm, RegistrationFormName,
  RegistrationFormEmail, RegistrationFormPassword, RegistrationFormPasswordRepeat,
  RegistrationRules, RegistrationRulesHeading, RegistrationRulesList,
  RegistrationRulesItem, RegistrationAuthRedirect,
} from "./RegistrationStyle";
import { Link } from "react-router-dom";
import { Button } from "../../../UI/FormButton/style";
import { useState } from "react";
import { FormRegistration } from "./FormRegistration";
import { PopupSuccessComponent } from "../PopupSuccess/PopupSuccessComponent";

export const Registration = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [captcha, setCaptcha] = useState(false)
  return (
    <RegistrationStl>
      <RegistrationContent>
        <RegistrationFormSection>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationForm>
          <FormRegistration setCaptcha={setCaptcha} captcha={captcha} setIsShowPopup={setIsShowPopup}></FormRegistration>
          </RegistrationForm>
        </RegistrationFormSection>
        <RegistrationRules>
          <RegistrationRulesHeading>Пользователь обязуется:</RegistrationRulesHeading>
          <RegistrationRulesList>
            <RegistrationRulesItem>
              предоставлять достоверную и актуальную информацию при регистрации и добавлении
              объекта;
            </RegistrationRulesItem>
            <RegistrationRulesItem>
              добавлять фотографии объектов соответствующие действительности. Администрация сайта
              sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем,
              если сочтет, что информация не соответствует действительности, носит оскорбительный
              характер, нарушает права и законные интересы других граждан либо действующее
              законодательство Республики Беларусь.
            </RegistrationRulesItem>
          </RegistrationRulesList>
          <RegistrationAuthRedirect>
            Уже есть аккаунта? <Link to="/Authorization">Войдите</Link>
          </RegistrationAuthRedirect>
        </RegistrationRules>
      </RegistrationContent>
      {isShowPopup && (
        <PopupSuccessComponent
          setIsShowPopup={setIsShowPopup}
          title='Вы успешно зарегистрировались!'
          text='Благодарим за регстрацию на sdaem.by. Теперь Вы можете размещать объявление о продаже или аренде!'
          buttonText='Понятно'
          register={true}
        />
      )}
    </RegistrationStl>
  );
};
