import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IMGCont, IMGError, LabelLogin, InputField } from "../../RegistrationStyle";
import Button from "../../../../UI/Button";
import UserImg from "../../../../../assets/icon/UserImg";
import ErrorImg from "../../../../../assets/icon/ErrorImg";
import MailImg from "../../../../../assets/icon/MailImg";
import LockImg from "../../../../../assets/icon/LockImg";
import ReCAPTCHA from "react-google-recaptcha";
const key = "6LcbAeAjAAAAAJ-sKt9VimUkmFR8Uf2Z-vIkZWGM";
interface FormRegistrationProps {
  setIsShowPopup:(isShowPopup: boolean) => void;  
  captcha: boolean;
  setCaptcha: (captcha: boolean) => void;
}
interface User {
  login: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const FormRegistration = ({ setIsShowPopup, captcha, setCaptcha }:FormRegistrationProps ) => {
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .required("Поле обязательно для заполнения")
        .min(2, "Имя должно содержать не менее 2 букв"),
      email: Yup.string()
        .required("Поле обязательно для заполнения")
        .email("Ожидается email типа ivanov@mail.ru"),
      password: Yup.string()
        .min(3, "Пароль должен содержать не менее 5 символов")
        .required("Поле обязательно для заполнения"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Пароли не совпадают")
        .required("Поле обязательно для заполнения"),
    }),
    onSubmit: (values: User) => {
      let allUsers = [];
      if (localStorage.getItem("Users")) {
        allUsers = JSON.parse(localStorage.getItem("Users") || "");
      } else {
        localStorage.setItem("Users", JSON.stringify([]));
      }
      console.log(allUsers);
      console.log(values);
      if (allUsers.length !== 0) {
        const res = allUsers.filter((item: User)  => {
          setError("");
          if (values.email === item.email) {
            setError("Такая почта уже используется");
          } else if (values.login === item.login) {
            setError("Такой логин уже используется");
          } else if (!captcha) {
            setError("Введите капчу");
          } else {
            return item;
          }
           
        });
        const successRegistration = (allUsers: User[], User: User) => {
          setError("Регистрация успешная");
          localStorage.setItem("Users", JSON.stringify([...allUsers, User]));
          setIsShowPopup(true);
        };
        res.length === allUsers.length && captcha && successRegistration(allUsers, values);
      } else {
        if (!captcha) {
          setError("Введите капчу");
        } else if (captcha) {
          setError("");
          localStorage.setItem("Users", JSON.stringify([...allUsers, values]));
          setIsShowPopup(true);
        }
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputField
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
        name={"login"}
        type={"text"}
        id={"login"}
        placeholder="login"
        className={formik.touched.login && formik.errors.login ? "error" : ""}
      />
      <LabelLogin htmlFor="login">
        <IMGCont>
          <UserImg fill="#686868"></UserImg>
        </IMGCont>
        {formik.touched.login && formik.errors.login && (
          <IMGError>
            <ErrorImg fill="red"></ErrorImg> 
          </IMGError>
        )}
      </LabelLogin>
      <InputField
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name={"email"}
        type={"email"}
        id={"email"}
        placeholder="email"
        className={formik.touched.email && formik.errors.email ? "error" : ""}
      />
      <LabelLogin htmlFor="email">
        <IMGCont>
          <MailImg fill="#686868"></MailImg>
        </IMGCont>
        {formik.touched.email && formik.errors.email && (
          <IMGError>
            <ErrorImg fill="red"></ErrorImg> 
          </IMGError>
        )}
      </LabelLogin>

      <InputField
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        name={"password"}
        type={"password"}
        id={"password"}
        placeholder="password"
        className={formik.touched.password && formik.errors.password ? "error" : ""}
      />

      <LabelLogin htmlFor="password">
        <IMGCont>
          <LockImg></LockImg>
        </IMGCont>
        {formik.touched.password && formik.errors.password && (
          <IMGError>
            <ErrorImg fill="red"></ErrorImg> 
          </IMGError>
        )}
      </LabelLogin>

      <InputField
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        name={"confirmPassword"}
        type={"password"}
        id={"confirmPassword"}
        placeholder="confirmPassword"
        className={formik.touched.confirmPassword && formik.errors.confirmPassword ? "error" : ""}
      />

      <LabelLogin htmlFor="confirmPassword">
        <IMGCont>
          <LockImg></LockImg>
        </IMGCont>
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <IMGError>
            <ErrorImg fill="red"></ErrorImg> 
          </IMGError>
        )}
      </LabelLogin>

      <ReCAPTCHA
        style={{ marginTop: "20px" }}
        sitekey={key}
        size="normal"
        onChange={(e) => {
          setCaptcha(true);
        }}
      />
      {error && <div>{error}</div>}
      {(formik.touched.confirmPassword && formik.errors.confirmPassword) ||
      (formik.touched.login && formik.errors.login) ||
      (formik.touched.password && formik.errors.password) ||
      (formik.touched.email && formik.errors.email) ? (
        <Button
          borderRadius="33px"
          fontWeight="700"
          lineHeight="24px"
          padding="12px 0"
          color="white"
          justifyContent="center"
          background="#EB5757"
          backgroundHover="#EB5757"
          width="100%"
          margin="10px 0 0 0"
        >
          Ошибка ввода 
          <IMGError top="15px" right="65px">
            <ErrorImg fill="rgba(255, 255, 255, 0.5)"></ErrorImg> 
          </IMGError>
        </Button>
      ) : null}
      <Button
        type="submit"
        borderRadius="33px"
        fontWeight="700"
        lineHeight="24px"
        padding="12px 0"
        color="#1e2123"
        justifyContent="center"
        background="#FFD54F"
        backgroundHover="#FFD54F"
        width="100%"
        margin="10px 0 0 0"
      >
        Submit
      </Button>
    </form>
  );
};
