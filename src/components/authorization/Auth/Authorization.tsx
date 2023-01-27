import {
  Auth,
  AuthContent,
  AuthTitle,
  AuthSubtitle,
  AuthForm,
  AuthFormCreateUser,
} from "./AuthorizationStyle";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { authUser, setUser } from "../../../redux/userSetting";
import Button from "../../UI/Button";
import { IMGCont, LabelLogin, InputField } from "../Registration/RegistrationStyle";
import UserImg from "../../../assets/icon/UserImg";
import LockImg from "../../../assets/icon/LockImg";
export interface UserModel {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Authorization = () => {
  const [onMouseEnterInput, setOnMouseEnterInput] = useState({ login: false, lock: false });
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState<UserModel[]>([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("Users")) {
      setAllUsers(JSON.parse(localStorage.getItem("Users") || ""));
    } else {
      localStorage.setItem("Users", JSON.stringify([]));
    }
  }, []);

  const Login = (e: React.MouseEvent<HTMLElement> ) => {
    e.preventDefault();
    const res = allUsers.filter(
      (item: UserModel) => item.login === login && item.password === password
    );
    if (res.length !== 0) {
      setError(false);
      navigate("/");
      localStorage.setItem("User", JSON.stringify(res[0]));
      localStorage.setItem("isAuth", JSON.stringify(true));
      dispatch(authUser(true));
      dispatch(setUser(res[0]));
    } else {
      setError(true);
    }
  };

  return (
    <Auth>
      <AuthContent>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthSubtitle>Авторизуйтесь, чтобы начать публиковать свои объявления</AuthSubtitle>
        <AuthForm>
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLogin(e.target.value);
            }}
            onFocus={() => {
              setOnMouseEnterInput({ login: true, lock: false });
            }}
            onBlur={() => {
              setOnMouseEnterInput({ login: false, lock: false });
            }}
            name={"login"}
            type={"text"}
            id={"login"}
            placeholder="Логин"
          />
          <LabelLogin htmlFor="login">
            <IMGCont top="-50px" right="230px">
              <UserImg
                opacity={onMouseEnterInput.login ? "1" : "0.3"}
                fill={onMouseEnterInput.login ? "#664EF9" : "#686868"}
              ></UserImg>
            </IMGCont>
          </LabelLogin>
          <InputField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            name={"password"}
            type={"password"}
            id={"password"}
            placeholder="Пароль"
            onFocus={(e) => {
              setOnMouseEnterInput({ login: false, lock: true });
            }}
            onBlur={(e) => {
              setOnMouseEnterInput({ login: false, lock: false });
            }}
          />
          <LabelLogin htmlFor="password">
            <IMGCont top="-50px" right="230px">
              <LockImg
                opacity={onMouseEnterInput.lock ? "1" : "0.3"}
                fill={onMouseEnterInput.lock ? "#664EF9" : "#686868"}
              ></LockImg>
            </IMGCont>
          </LabelLogin>
          <Button
            onClick={(e: React.MouseEvent<HTMLElement>) => {Login(e)}}
            borderRadius="33px"
            fontWeight="700"
            lineHeight="24px"
            padding="12px 0"
            color="#1e2123"
            justifyContent="center"
            background="#FFD54F"
            backgroundHover="#FFD54F"
          >
            Войти
          </Button>
          {error && (
            <Button
              borderRadius="33px"
              fontWeight="700"
              lineHeight="24px"
              padding="12px 0"
              color="white"
              justifyContent="center"
              background="#EB5757"
              backgroundHover="#EB5757"
            >
              Неверный логин или пароль
            </Button>
          )}
        </AuthForm>
        <AuthFormCreateUser>
          Еще нет аккаунта? <Link to="/registration">Создайте аккаунт</Link>
        </AuthFormCreateUser>
      </AuthContent>
    </Auth>
  );
};
