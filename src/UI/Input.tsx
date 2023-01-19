import React from "react";
import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  height?: string;
  width?: string;
  type?: string;
  children?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const InputStl = styled.input.attrs<Props>((attrs) => ({
  type: attrs.type || "text",
  placeholder: attrs.placeholder || "",
}))`
  background: #f8f8f8;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: 30px;
  gap: 10px;
  border: 2px solid #f8f8f8;
  outline: none;
  &:focus {
    outline: none;
    border: 2px solid rgba(102, 78, 249, 0.8);
    background: white;
  }
  svg {
    fill: green;
  }
`;
const InputB = styled.div<Props>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  position: relative;
  display: flex;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  align-items: center;
  justify-content: center;
  svg {
    fill: currentColor;
  }
`;

const Input = (props: any) => {
  return (
    <>
      <InputB {...props}>
        <InputStl {...props} />
      </InputB>
    </>
  );
};

export default Input;
