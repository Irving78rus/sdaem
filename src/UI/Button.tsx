import React from "react";
import styled  from "styled-components";
interface  Props {
  background:any;
  backgroundColor:any;
  opacity:any;
  color:any
  fontWeight:any;
  width:any;
}
const ButtonStl = styled.button<Props>`
 
  background: ${props=>props.background||"linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%)"} ;
  border-radius: 19px;
  padding: 10px 18px;
  border: none;
  width: ${props=>props.width|| "200px"};
  font-weight:${props=>props.fontWeight|| "400"};
  color:${props=>props.color|| "white"};
  background-color:${props=>props.backgroundColor||null}
  opacity:${props=>props.opacity||null}
&:hover{
  background: linear-gradient(90deg, #9d94ffe8 0%, #6c50e9eb 94.5%);
  cursor:pointer;
}
`
 
const Button  = (props:any) => {
  return <ButtonStl {...props} />;
};
export default Button; 