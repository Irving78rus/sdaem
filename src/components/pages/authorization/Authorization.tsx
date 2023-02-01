import {
  Auth,
  AuthContent,
  AuthTitle,
  AuthSubtitle,
  AuthFormCreateUser,
} from "./AuthorizationStyle";
import { Link  } from "react-router-dom";
import { AuthorizationForm } from "./modules/AuthorizationForm/AuthorizationForm";
 
 
 
export const Authorization = () => {
  
  return (
    <Auth>
      <AuthContent>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthSubtitle>Авторизуйтесь, чтобы начать публиковать свои объявления</AuthSubtitle>
         <AuthorizationForm/>
        <AuthFormCreateUser>
          Еще нет аккаунта? <Link to="/registration">Создайте аккаунт</Link>
        </AuthFormCreateUser>
      </AuthContent>
    </Auth>
  );
};
