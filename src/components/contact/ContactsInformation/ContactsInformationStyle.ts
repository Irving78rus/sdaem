import styled from 'styled-components';
 
import Smartphone from '../../../assets/img/smartphone.svg';
import Mail from '../../../assets/img/mail.svg';
import Clock from '../../../assets/img/clock.svg';

const beforeElementData = `
  background-color: rgba(255, 255, 255, 0.1);
  width: 15px;
  height: 15px;
  padding: 8px 8px;
  border-radius: 17px;
  margin-right: 20px;
  
`;

const dataItem = `
margin: 0;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
 
`;

export const ContactsInformationStl = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  color: #fff;
`;

export const ContactsInformationTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
`;

export const ContactsInformationSubtitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`;

export const ContactsInformationData = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 11px;
`;

export const ContactsInformationAddress = styled.p`
 ${dataItem}
 &:before {    
  ${beforeElementData}
    content: url("data:image/svg+xml; utf8, <svg  width='13' height='15' viewBox='0 0 13 15' fill='none' xmlns='http://www.w3.org/2000/svg' version='1.1'>
    <path d='M11.5069 2.61628C10.4081 0.941861 8.59415 0 6.55346 0C4.5302 0 2.71625 0.941861 1.58253 2.61628C0.448804 4.25581 0.187176 6.34884 0.884851 8.18023C1.07671 8.6686 1.37322 9.17442 1.75694 9.62791L6.16973 14.8256C6.27439 14.9302 6.37904 15 6.53601 15C6.69299 15 6.79764 14.9302 6.90229 14.8256L11.3325 9.62791C11.7162 9.17442 12.0302 8.68605 12.2046 8.18023C12.9023 6.34884 12.6407 4.25581 11.5069 2.61628ZM6.55346 8.7907C5.05346 8.7907 3.81508 7.55233 3.81508 6.05233C3.81508 4.55233 5.05346 3.31395 6.55346 3.31395C8.05346 3.31395 9.29183 4.55233 9.29183 6.05233C9.29183 7.55233 8.0709 8.7907 6.55346 8.7907Z' fill='white'/>
    </svg>");
    ;
`;

export const ContactsInformationTelephone = styled.p`
${dataItem}
&:before {    
  ${beforeElementData}
  content: url(${Smartphone});
`;

export const ContactsInformationEmail = styled.p`
text-decoration: underline;
${dataItem}
&:before {    
  ${beforeElementData}
  content: url(${Mail});
`;
export const ContactsInformationClock = styled.p`
${dataItem}
&:before {    
  ${beforeElementData}
  content: url(${Clock});
`;

export const ContactsInformationLegal = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    line-height: 150%;
  }
`;

export const ContactsInformationWarning = styled.div`
  padding: 21px 25px;
  background-color: rgba(80, 57, 189, 0.5);
  border-radius: 10px;
  display: flex;
  column-gap: 22px;
  align-items: center;
  height: 100%;
`;

export const ContactsInformationWarningText = styled.p`
  margin: 0;
  font-weight: 500;
  line-height: 150%;
`;
