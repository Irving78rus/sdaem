import styled from 'styled-components';

const Input = `
box-sizing: border-box;
margin-top: 15px;
background: #F8F8F8;
border-radius: 30px;
border: none;
padding: 15px 15px 15px 55px;
outline: none;
font-weight: 500;
font-size: 14px;
line-height: 17px;
&:focus {
    outline: 2px solid rgba(102, 78, 249, 0.8);
    color: #1E2123;
};
&::placeholder {
    color: #686868;
}
`;

export const FormMessage = styled.form.attrs({
  method: 'POST',
})`
  label {
    color: #686868;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 40px 37px 44px;
  box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.2);
  border-radius: 10px;
`;

export const FormMessageUserInfo = styled.div`
  display: flex;
  column-gap: 30px;
`;

export const FormMessageUserName = styled.input.attrs({
  type: 'text',
  name: 'name',
  id: 'name',
})`
  ${Input}
`;

export const FormMessageUserEmail = styled.input.attrs({
  type: 'email',
  name: 'email',
  id: 'email',
})`
  ${Input}
`;

export const FormMessageUserMessage = styled.textarea.attrs({
  type: 'text',
  name: 'text',
  id: 'text',
})`
  width: 100%;
  resize: none;
  ${Input}
  padding: 15px 20px;
  height: 200px;
`;

export const FormMessageButton = styled.button`
  margin: 10px auto 0;
  width: 33%;
  padding: 12px 20px;
  background-color: #664ef9;
  border-radius: 33px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  line-height: 24px;
  border: none;
`;
