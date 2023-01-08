import styled from 'styled-components';

import CityMap from '../../../assest/img/images/city-map.png';

const FormInput = `
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
   margin-top:10px;
  
  &.error{
    outline: 1px solid red;
    &:focus {
      outline: 1px solid red;
      color: #1E2123;
      background-color: #fff;
      cursor:text;
  };
    &::placeholder {
      color: #686868;
      
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
  &::placeholder {
    color: #686868;
    
}
&:hover {
    outline: 2px solid rgba(78, 100, 249, 0.8);
}
`;

export const RegistrationStl = styled.main`
  background-image: url(${CityMap}),
    linear-gradient(1.09deg, #7e6af3 0.86%, #6540cd 99.01%);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
 
  height: 100vh;
`;

export const RegistrationContent = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 50px;
  background: #fffefe;
  box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.2);
  border-radius: 10px;
  width: 100%;
  max-width: 844px;
  box-sizing: border-box;
`;

export const RegistrationFormSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 40%;
`;

export const RegistrationFormTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;
`;

export const RegistrationForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const RegistrationFormName = styled.input.attrs(({ name,  type ,  id ,className }) => ({
  name:  name  ,
  type:  type  ,
  id:  id  ,
  className:className
}))`${FormInput}`
 

export const RegistrationFormEmail = styled.input.attrs({
  name: 'email',
  type: 'email',
  id: 'email',
})`
  ${FormInput}
`;

export const RegistrationFormPassword = styled.input.attrs({
  name: 'password',
  type: 'password',
  id: 'password',
})`
  ${FormInput}
`;

export const RegistrationFormPasswordRepeat = styled.input.attrs({
  name: 'password',
  type: 'password',
  id: 'password-repeat',
})`
  ${FormInput}
`;

export const RegistrationRules = styled.div`
  font-family: sans-serif;
  margin: 60px 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  max-width: 388px;
  color: #686868;
`;

export const RegistrationRulesHeading = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const RegistrationRulesList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const RegistrationRulesItem = styled.li`
  &::before {
    content: '•';
    display: inline-block;
    padding: 0 0.3em 0 0;
  }
`;

export const RegistrationAuthRedirect = styled.p`
  margin: 70px 0 0;
  font-size: 14px;
  line-height: 20px;
  color: #686868;
  a {
    text-decoration: none;
    color: #664ef9;
  }
`;
