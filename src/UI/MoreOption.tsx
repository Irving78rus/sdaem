import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { isTemplateExpression } from "typescript";
import Arrov from "../assest/icon/arrov.svg";
import { setCountRooms,  setGasStove, setParams } from "../redux/baseFlat";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
interface Props {
  background?: any;
  backgroundColor?: any;
  opacity?: any;
  color?: any;
  fontWeight?: any;
  width?: any;
  left:any;
  flexDirection:any;
}

const SelectStl = styled.div<Props>`
  display: flex;
  align-items: center;
  z-index:2;
  padding: 17px 18px;
  flex-direction:${props=>props.flexDirection||'row'};
  width: ${(props) => props.width || "150px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "black"};
  background-color: ${(props) => props.backgroundColor || "#F8F8F8"};
  border: 2px solid #f8f8f8;
  height: 31px;
  border-radius: 20px;

  &:hover {
    background-color: rgba(102, 78, 249, 0.1);
    cursor: pointer;
    border: 2px solid rgba(102, 78, 249, 0);
  }

  &.active {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: white;
    border: 2px solid rgba(102, 78, 249, 0.8);
  }
`;
const Arrow = styled.div<Props>`
 position: absolute;
 top:4px;
 border:none;
    width: 66px;
    height: 30px; 
    img{
      position: absolute;
      border:none;
      top:10px;
      left:${(props) => props.left || "0px"};
     
    }
 
}
 `;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
 cursor:pointer;

`;
const List = styled.div<Props>`
  width: ${(props) => props.width || "1440px"};
  box-shadow: 0px 0px 40px rgba(135, 124, 202, 0.3);
  background: #ffffff;
  
  position: absolute;
  top: 47px;
  left: 0;
  div:hover {
    background: #f8f8f8;
  }
  border-radius: 10px;
`;
const DropTable = styled.div`
  padding: 15px;
`;
const MoreOption = (props: any) => {
   const allOption=['Газовая плита','Духовка',"Кофеварка" , "Микроволновая печь", "Посуда",
  "Посудомоечная машина"]
  

  return (
    <Wrapper {...props}>
     <Wrapper {...props}> {props.children}</Wrapper>
        {props.isActive&&<List {...props}>
            
            {allOption.map((item: any) => (
              <DropTable key={item}  
                >{item}</DropTable>
            ))}
          </List>} 
       
    </Wrapper>
  );
};
export default MoreOption;
