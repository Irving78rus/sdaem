import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import { RegistrationFormName } from '../authorization/Registration/RegistrationStyle';
import styled from 'styled-components';
import { Button } from '../../UI/FormButton/style';
 
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   login: Yup.string().email('Invalid login').required('Required'),
 });
 const Test = styled.div`
 .field{
  background-color: #f7f7f7;
  border:none;
  border-radius: 30px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1E2123;
  padding: 16px 16px 16px 55px;
  box-sizing:border-box;
  cursor:default;
 margin-top:20px;
 &::placeholder {
  font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #686868;
  
}
  &.error{
    outline: 2px solid red;
    &:focus {
      outline: 2px solid red;
      color: #1E2123;
      background-color: #fff;
      cursor:text;
  };
    &::placeholder {
      color: red;
      
  }
  &:hover {
      outline: 2px solid red;
  }
  }
  &:focus {
    outline: 2px solid rgba(78, 100, 249, 0.8);
    color: #1E2123;
    background-color: #fff;
    cursor:text;
};
  
&:hover {
    outline: 2px solid rgba(78, 100, 249, 0.8);
}
 }
  
`;


 export const ValidationSchemaExample = () => (
   <Test>
   
     
     <Formik
       initialValues={{login: "", email: '', password: '',passwordRepeat:'' }}
       validate={values => {
         const errors:any = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(values)

           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
          <Field className='field' type="login" name="login" placeholder='Логин'/>
           <Field className='field' type="email" name="email" placeholder='Электронная почта'/>
           <Field className='field' type="password" name="password" placeholder='Пароль'/>
           <Field className='field' type="password" name="passwordRepeat" placeholder='Повторите пароль'/>
            
           <Button type="submit" disabled={isSubmitting}>
             Зарегистрироваться
           </Button>
         </Form>
       )}
     </Formik>
  
   </Test>
 );