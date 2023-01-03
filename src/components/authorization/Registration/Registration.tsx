import {
  RegistrationStl, RegistrationContent, RegistrationFormSection,
  RegistrationFormTitle, RegistrationForm, RegistrationFormName,
  RegistrationFormEmail, RegistrationFormPassword, RegistrationFormPasswordRepeat,
  RegistrationRules, RegistrationRulesHeading, RegistrationRulesList,
  RegistrationRulesItem, RegistrationAuthRedirect,
} from "./style";
import { Link } from "react-router-dom";
import { Button } from "../../../UI/FormButton/style";
import { useState } from "react";

export const Registration = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  interface User {
    email: string,
    login: string,
    password: string,
    passwordRepeat: string,
  }

  const auth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let allUsers: User[] = [];
    if (localStorage.getItem("Users")) {
      allUsers = JSON.parse(localStorage.getItem("Users") || "");
    } else {
      localStorage.setItem("Users", JSON.stringify([]));
    }
    const User: User = {
      email: email,
      login: login,
      password: password,
      passwordRepeat: passwordRepeat,
    };

    if (allUsers.length !== 0) {
      const res = allUsers.filter((item: User) => {
        setError("")
        if (User.email === item.email) {
          setError("Такая почта уже используется");
        } else if (User.login === item.login) {
          setError("Такой логин уже используется");
        }
        else if (User.password !== User.passwordRepeat) {
          setError("пароли не совпадают");
        }
        else {
          return item
        }

      });
      const successRegistration = (allUsers: User[], User: User) => {
        setError("рега успешная")
        localStorage.setItem("Users", JSON.stringify([...allUsers, User]))
      }
      res.length === allUsers.length && successRegistration(allUsers, User)
    }
    else {
      if (User.password !== User.passwordRepeat) {
        setError("пароли не совпадают");

      } else {
        setError("");
        localStorage.setItem("Users", JSON.stringify([...allUsers, User]));
      }
    }
  };

  return (
    <RegistrationStl>
      <RegistrationContent>
        <RegistrationFormSection>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationForm>
            <RegistrationFormName
              placeholder="Логин"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setLogin(e.target.value);
              }}
            />
            <RegistrationFormEmail
              placeholder="Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
            <RegistrationFormPassword
              placeholder="Пароль"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
              }}
            />
            <RegistrationFormPasswordRepeat
              placeholder="Повторите пароль"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPasswordRepeat(e.target.value);
              }}
            />
            <Button
              onClick={(e) => { auth(e) }}
            >
              Зарегестрироваться
            </Button>
            {error && <div>{error}</div>}
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
