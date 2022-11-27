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
}
const InputStl = styled.input.attrs<Props>((attrs) => ({
  type: attrs.type || "text",
  placeholder: attrs.placeholder || "",
}))`
  background: #f8f8f8;

  border-radius: 30px;
  padding: 15px 10px 15px 50px;
  gap: 10px;
  border: 2px solid #f8f8f8;
  outline: none;

  &:focus {
    outline: none;
    border: 2px solid rgba(102, 78, 249, 0.8);
    background: white;
  }
  &:focus > svg {
    fill: black;
  }
`;
const InputB = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IMG = styled.div<Props>`
  position: absolute;

  left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = ({ children, placeholder, type }: any, props: any) => {
  console.log(children.props);

  return (
    <>
      <InputB {...props}>
        <IMG {...props}> {children} </IMG>
        <InputStl {...props} placeholder={placeholder} type={type} />
      </InputB>
    </>
  );
};
export default Input;
