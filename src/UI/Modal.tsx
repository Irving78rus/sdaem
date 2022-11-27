import React, { useState } from "react";
import styled from "styled-components";

const BackgroundModalWindow = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
 
export const Modal = ({ toggle, autoClose = 0, children }:any) => {
  if (autoClose) {
    setTimeout(() => toggle(false), autoClose);
  }

  return (
    <>
      <BackgroundModalWindow
        onClick={() => {
          toggle(false);
        }}
      >
        <Content onClick={(e) => e.stopPropagation()}> {children} </Content>
      </BackgroundModalWindow>
    </>
  );
};