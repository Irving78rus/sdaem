


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
import LockImg from '../../assest/icon/LockImg';

interface Props {
  top?: string;
  right?: string;
  
}
const LabelLogin = styled.label`
position:relative;
 
 
`;
const IMGCont = styled.div`
position:absolute;
top:0;
right:255px;
`;
const IMGError = styled.div<Props>`
position:absolute;
top:${props=>props.top||'0px'}; 
right:${props=>props.right||'15px'}; 
`;
export const ValidationSchemaExample = () => {
  const formik: any = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
      confirmPassword: '',
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
        type={'text'}
        id={'login'}
        placeholder='login'
        className={(formik.touched.login && formik.errors.login) ? 'error' : ''}
      />
      <LabelLogin htmlFor='login' >
        <IMGCont><UserImg fill='#686868'  ></UserImg></IMGCont>
        {(formik.touched.login && formik.errors.login) && <IMGError><ErrorImg fill='red'></ErrorImg> </IMGError>}
      </LabelLogin>
      <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        name={'email'}
        type={'email'}
        id={'email'}
        placeholder='email'
        className={(formik.touched.email && formik.errors.email) ? 'error' : ''}
      />


      <LabelLogin htmlFor='email' >
        <IMGCont><MailImg fill='#686868' ></MailImg ></IMGCont>
        {(formik.touched.email && formik.errors.email) && <IMGError><ErrorImg fill='red'></ErrorImg> </IMGError>}
      </LabelLogin>


      <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        name={'password'}
        type={'password'}
        id={'password'}
        placeholder='password'
        className={(formik.touched.password && formik.errors.password) ? 'error' : ''}
      />

      <LabelLogin htmlFor='password' >
        <IMGCont><LockImg   ></LockImg></IMGCont>
        {(formik.touched.password && formik.errors.password) && <IMGError><ErrorImg fill='red'></ErrorImg> </IMGError>}
      </LabelLogin>


      <RegistrationFormName onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        name={'confirmPassword'}
        type={'password'}
        id={'confirmPassword'}
        placeholder='confirmPassword'
        className={(formik.touched.confirmPassword && formik.errors.confirmPassword) ? 'error' : ''}
      />

      <LabelLogin htmlFor='confirmPassword' >
        <IMGCont><LockImg   ></LockImg></IMGCont>
        {(formik.touched.confirmPassword && formik.errors.confirmPassword) && <IMGError><ErrorImg fill='red'></ErrorImg> </IMGError>}
      </LabelLogin>


      {(formik.touched.confirmPassword && formik.errors.confirmPassword) || (formik.touched.login && formik.errors.login) || (formik.touched.password && formik.errors.password) || (formik.touched.email && formik.errors.email) ? (
        <Button
          borderRadius='33px'
          fontWeight='700'
          lineHeight='24px'
          padding='12px 0'
          color='white'
          justifyContent='center'
          background='#EB5757'
          backgroundHover='#EB5757'
          width='100%'
          margin='10px 0 0 0'
        >Ошибка ввода <IMGError top="15px" right='65px'><ErrorImg fill='rgba(255, 255, 255, 0.5)'></ErrorImg> </IMGError></Button>
      ) : null}
      <Button type="submit"
        borderRadius='33px'
        fontWeight='700'
        lineHeight='24px'
        padding='12px 0'
        color='#1e2123'
        justifyContent='center'
        background='#FFD54F'
        backgroundHover='#FFD54F'
        width='100%'
        margin='10px 0 0 0'
      >Submit</Button>


    </form>
  );
};