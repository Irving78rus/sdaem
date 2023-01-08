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
import { ValidationSchemaExample } from "../../test/test";

export const Registration = () => {
   
  return (
    <RegistrationStl>
      <RegistrationContent>
        <RegistrationFormSection>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationForm>
          <ValidationSchemaExample></ValidationSchemaExample>
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
    </RegistrationStl>
  );
};
