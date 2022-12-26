import {
  Auth,
  AuthContent,
  AuthTitle,
  AuthSubtitle,
  AuthForm,
  AuthFormName,
  AuthFormPassword,
  AuthFormCreateUser,
} from './style';
import { Link } from 'react-router-dom';
import { FormButtonComponent } from '../../../UI/FormButton/FormButtonComponent';
 

export const AuthComponent = () => {
  return (
    <Auth>
      <AuthContent>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthSubtitle>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </AuthSubtitle>
        <AuthForm>
          <AuthFormName placeholder='Логин' />
          <AuthFormPassword placeholder='Пароль' />
          <FormButtonComponent value='Войти' />
        </AuthForm>
        <AuthFormCreateUser>
          Еще нет аккаунта? <Link to='/registration'>Создайте аккаунт</Link>
        </AuthFormCreateUser>
      </AuthContent>
    </Auth>
  );
};
