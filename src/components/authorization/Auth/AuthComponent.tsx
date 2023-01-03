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
import { Link, useNavigate } from 'react-router-dom';
import { FormButtonComponent } from '../../../UI/FormButton/FormButtonComponent';
import { useEffect,useState } from 'react';
import { Button } from '../../../UI/FormButton/style';
import { useAppDispatch } from '../../../redux/hooks';
import { authUser, setUser } from '../../../redux/userSetting';
 

export const AuthComponent = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
const [allUsers,setAllUsers] = useState([])
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("Users")) {
      setAllUsers(JSON.parse(localStorage.getItem("Users") || ""))
    } else {
      localStorage.setItem("Users", JSON.stringify([]));
    }
    
  }, []);
  console.log(123);
  const findMe=(e:any)=>{
    e.preventDefault();
    const res = allUsers.filter((item:any)=>(item.email===email&&item.password===password))
    console.log(email);
    console.log(password);
    console.log(res);
    if(res.length!==0){
      navigate("/")
      localStorage.setItem("User", JSON.stringify(res[0]))
      localStorage.setItem("isAuth", JSON.stringify(true))
      dispatch(authUser(true))
      dispatch(setUser(res[0]))
    }
  }

  return (
    <Auth>
      <AuthContent>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthSubtitle>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </AuthSubtitle>
        <AuthForm>
          <AuthFormName placeholder='Email' onChange={(e: any) => {
                setEmail(e.target.value);
              }}/>
          <AuthFormPassword placeholder='Пароль' onChange={(e: any) => {
                setPassword(e.target.value);
              }}/>
              <Button onClick={(e: any) => {                findMe(e)             }}>Войти</Button>
          
        </AuthForm>
        <AuthFormCreateUser>
          Еще нет аккаунта? <Link to='/registration'>Создайте аккаунт</Link>
        </AuthFormCreateUser>
      </AuthContent>
    </Auth>
  );
};
