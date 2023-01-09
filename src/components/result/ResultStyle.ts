import styled from "styled-components";

interface Props {
    height?: any;
  }
  export const HeaderBackground = styled.div<Props>`
    background: linear-gradient(90deg, #94afff30 0%, #94afff30 94.5%);
    height: ${(props) => props.height || "0px"};
  `;
   
  export const Title = styled.h1`
    margin: 0;
  `;
  export const Flex = styled.div`
    justify-content: flex-start;
    align-items: center;
    display: flex;
    gap: 7px;
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;
  
      color: #686868;
    }
  `;
  export const Circle = styled.div`
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #664ef9;
  `;
   
  export const BackgroundColor = styled.div`
  background-color: white;
  box-shadow: 0px 20px 40px rgba(39, 95, 158, 0.08);
    height:100%;
  `
 export const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  
   
  background: #FFFFFF;
  box-shadow: 0px 5px 20px rgba(0, 96, 206, 0.1);
  border-radius: 18px;
  &:hover{
    background: #F8F8F8;
   cursor:pointer;
  }
  `
  