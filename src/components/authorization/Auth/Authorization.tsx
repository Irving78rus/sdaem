import {
  Auth, AuthContent, AuthTitle, AuthSubtitle,
  AuthForm, AuthFormName, AuthFormPassword, AuthFormCreateUser,
} from './AuthorizationStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
 
import { useAppDispatch } from '../../../redux/hooks';
import { authUser, setUser } from '../../../redux/userSetting';
import Button from '../../../UI/Button';
import { ValidationSchemaExample } from '../../test/test';


export const Authorization = () => {
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("Users")) {
      setAllUsers(JSON.parse(localStorage.getItem("Users") || ""))
    } else {
      localStorage.setItem("Users", JSON.stringify([]));
    }

  }, []);
 
  const Login = (e: any) => {

    e.preventDefault();
    const res = allUsers.filter((item: any) => (item.email === email && item.password === password))
    if (res.length !== 0) {
      setError(false)
      navigate("/")
      localStorage.setItem("User", JSON.stringify(res[0]))
      localStorage.setItem("isAuth", JSON.stringify(true))
      dispatch(authUser(true))
      dispatch(setUser(res[0]))
    }
    else{
      setError(true)
    }
  }

  return (
    <Auth>
      <AuthContent>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthSubtitle>
          Авторизуйтесь, чтобы начать публиковать свои объявления
        </AuthSubtitle>
        <AuthForm>
          <AuthFormName placeholder='Email' onChange={(e: any) => {
            setEmail(e.target.value);
          }} />
          <AuthFormPassword placeholder='Пароль' onChange={(e: any) => {
            setPassword(e.target.value);
          }} />
          <Button onClick={(e: any) => { Login(e) }}
          borderRadius='33px'
          fontWeight='700'
          lineHeight='24px'
          padding='12px 0'
          color='#1e2123'
          justifyContent='center'
          background= '#FFD54F'
          backgroundHover= '#FFD54F'
          >Войти</Button>
          {error&& <Button  
          borderRadius='33px'
          fontWeight='700'
          lineHeight='24px'
          padding='12px 0'
          color='white'
          justifyContent='center'
          background= '#EB5757'
          backgroundHover= '#EB5757'
          >Неверный логин или пароль</Button>}
        </AuthForm>
        <AuthFormCreateUser>
          Еще нет аккаунта? <Link to='/registration'>Создайте аккаунт</Link>

        </AuthFormCreateUser>
      </AuthContent>
      
    </Auth>
  );
};
// background-color: #ffd54f;
//   border-radius: 33px;
//   font-weight: 700;
//   line-height: 24px;
//   display: flex;
//   justify-content: center;
//   padding: 12px 0;
//   text-align: center;
//   color: #1e2123;
//   border: none;
//   &:hover {
//     cursor: pointer;
//   }