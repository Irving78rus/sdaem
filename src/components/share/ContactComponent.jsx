import React from "react";

import Boy from '../../assets/img/boy.png'
import Cvib from '../../assets/icon/Cvib.svg'
import CWhat from '../../assets/icon/CWhat.svg'
import CMail from '../../assets/icon/CMail.svg'
import { Link } from "react-router-dom";
import styled from "styled-components";

import FlexContainer from "../../UI/FlexContainer";


const ContactsComp = styled.div`
position:absolute;
top:-313px;
left:0;
padding:20px 0;
width:247px;
height:297px;
background: #FFFFFF;
display: flex;
flex-direction:column;
    justify-content: space-around;
     align-items:center;
 
.photo{
  border: 6px solid #664EF9;
  width:59px;
  height:59px;
  border-radius:50%;
    margin:0;
}
.social{

}
p{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 100%;
/* identical to box height, or 14px */

display: flex;
align-items: center;
  margin:0;
/* #BDBDBD */

color: #BDBDBD;
}
h4{
  margin:0;
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 100%;
/* identical to box height, or 20px */

display: flex;
align-items: center;

/* Style */

color: #1E2123;
}
.link{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 100%;
/* identical to box height, or 16px */

 
text-decoration-line: underline;

/* #664EF9 */

color: #664EF9;
}
`

export default function ContactComponent() {

  return (
    <ContactsComp>
      <img src={Boy} alt='boy' className='photo' />
      <p>Владелец</p>
      <h4> Владимир</h4>
      <h4>  +375 (29) 291-14-44</h4>
      <Link to="#" className='link'>vladimir6234@tut.by </Link>
      <FlexContainer>
        <img src={Cvib} alt='boy' />
        <img src={CWhat} alt='boy' />
        <img src={CMail} alt='boy' />
      </FlexContainer>
    </ContactsComp>


  );
}
