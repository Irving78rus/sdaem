import React from "react";
import styled  from "styled-components";
interface  Props {
  background:any;
  backgroundColor:any;
  opacity:any;
  color:any
  fontWeight:any;
  width:any;
  height:any
  padding:any;
  fontSize:any;
  borderRadius:any;
  boxShadow:string;
  margin:string
  lineHeight:string
  backgroundHover:string
  
}
const ButtonStl = styled.button<Props>`
position:relative;
  text-align: center;
  margin:  ${props=>props.margin|| ''};
  background: ${props=>props.background||"linear-gradient(90deg, #9d94ff 0%, #6b50e9 94.5%)"} ;
  border-radius:  ${props=>props.borderRadius|| '19px'};
  padding: ${props=>props.padding|| '10px 18px'};
  border: none;
  width: ${props=>props.width|| ""};
  box-shadow:${props=>props.boxShadow|| ""}; 
  font-weight:${props=>props.fontWeight|| "400"};
  font-size:${props=>props.fontSize|| ""};
  display: flex;
  justify-content:center;
  gap: 5px;
  align-items:center;
  line-height: ${props=>props.lineHeight|| "17px"};
  color:${props=>props.color||"white"};
  background-color:${props=>props.backgroundColor||null};
  opacity:${props=>props.opacity||null};
  &:hover{
    background: ${props=>props.backgroundHover||"linear-gradient(90deg, #9d94ffe8 0%, #6c50e9eb 94.5%)"};
     
  cursor:pointer;
}
`
 
const Button  = (props:any) => {
  return <ButtonStl {...props} />;
};
export default Button; 