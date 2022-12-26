import React from "react";
import styled from "styled-components";

interface Props {
  justifyContent?: any;
  alignItems?: any;
  gap?: any;
  height?: any;
  width?: any;
  type?: any;
  children?: any;
  paddingLeft?:any;
  paddingRight?:any;
  paddingTop?:any;
  paddingBottom?:any;
}
  // padding-left:${props=>props.paddingLeft||"50px"};
  // padding-right:${props=>props.paddingRight||"15px"};
  // padding-top:${props=>props.paddingTop||"15px"};
  // padding-bottom:${props=>props.paddingBottom||"15px"};
const InputStl = styled.input.attrs<Props>((attrs) => ({
  type: attrs.type || "text",
  placeholder: attrs.placeholder || "",
}))`
  background: #f8f8f8;
  width:${props=>props.width||"100%"};
  height:${props=>props.height||"100%"};
  border-radius: 30px;
 
  gap: 10px;
  border: 2px solid #f8f8f8;
  outline: none;

  &:focus {
    outline: none;
    border: 2px solid rgba(102, 78, 249, 0.8);
    background: white;
  }
   
  svg{
    fill: green;
  }
`;
const InputB = styled.div<Props>`
width:${props=>props.width||"100%"};
  height:${props=>props.height||"100%"};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    fill: currentColor;
  }
`;
const IMG = styled.div<Props>`
  position: absolute;
  svg{
    fill: currentColor;
  }
  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
   
`;

const Input = (  props: any) => {
  

  return (
    <>
      <InputB {...props}>
      
        <InputStl {...props}  />
      </InputB>
    </>
  );
};
// const Input = ({ children, placeholder, type,width }: any, props: any) => {
  

//   return (
//     <>
//       <InputB {...props}>
//        {children&&<IMG {...props}> {children} </IMG>} 
//         <InputStl {...props} placeholder={placeholder} type={type} width={width}/>
//       </InputB>
//     </>
//   );
// };
export default Input;
