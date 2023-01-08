 

 
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RegistrationFormName } from '../authorization/Registration/RegistrationStyle';
import Button from '../../UI/Button';
import styled from 'styled-components';
import user from '../../assest/icon/user.svg';
import UserImg from '../../assest/icon/UserImg';
import ErrorImg from '../../assest/icon/ErrorImg';
import FlexContainer from '../../UI/FlexContainer';
import MailImg from '../../assest/icon/MailImg';
const LabelLogin = styled.label`
position:relative;
 
 
`;
const IMGCont = styled.div`
position:absolute;
top:0;
right:255px;
`;
const IMGError = styled.div`
position:absolute;
top:0px;
right:15px;
`;
export const ValidationSchemaExample  = () => {
  const formik:any = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword:'',
    },
    validationSchema: Yup.object({
      login: Yup.string()
    .required('Поле обязательно для заполнения')
    .min(2, 'Имя должно содержать не менее 2 букв'),
  email: Yup.string()
    .required('Поле обязательно для заполнения')
    .email('Ожидается email типа ivanov@mail.ru'),
  password: Yup.string()
    .min(3, 'Пароль должен содержать не менне 5 символов')
    .required('Поле обязательно для заполнения'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Поле обязательно для заполнения'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      
       <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
        name={'login'}
        type= {'text'} 
        id={'login'}      
        placeholder='login'   
        className={(formik.touched.login && formik.errors.login)?'error':''}
        />
        <LabelLogin htmlFor='login' > 
      <IMGCont><UserImg   ></UserImg></IMGCont> 
       {(formik.touched.login && formik.errors.login)&&<IMGError><ErrorImg fill='red'></ErrorImg> </IMGError> } 
              </LabelLogin>
        <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name={'email'}
        type= {'email'} 
        id={'email'}  
        placeholder='email'          
        />


        <LabelLogin htmlFor='email' > 
      <IMGCont><MailImg   ></MailImg></IMGCont> 
       {(formik.touched.email && formik.errors.email)&&<IMGError><ErrorImg fill='red'></ErrorImg> </IMGError> } 
              </LabelLogin>


        <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        name={'password'}
        type= {'password'} 
        id={'password'}      
        placeholder='password'   
        />

<LabelLogin htmlFor='password' > 
      <IMGCont><UserImg   ></UserImg></IMGCont> 
       {(formik.touched.password && formik.errors.password)&&<IMGError><ErrorImg fill='red'></ErrorImg> </IMGError> } 
              </LabelLogin>


        <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        name={'confirmPassword'}
        type= {'password'} 
        id={'confirmPassword'}     
        placeholder='confirmPassword'     
        />

<LabelLogin htmlFor='confirmPassword' > 
      <IMGCont><UserImg   ></UserImg></IMGCont> 
       {(formik.touched.confirmPassword && formik.errors.confirmPassword)&&<IMGError><ErrorImg fill='red'></ErrorImg> </IMGError> } 
              </LabelLogin>


        {(formik.touched.confirmPassword && formik.errors.confirmPassword)||(formik.touched.login && formik.errors.login)||(formik.touched.password && formik.errors.password)||(formik.touched.email && formik.errors.email)   ? (
        <Button  
        borderRadius='33px'
        fontWeight='700'
        lineHeight='24px'
        padding='12px 0'
        color='white'
        justifyContent='center'
        background= '#EB5757'
        backgroundHover= '#EB5757'
        width='100%'
        margin='10px 0 0 0'
        >Ошибка ввода</Button>
      ) : null}
       <Button  type="submit"
          borderRadius='33px'
          fontWeight='700'
          lineHeight='24px'
          padding='12px 0'
          color='#1e2123'
          justifyContent='center'
          background= '#FFD54F'
          backgroundHover= '#FFD54F'
          width='100%'
          margin='10px 0 0 0'
          >Submit</Button>
      
      
    </form>
  );
};