import {
  Registration,
  RegistrationContent,
  RegistrationFormSection,
  RegistrationFormTitle,
  RegistrationForm,
  RegistrationFormName,
  RegistrationFormEmail,
  RegistrationFormPassword,
  RegistrationFormPasswordRepeat,
  RegistrationRules,
  RegistrationRulesHeading,
  RegistrationRulesList,
  RegistrationRulesItem,
  RegistrationAuthRedirect,
} from './style';
import { Link } from 'react-router-dom';
import { FormButtonComponent } from '../../../UI/FormButton/FormButtonComponent';
 
export const RegistrationComponent = () => {
  return (
    <Registration>
      <RegistrationContent>
        <RegistrationFormSection>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationForm>
            <RegistrationFormName placeholder='Логин' />
            <RegistrationFormEmail placeholder='Email' />
            <RegistrationFormPassword placeholder='Пароль' />
            <RegistrationFormPasswordRepeat placeholder='Повторите пароль' />
            <FormButtonComponent value='Зарегестрироваться' />
          </RegistrationForm>
        </RegistrationFormSection>
        <RegistrationRules>
          <RegistrationRulesHeading>
            Пользователь обязуется:
          </RegistrationRulesHeading>
          <RegistrationRulesList>
            <RegistrationRulesItem>
              предоставлять достоверную и актуальную информацию при регистрации
              и добавлении объекта;
            </RegistrationRulesItem>
            <RegistrationRulesItem>
              добавлять фотографии объектов соответствующие действительности.
              Администрация сайта sdaem.by оставляет за собой право удалять
              любую информацию, размещенную пользователем, если сочтет, что
              информация не соответствует действительности, носит оскорбительный
              характер, нарушает права и законные интересы других граждан либо
              действующее законодательство Республики Беларусь.
            </RegistrationRulesItem>
          </RegistrationRulesList>
          <RegistrationAuthRedirect>
            Уже есть аккаунта? <Link to='/Authorization'>Войдите</Link>
          </RegistrationAuthRedirect>
        </RegistrationRules>
      </RegistrationContent>
    </Registration>
  );
};
