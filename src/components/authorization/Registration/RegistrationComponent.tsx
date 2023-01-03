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
} from "./style";
import { Link } from "react-router-dom";
import { FormButtonComponent } from "../../../UI/FormButton/FormButtonComponent";
import { useEffect, useState } from "react";
import { Button } from "../../../UI/FormButton/style";

export const RegistrationComponent = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const auth = (e: any) => {
    e.preventDefault();
    let allUsers: any = [];
    if (localStorage.getItem("Users")) {
      allUsers = JSON.parse(localStorage.getItem("Users") || "");
    } else {
      localStorage.setItem("Users", JSON.stringify([]));
    }
    const User: any = {
      email: email,
      login: login,
      password: password,
      passwordRepeat: passwordRepeat,
    };
   
    if(allUsers.length!==0){
     const res = allUsers.filter((item: any) => {
      setError("")
        if (User.email === item.email) {
          setError("Такая почта уже используется");
          console.log(123);
          
        } else if (User.login === item.login) {
          setError("Такой логин уже используется");
          console.log(123);
        } 
        else if (User.password !== User.passwordRepeat) {
          setError("пароли не совпадают");
          console.log(123);
        } 
        else{
          return item
        }
       
      });
      const successRegistration = (allUsers:any,User:any)=>{
        setError("рега успешная")
        localStorage.setItem("Users", JSON.stringify([...allUsers, User]))
      }
      res.length===allUsers.length&&successRegistration(allUsers,User)
 
      
    }
    else{
      if (User.password !== User.passwordRepeat) {
        setError("пароли не совпадают");
        console.log(123);
      } else {
        console.log(123);
        setError("");
        localStorage.setItem("Users", JSON.stringify([...allUsers, User]));
      }
    }
  };

  return (
    <Registration>
      <RegistrationContent>
        <RegistrationFormSection>
          <RegistrationFormTitle>Регистрация</RegistrationFormTitle>
          <RegistrationForm>
            <RegistrationFormName
              placeholder="Логин"
              onChange={(e: any) => {
                setLogin(e.target.value);
              }}
            />
            <RegistrationFormEmail
              placeholder="Email"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <RegistrationFormPassword
              placeholder="Пароль"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <RegistrationFormPasswordRepeat
              placeholder="Повторите пароль"
              onChange={(e: any) => {
                setPasswordRepeat(e.target.value);
              }}
            />
            <Button
              onClick={(e: any) => {
                auth(e);
              }}
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
    </Registration>
  );
};
